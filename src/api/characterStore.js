// ── CharacterStore ────────────────────────────────────────────────────────
// Replaces the flat `characters.find()` pattern (O(n)) with:
//   - HashMap  → O(1) id / name lookup
//   - Max-heap (sorted array) → O(1) top-N by importance (for context trimming)
//   - Fixed-cap stack → recently accessed characters (LIFO, for agents to prefer)
//   - Adjacency list → O(1) relationship lookup per character
//
// The store is immutable: mutations return a new CharacterStore so React
// can detect changes the same way it always has.

const RECENT_CAP = 12   // how many "recently touched" characters to track
const CONTEXT_TOP = 35  // default max characters to include in agent prompts

export class CharacterStore {
  constructor(characters = [], relationships = []) {
    this._build(characters)
    this._buildGraph(relationships)
    this._recent = [] // stack of ids — LIFO, most recently accessed first
  }

  // ── Build O(1) lookup maps and importance heap ──────────────────────────

  _build(chars) {
    this._arr = chars

    // HashMap: id → character  (O(1) lookup)
    this._byId = new Map(chars.map(c => [c.id, c]))

    // HashMap: lowercase name → character  (O(1) name lookup for agents)
    this._byName = new Map(
      chars.map(c => [(c.name ?? '').toLowerCase().trim(), c])
    )

    // Max-heap representation: sorted descending by importance score
    // Rebuilt on each mutation — sorts once per save, reads are O(1) slices
    this._byImportance = [...chars].sort(
      (a, b) => (b.importance ?? 0) - (a.importance ?? 0)
    )
  }

  // ── Build adjacency list (relationship graph) ──────────────────────────
  // Each character id maps to its array of relationships (both directions).

  _buildGraph(rels) {
    this._adj = new Map()
    for (const r of rels) {
      if (!this._adj.has(r.source)) this._adj.set(r.source, [])
      if (!this._adj.has(r.target)) this._adj.set(r.target, [])
      this._adj.get(r.source).push(r)
      // Reverse edge so both parties see the relationship
      this._adj.get(r.target).push({ ...r, source: r.target, target: r.source })
    }
  }

  // ── Read API ───────────────────────────────────────────────────────────

  // O(1) — primary lookup by id
  get(id) { return this._byId.get(id) }

  // O(1) — lookup by display name (case-insensitive)
  getByName(name) { return this._byName.get((name ?? '').toLowerCase().trim()) }

  // O(1) — agent-style: try id first, then name (covers both tool call styles)
  find(idOrName) {
    if (!idOrName) return undefined
    return this._byId.get(idOrName) ?? this.getByName(idOrName)
  }

  // O(1) — characters for a given id, both outgoing and incoming
  neighbors(id) { return this._adj.get(id) ?? [] }

  // O(1) — whether a character id exists
  has(id) { return this._byId.has(id) }

  // O(1) slice — top N by importance (agent context building)
  topN(n = CONTEXT_TOP) { return this._byImportance.slice(0, n) }

  // LIFO pop-from-front — most recently touched characters (favoured by agents)
  recent() {
    return this._recent.map(id => this._byId.get(id)).filter(Boolean)
  }

  // Raw array — for anything that still needs Array methods
  toArray() { return this._arr }

  get size() { return this._arr.length }

  // ── Write API (returns new store — keeps React detection working) ───────

  // Record that a character was just accessed; push onto the recent stack
  touch(id) {
    const store = this._clone()
    store._recent = [id, ...this._recent.filter(r => r !== id)].slice(0, RECENT_CAP)
    return store
  }

  // Upsert one character — returns a new CharacterStore
  update(char) {
    const arr = this._byId.has(char.id)
      ? this._arr.map(c => c.id === char.id ? char : c)
      : [...this._arr, char]
    const store = new CharacterStore(arr) // relationship graph unchanged
    store._buildGraph([]) // empty — caller should pass rels if they matter
    store._recent = [...this._recent]
    return store
  }

  // Upsert with relationships preserved — preferred version
  updateWithRels(char, relationships) {
    const arr = this._byId.has(char.id)
      ? this._arr.map(c => c.id === char.id ? char : c)
      : [...this._arr, char]
    const store = new CharacterStore(arr, relationships)
    store._recent = [...this._recent]
    return store
  }

  _clone() {
    const s = Object.create(CharacterStore.prototype)
    s._arr           = this._arr
    s._byId          = this._byId
    s._byName        = this._byName
    s._byImportance  = this._byImportance
    s._adj           = this._adj
    s._recent        = [...this._recent]
    return s
  }
}

// ── Helpers exported for agents context builder ──────────────────────────

// Build a character list for an agent system prompt, capped by importance.
// Puts the top-N most important characters first (max `cap` total).
// If there are more, a one-line summary of the remainder follows.
export function buildContextCharList(characters, cap = CONTEXT_TOP) {
  const arr = characters instanceof CharacterStore
    ? characters.toArray()
    : (characters ?? [])

  const sorted = [...arr].sort((a, b) => (b.importance ?? 0) - (a.importance ?? 0))
  const top    = sorted.slice(0, cap)
  const rest   = sorted.slice(cap)

  const lines = top.map(c =>
    `- **${c.name}** [ID: ${c.id}] | House: ${c.house ?? 'none'} | Core: ${c.coreType ?? 'unassigned'} | Status: ${c.status ?? 'unknown'}\n  Role: ${c.role ?? ''} | Location: ${c.location ?? 'unknown'}\n  ${(c.description ?? '').slice(0, 160)}`
  ).join('\n')

  const overflow = rest.length > 0
    ? `\n... and ${rest.length} more characters (lower importance): ${rest.map(c => `${c.name} [${c.id}]`).join(', ')}`
    : ''

  return lines + overflow
}
