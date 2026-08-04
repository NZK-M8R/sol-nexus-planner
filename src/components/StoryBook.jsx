import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { defaultStoryChapters } from '../data/story-chapters'
import { sendAgentStream, isApiConfigured } from '../api/claude'
import { AGENTS, AGENT_LIST, loadTechniques, saveTechnique, loadSpells, saveSpell, loadStorylines, saveStoryline, loadAgentTools, saveAgentTool, updateAgentTool, loadAgentBeasts, saveAgentBeast } from '../api/agents'

// ── Persistence ────────────────────────────────────────────────────────────
const STORY_KEY = 'sol-nexus::story-book'
function loadStory() {
  try { const v = localStorage.getItem(STORY_KEY); return v ? JSON.parse(v) : null } catch { return null }
}
function persistStory(parts) {
  try { localStorage.setItem(STORY_KEY, JSON.stringify(parts)) } catch {}
}
// Merge seed parts that don't exist in saved data (new chapters added to story-chapters.js
// will appear even when a saved story exists in localStorage).
function mergeWithSeed(saved, seed) {
  if (!saved) return seed
  const savedIds = new Set(saved.map(p => p.id))
  const newFromSeed = seed.filter(p => !savedIds.has(p.id))
  return newFromSeed.length ? [...saved, ...newFromSeed] : saved
}

// ── Notebook agent history persistence ─────────────────────────────────────
const NB_HISTORY_KEY = (agentId) => `sol-nexus::nb-chat-${agentId}`
const NB_ACTIVE_KEY  = 'sol-nexus::nb-active-agent'
const MAX_NB_HISTORY = 40

function loadNbHistory(agentId) {
  try {
    const v = localStorage.getItem(NB_HISTORY_KEY(agentId))
    return v ? JSON.parse(v) : []
  } catch { return [] }
}

function saveNbHistory(agentId, messages) {
  try {
    const saveable = messages.filter(m => !m.streaming).slice(-MAX_NB_HISTORY)
    localStorage.setItem(NB_HISTORY_KEY(agentId), JSON.stringify(saveable))
  } catch {}
}

const uid = () => `s${Math.random().toString(36).slice(2, 9)}`

// ── Element tier definitions ───────────────────────────────────────────────
const ELEMENT_TIERS = {
  Fundamental: ['Fire', 'Earth', 'Ice', 'Water', 'Air'],
  Refined:     ['Lightning', 'Nature', 'Energy'],
  Sovereign:   ['Light', 'Darkness', 'Aura', 'Force', 'Space', 'Life-Death', 'Time'],
}

// ── Case-insensitive character detection ───────────────────────────────────
function detectCharsInText(text, characters) {
  if (!text || !characters?.length) return []
  const lower = text.toLowerCase()
  const found = new Set()
  for (const char of characters) {
    const terms = [char.name, ...char.name.split(' ').filter(p => p.length > 2)]
    for (const term of terms) {
      if (lower.includes(term.toLowerCase())) { found.add(char.id); break }
    }
  }
  return characters.filter(c => found.has(c.id))
}

// ── Smart potential name detector ──────────────────────────────────────────
// Finds capitalized proper-noun sequences in text that don't match known characters
const STOP_WORDS = new Set([
  'the','a','an','in','on','at','to','by','of','and','or','but','for',
  'nor','so','yet','both','either','neither','not','only','such','than',
  'too','very','just','most','its','also','even','as','this','that',
  'was','were','had','has','have','been','will','would','could','should',
  'when','where','what','who','how','why','while','after','before',
  'they','them','their','there','here','now','then','he','she','his',
  'her','him','it','its','we','our','you','your','my','me','i',
  'from','with','into','onto','over','under','through',
  'limbo','primals','orians','orius','earth','west','east',
])

function detectPotentialNames(text, characters) {
  if (!text?.trim()) return []
  const knownLower = new Set(
    characters.flatMap(c => [
      c.name.toLowerCase(),
      ...c.name.split(' ').filter(p => p.length > 2).map(p => p.toLowerCase())
    ])
  )
  const matches = [...text.matchAll(/\b([A-Z][a-z]{1,}(?:\s[A-Z][a-z]{1,}){0,2})\b/g)].map(m => m[1])
  const seen = new Set()
  return matches.filter(m => {
    const ml = m.toLowerCase()
    if (seen.has(ml)) return false
    seen.add(ml)
    if (m.length < 4) return false
    const words = m.split(' ')
    if (words.every(w => STOP_WORDS.has(w.toLowerCase()))) return false
    if (knownLower.has(ml)) return false
    if (words.some(w => knownLower.has(w.toLowerCase()))) return false
    return true
  }).slice(0, 6)
}

// ── Core type helpers ──────────────────────────────────────────────────────
function buildCoreType(primary, secondary, state, alignment) {
  const elem = [primary, secondary].filter(Boolean).join('-')
  const core = [state, alignment].filter(Boolean).join('-')
  return [elem, core].filter(Boolean).join('; ')
}

function parseCoreType(coreType) {
  if (!coreType) return { primaryElement: '', secondaryElement: '', coreState: '', coreAlignment: '' }
  const [elemPart = '', statePart = ''] = coreType.split(';').map(s => s.trim())
  const elems  = elemPart.split('-').map(s => s.trim())
  const states = statePart.split('-').map(s => s.trim())
  return {
    primaryElement:   elems[0]  ?? '',
    secondaryElement: elems[1]  ?? '',
    coreState:        states[0] ?? '',
    coreAlignment:    states[1] ?? '',
  }
}

const blankChar = () => ({
  id: '', name: '', house: 'none', role: '', epithet: '',
  coreType: '', primaryElement: '', secondaryElement: '',
  coreState: '', coreAlignment: '',
  status: 'active', location: '', importance: 2, description: '',
  beast: {}, weapon: {}, gates: [], psyche: [], notes: '', _dataRev: 1,
})

// ── Tool-to-agent map ──────────────────────────────────────────────────────
const TOOL_AGENT_MAP = {
  assign_core: 'hope', create_spell: 'hope', create_technique: 'hope', assign_spell: 'hope', assign_technique: 'hope', log_power_ruling: 'hope',
  create_storyline: 'zoe', update_storyline: 'zoe', update_character_location: 'zoe', log_character_position: 'zoe', add_world_event: 'zoe',
  create_tool: 'summari', update_tool: 'summari', assign_tool: 'summari',
  create_beast: 'nighla', create_summon_contract: 'nighla', update_beast: 'nighla',
  create_character: 'arai', update_character: 'arai', flag_inconsistency: 'arai', log_lore_decision: 'arai',
}

// ── Notebook quick hints ───────────────────────────────────────────────────
const nbQuickHints = {
  arai: ['Check consistency of current scene', 'Create a character for this scene', 'What does this scene set up?'],
  hope: ["Assign a core to a character in this scene", "Create a technique for this scene's character", 'What spell would work here?'],
  zoe: ['Where is each character in this scene?', 'Which arc does this scene belong to?', 'Log this scene as a world event'],
  summari: ["Create a weapon for this scene's character", 'Which Noble Treasure is relevant here?', 'Validate the weapon abilities in this scene'],
  nighla: ['Create the beast mentioned in this scene', 'Set up a summon contract for this character', 'Validate beast abilities in this scene'],
}

// ── Tool label formatter ───────────────────────────────────────────────────
function formatNbTool(name) {
  const labels = {
    create_character: 'Creating character', update_character: 'Updating character',
    assign_core: 'Assigning core', create_spell: 'Creating spell', create_technique: 'Creating technique',
    create_beast: 'Creating beast', create_tool: 'Creating weapon', create_summon_contract: 'Creating contract',
    flag_inconsistency: 'Flagging issue', log_lore_decision: 'Logging decision', update_character_location: 'Setting location',
  }
  return labels[name] ?? name
}

// ── CoreBuilder ────────────────────────────────────────────────────────────
function CoreBuilder({ primary, secondary, state, alignment, onChange }) {
  return (
    <div className="sb-core-builder">
      <div className="sb-core-row">
        <select className="sb-select" value={primary}
          onChange={e => onChange('primary', e.target.value)}>
          <option value="">Primary Element</option>
          {Object.entries(ELEMENT_TIERS).map(([tier, elems]) => (
            <optgroup key={tier} label={tier}>
              {elems.map(el => <option key={el} value={el}>{el}</option>)}
            </optgroup>
          ))}
        </select>
        <select className="sb-select" value={secondary}
          onChange={e => onChange('secondary', e.target.value)}>
          <option value="">+ Secondary</option>
          {Object.entries(ELEMENT_TIERS).map(([tier, elems]) => (
            <optgroup key={tier} label={tier}>
              {elems.map(el => <option key={el} value={el}>{el}</option>)}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="sb-core-row">
        <select className="sb-select" value={state}
          onChange={e => onChange('state', e.target.value)}>
          <option value="">Core State</option>
          <option value="Harmonic">Harmonic</option>
          <option value="Chaotic">Chaotic</option>
        </select>
        <select className="sb-select" value={alignment}
          onChange={e => onChange('alignment', e.target.value)}>
          <option value="">Alignment</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Both">Both (rare)</option>
        </select>
      </div>
    </div>
  )
}

// ── Character card ─────────────────────────────────────────────────────────
function CharCard({ char, onClick }) {
  const coreDisplay = char.coreType
    ? char.coreType.split(';')[0].trim()
    : null
  return (
    <div className="sb-char-card" onClick={() => onClick(char)}>
      <div className="sb-char-name">{char.name}</div>
      {char.epithet && <div className="sb-char-epithet">"{char.epithet}"</div>}
      {char.role && <div className="sb-char-role">{char.role.split('·')[0].trim()}</div>}
      {coreDisplay && <div className="sb-char-core">{coreDisplay}</div>}
      <div className={`sb-char-status sb-status-${(char.status ?? 'unknown').replace(/\s+/g, '-')}`}>
        {char.status}
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function StoryBook({ characters = [], onSaveCharacter, weapons = [], beasts = [] }) {
  const [parts, setParts]             = useState(() => mergeWithSeed(loadStory(), defaultStoryChapters))
  const [partId, setPartId]           = useState(null)
  const [chapterId, setChapterId]     = useState(null)
  const [sceneId, setSceneId]         = useState(null)
  const [activePanel, setActivePanel] = useState('scene') // 'scene' | 'all' | 'new' | 'edit' | 'agent'
  const [editingChar, setEditingChar] = useState(null)
  const [newChar, setNewChar]         = useState(blankChar())
  const [charSearch, setCharSearch]   = useState('')
  const [saveStatus, setSaveStatus]   = useState('saved')
  const [expandedParts, setExpandedParts] = useState({})
  const [navCollapsed,   setNavCollapsed]   = useState(false)
  const [panelCollapsed, setPanelCollapsed] = useState(false)
  const saveTimer = useRef(null)

  // ── Agent state ──────────────────────────────────────────────────────────
  const [nbAgentId,   setNbAgentId]   = useState(() => localStorage.getItem(NB_ACTIVE_KEY) ?? 'arai')
  const [nbMessages,  setNbMessages]  = useState(() => loadNbHistory(localStorage.getItem(NB_ACTIVE_KEY) ?? 'arai'))
  const [nbInput,     setNbInput]     = useState('')
  const [nbStreaming, setNbStreaming]  = useState(false)
  const [nbError,     setNbError]     = useState(null)
  const [nbToolAgent, setNbToolAgent] = useState(null)
  const nbAbortRef  = useRef(null)
  const nbInputRef  = useRef(null)
  const nbBottomRef = useRef(null)
  const NB_LOG_KEY  = 'sol-nexus::action-log'

  // ── Persist agent history on every settled update ────────────────────────
  useEffect(() => {
    if (!nbStreaming) saveNbHistory(nbAgentId, nbMessages)
  }, [nbMessages, nbAgentId, nbStreaming])

  // ── Persist active agent selection ───────────────────────────────────────
  useEffect(() => {
    localStorage.setItem(NB_ACTIVE_KEY, nbAgentId)
  }, [nbAgentId])

  // ── Auto-scroll nb messages ──────────────────────────────────────────────
  useEffect(() => {
    nbBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [nbMessages])

  // ── Init default navigation ──────────────────────────────────────────────
  useEffect(() => {
    if (!partId && parts.length) {
      const p = parts[0]
      const c = p.chapters?.[0]
      const s = c?.scenes?.[0]
      setPartId(p.id); setChapterId(c?.id ?? null); setSceneId(s?.id ?? null)
      setExpandedParts({ [p.id]: true })
    }
  }, [parts, partId])

  // ── Resolve current nodes ────────────────────────────────────────────────
  const currentPart    = parts.find(p => p.id === partId) ?? parts[0]
  const currentChapter = currentPart?.chapters?.find(c => c.id === chapterId) ?? currentPart?.chapters?.[0]
  const currentScene   = currentChapter?.scenes?.find(s => s.id === sceneId) ?? currentChapter?.scenes?.[0]

  // ── Computed ─────────────────────────────────────────────────────────────
  const detectedChars = useMemo(
    () => detectCharsInText(currentScene?.content ?? '', characters),
    [currentScene?.content, characters]
  )

  const potentialNames = useMemo(
    () => detectPotentialNames(currentScene?.content ?? '', characters),
    [currentScene?.content, characters]
  )

  const filteredChars = useMemo(() => {
    if (!charSearch.trim()) return characters
    const q = charSearch.toLowerCase()
    return characters.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.role ?? '').toLowerCase().includes(q) ||
      (c.coreType ?? '').toLowerCase().includes(q)
    )
  }, [characters, charSearch])

  const wordCount = useMemo(() => {
    const t = currentScene?.content?.trim() ?? ''
    return t ? t.split(/\s+/).length : 0
  }, [currentScene?.content])

  const totalWords = useMemo(() => {
    let count = 0
    for (const p of parts)
      for (const c of p.chapters ?? [])
        for (const s of c.scenes ?? [])
          if (s.content?.trim()) count += s.content.trim().split(/\s+/).length
    return count
  }, [parts])

  // ── Update helpers ───────────────────────────────────────────────────────
  const updateScene = useCallback((updater) => {
    setParts(prev => {
      const next = prev.map(p => p.id !== partId ? p : {
        ...p,
        chapters: p.chapters.map(c => c.id !== chapterId ? c : {
          ...c,
          scenes: c.scenes.map(s => s.id !== sceneId ? s : updater(s))
        })
      })
      setSaveStatus('unsaved')
      clearTimeout(saveTimer.current)
      saveTimer.current = setTimeout(() => { persistStory(next); setSaveStatus('saved') }, 900)
      return next
    })
  }, [partId, chapterId, sceneId])

  const handleContentChange = useCallback((e) => {
    updateScene(s => ({ ...s, content: e.target.value }))
  }, [updateScene])

  const handleSceneTitleChange = useCallback((e) => {
    updateScene(s => ({ ...s, title: e.target.value }))
  }, [updateScene])

  // ── Navigation ───────────────────────────────────────────────────────────
  const navTo = useCallback((pId, cId, sId) => {
    setPartId(pId); setChapterId(cId); setSceneId(sId)
    if (activePanel === 'edit') setActivePanel('scene')
    setExpandedParts(prev => ({ ...prev, [pId]: true }))
  }, [activePanel])

  const togglePart = useCallback((pId) => {
    setExpandedParts(prev => ({ ...prev, [pId]: !prev[pId] }))
  }, [])

  // ── Add part / chapter / scene ───────────────────────────────────────────
  const addPart = useCallback(() => {
    const firstScene = { id: uid(), title: 'Opening', content: '' }
    const firstChap  = { id: uid(), title: 'Chapter 1', scenes: [firstScene] }
    const np = { id: uid(), type: 'part', title: `Part ${parts.length + 1}`, chapters: [firstChap] }
    setParts(prev => { const next = [...prev, np]; persistStory(next); return next })
    navTo(np.id, firstChap.id, firstScene.id)
  }, [parts.length, navTo])

  const addChapter = useCallback(() => {
    const firstScene = { id: uid(), title: 'Opening', content: '' }
    const nc = { id: uid(), title: 'New Chapter', scenes: [firstScene] }
    setParts(prev => {
      const next = prev.map(p => p.id !== partId ? p : { ...p, chapters: [...p.chapters, nc] })
      persistStory(next); return next
    })
    navTo(partId, nc.id, firstScene.id)
  }, [partId, navTo])

  const addScene = useCallback(() => {
    const ns = { id: uid(), title: 'New Scene', content: '' }
    setParts(prev => {
      const next = prev.map(p => p.id !== partId ? p : {
        ...p,
        chapters: p.chapters.map(c => c.id !== chapterId ? c : { ...c, scenes: [...c.scenes, ns] })
      })
      persistStory(next); return next
    })
    navTo(partId, chapterId, ns.id)
  }, [partId, chapterId, navTo])

  // ── Character editing ────────────────────────────────────────────────────
  const openEditChar = useCallback((char) => {
    const parsed = parseCoreType(char.coreType)
    setEditingChar({
      ...char,
      primaryElement:   char.primaryElement   ?? parsed.primaryElement,
      secondaryElement: char.secondaryElement ?? parsed.secondaryElement,
      coreState:        char.coreState        ?? parsed.coreState,
      coreAlignment:    char.coreAlignment    ?? parsed.coreAlignment,
    })
    setActivePanel('edit')
  }, [])

  const applyCoreBuild = (prev, field, value) => {
    const keyMap = { primary: 'primaryElement', secondary: 'secondaryElement', state: 'coreState', alignment: 'coreAlignment' }
    const next = { ...prev, [keyMap[field]]: value }
    const built = buildCoreType(next.primaryElement, next.secondaryElement, next.coreState, next.coreAlignment)
    if (built) next.coreType = built
    return next
  }

  const handleEditCoreChange = useCallback((field, value) => {
    setEditingChar(prev => applyCoreBuild(prev, field, value))
  }, [])

  const handleNewCharCoreChange = useCallback((field, value) => {
    setNewChar(prev => applyCoreBuild(prev, field, value))
  }, [])

  const handleSaveEditingChar = useCallback(() => {
    if (!editingChar) return
    onSaveCharacter(editingChar)
    setEditingChar(null)
    setActivePanel('scene')
  }, [editingChar, onSaveCharacter])

  const handleCreateChar = useCallback(() => {
    if (!newChar.name.trim()) return
    const id = newChar.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
    onSaveCharacter({ ...newChar, id })
    setNewChar(blankChar())
    setActivePanel('scene')
  }, [newChar, onSaveCharacter])

  const handleQuickCreate = useCallback((name) => {
    setNewChar({ ...blankChar(), name })
    setActivePanel('new')
  }, [])

  // ── Agent: log action ────────────────────────────────────────────────────
  const nbLogAction = useCallback((type, title, description = '') => {
    try {
      const log = JSON.parse(localStorage.getItem(NB_LOG_KEY) ?? '[]')
      log.push({ id: `nb-${Date.now()}`, timestamp: Date.now(), type, title, description })
      localStorage.setItem(NB_LOG_KEY, JSON.stringify(log.slice(-200)))
    } catch {}
  }, [])

  // ── Agent: execute tool ──────────────────────────────────────────────────
  const parseUpdates = (u) => {
    if (!u) return {}
    if (typeof u === 'string') { try { return JSON.parse(u) } catch { return {} } }
    return u
  }

  const nbExecuteTool = useCallback((name, input) => {
    try {
      if (name === 'create_character') {
        const id = (input.name ?? 'char').toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
        const char = {
          id,
          name:        input.name ?? '',
          role:        input.role ?? '',
          epithet:     input.epithet ?? '',
          coreType:    input.coreType ?? '',
          primaryElement: '', secondaryElement: '', coreState: '', coreAlignment: '',
          status:      input.status ?? 'active',
          house:       input.house ?? 'none',
          location:    input.location ?? '',
          importance:  input.importance ?? 2,
          description: input.description ?? '',
          beast: {}, weapon: {}, gates: [], psyche: [], notes: '', _dataRev: 1,
        }
        if (char.coreType) {
          const p = parseCoreType(char.coreType)
          char.primaryElement   = p.primaryElement
          char.secondaryElement = p.secondaryElement
          char.coreState        = p.coreState
          char.coreAlignment    = p.coreAlignment
        }
        onSaveCharacter(char)
        nbLogAction('CHARACTER_CREATED', `Character: ${char.name}`, input.description?.slice(0, 80) ?? '')
        return `Character "${char.name}" (ID: ${char.id}) created.`
      }

      if (name === 'update_character') {
        const char = characters.find(c => c.id === input.character_id || c.name.toLowerCase() === (input.character_id ?? '').toLowerCase())
        if (!char) return `Character ID "${input.character_id}" not found.`
        const updates = parseUpdates(input.updates)
        const fieldNames = Object.keys(updates).filter(k => !k.match(/^\d+$/))
        const updated = { ...char, ...updates, _dataRev: (char._dataRev ?? 1) + 1 }
        onSaveCharacter(updated)
        nbLogAction('CHARACTER_UPDATED', `Updated: ${char.name}`, `Fields: ${fieldNames.join(', ') || 'none'}`)
        return `Character "${char.name}" updated. Changed: ${fieldNames.join(', ') || 'none'}`
      }

      if (name === 'assign_core') {
        const char = characters.find(c => c.id === input.character_id || c.name.toLowerCase() === (input.character_id ?? '').toLowerCase())
        if (!char) return `Character ID "${input.character_id}" not found.`
        const coreType = buildCoreType(
          input.primary_element ?? '',
          input.secondary_element ?? '',
          input.core_state ?? '',
          input.core_alignment ?? ''
        )
        const updated = {
          ...char,
          coreType,
          primaryElement:   input.primary_element   ?? char.primaryElement   ?? '',
          secondaryElement: input.secondary_element ?? char.secondaryElement ?? '',
          coreState:        input.core_state        ?? char.coreState        ?? '',
          coreAlignment:    input.core_alignment    ?? char.coreAlignment    ?? '',
        }
        onSaveCharacter(updated)
        nbLogAction('CORE_ASSIGNED', `Core locked for ${char.name}`, coreType)
        return `Core locked for "${char.name}": ${coreType}`
      }

      if (name === 'create_technique') {
        const tech = { ...input, id: `tech-${Date.now()}` }
        saveTechnique(tech)
        nbLogAction('TECHNIQUE_CREATED', `Technique: ${input.name}`, input.effect?.slice(0, 80) ?? '')
        return `Technique "${input.name}" created.`
      }

      if (name === 'create_spell') {
        const designation = `${input.category} Art No. ${input.number} — ${input.name}`
        const spell = { ...input, designation, id: `spell-${Date.now()}` }
        saveSpell(spell)
        nbLogAction('SPELL_CREATED', designation, input.effect?.slice(0, 80) ?? '')
        return `Spell "${designation}" created.`
      }

      if (name === 'assign_spell') {
        nbLogAction('SPELL_ASSIGNED', `Spell "${input.spell_name}" ${input.action}ed to ${input.character_id}`, input.proficiency ?? '')
        return `Spell "${input.spell_name}" ${input.action}ed to character "${input.character_id}".`
      }

      if (name === 'assign_technique') {
        nbLogAction('TECHNIQUE_ASSIGNED', `Technique "${input.technique_name}" ${input.action}ed to ${input.character_id}`, input.proficiency ?? '')
        return `Technique "${input.technique_name}" ${input.action}ed to character "${input.character_id}".`
      }

      if (name === 'log_power_ruling') {
        nbLogAction('POWER_RULING', input.title, input.ruling?.slice(0, 120) ?? '')
        return `Power ruling logged: "${input.title}"`
      }

      if (name === 'flag_inconsistency') {
        nbLogAction('INCONSISTENCY', input.title, `[${input.severity}] ${input.description?.slice(0, 100) ?? ''}`)
        return `Inconsistency flagged [${input.severity}]: "${input.title}"`
      }

      if (name === 'log_lore_decision') {
        nbLogAction(input.category?.toUpperCase() ?? 'LORE', input.title, input.description?.slice(0, 120) ?? '')
        return `Lore decision logged: "${input.title}"`
      }

      if (name === 'create_beast') {
        const beast = { ...input, id: `beast-${Date.now()}` }
        saveAgentBeast(beast)
        nbLogAction('BEAST_CREATED', `Beast: ${input.name}`, input.description?.slice(0, 80) ?? '')
        return `Beast "${input.name}" created.`
      }

      if (name === 'update_beast') {
        nbLogAction('BEAST_UPDATED', `Beast updated: ${input.beast_name}`, JSON.stringify(input.updates ?? {}).slice(0, 80))
        return `Beast "${input.beast_name}" updated.`
      }

      if (name === 'create_summon_contract') {
        nbLogAction('CONTRACT_CREATED', `Contract: ${input.character_id} ↔ ${input.beast_name}`, input.contract_terms?.slice(0, 80) ?? '')
        return `Summon contract created between "${input.character_id}" and beast "${input.beast_name}".`
      }

      if (name === 'create_tool') {
        const tool = { ...input, id: `tool-${Date.now()}` }
        saveAgentTool(tool)
        nbLogAction('TOOL_CREATED', `Weapon: ${input.name}`, input.description?.slice(0, 80) ?? '')
        return `Weapon/tool "${input.name}" created.`
      }

      if (name === 'update_tool') {
        updateAgentTool(input.tool_name, input.updates ?? {})
        nbLogAction('TOOL_UPDATED', `Weapon updated: ${input.tool_name}`, JSON.stringify(input.updates ?? {}).slice(0, 80))
        return `Weapon "${input.tool_name}" updated.`
      }

      if (name === 'assign_tool') {
        updateAgentTool(input.tool_name, { holder_id: input.character_id })
        nbLogAction('TOOL_ASSIGNED', `"${input.tool_name}" assigned to ${input.character_id}`, input.reason ?? '')
        return `Weapon "${input.tool_name}" assigned to "${input.character_id}".`
      }

      if (name === 'update_character_location') {
        const char = characters.find(c => c.id === input.character_id || c.name.toLowerCase() === (input.character_id ?? '').toLowerCase())
        if (!char) return `Character ID "${input.character_id}" not found.`
        const updated = { ...char, location: input.location }
        onSaveCharacter(updated)
        nbLogAction('LOCATION_UPDATED', `${char.name} → ${input.location}`, input.arc_context ?? '')
        return `Location updated: "${char.name}" is now at ${input.location}.`
      }

      if (name === 'create_storyline') {
        const storyline = { ...input, id: input.id ?? `arc-${Date.now()}` }
        saveStoryline(storyline)
        nbLogAction('STORYLINE_CREATED', `Arc: ${input.title}`, input.summary?.slice(0, 80) ?? '')
        return `Storyline "${input.title}" created.`
      }

      if (name === 'update_storyline') {
        nbLogAction('STORYLINE_UPDATED', `Arc updated: ${input.storyline_id}`, JSON.stringify(input.updates ?? {}).slice(0, 80))
        return `Storyline "${input.storyline_id}" updated.`
      }

      if (name === 'log_character_position') {
        nbLogAction('CHAR_POSITION', `${input.character_id} at ${input.location} [${input.year}]`, input.action ?? '')
        return `Position logged: "${input.character_id}" at ${input.location} (${input.year}).`
      }

      if (name === 'add_world_event') {
        nbLogAction('WORLD_EVENT', input.title, input.description?.slice(0, 100) ?? '')
        return `World event noted: "${input.title}"`
      }

      if (name === 'validate_tool' || name === 'validate_beast_ability') {
        return `Validation noted for "${input.tool_name ?? input.beast_name}": ${input.concern ?? 'no concern specified'}.`
      }

      if (name === 'log_world_decision') {
        nbLogAction('WORLD_DECISION', input.title, input.description?.slice(0, 100) ?? '')
        return `World decision logged: "${input.title}"`
      }

      if (name === 'log_tool_decision') {
        nbLogAction('TOOL_DECISION', input.title, input.description?.slice(0, 100) ?? '')
        return `Tool decision logged: "${input.title}"`
      }

      if (name === 'log_beast_decision') {
        nbLogAction('BEAST_DECISION', input.title, input.description?.slice(0, 100) ?? '')
        return `Beast decision logged: "${input.title}"`
      }

      return `Tool "${name}" noted.`
    } catch (err) {
      return `Tool "${name}" failed: ${err.message}`
    }
  }, [characters, onSaveCharacter, nbLogAction])

  // ── Agent: build API history ─────────────────────────────────────────────
  const nbBuildApiHistory = (msgs) => {
    const out = []
    for (const m of msgs) {
      if (m.streaming) continue
      if (m._apiContent) {
        out.push({ role: m.role, content: m._apiContent })
        if (m._toolResults) out.push({ role: 'user', content: m._toolResults })
      } else {
        out.push({ role: m.role, content: m.text })
      }
    }
    return out
  }

  // ── Agent: send message ──────────────────────────────────────────────────
  const nbSend = useCallback(async (textParam) => {
    const text = typeof textParam === 'string' ? textParam.trim() : nbInput.trim()
    if (!text || nbStreaming) return

    setNbInput('')
    setNbError(null)

    const userMsg = { id: `u-${Date.now()}`, role: 'user', text }
    setNbMessages(prev => [...prev, userMsg])

    const assistantMsgId = `a-${Date.now()}`
    setNbMessages(prev => [...prev, {
      id: assistantMsgId,
      role: 'assistant',
      agentId: nbAgentId,
      text: '',
      streaming: true,
      toolCalls: [],
    }])

    setNbStreaming(true)

    const controller = new AbortController()
    nbAbortRef.current = controller

    try {
      // Build system prompt — pass [] for relationships/timelineEras (not available in StoryBook)
      // canonicalWeapons/canonicalBeasts come from App props so agents know the full world library
      const actionLog = (() => { try { return JSON.parse(localStorage.getItem(NB_LOG_KEY) ?? '[]') } catch { return [] } })()
      const techniques = loadTechniques()
      const spells     = loadSpells()
      const storylines = loadStorylines()
      const agentTools = loadAgentTools()
      const loggedBeasts = loadAgentBeasts()

      const agent = AGENTS[nbAgentId]
      let systemPrompt
      if (nbAgentId === 'arai') {
        systemPrompt = agent.buildPrompt(characters, [], [], actionLog, weapons, beasts)
      } else if (nbAgentId === 'hope') {
        systemPrompt = agent.buildPrompt(characters, [], [], actionLog, techniques, spells, weapons, beasts)
      } else if (nbAgentId === 'zoe') {
        systemPrompt = agent.buildPrompt(characters, [], [], actionLog, storylines, weapons, beasts)
      } else if (nbAgentId === 'summari') {
        systemPrompt = agent.buildPrompt(characters, [], [], actionLog, agentTools, weapons, beasts)
      } else if (nbAgentId === 'nighla') {
        systemPrompt = agent.buildPrompt(characters, [], [], actionLog, loggedBeasts, weapons, beasts)
      } else {
        systemPrompt = agent.buildPrompt(characters, [], [], actionLog, weapons, beasts)
      }

      const historyBeforeUser = nbBuildApiHistory(nbMessages)
      let apiMessages = [...historyBeforeUser, { role: 'user', content: text }]

      let accText     = ''
      let accToolCalls = []
      let _apiContent  = null
      let _toolResults = null

      // Agent loop (up to 5 iterations for tool use)
      for (let iter = 0; iter < 5; iter++) {
        accText = ''
        let loopToolCalls = []

        const { assistantContent, toolCalls, stopReason } = await sendAgentStream(
          apiMessages,
          systemPrompt,
          (chunk) => {
            accText += chunk
            setNbMessages(prev => prev.map(m =>
              m.id === assistantMsgId
                ? { ...m, text: accText, streaming: true }
                : m
            ))
          },
          (toolName) => {
            const newTc = { name: toolName, status: 'running' }
            loopToolCalls = [...loopToolCalls, newTc]
            accToolCalls = [...accToolCalls, newTc]
            setNbToolAgent(TOOL_AGENT_MAP[toolName] ?? nbAgentId)
            setNbMessages(prev => prev.map(m =>
              m.id === assistantMsgId
                ? { ...m, toolCalls: [...accToolCalls] }
                : m
            ))
          },
          agent.tools,
          controller.signal,
        )

        _apiContent = assistantContent

        // Execute tools
        if (toolCalls.length > 0) {
          const toolResults = []
          for (const call of toolCalls) {
            const result = nbExecuteTool(call.name, call.input)
            toolResults.push({
              type: 'tool_result',
              tool_use_id: call.id,
              content: result,
            })
            // Mark this tool call as done
            accToolCalls = accToolCalls.map(tc =>
              tc.name === call.name && tc.status === 'running'
                ? { ...tc, status: 'done' }
                : tc
            )
            setNbMessages(prev => prev.map(m =>
              m.id === assistantMsgId
                ? { ...m, toolCalls: [...accToolCalls] }
                : m
            ))
          }
          setNbToolAgent(null)

          _toolResults = toolResults
          apiMessages = [
            ...apiMessages,
            { role: 'assistant', content: assistantContent },
            { role: 'user', content: toolResults },
          ]

          if (stopReason === 'end_turn') break
        } else {
          break
        }
      }

      // Finalize assistant message
      setNbMessages(prev => prev.map(m =>
        m.id === assistantMsgId
          ? {
              ...m,
              text: accText,
              streaming: false,
              toolCalls: accToolCalls,
              _apiContent,
              _toolResults,
            }
          : m
      ))
    } catch (err) {
      if (err.name !== 'AbortError') {
        setNbError(err.message ?? 'Something went wrong.')
        setNbMessages(prev => prev.filter(m => m.id !== assistantMsgId))
      }
    } finally {
      setNbStreaming(false)
      setNbToolAgent(null)
    }
  }, [nbInput, nbStreaming, nbAgentId, nbMessages, characters, nbExecuteTool, nbLogAction])

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="storybook">

      {/* ── LEFT NAV ──────────────────────────────────────────────────────── */}
      <aside className={`sb-nav ${navCollapsed ? 'sb-nav--collapsed' : ''}`}>
        <div className="sb-nav-top">
          {!navCollapsed && <span className="sb-nav-title">NOTEBOOK</span>}
          {!navCollapsed && <span className="sb-total-words">{totalWords.toLocaleString()} words</span>}
          <button className="sb-collapse-btn" onClick={() => setNavCollapsed(v => !v)} title={navCollapsed ? 'Expand navigator' : 'Collapse navigator'}>
            {navCollapsed ? '›' : '‹'}
          </button>
        </div>

        {!navCollapsed && <div className="sb-tree">
          {parts.map(part => {
            const isExpanded  = expandedParts[part.id]
            const isActivePart = partId === part.id
            return (
              <div key={part.id} className="sb-part-block">
                <div className={`sb-part-label ${isActivePart ? 'active' : ''}`}
                  onClick={() => togglePart(part.id)}>
                  <span className="sb-part-arrow">{isExpanded ? '▾' : '▸'}</span>
                  <span className="sb-part-text">{part.title}</span>
                </div>

                {isExpanded && (part.chapters ?? []).map(ch => {
                  const isActiveCh = chapterId === ch.id
                  return (
                    <div key={ch.id} className="sb-chapter-block">
                      <div className={`sb-chapter-label ${isActiveCh ? 'active' : ''}`}
                        onClick={() => navTo(part.id, ch.id, ch.scenes?.[0]?.id ?? null)}>
                        {ch.title}
                      </div>
                      {isActiveCh && (ch.scenes ?? []).map(sc => (
                        <div key={sc.id}
                          className={`sb-scene-label ${sceneId === sc.id ? 'active' : ''}`}
                          onClick={() => navTo(part.id, ch.id, sc.id)}>
                          {sc.title}
                        </div>
                      ))}
                    </div>
                  )
                })}

                {isExpanded && isActivePart && (
                  <button className="sb-add-chapter-btn" onClick={addChapter}>+ Chapter</button>
                )}
              </div>
            )
          })}
        </div>}

        {/* Agent strip — inside expanded nav, before + New Part */}
        {!navCollapsed && (
          <div className="sb-agent-strip">
            {AGENT_LIST.map(a => {
              const isActive    = nbAgentId === a.id
              const isExecuting = nbToolAgent === a.id && activePanel === 'agent'
              return (
                <button
                  key={a.id}
                  className={`sb-agent-avatar ${isActive ? 'active' : ''} ${isExecuting ? 'executing' : ''}`}
                  style={{ '--av-color': a.color, '--av-glow': a.glow }}
                  onClick={() => {
                    if (a.id !== nbAgentId) {
                      saveNbHistory(nbAgentId, nbMessages)
                      setNbMessages(loadNbHistory(a.id))
                      setNbAgentId(a.id)
                    }
                    setActivePanel('agent')
                    if (panelCollapsed) setPanelCollapsed(false)
                  }}
                  title={`${a.name} — ${a.title}`}
                >
                  <span className="sb-avatar-icon">{a.icon}</span>
                  {isActive && <span className="sb-avatar-name">{a.name}</span>}
                </button>
              )
            })}
          </div>
        )}

        {!navCollapsed && <button className="sb-add-part-btn" onClick={addPart}>+ New Part</button>}

        {/* Collapsed nav: agent dot at bottom */}
        {navCollapsed && (
          <div className="sb-nav-collapsed-agent">
            <button
              className="sb-agent-dot"
              style={{ '--av-color': AGENTS[nbAgentId]?.color ?? '#1A6FCC' }}
              onClick={() => { setNavCollapsed(false); setActivePanel('agent'); if (panelCollapsed) setPanelCollapsed(false) }}
              title={`${AGENTS[nbAgentId]?.name ?? 'Agent'} — click to open`}
            >
              {AGENTS[nbAgentId]?.icon ?? '◉'}
            </button>
          </div>
        )}
      </aside>

      {/* ── CENTER CANVAS ─────────────────────────────────────────────────── */}
      <main className="sb-canvas">
        {currentScene ? (
          <>
            <div className="sb-canvas-header">
              <div className="sb-canvas-breadcrumb">
                {currentPart?.title} · {currentChapter?.title}
              </div>
              <input className="sb-scene-title-input"
                value={currentScene.title}
                onChange={handleSceneTitleChange}
                placeholder="Scene title"
              />
              <div className="sb-canvas-meta">
                <span className={`sb-save-dot ${saveStatus}`} title={saveStatus} />
                <span className="sb-word-count">{wordCount.toLocaleString()} words</span>
                <button className="sb-add-scene-btn" onClick={addScene}>+ Scene</button>
                <button className="sb-collapse-btn" onClick={() => setPanelCollapsed(v => !v)} title={panelCollapsed ? 'Show character panel' : 'Hide character panel'}>
                  {panelCollapsed ? '◉' : '✕'}
                </button>
              </div>
            </div>
            <textarea
              className="sb-textarea"
              value={currentScene.content}
              onChange={handleContentChange}
              placeholder={`Write "${currentScene.title}"…\n\nCharacter names typed here will appear in the panel on the right.`}
              spellCheck
            />
          </>
        ) : (
          <div className="sb-canvas-empty">
            <div className="sb-canvas-empty-icon">✦</div>
            <p>Select a scene from the navigator to start writing.</p>
            <button className="sb-add-part-btn" onClick={addPart}>Begin a New Part</button>
          </div>
        )}
      </main>

      {/* ── RIGHT PANEL ───────────────────────────────────────────────────── */}
      <aside className={`sb-panel ${panelCollapsed ? 'sb-panel--collapsed' : ''}`}>
        <div className="sb-panel-tabs">
          <button
            className={`sb-panel-tab ${activePanel === 'scene' ? 'active' : ''}`}
            onClick={() => setActivePanel('scene')}>
            Scene
          </button>
          <button
            className={`sb-panel-tab ${activePanel === 'all' ? 'active' : ''}`}
            onClick={() => { setActivePanel('all'); setCharSearch('') }}>
            All <span className="sb-tab-count">{characters.length}</span>
          </button>
          <button
            className={`sb-panel-tab ${activePanel === 'new' ? 'active' : ''}`}
            onClick={() => { setActivePanel('new'); setNewChar(blankChar()) }}>
            + New
          </button>
          <button
            className={`sb-panel-tab ${activePanel === 'agent' ? 'active' : ''}`}
            style={activePanel === 'agent' ? { color: AGENTS[nbAgentId]?.color, borderBottomColor: AGENTS[nbAgentId]?.color } : {}}
            onClick={() => setActivePanel('agent')}
          >
            <span>{AGENTS[nbAgentId]?.icon ?? '◉'}</span>
          </button>
        </div>

        {/* ── EDIT CHARACTER ─────────────────────────────────────────────── */}
        {activePanel === 'edit' && editingChar && (
          <div className="sb-char-form">
            <div className="sb-form-header">
              <div className="sb-form-title">Edit Character</div>
              <button className="sb-form-close" onClick={() => setActivePanel('scene')} title="Close">✕</button>
            </div>

            <input className="sb-field" placeholder="Name"
              value={editingChar.name}
              onChange={e => setEditingChar(s => ({ ...s, name: e.target.value }))} />
            <input className="sb-field" placeholder="Role"
              value={editingChar.role ?? ''}
              onChange={e => setEditingChar(s => ({ ...s, role: e.target.value }))} />
            <input className="sb-field" placeholder="Epithet"
              value={editingChar.epithet ?? ''}
              onChange={e => setEditingChar(s => ({ ...s, epithet: e.target.value }))} />

            <div className="sb-field-label">Mana Core</div>
            <CoreBuilder
              primary={editingChar.primaryElement ?? ''}
              secondary={editingChar.secondaryElement ?? ''}
              state={editingChar.coreState ?? ''}
              alignment={editingChar.coreAlignment ?? ''}
              onChange={handleEditCoreChange}
            />
            {editingChar.coreType && (
              <div className="sb-core-preview">{editingChar.coreType}</div>
            )}

            <select className="sb-field" value={editingChar.status ?? 'active'}
              onChange={e => setEditingChar(s => ({ ...s, status: e.target.value }))}>
              <option value="active">Active</option>
              <option value="immortal">Immortal</option>
              <option value="deceased">Deceased</option>
              <option value="sealed">Sealed</option>
              <option value="survived-into-exile">Survived / Exile</option>
              <option value="unknown">Unknown</option>
            </select>

            <input className="sb-field" placeholder="Location"
              value={editingChar.location ?? ''}
              onChange={e => setEditingChar(s => ({ ...s, location: e.target.value }))} />
            <textarea className="sb-field sb-field-ta" placeholder="Description" rows={5}
              value={editingChar.description ?? ''}
              onChange={e => setEditingChar(s => ({ ...s, description: e.target.value }))} />
            <textarea className="sb-field sb-field-ta" placeholder="Notes" rows={3}
              value={editingChar.notes ?? ''}
              onChange={e => setEditingChar(s => ({ ...s, notes: e.target.value }))} />

            <div className="sb-form-actions">
              <button className="sb-btn-primary" onClick={handleSaveEditingChar}>Save</button>
              <button className="sb-btn-ghost" onClick={() => { setEditingChar(null); setActivePanel('scene') }}>Cancel</button>
            </div>
          </div>
        )}

        {/* ── NEW CHARACTER ──────────────────────────────────────────────── */}
        {activePanel === 'new' && (
          <div className="sb-char-form">
            <div className="sb-form-header">
              <div className="sb-form-title">New Character</div>
            </div>

            <input className="sb-field" placeholder="Name *"
              value={newChar.name}
              onChange={e => setNewChar(s => ({ ...s, name: e.target.value }))} />
            <input className="sb-field" placeholder="Role"
              value={newChar.role}
              onChange={e => setNewChar(s => ({ ...s, role: e.target.value }))} />
            <input className="sb-field" placeholder="Epithet"
              value={newChar.epithet}
              onChange={e => setNewChar(s => ({ ...s, epithet: e.target.value }))} />

            <div className="sb-field-label">Mana Core</div>
            <CoreBuilder
              primary={newChar.primaryElement}
              secondary={newChar.secondaryElement}
              state={newChar.coreState}
              alignment={newChar.coreAlignment}
              onChange={handleNewCharCoreChange}
            />
            {newChar.coreType && (
              <div className="sb-core-preview">{newChar.coreType}</div>
            )}

            <select className="sb-field" value={newChar.status}
              onChange={e => setNewChar(s => ({ ...s, status: e.target.value }))}>
              <option value="active">Active</option>
              <option value="immortal">Immortal</option>
              <option value="deceased">Deceased</option>
              <option value="sealed">Sealed</option>
              <option value="survived-into-exile">Survived / Exile</option>
              <option value="unknown">Unknown</option>
            </select>

            <input className="sb-field" placeholder="Location"
              value={newChar.location}
              onChange={e => setNewChar(s => ({ ...s, location: e.target.value }))} />
            <textarea className="sb-field sb-field-ta" placeholder="Description" rows={4}
              value={newChar.description}
              onChange={e => setNewChar(s => ({ ...s, description: e.target.value }))} />

            <div className="sb-form-actions">
              <button className="sb-btn-primary" onClick={handleCreateChar}>Create Character</button>
              <button className="sb-btn-ghost" onClick={() => setActivePanel('scene')}>Cancel</button>
            </div>
          </div>
        )}

        {/* ── ALL CHARACTERS ─────────────────────────────────────────────── */}
        {activePanel === 'all' && (
          <div className="sb-char-list">
            <div className="sb-panel-search">
              <input
                className="sb-search-input"
                placeholder="Search by name, role or core…"
                value={charSearch}
                onChange={e => setCharSearch(e.target.value)}
                autoFocus
              />
            </div>
            {filteredChars.length === 0 ? (
              <div className="sb-chars-hint">No characters match "{charSearch}".</div>
            ) : (
              filteredChars.map(char => (
                <CharCard key={char.id} char={char} onClick={openEditChar} />
              ))
            )}
          </div>
        )}

        {/* ── SCENE TAB ──────────────────────────────────────────────────── */}
        {activePanel === 'scene' && (
          <div className="sb-scene-chars">

            {/* Detected characters */}
            {detectedChars.length > 0 ? (
              <>
                <div className="sb-panel-section-title">
                  In this scene — {detectedChars.length}
                </div>
                {detectedChars.map(char => (
                  <CharCard key={char.id} char={char} onClick={openEditChar} />
                ))}
              </>
            ) : (
              <div className="sb-chars-hint">
                <p>Type a character name in the scene and they appear here automatically.</p>
              </div>
            )}

            {/* Smart name suggestions — potential new characters */}
            {potentialNames.length > 0 && (
              <div className="sb-potential-section">
                <div className="sb-panel-section-title sb-potential-title">
                  Possible new characters
                </div>
                <div className="sb-potential-chips">
                  {potentialNames.map(name => (
                    <button key={name} className="sb-potential-chip" onClick={() => handleQuickCreate(name)}>
                      + {name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick reference grid when scene is empty */}
            {detectedChars.length === 0 && potentialNames.length === 0 && (
              <>
                <div className="sb-panel-section-title" style={{ marginTop: '1.5rem' }}>
                  Quick Reference
                </div>
                <div className="sb-chip-grid">
                  {characters.slice(0, 18).map(c => (
                    <div key={c.id} className="sb-char-chip" onClick={() => openEditChar(c)} title={c.role}>
                      {c.name.split(' ')[0]}
                    </div>
                  ))}
                  {characters.length > 18 && (
                    <div className="sb-char-chip sb-chip-more" onClick={() => setActivePanel('all')}>
                      +{characters.length - 18}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── AGENT PANEL ────────────────────────────────────────────────── */}
        {activePanel === 'agent' && (
          <div className="nb-chat">
            {/* Agent header */}
            <div className="nb-chat-header" style={{ borderColor: AGENTS[nbAgentId]?.color }}>
              <span className="nb-chat-icon" style={{ color: AGENTS[nbAgentId]?.color }}>
                {nbToolAgent ? AGENTS[nbToolAgent]?.icon : AGENTS[nbAgentId]?.icon}
              </span>
              <div className="nb-chat-agent-info">
                <span className="nb-chat-agent-name">{AGENTS[nbAgentId]?.name}</span>
                {nbToolAgent && nbToolAgent !== nbAgentId && (
                  <span className="nb-chat-delegating">→ {AGENTS[nbToolAgent]?.name}</span>
                )}
                <span className="nb-chat-agent-role">{AGENTS[nbAgentId]?.title}</span>
              </div>
              {nbMessages.length > 0 && (
                <button
                  className="nb-chat-clear"
                  onClick={() => { setNbMessages([]); setNbError(null) }}
                  title="Clear chat"
                >×</button>
              )}
            </div>

            {/* Messages */}
            <div className="nb-chat-msgs">
              {nbMessages.length === 0 && (
                <div className="nb-chat-empty">
                  <p>{AGENTS[nbAgentId]?.intro}</p>
                  <div className="nb-quick-hints">
                    {(nbQuickHints[nbAgentId] ?? []).map((h, i) => (
                      <button
                        key={i}
                        className="nb-hint-btn"
                        onClick={() => nbSend(h)}
                        disabled={nbStreaming}
                      >{h}</button>
                    ))}
                  </div>
                </div>
              )}
              {nbMessages.map((m, i) => (
                <div key={m.id ?? i} className={`nb-msg ${m.role}`}>
                  {m.role === 'assistant' && (
                    <span className="nb-msg-icon" style={{ color: AGENTS[m.agentId ?? nbAgentId]?.color }}>
                      {AGENTS[m.agentId ?? nbAgentId]?.icon}
                    </span>
                  )}
                  <div className="nb-msg-body">
                    {m.streaming && !m.text
                      ? <span className="typing"><span /><span /><span /></span>
                      : m.text}
                    {m.streaming && m.text && <span className="stream-cursor" />}
                    {m.toolCalls?.length > 0 && (
                      <div className="nb-tool-calls">
                        {m.toolCalls.map((tc, j) => (
                          <div key={j} className={`nb-tool-call ${tc.status}`}>
                            <span>{tc.status === 'done' ? '✓' : '⟳'}</span>
                            <span className="nb-tool-name">{formatNbTool(tc.name)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {nbError && <div className="nb-chat-error">{nbError}</div>}
              <div ref={nbBottomRef} />
            </div>

            {/* Input */}
            <div className="nb-chat-input-row">
              <input
                ref={nbInputRef}
                className="nb-chat-input"
                value={nbInput}
                onChange={e => setNbInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !nbStreaming) nbSend() }}
                placeholder={`Ask ${AGENTS[nbAgentId]?.name}…`}
                disabled={nbStreaming}
              />
              <button
                className="nb-chat-send"
                onClick={() => nbSend()}
                disabled={nbStreaming || !nbInput.trim()}
              >
                {nbStreaming ? '…' : '→'}
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
