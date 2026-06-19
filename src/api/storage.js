// Hybrid storage: localStorage for instant rendering, Supabase for cloud persistence.
// To migrate away from localStorage later: swap the `local.*` calls below for Supabase selects.
import { supabase, isSupabaseConfigured } from './supabase'

const local = {
  get: (key, fallback = null) => {
    try { const v = localStorage.getItem(`sol-nexus::${key}`); return v ? JSON.parse(v) : fallback }
    catch { return fallback }
  },
  set: (key, value) => {
    try { localStorage.setItem(`sol-nexus::${key}`, JSON.stringify(value)) } catch {}
  },
}

// ── Character notes ──────────────────────────────────────────

export async function loadNotes() {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from('character_notes').select('character_id, content')
      if (!error && data?.length) {
        const notes = Object.fromEntries(data.map(r => [r.character_id, r.content]))
        local.set('char-notes', notes)
        return notes
      }
    } catch {}
  }
  return local.get('char-notes', {})
}

export function saveNote(charId, content) {
  const updated = { ...local.get('char-notes', {}), [charId]: content }
  local.set('char-notes', updated)
  if (isSupabaseConfigured()) {
    supabase.from('character_notes')
      .upsert({ character_id: charId, content, updated_at: new Date().toISOString() })
      .then(({ error }) => { if (error) console.warn('Supabase note sync:', error.message) })
  }
  return updated
}

// ── Lore edits ───────────────────────────────────────────────

export async function loadLoreEdits() {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from('lore_edits').select('edit_key, content')
      if (!error && data?.length) {
        const edits = Object.fromEntries(data.map(r => [r.edit_key, r.content]))
        local.set('lore-edits', edits)
        return edits
      }
    } catch {}
  }
  return local.get('lore-edits', {})
}

export function saveLoreEdit(editKey, content) {
  const current = local.get('lore-edits', {})
  const updated = content === undefined
    ? Object.fromEntries(Object.entries(current).filter(([k]) => k !== editKey))
    : { ...current, [editKey]: content }
  local.set('lore-edits', updated)
  if (isSupabaseConfigured()) {
    if (content === undefined) {
      supabase.from('lore_edits').delete().eq('edit_key', editKey)
        .then(({ error }) => { if (error) console.warn('Supabase lore delete:', error.message) })
    } else {
      supabase.from('lore_edits')
        .upsert({ edit_key: editKey, content, updated_at: new Date().toISOString() })
        .then(({ error }) => { if (error) console.warn('Supabase lore sync:', error.message) })
    }
  }
  return updated
}

// ── Character / Relationship / Story state ───────────────────

export function saveCharacters(chars) { local.set('characters', chars) }
export function loadCharacters()      { return local.get('characters', null) }

export function saveRelationships(rels) { local.set('relationships', rels) }
export function loadRelationships()     { return local.get('relationships', null) }

export function saveStories(stories) { local.set('stories', stories) }
export function loadStories()        { return local.get('stories', null) }

export function saveWeapons(weapons) { local.set('weapons', weapons) }
export function loadWeapons()        { return local.get('weapons', null) }

export function saveBeasts(beasts)   { local.set('beasts', beasts) }
export function loadBeasts()         { return local.get('beasts', null) }

export function saveClans(clans)     { local.set('clans', clans) }
export function loadClans()          { return local.get('clans', null) }

// ── Custom timeline events ───────────────────────────────────

export async function loadCustomEvents() {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase
        .from('custom_events').select('era_id, event_data').order('created_at')
      if (!error && data?.length) {
        const events = {}
        data.forEach(r => {
          if (!events[r.era_id]) events[r.era_id] = []
          events[r.era_id].push(r.event_data)
        })
        local.set('custom-events', events)
        return events
      }
    } catch {}
  }
  return local.get('custom-events', {})
}

export function saveCustomEvent(eraId, event) {
  const current = local.get('custom-events', {})
  const updated = { ...current, [eraId]: [...(current[eraId] || []), event] }
  local.set('custom-events', updated)
  if (isSupabaseConfigured()) {
    supabase.from('custom_events')
      .insert({ era_id: eraId, event_data: event })
      .then(({ error }) => { if (error) console.warn('Supabase event sync:', error.message) })
  }
  return updated
}
