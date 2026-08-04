import { useState, useRef, useEffect, useCallback } from 'react'
import { sendAgentStream, isApiConfigured, getProvider, setProvider, isOllamaRunning } from '../api/claude'
import { getOllamaModel, setOllamaModel, listOllamaModels } from '../api/ollama'
import { getCloudSync, setCloudSync } from '../api/storage'
import {
  AGENTS, AGENT_LIST,
  loadTechniques, saveTechnique,
  loadSpells, saveSpell,
  loadStorylines, saveStoryline, updateStoryline as updateStorylineStore,
  loadAgentTools, saveAgentTool, updateAgentTool,
  loadAgentBeasts, saveAgentBeast, updateAgentBeast,
  savePosition,
} from '../api/agents'

// ── Persistence ────────────────────────────────────────────────────────────
const ACTIVE_KEY = 'sol-nexus::active-agent'
const LOG_KEY    = 'sol-nexus::action-log'
const MAX_HIST   = 60

function loadAgentHistory(agent) {
  try { return JSON.parse(localStorage.getItem(agent.historyKey)) ?? [] } catch { return [] }
}
function saveAgentHistory(agent, msgs) {
  try { localStorage.setItem(agent.historyKey, JSON.stringify(msgs.slice(-MAX_HIST))) } catch {}
}
function loadLog()  { try { return JSON.parse(localStorage.getItem(LOG_KEY)) ?? [] } catch { return [] } }
function appendLog(entry) {
  try {
    const log = loadLog(); log.push(entry)
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-200)))
  } catch {}
}

// ── Label maps ─────────────────────────────────────────────────────────────
const TYPE_LABELS = {
  CHARACTER_CREATED: { label: 'Character Created',   color: '#10CC70' },
  CHARACTER_UPDATED: { label: 'Character Updated',   color: '#0AADFF' },
  INCONSISTENCY:     { label: 'Inconsistency Found', color: '#E02244' },
  CORE_ASSIGNED:     { label: 'Core Assigned',       color: '#8B35C8' },
  SPELL_CREATED:     { label: 'Spell Created',       color: '#8B35C8' },
  SPELL_ASSIGNED:    { label: 'Spell Assigned',      color: '#8B35C8' },
  TECHNIQUE_CREATED: { label: 'Technique Created',   color: '#8B35C8' },
  TOOL_CREATED:      { label: 'Tool Created',        color: '#C49A14' },
  TOOL_UPDATED:      { label: 'Tool Updated',        color: '#C49A14' },
  TOOL_ASSIGNED:     { label: 'Tool Assigned',       color: '#C49A14' },
  BEAST_CREATED:     { label: 'Beast Created',       color: '#2E6B8A' },
  BEAST_UPDATED:     { label: 'Beast Updated',       color: '#2E6B8A' },
  CONTRACT_CREATED:  { label: 'Summon Contract',     color: '#2E6B8A' },
  ARC_CREATED:       { label: 'Arc Created',         color: '#1A8A3A' },
  lore:              { label: 'Lore',                color: '#D4AF37' },
  character:         { label: 'Character',           color: '#10CC70' },
  'power-system':    { label: 'Power System',        color: '#8B35C8' },
  world:             { label: 'World',               color: '#1A8A3A' },
  plot:              { label: 'Plot',                color: '#a070b8' },
  retcon:            { label: 'Retcon',              color: '#e08040' },
  geography:         { label: 'Geography',           color: '#1A8A3A' },
  politics:          { label: 'Politics',            color: '#5A84A2' },
  'arc-structure':   { label: 'Arc Structure',       color: '#1A6FCC' },
  history:           { label: 'History',             color: '#8B7355' },
  'concurrent-timing': { label: 'Timeline',          color: '#1A6FCC' },
}

const TOOL_LABELS = {
  create_character:          'Creating character',
  update_character:          'Updating character',
  flag_inconsistency:        'Flagging inconsistency',
  log_lore_decision:         'Logging lore decision',
  assign_core:               'Assigning mana core',
  create_spell:              'Registering Sol Art spell',
  assign_spell:              'Assigning spell',
  create_technique:          'Creating technique',
  assign_technique:          'Assigning technique',
  log_power_ruling:          'Recording power ruling',
  create_storyline:          'Creating storyline',
  update_storyline:          'Updating storyline',
  update_character_location: 'Updating location',
  log_character_position:    'Logging timeline position',
  add_world_event:           'Logging world event',
  log_world_decision:        'Recording world decision',
  create_tool:               'Creating weapon/artifact',
  update_tool:               'Updating weapon',
  assign_tool:               'Assigning weapon',
  validate_tool:             'Validating weapon ability',
  log_tool_decision:         'Recording tool decision',
  create_beast:              'Creating beast',
  update_beast:              'Updating beast',
  create_summon_contract:    'Creating summon contract',
  validate_beast_ability:    'Validating beast ability',
  log_beast_decision:        'Recording beast decision',
}

const QUICK_PROMPTS = {
  arai: [
    'Add a new character with their core, location, and signature spell in one pass',
    'Check the full story for lore inconsistencies',
    'Does the Primal War timeline contradict any character backstories?',
    'Add Vraka\'s movement to Eura with all arc, location, and world event updates',
    'Create a new House with its head character, power base, and political position',
    'Review Kael joining House Vane — what downstream effects does this cause?',
    'Add a new simultaneous arc with its protagonist and world positioning',
    'Full update: new Vethara character with core, beast contract, and arc placement',
  ],
  hope: [
    'Create a Lumen Art spell (Light-aligned, incantation required)',
    'Create an Umbra Art spell for a Dark-core antagonist',
    'Assign an Energy-Dark Chaotic core to a new character',
    'Is the Black Light Dance achievable with Light + Darkness dual-sovereign?',
    'Register the full set of spells for House Vane members',
    'Create a Forbidden Art and explain its Grand Table ban',
    'What techniques would a Nature-element Harmonic character develop?',
    'Assign the Black Light Dance technique to Cycla More with full requirements',
  ],
  zoe: [
    'Register Nova\'s arc as a new storyline and map her to the Eura region',
    'Where is Irane during the events of the Primal War?',
    'Map all concurrent storylines for Unix Year 200',
    'Log Vraka\'s position: West territory during the twin split event',
    'Connect Nova\'s arc to the main Irane arch as a parallel storyline',
    'Check if any two characters are in contradictory locations during the same arc',
    'Log the Grand Table formation as a world event with all House leaders',
    'What arcs are running simultaneously during the Primal War era?',
  ],
  summari: [
    'Create a Noble Treasure for House Kazemi with its bloodline ability',
    'Register the weapon Vraka uses to create Aura-Beasts',
    'Create a forbidden artifact with a corrupting cost',
    'Assign a Noble Treasure to its rightful bloodline holder',
    'Validate whether a weapon can grant a Sovereign ability to its holder',
    'Create Selis\'s signature weapon/tool for Force manipulation',
    'Register all 16 Noble Treasures as a tracking list',
    'Create a magic seal artifact from Arke\'s era with restricted access',
  ],
  nighla: [
    'Create an Aura-Beast made from one of Vraka\'s corrupted humans',
    'Create a Limbo entity that a Conceptual character can contract',
    'Register a summoning contract between a character and a beast',
    'Create Vraka\'s beast army — what types of creatures does he field?',
    'Validate whether a Force-Tool retains the original person\'s intelligence',
    'Create a natural Sol-Nexus creature with Fire element and a summoning contract',
    'What would a Primal-level beast look like and what are its abilities?',
    'Create a beast that embodies the concept of fear (conceptual type)',
  ],
}

// ── Component ──────────────────────────────────────────────────────────────
export default function ChatPanel({ characters, charStore, relationships, timelineEras, onSaveCharacter, weapons = [], beasts = [] }) {
  const [activeAgentId, setActiveAgentId] = useState(
    () => localStorage.getItem(ACTIVE_KEY) ?? 'arai'
  )
  const [messages,   setMessages]   = useState(
    () => loadAgentHistory(AGENTS[localStorage.getItem(ACTIVE_KEY) ?? 'arai'])
  )
  const [techniques, setTechniques] = useState(() => loadTechniques())
  const [spells,     setSpells]     = useState(() => loadSpells())
  const [storylines, setStorylines] = useState(() => loadStorylines())
  const [agentTools, setAgentTools] = useState(() => loadAgentTools())
  const [agentBeasts,setAgentBeasts]= useState(() => loadAgentBeasts())
  const [actionLog,  setActionLog]  = useState(() => loadLog())
  const [input,      setInput]      = useState('')
  const [streaming,  setStreaming]  = useState(false)
  const [error,      setError]      = useState(null)
  const [showSetup,      setShowSetup]      = useState(!isApiConfigured())
  const [showLog,        setShowLog]        = useState(false)
  const [showLLMPanel,   setShowLLMPanel]   = useState(false)
  const [provider,       setProviderState]  = useState(() => getProvider())
  const [ollamaModel,    setOllamaModelState] = useState(() => getOllamaModel())
  const [ollamaStatus,   setOllamaStatus]   = useState(null) // null | true | false
  const [ollamaModels,   setOllamaModels]   = useState([])
  const [cloudSync,      setCloudSyncState] = useState(() => getCloudSync())

  // O(1) character lookup — falls back to array.find if charStore not yet available
  const findChar = useCallback((idOrName) => {
    return charStore
      ? charStore.find(idOrName)
      : characters.find(c => c.id === idOrName || c.name?.toLowerCase() === (idOrName ?? '').toLowerCase())
  }, [charStore, characters])

  // Check Ollama status whenever the LLM panel opens
  useEffect(() => {
    if (!showLLMPanel) return
    setOllamaStatus(null)
    isOllamaRunning().then(ok => {
      setOllamaStatus(ok)
      if (ok) listOllamaModels().then(setOllamaModels)
    })
  }, [showLLMPanel])

  const bottomRef = useRef()
  const abortRef  = useRef(null)
  const inputRef  = useRef()

  const agent = AGENTS[activeAgentId] ?? AGENTS.arai

  useEffect(() => {
    if (!streaming) saveAgentHistory(agent, messages)
  }, [messages, streaming, agent])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const switchAgent = useCallback((agentId) => {
    if (agentId === activeAgentId || streaming) return
    saveAgentHistory(AGENTS[activeAgentId], messages)
    setActiveAgentId(agentId)
    setMessages(loadAgentHistory(AGENTS[agentId]))
    localStorage.setItem(ACTIVE_KEY, agentId)
    setInput('')
    setError(null)
  }, [activeAgentId, messages, streaming])

  const logAction = useCallback((type, title, description = '') => {
    const entry = { id: `log-${Date.now()}`, timestamp: Date.now(), type, title, description }
    appendLog(entry)
    setActionLog(prev => [...prev, entry])
  }, [])

  // ── Execute tool calls ────────────────────────────────────────────────────
  // Claude occasionally double-encodes `updates` as a JSON string. This guard
  // parses it back to an object so spread/Object.keys work correctly.
  const parseUpdates = (u) => {
    if (!u) return {}
    if (typeof u === 'string') { try { return JSON.parse(u) } catch { return {} } }
    return u
  }

  const executeTool = useCallback((name, inp) => {
    try {
      // ── Arai domain ────────────────────────────────────────────────────
      if (name === 'create_character') {
        const id = inp.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
        const char = { id, name: inp.name ?? '', role: inp.role ?? '', epithet: inp.epithet ?? '',
          coreType: inp.coreType ?? '', status: inp.status ?? 'active', house: inp.house ?? 'none',
          location: inp.location ?? '', importance: inp.importance ?? 2, description: inp.description ?? '',
          notes: '', beast: {}, weapon: {}, gates: [], psyche: [], _dataRev: 1 }
        onSaveCharacter?.(char)
        logAction('CHARACTER_CREATED', `Created: ${inp.name}`, inp.description?.slice(0,120))
        return `Character "${inp.name}" (ID: ${id}) created and saved.`
      }
      if (name === 'update_character') {
        const char = findChar(inp.character_id)
        if (!char) return `ERROR: Character "${inp.character_id}" not found. Known IDs: ${characters.slice(0,10).map(c=>c.id).join(', ')}`
        const updates = parseUpdates(inp.updates)
        const fieldNames = Object.keys(updates).filter(k => !k.match(/^\d+$/))
        onSaveCharacter?.({ ...char, ...updates, _dataRev: (char._dataRev ?? 1) + 1 })
        logAction('CHARACTER_UPDATED', `Updated: ${char.name}`, `Fields: ${fieldNames.join(', ') || 'none'}`)
        return `"${char.name}" updated. Changed: ${fieldNames.join(', ') || 'none'}`
      }
      if (name === 'flag_inconsistency') {
        logAction('INCONSISTENCY', inp.title, `[${inp.severity.toUpperCase()}] ${inp.description}`)
        return `Inconsistency flagged: "${inp.title}" — severity: ${inp.severity}`
      }
      if (name === 'log_lore_decision') {
        logAction(inp.category ?? 'lore', inp.title, inp.description)
        return `Lore decision logged: "${inp.title}"`
      }

      // ── Hope domain ────────────────────────────────────────────────────
      if (name === 'assign_core') {
        const char = findChar(inp.character_id)
        if (!char) return `ERROR: Character "${inp.character_id}" not found.`
        const primary = inp.primary_element ?? '', secondary = inp.secondary_element ?? ''
        const state = inp.core_state ?? 'Harmonic', alignment = inp.core_alignment ?? 'Light'
        let coreType = primary
        if (secondary) coreType += `-${secondary}`
        coreType += `; ${state}-${alignment}`
        onSaveCharacter?.({ ...char, coreType, primaryElement: primary, secondaryElement: secondary, coreState: state, coreAlignment: alignment })
        logAction('CORE_ASSIGNED', `Core: ${char.name}`, `${coreType}${inp.notes ? ' — ' + inp.notes : ''}`)
        return `Core locked for "${char.name}": ${coreType}`
      }
      if (name === 'create_spell') {
        const designation = `${inp.category} Art No. ${inp.number} — ${inp.name}`
        const spell = { name: inp.name, designation, category: inp.category, number: inp.number,
          type: inp.type ?? 'offensive', element_reqs: inp.element_reqs ?? [],
          alignment_req: inp.alignment_req ?? 'None', tier_req: inp.tier_req ?? 'Any',
          incantation: inp.incantation ?? '', silent_cast: inp.silent_cast ?? false,
          effect: inp.effect, power_level: inp.power_level ?? inp.number,
          user_ids: inp.user_ids ?? [] }
        saveSpell(spell)
        setSpells(loadSpells())
        logAction('SPELL_CREATED', `Spell: ${designation}`, inp.effect?.slice(0,120))
        return `Spell registered: ${designation}\nType: ${spell.type} | Elements: ${spell.element_reqs.join('+')||'none'} | Tier: ${spell.tier_req}`
      }
      if (name === 'assign_spell') {
        const allSpells = loadSpells()
        const spell = allSpells.find(s => s.name.toLowerCase() === inp.spell_name.toLowerCase())
        if (!spell) return `ERROR: Spell "${inp.spell_name}" not found. Available: ${allSpells.map(s=>s.name).join(', ')}`
        if (inp.action === 'assign') {
          if (!spell.user_ids.includes(inp.character_id)) spell.user_ids.push(inp.character_id)
          spell.proficiency = spell.proficiency ?? {}
          spell.proficiency[inp.character_id] = inp.proficiency ?? 'learning'
        } else {
          spell.user_ids = spell.user_ids.filter(id => id !== inp.character_id)
        }
        saveSpell(spell)
        setSpells(loadSpells())
        const char = findChar(inp.character_id)
        logAction('SPELL_ASSIGNED', `Spell → ${char?.name ?? inp.character_id}`, `${spell.designation} (${inp.proficiency ?? 'learning'})`)
        return `${inp.action === 'assign' ? 'Assigned' : 'Removed'} "${spell.designation}" ${inp.action === 'assign' ? 'to' : 'from'} ${char?.name ?? inp.character_id}${inp.proficiency ? ` (${inp.proficiency})` : ''}`
      }
      if (name === 'create_technique') {
        const tech = { name: inp.name, character_ids: inp.character_ids ?? [], element_reqs: inp.element_reqs ?? [],
          core_state_req: inp.core_state_req ?? null, tier: inp.tier ?? 'standard',
          mana_cost: inp.mana_cost ?? 'moderate', effect: inp.effect, lore: inp.lore ?? '', proficiency: {} }
        saveTechnique(tech)
        setTechniques(loadTechniques())
        logAction('TECHNIQUE_CREATED', `Technique: ${inp.name}`, `[${inp.tier}] ${inp.effect?.slice(0,120)}`)
        return `Technique "${inp.name}" registered. Tier: ${inp.tier}, Elements: ${(inp.element_reqs ?? []).join('+')||'none'}`
      }
      if (name === 'assign_technique') {
        const techs = loadTechniques()
        const tech = techs.find(t => t.name.toLowerCase() === inp.technique_name.toLowerCase())
        if (!tech) return `ERROR: Technique "${inp.technique_name}" not found. Available: ${techs.map(t=>t.name).join(', ')}`
        if (inp.action === 'assign') {
          if (!tech.character_ids.includes(inp.character_id)) tech.character_ids.push(inp.character_id)
          tech.proficiency = tech.proficiency ?? {}
          tech.proficiency[inp.character_id] = inp.proficiency ?? 'learning'
        } else {
          tech.character_ids = tech.character_ids.filter(id => id !== inp.character_id)
        }
        saveTechnique(tech)
        setTechniques(loadTechniques())
        const char = findChar(inp.character_id)
        return `${inp.action === 'assign' ? 'Assigned' : 'Removed'} "${inp.technique_name}" ${inp.action === 'assign' ? 'to' : 'from'} ${char?.name ?? inp.character_id}${inp.proficiency ? ` (${inp.proficiency})` : ''}`
      }
      if (name === 'log_power_ruling') {
        logAction('power-system', inp.title, inp.ruling)
        return `Power ruling recorded: "${inp.title}"`
      }

      // ── Zoe domain ─────────────────────────────────────────────────────
      if (name === 'create_storyline') {
        const id = inp.id ?? inp.title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
        saveStoryline({ id, ...inp, createdAt: Date.now() })
        setStorylines(loadStorylines())
        logAction('ARC_CREATED', `Arc: ${inp.title}`, inp.summary?.slice(0,100))
        return `Storyline "${inp.title}" created. Protagonist: ${inp.protagonist}, Status: ${inp.status ?? 'planned'}`
      }
      if (name === 'update_storyline') {
        const arcs = loadStorylines()
        if (!arcs.find(s => s.id === inp.storyline_id)) {
          return `ERROR: Storyline "${inp.storyline_id}" not found. Available: ${arcs.map(s=>s.id).join(', ')}`
        }
        const slUpdates = parseUpdates(inp.updates)
        updateStorylineStore(inp.storyline_id, slUpdates)
        setStorylines(loadStorylines())
        return `Storyline "${inp.storyline_id}" updated: ${Object.keys(slUpdates).join(', ')}`
      }
      if (name === 'update_character_location') {
        const char = findChar(inp.character_id)
        if (!char) return `ERROR: Character "${inp.character_id}" not found.`
        onSaveCharacter?.({ ...char, location: inp.location })
        logAction('world', `Location: ${char.name}`, `${char.name} → ${inp.location}${inp.arc_context ? ` (${inp.arc_context})` : ''}`)
        return `${char.name}'s location set to: ${inp.location}`
      }
      if (name === 'log_character_position') {
        savePosition({ character_id: inp.character_id, location: inp.location, year: inp.year, arc_id: inp.arc_id ?? '', action: inp.action ?? '' })
        const char = findChar(inp.character_id)
        logAction('concurrent-timing', `Position: ${char?.name ?? inp.character_id}`, `[${inp.year}] ${inp.location}${inp.action ? ' — ' + inp.action : ''}`)
        return `Position logged: ${char?.name ?? inp.character_id} at ${inp.location} (${inp.year})${inp.action ? ' doing: ' + inp.action : ''}`
      }
      if (name === 'add_world_event') {
        logAction('world', inp.title, `[${inp.year ?? 'unknown'}] ${inp.description}`)
        return `World event logged: "${inp.title}" (${inp.year ?? 'no year'})`
      }
      if (name === 'log_world_decision') {
        logAction(inp.category, inp.title, inp.description)
        return `World decision logged: "${inp.title}" [${inp.category}]`
      }

      // ── Summari domain ─────────────────────────────────────────────────
      if (name === 'create_tool') {
        const tool = { name: inp.name, type: inp.type, holder_id: inp.holder_id ?? null,
          bloodline_locked: inp.bloodline_locked ?? false, element_affinity: inp.element_affinity ?? null,
          abilities: inp.abilities ?? [], lore: inp.lore ?? '', description: inp.description,
          restrictions: inp.restrictions ?? '', createdAt: Date.now() }
        saveAgentTool(tool)
        setAgentTools(loadAgentTools())
        logAction('TOOL_CREATED', `Tool: ${inp.name}`, `[${inp.type}] ${inp.description?.slice(0,100)}`)
        return `Weapon/artifact "${inp.name}" created. Type: ${inp.type}${inp.holder_id ? ', Holder: ' + inp.holder_id : ''}${inp.bloodline_locked ? ' [BLOODLINE LOCKED]' : ''}`
      }
      if (name === 'update_tool') {
        const tools = loadAgentTools()
        if (!tools.find(t => t.name === inp.tool_name)) return `ERROR: Tool "${inp.tool_name}" not found. Available: ${tools.map(t=>t.name).join(', ')}`
        const toolUpdates = parseUpdates(inp.updates)
        updateAgentTool(inp.tool_name, toolUpdates)
        setAgentTools(loadAgentTools())
        logAction('TOOL_UPDATED', `Updated: ${inp.tool_name}`, Object.keys(toolUpdates).join(', '))
        return `"${inp.tool_name}" updated: ${Object.keys(toolUpdates).join(', ')}`
      }
      if (name === 'assign_tool') {
        const tools = loadAgentTools()
        const tool = tools.find(t => t.name === inp.tool_name)
        if (!tool) return `ERROR: Tool "${inp.tool_name}" not found.`
        updateAgentTool(inp.tool_name, { holder_id: inp.character_id })
        setAgentTools(loadAgentTools())
        const char = findChar(inp.character_id)
        logAction('TOOL_ASSIGNED', `${inp.tool_name} → ${char?.name ?? inp.character_id}`, inp.reason ?? '')
        return `"${inp.tool_name}" assigned to ${char?.name ?? inp.character_id}${inp.reason ? ' — ' + inp.reason : ''}`
      }
      if (name === 'validate_tool') {
        return `Validation result for "${inp.tool_name}": ${inp.concern ? 'Checking: ' + inp.concern + '. ' : ''}This validation requires a power system ruling — logging for review.`
      }
      if (name === 'log_tool_decision') {
        logAction('TOOL_CREATED', inp.title, `${inp.item_name ? '[' + inp.item_name + '] ' : ''}${inp.description}`)
        return `Tool decision logged: "${inp.title}"`
      }

      // ── Nighla domain ──────────────────────────────────────────────────
      if (name === 'create_beast') {
        const beast = { name: inp.name, type: inp.type, element: inp.element ?? null,
          tier: inp.tier ?? 'Fundamental', origin: inp.origin ?? '', abilities: inp.abilities ?? [],
          summon_cost: inp.summon_cost ?? '', contract_holder: inp.contract_holder ?? null,
          description: inp.description, weaknesses: inp.weaknesses ?? '', territory: inp.territory ?? '',
          createdAt: Date.now() }
        saveAgentBeast(beast)
        setAgentBeasts(loadAgentBeasts())
        logAction('BEAST_CREATED', `Beast: ${inp.name}`, `[${inp.type}] ${inp.description?.slice(0,100)}`)
        return `Beast "${inp.name}" created. Type: ${inp.type}, Tier: ${inp.tier}${inp.contract_holder ? ', Contract: ' + inp.contract_holder : ''}. Abilities: ${(inp.abilities ?? []).join(', ')||'none'}`
      }
      if (name === 'update_beast') {
        const beasts = loadAgentBeasts()
        if (!beasts.find(b => b.name === inp.beast_name)) return `ERROR: Beast "${inp.beast_name}" not found. Available: ${beasts.map(b=>b.name).join(', ')}`
        const beastUpdates = parseUpdates(inp.updates)
        updateAgentBeast(inp.beast_name, beastUpdates)
        setAgentBeasts(loadAgentBeasts())
        logAction('BEAST_UPDATED', `Updated: ${inp.beast_name}`, Object.keys(beastUpdates).join(', '))
        return `"${inp.beast_name}" updated: ${Object.keys(beastUpdates).join(', ')}`
      }
      if (name === 'create_summon_contract') {
        const char = findChar(inp.character_id)
        const contract = { character_id: inp.character_id, beast_name: inp.beast_name,
          contract_terms: inp.contract_terms, cost: inp.cost ?? '', limit: inp.limit ?? '',
          lore: inp.lore ?? '', createdAt: Date.now() }
        const beasts = loadAgentBeasts()
        const beast = beasts.find(b => b.name === inp.beast_name)
        if (beast) { updateAgentBeast(inp.beast_name, { contract_holder: inp.character_id }); setAgentBeasts(loadAgentBeasts()) }
        logAction('CONTRACT_CREATED', `Contract: ${char?.name ?? inp.character_id} ↔ ${inp.beast_name}`, `Cost: ${inp.cost ?? 'unspecified'} | ${inp.contract_terms?.slice(0,80)}`)
        return `Summon contract created: ${char?.name ?? inp.character_id} ↔ ${inp.beast_name}\nTerms: ${inp.contract_terms}\nCost: ${inp.cost ?? 'none specified'}\nLimit: ${inp.limit ?? 'none specified'}`
      }
      if (name === 'validate_beast_ability') {
        logAction('BEAST_UPDATED', `Validation: ${inp.beast_name}`, `Ability check: ${inp.ability}`)
        return `Validation logged for "${inp.beast_name}" ability "${inp.ability}"${inp.concern ? ' — concern: ' + inp.concern : ''}. A full ruling will need a power system review.`
      }
      if (name === 'log_beast_decision') {
        logAction('BEAST_CREATED', inp.title, `${inp.beast_name ? '[' + inp.beast_name + '] ' : ''}${inp.description}`)
        return `Beast decision logged: "${inp.title}"`
      }

      return `Unknown tool: ${name}`
    } catch (e) {
      return `ERROR executing ${name}: ${e.message}`
    }
  }, [characters, onSaveCharacter, logAction])

  // ── Reconstruct API history ────────────────────────────────────────────
  const buildApiHistory = useCallback((displayMsgs) => {
    const out = []
    for (const m of displayMsgs) {
      if (m.streaming) continue
      if (m._apiContent) {
        out.push({ role: m.role, content: m._apiContent })
        if (m._toolResults) out.push({ role: 'user', content: m._toolResults })
      } else {
        out.push({ role: m.role, content: m.text })
      }
    }
    return out
  }, [])

  // ── Send + agent loop ─────────────────────────────────────────────────────
  const send = useCallback(async (text) => {
    const userText = (text ?? input).trim()
    if (!userText || streaming) return
    setInput(''); setError(null); setShowSetup(false)

    const controller = new AbortController()
    abortRef.current = controller

    const userMsg = { role: 'user', text: userText }
    setMessages(prev => [...prev, userMsg])
    let apiMessages = [...buildApiHistory(messages), { role: 'user', content: userText }]
    setStreaming(true)

    const placeholderId = `msg-${Date.now()}`
    setMessages(prev => [...prev, { id: placeholderId, role: 'assistant', agentId: activeAgentId, text: '', toolCalls: [], streaming: true }])

    // Build agent system prompt with relevant extra data
    const extra = agent.id === 'hope' ? techniques
      : agent.id === 'zoe'    ? storylines
      : agent.id === 'summari'? agentTools
      : agent.id === 'nighla' ? agentBeasts
      : undefined
    const extra2 = agent.id === 'hope' ? spells : undefined
    const systemPrompt = agent.buildPrompt(characters, relationships, timelineEras, actionLog, extra, extra2, weapons, beasts, userText)

    try {
      let iterationCount = 0
      while (iterationCount < 5) {
        if (controller.signal.aborted) break
        iterationCount++
        let streamedText = ''
        const pendingTools = []

        const { assistantContent, toolCalls, stopReason } = await sendAgentStream(
          apiMessages, systemPrompt,
          (chunk) => { if (!controller.signal.aborted) { streamedText += chunk; setMessages(prev => prev.map(m => m.id === placeholderId ? { ...m, text: streamedText } : m)) } },
          (toolName) => { pendingTools.push({ name: toolName, status: 'running', result: null }); setMessages(prev => prev.map(m => m.id === placeholderId ? { ...m, toolCalls: [...pendingTools] } : m)) },
          agent.tools,
          controller.signal,
        )

        if (controller.signal.aborted) break

        const toolResults = []
        for (const call of toolCalls) {
          const result = executeTool(call.name, call.input)
          toolResults.push({ type: 'tool_result', tool_use_id: call.id, content: result })
          const idx = pendingTools.findIndex(t => t.name === call.name && t.status === 'running')
          if (idx >= 0) pendingTools[idx] = { name: call.name, status: 'done', result }
        }
        if (toolCalls.length > 0) setMessages(prev => prev.map(m => m.id === placeholderId ? { ...m, toolCalls: [...pendingTools] } : m))

        if (stopReason !== 'tool_use' || toolCalls.length === 0) {
          setMessages(prev => prev.map(m => m.id === placeholderId ? { ...m, streaming: false, _apiContent: assistantContent } : m))
          break
        }
        apiMessages = [...apiMessages, { role: 'assistant', content: assistantContent }, { role: 'user', content: toolResults }]
        setMessages(prev => prev.map(m => m.id === placeholderId ? { ...m, _apiContent: assistantContent, _toolResults: toolResults } : m))
        streamedText = ''
        setMessages(prev => prev.map(m => m.id === placeholderId ? { ...m, text: '', streaming: true } : m))
      }
    } catch (e) {
      if (!controller.signal.aborted) {
        setError(e.message)
        setMessages(prev => prev.filter(m => m.id !== placeholderId))
      }
    } finally {
      setStreaming(false)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [messages, input, streaming, agent, characters, relationships, timelineEras, actionLog, techniques, spells, storylines, agentTools, agentBeasts, buildApiHistory, executeTool, activeAgentId])

  const stopStream = () => { abortRef.current?.abort(); setStreaming(false) }
  const clearChat  = () => { abortRef.current?.abort(); setMessages([]); setError(null); setStreaming(false); saveAgentHistory(agent, []) }
  const handleKey  = (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) send() }

  const quickPrompts = QUICK_PROMPTS[activeAgentId] ?? []

  // Summary badge per agent
  const agentBadge = agent.id === 'hope'    ? `${techniques.length} techniques · ${spells.length} spells`
    : agent.id === 'zoe'     ? `${storylines.length} arcs`
    : agent.id === 'summari' ? `${agentTools.length} weapons`
    : agent.id === 'nighla'  ? `${agentBeasts.length} beasts`
    : `${characters.length} chars tracked`

  return (
    <div className="chat-view" data-agent={activeAgentId}>

      {/* ── Agent selector tabs ───────────────────────────────────── */}
      <div className="agent-tabs">
        {AGENT_LIST.map(a => (
          <button key={a.id} className={`agent-tab ${activeAgentId === a.id ? 'active' : ''}`}
            onClick={() => switchAgent(a.id)} disabled={streaming} title={a.intro}>
            <span className="agent-tab-icon">{a.icon}</span>
            <span className="agent-tab-name">{a.name}</span>
            <span className="agent-tab-role">{a.title}</span>
          </button>
        ))}
      </div>

      {/* ── Chat header ───────────────────────────────────────────── */}
      <div className="chat-header">
        <div>
          <h2>Agent {agent.name}</h2>
          <p className="chat-subtitle">{agent.title} · {agentBadge}</p>
        </div>
        <div className="chat-header-actions">
          <button className={`log-toggle-btn ${showLog ? 'active' : ''}`} onClick={() => setShowLog(v => !v)}>
            Log {actionLog.length > 0 && <span className="log-count">{actionLog.length}</span>}
          </button>
          <button
            className={`llm-toggle-btn ${showLLMPanel ? 'active' : ''} ${provider === 'ollama' ? 'local' : ''}`}
            onClick={() => setShowLLMPanel(v => !v)}
            title={provider === 'ollama' ? `Local · ${ollamaModel}` : 'Cloud · Claude'}
          >
            {provider === 'ollama' ? '⬡ Local' : '☁ Cloud'}
          </button>
          {streaming && <button className="stop-btn" onClick={stopStream}>Stop</button>}
          {messages.length > 0 && !streaming && <button className="clear-chat-btn" onClick={clearChat}>Clear</button>}
        </div>
      </div>

      {/* ── Action log ────────────────────────────────────────────── */}
      {showLog && (
        <div className="action-log-panel">
          <div className="log-panel-header">
            <span>Action Log — {actionLog.length} entries</span>
            <button className="log-clear-btn" onClick={() => { setActionLog([]); localStorage.removeItem(LOG_KEY) }}>Clear</button>
          </div>
          <div className="log-entries">
            {actionLog.length === 0 ? (
              <div className="log-empty">No actions yet. Agents log everything they change here.</div>
            ) : (
              [...actionLog].reverse().map(entry => {
                const meta = TYPE_LABELS[entry.type] ?? { label: entry.type, color: '#5A84A2' }
                return (
                  <div key={entry.id} className="log-entry">
                    <span className="log-entry-type" style={{ color: meta.color }}>{meta.label}</span>
                    <span className="log-entry-title">{entry.title}</span>
                    {entry.description && <span className="log-entry-desc">{entry.description}</span>}
                    <span className="log-entry-time">{new Date(entry.timestamp).toLocaleString()}</span>
                  </div>
                )
              })
            )}
          </div>
        </div>
      )}

      {/* ── LLM Provider panel ────────────────────────────────────── */}
      {showLLMPanel && (
        <div className="llm-panel">
          <div className="llm-panel-hdr">LLM Provider</div>

          {/* Provider toggle */}
          <div className="llm-provider-row">
            <button
              className={`llm-provider-btn ${provider === 'anthropic' ? 'selected' : ''}`}
              onClick={() => { setProvider('anthropic'); setProviderState('anthropic') }}
            >
              ☁ Cloud — Claude (Anthropic)
              <span className="llm-provider-sub">Current model via API key</span>
            </button>
            <button
              className={`llm-provider-btn ${provider === 'ollama' ? 'selected' : ''}`}
              onClick={() => { setProvider('ollama'); setProviderState('ollama') }}
            >
              ⬡ Local — Ollama
              <span className="llm-provider-sub">Runs on your machine, no API cost</span>
            </button>
          </div>

          {provider === 'ollama' && (
            <div className="llm-ollama-config">
              {/* Status indicator */}
              <div className="llm-status-row">
                <span className={`llm-status-dot ${ollamaStatus === true ? 'ok' : ollamaStatus === false ? 'err' : 'checking'}`} />
                <span className="llm-status-text">
                  {ollamaStatus === null ? 'Checking Ollama...' : ollamaStatus ? 'Ollama running at localhost:11434' : 'Ollama not detected — install from ollama.com'}
                </span>
                <button className="llm-recheck-btn" onClick={() => {
                  setOllamaStatus(null)
                  isOllamaRunning().then(ok => { setOllamaStatus(ok); if (ok) listOllamaModels().then(setOllamaModels) })
                }}>↺</button>
              </div>

              {/* Model selector */}
              <div className="llm-model-row">
                <label className="llm-model-label">Model</label>
                <input
                  className="llm-model-input"
                  value={ollamaModel}
                  onChange={e => { setOllamaModelState(e.target.value); setOllamaModel(e.target.value) }}
                  placeholder="qwen3.6:27b"
                />
              </div>

              {/* Installed models list */}
              {ollamaModels.length > 0 && (
                <div className="llm-model-list">
                  {ollamaModels.map(m => (
                    <button key={m} className={`llm-model-chip ${m === ollamaModel ? 'active' : ''}`}
                      onClick={() => { setOllamaModelState(m); setOllamaModel(m) }}>
                      {m}
                    </button>
                  ))}
                </div>
              )}

              {/* Setup guide */}
              {!ollamaStatus && ollamaStatus !== null && (
                <div className="llm-setup-guide">
                  <strong>Quick setup (2 min):</strong>
                  <ol>
                    <li>Download Ollama: <code>brew install ollama</code> or visit <code>ollama.com</code></li>
                    <li>Pull the recommended model: <code>ollama pull qwen3.6:27b</code></li>
                    <li>Start Ollama: <code>ollama serve</code></li>
                    <li>Hit ↺ above to re-check status</li>
                  </ol>
                  <p className="llm-guide-note">Best for your M5 32GB: <strong>qwen3.6:27b</strong> (~17 GB, full tool-calling support)</p>
                </div>
              )}
            </div>
          )}

          {/* ── Data privacy (always visible) ─────────────────── */}
          <div className="llm-privacy-row">
            <div className="llm-privacy-info">
              <span className="llm-privacy-icon">🔒</span>
              <span className="llm-privacy-text">
                {provider === 'ollama'
                  ? 'Local mode — zero data leaves your machine. Qwen3.6 runs entirely on your M5 chip. No telemetry, no training.'
                  : 'Cloud mode — prompts are sent to Anthropic. Characters and lore are included in every message.'}
              </span>
            </div>
            <label className="llm-sync-toggle" title="Sync notes and lore edits to Supabase cloud backup">
              <input
                type="checkbox"
                checked={cloudSync}
                onChange={e => { setCloudSync(e.target.checked); setCloudSyncState(e.target.checked) }}
              />
              <span className="llm-sync-label">Cloud backup (notes)</span>
            </label>
          </div>
        </div>
      )}

      {/* ── Setup notice ──────────────────────────────────────────── */}
      {showSetup && (
        <div className="setup-notice">
          <strong>Claude API key needed</strong>
          <ol>
            <li>Get a key at <code>console.anthropic.com</code></li>
            <li>Add to <code>.env.local</code>: <code>VITE_CLAUDE_API_KEY=sk-ant-...</code></li>
            <li>Restart with <code>npm run dev</code></li>
          </ol>
          <button className="dismiss-btn" onClick={() => setShowSetup(false)}>Done →</button>
        </div>
      )}

      {/* ── Intro + quick prompts (empty state) ───────────────────── */}
      {messages.length === 0 && !showSetup && (
        <>
          <div className="agent-intro-card">{agent.intro}</div>
          <div className="quick-prompts">
            <p className="qp-label">{agent.name}'s quick actions</p>
            <div className="qp-grid">
              {quickPrompts.map((qp, i) => (
                <button key={i} className="qp-btn" onClick={() => send(qp)} disabled={streaming}>{qp}</button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── Hope: spells store ────────────────────────────────────── */}
      {activeAgentId === 'hope' && (spells.length > 0 || techniques.length > 0) && (
        <div className="technique-store">
          <div className="technique-store-hdr">
            Sol Arts Registry ({spells.length} spells · {techniques.length} techniques)
          </div>
          <div>
            {spells.map(s => (
              <span key={s.name} className="technique-chip">
                {s.designation ?? `${s.category} No.${s.number} — ${s.name}`}
                <span className={`technique-chip-tier ${s.type}`}>{s.type}</span>
              </span>
            ))}
            {techniques.map(t => (
              <span key={t.name} className="technique-chip">
                {t.name}
                <span className={`technique-chip-tier ${t.tier}`}>{t.tier}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Zoe: arcs store ───────────────────────────────────────── */}
      {activeAgentId === 'zoe' && storylines.length > 0 && (
        <div className="storyline-store">
          <div className="storyline-store-hdr">Active Arcs ({storylines.length})</div>
          <div>
            {storylines.map(s => (
              <span key={s.id} className="arc-chip">
                {s.title}
                <span className={`arc-chip-status ${s.status ?? 'planned'}`}>{s.status ?? 'planned'}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Summari: tools store ──────────────────────────────────── */}
      {activeAgentId === 'summari' && agentTools.length > 0 && (
        <div className="technique-store">
          <div className="technique-store-hdr">Weapons & Artifacts ({agentTools.length})</div>
          <div>
            {agentTools.map(t => (
              <span key={t.name} className="technique-chip">
                {t.name}
                <span className={`technique-chip-tier ${t.type === 'noble-treasure' ? 'unique' : t.type === 'forbidden' ? 'forbidden' : 'standard'}`}>{t.type}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Nighla: beasts store ──────────────────────────────────── */}
      {activeAgentId === 'nighla' && agentBeasts.length > 0 && (
        <div className="storyline-store">
          <div className="storyline-store-hdr">Beasts & Summons ({agentBeasts.length})</div>
          <div>
            {agentBeasts.map(b => (
              <span key={b.name} className="arc-chip">
                {b.name}
                <span className={`arc-chip-status ${b.contract_holder ? 'active' : 'planned'}`}>{b.type}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Messages ──────────────────────────────────────────────── */}
      <div className="chat-messages">
        {messages.map((m, i) => {
          const msgAgent = AGENTS[m.agentId] ?? agent
          return (
            <div key={m.id ?? i} className={`chat-msg ${m.role}`}>
              <div className="msg-role">
                {m.role === 'user' ? 'You' : `${msgAgent.icon} ${msgAgent.name}`}
              </div>
              <div className="msg-content">
                {m.streaming && !m.text ? (
                  <span className="typing"><span /><span /><span /></span>
                ) : (
                  <>
                    {renderMessage(m.text)}
                    {m.streaming && <span className="stream-cursor" />}
                  </>
                )}
                {m.toolCalls?.length > 0 && (
                  <div className="tool-calls">
                    {m.toolCalls.map((tc, j) => (
                      <div key={j} className={`tool-call ${tc.status}`}>
                        <span className="tool-icon">{tc.status === 'done' ? '✓' : '⟳'}</span>
                        <span className="tool-name">{TOOL_LABELS[tc.name] ?? tc.name}</span>
                        {tc.result && (
                          <span className={`tool-result ${tc.result?.startsWith('ERROR') ? 'tool-result-error' : ''}`}>
                            {tc.result}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
        {error && (
          <div className="chat-error">
            <strong>Error:</strong> {error}
            {!isApiConfigured() && <button className="setup-link" onClick={() => setShowSetup(true)}>Setup →</button>}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── Input ─────────────────────────────────────────────────── */}
      <div className="chat-input-area">
        <textarea ref={inputRef} className="chat-input" value={input}
          onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
          placeholder={`Talk to ${agent.name} · ${agent.id === 'arai' ? 'full story updates, new characters, consistency checks' : agent.id === 'hope' ? 'cores, Sol Arts spells, techniques, ability assignments' : agent.id === 'zoe' ? 'storylines, character locations, world events, arc timing' : agent.id === 'summari' ? 'weapons, artifacts, noble treasures, tool validation' : 'beasts, summons, contracts, ability validation'} · Ctrl+Enter`}
          rows={3} disabled={streaming} />
        <button className="send-btn" onClick={() => send()} disabled={streaming || !input.trim()}>
          {streaming ? '…' : 'Send'}
        </button>
      </div>
    </div>
  )
}

// ── Message rendering ──────────────────────────────────────────────────────
function renderMessage(text) {
  if (!text) return null
  const lines = text.split('\n')
  const out   = []
  let listBuf = []
  const flush = () => {
    if (!listBuf.length) return
    out.push(<ul key={`ul${out.length}`} className="msg-list">{listBuf.map((item, j) => <li key={j}>{renderInline(item)}</li>)}</ul>)
    listBuf = []
  }
  lines.forEach((line, i) => {
    if      (line.startsWith('### ')) { flush(); out.push(<h4 key={i} className="msg-h3">{line.slice(4)}</h4>) }
    else if (line.startsWith('## '))  { flush(); out.push(<h3 key={i} className="msg-h2">{line.slice(3)}</h3>) }
    else if (line.startsWith('# '))   { flush(); out.push(<h2 key={i} className="msg-h1">{line.slice(2)}</h2>) }
    else if (line.startsWith('- ') || line.startsWith('* ')) { listBuf.push(line.slice(2)) }
    else if (line.trim() === '')      { flush(); out.push(<div key={i} className="msg-spacer" />) }
    else                              { flush(); out.push(<p key={i} className="msg-p">{renderInline(line)}</p>) }
  })
  flush()
  return out
}

function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2,-2)}</strong> : p
  )
}
