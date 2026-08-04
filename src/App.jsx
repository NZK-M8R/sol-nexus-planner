import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import { CharacterStore } from './api/characterStore'
import Dashboard from './components/Dashboard'
import CharacterGraph from './components/CharacterGraph'
import FamilyTree from './components/FamilyTree'
import Timeline from './components/Timeline'
import LoreBible from './components/LoreBible'
import ChatPanel from './components/ChatPanel'
import Library from './components/Library'
import GrandTable from './components/GrandTable'
import KazemiTab from './components/KazemiTab'
import WorldMap from './components/WorldMap'
import MagicSystem from './components/MagicSystem'
import StoryBook from './components/StoryBook'
import { defaultCharacters, defaultRelationships } from './data/characters'
import { defaultStories } from './data/stories'
import { defaultWeapons } from './data/weapons'
import { defaultBeasts } from './data/beasts'
import { defaultClans } from './data/clans'
import { defaultLoreSections } from './data/lore'
import { defaultTimelineEras } from './data/timeline'
import {
  loadNotes, saveNote,
  loadLoreEdits, saveLoreEdit,
  loadCustomEvents, saveCustomEvent,
  loadCharacters, saveCharacters,
  loadRelationships, saveRelationships,
  loadStories, saveStories,
  loadWeapons, saveWeapons,
  loadBeasts, saveBeasts,
  loadClans, saveClans,
} from './api/storage'

// ── Tiny localStorage fallback for data that isn't in Supabase yet ──
const local = {
  get: (k, fb) => { try { const v = localStorage.getItem(`sol-nexus::${k}`); return v ? JSON.parse(v) : fb } catch { return fb } },
}

const NAV_ITEMS = [
  { id: 'dashboard',    label: 'Dashboard',    icon: '◈' },
  { id: 'characters',   label: 'Characters',   icon: '◉' },
  { id: 'grand-table',  label: 'Grand Table',  icon: '⊛' },
  { id: 'library',      label: 'Library',      icon: '⚔' },
  { id: 'families',     label: 'Family Trees', icon: '⊞' },
  { id: 'magic',        label: 'Magic System', icon: '✦' },
  { id: 'worldmap',     label: 'World Map',    icon: '◎' },
  { id: 'timeline',     label: 'Timeline',     icon: '⊡' },
  { id: 'lore',         label: 'Lore Bible',   icon: '⊟' },
  { id: 'chat',         label: 'AI Chat',      icon: '⊕' },
  { id: 'kazemi',       label: 'Kazemi',       icon: '∞' },
]

export default function App() {
  const [view,           setView]           = useState('dashboard')
  const [selectedCharId, setSelectedCharId] = useState(null)
  const [showSecrets,    setShowSecrets]    = useState(false)
  const [sidebarOpen,    setSidebarOpen]    = useState(true)
  const [notebookOpen,   setNotebookOpen]   = useState(true)
  const [notebookWidth,  setNotebookWidth]  = useState(38)
  const [isResizing,     setIsResizing]     = useState(false)
  const workspaceRef = useRef(null)

  // Editable world data — persisted to localStorage
  // Merge stored data with defaults: add missing entries, refresh entries where source _dataRev is higher
  const [characters, setCharacters] = useState(() => {
    const raw = loadCharacters()
    // Migrate old ID 'shadow' → 'irane_e_osiro'
    const stored = raw ? raw.map(c => c.id === 'shadow' ? { ...c, id: 'irane_e_osiro' } : c) : null
    if (!stored) return defaultCharacters
    const merged = stored.map(c => {
      const src = defaultCharacters.find(d => d.id === c.id)
      if (src?._dataRev && (!c._dataRev || c._dataRev < src._dataRev)) {
        return { ...src, notes: c.notes || '' }
      }
      return c
    })
    const storedIds = new Set(stored.map(c => c.id))
    const fresh = defaultCharacters.filter(c => !storedIds.has(c.id))
    return fresh.length ? [...merged, ...fresh] : merged
  })
  const [relationships, setRelationships] = useState(() => {
    const stored = loadRelationships()
    if (!stored) return defaultRelationships
    const storedIds = new Set(stored.map(r => r.id))
    const fresh = defaultRelationships.filter(r => !storedIds.has(r.id))
    return fresh.length ? [...stored, ...fresh] : stored
  })
  const [stories,       setStories]       = useState(() => loadStories()       ?? defaultStories)
  const [weapons,       setWeapons]       = useState(() => loadWeapons()       ?? defaultWeapons)
  const [beasts,        setBeasts]        = useState(() => loadBeasts()        ?? defaultBeasts)
  const [clans,         setClans]         = useState(() => loadClans()         ?? defaultClans)

  // Story data — initially from localStorage cache, synced from Supabase on mount
  const [characterNotes, setCharacterNotes] = useState(() => local.get('char-notes', {}))
  const [loreEdits,      setLoreEdits]      = useState(() => local.get('lore-edits', {}))
  const [timelineEras,   setTimelineEras]   = useState(() => {
    const saved = local.get('custom-events', {})
    return defaultTimelineEras.map(era => ({
      ...era,
      events: [...era.events, ...(saved[era.id] || [])],
    }))
  })

  // Sync from Supabase on first load (falls back gracefully if not configured)
  useEffect(() => {
    Promise.all([loadNotes(), loadLoreEdits(), loadCustomEvents()])
      .then(([notes, edits, customEventsData]) => {
        setCharacterNotes(notes)
        setLoreEdits(edits)
        if (Object.keys(customEventsData).length > 0) {
          setTimelineEras(
            defaultTimelineEras.map(era => ({
              ...era,
              events: [...era.events, ...(customEventsData[era.id] || [])],
            }))
          )
        }
      })
      .catch(e => console.warn('Cloud sync on load failed (local cache used):', e))
  }, [])

  // CharacterStore — O(1) lookups, importance heap, recent stack, adjacency graph
  const charStore = useMemo(
    () => new CharacterStore(characters, relationships),
    [characters, relationships]
  )

  const selectedChar = charStore.get(selectedCharId) || null

  const handleSelectChar = useCallback((charOrNull) => {
    if (!charOrNull) { setSelectedCharId(null); return }
    const id = typeof charOrNull === 'string' ? charOrNull : charOrNull.id
    setSelectedCharId(id)
  }, [characters])

  const handleSaveCharacter = useCallback((updatedChar) => {
    const exists = characters.some(c => c.id === updatedChar.id)
    const updated = exists
      ? characters.map(c => c.id === updatedChar.id ? updatedChar : c)
      : [...characters, updatedChar]
    setCharacters(updated)
    saveCharacters(updated)
  }, [characters])

  const handleSaveRelationships = useCallback((rels) => {
    setRelationships(rels)
    saveRelationships(rels)
  }, [])

  const handleSaveStories = useCallback((updated) => {
    setStories(updated)
    saveStories(updated)
  }, [])

  const handleSaveWeapons = useCallback((updated) => {
    setWeapons(updated)
    saveWeapons(updated)
  }, [])

  const handleSaveBeasts = useCallback((updated) => {
    setBeasts(updated)
    saveBeasts(updated)
  }, [])

  const handleSaveClans = useCallback((updated) => {
    setClans(updated)
    saveClans(updated)
  }, [])

  const handleSaveNote = useCallback((charId, note) => {
    setCharacterNotes(saveNote(charId, note))
  }, [])

  const handleSaveLoreEdit = useCallback((sId, ssId, content) => {
    const key = `${sId}::${ssId}`
    setLoreEdits(saveLoreEdit(key, content))
  }, [])

  const handleAddEvent = useCallback((eraId, event) => {
    saveCustomEvent(eraId, event)
    setTimelineEras(prev => prev.map(era =>
      era.id === eraId ? { ...era, events: [...era.events, event] } : era
    ))
  }, [])

  const handleNavigate = useCallback((viewId, charId) => {
    setView(viewId)
    if (charId) setSelectedCharId(charId)
  }, [])

  // ── Resize handle drag — notebook is on the RIGHT, so width = distance from right ──
  const handleResizeStart = useCallback((e) => {
    e.preventDefault()
    setIsResizing(true)
    const workspace = workspaceRef.current
    if (!workspace) return

    const onMouseMove = (mv) => {
      const rect = workspace.getBoundingClientRect()
      const newWidth = (1 - (mv.clientX - rect.left) / rect.width) * 100
      setNotebookWidth(Math.max(15, Math.min(75, newWidth)))
    }

    const onMouseUp = () => {
      setIsResizing(false)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }, [])

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-logo" onClick={() => setSidebarOpen(v => !v)}>
          <span className="logo-icon">◈</span>
          {sidebarOpen && <span className="logo-text">SOL-NEXUS</span>}
        </div>
        <nav className="sidebar-nav">
          {/* Notebook toggle — always first; toggling shows/hides the left pane */}
          <button
            className={`nav-item${notebookOpen ? ' active' : ''}`}
            onClick={() => setNotebookOpen(v => !v)}
            title="Notebook"
          >
            <span className="nav-icon">✎</span>
            {sidebarOpen && <span className="nav-label">Notebook</span>}
          </button>

          {/* All other items drive the right content pane */}
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-item ${view === item.id ? 'active' : ''}`}
              onClick={() => setView(item.id)}
              title={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>
        {sidebarOpen && (
          <div className="sidebar-footer">
            <div className="secrets-toggle">
              <label>
                <input
                  type="checkbox"
                  checked={showSecrets}
                  onChange={e => setShowSecrets(e.target.checked)}
                />
                <span>Show Secrets</span>
              </label>
            </div>
            <div className="data-info">
              {characters.length} characters · {relationships.length} links
            </div>
          </div>
        )}
      </aside>

      <div
        className={`workspace${isResizing ? ' workspace--resizing' : ''}`}
        ref={workspaceRef}
      >
        {/* ── Left pane: App reference content ───────────────────────── */}
        <div className="content-pane">
          {view === 'dashboard' && (
            <Dashboard
              characters={characters}
              relationships={relationships}
              timelineEras={timelineEras}
              onNavigate={handleNavigate}
            />
          )}
          {view === 'characters' && (
            <CharacterGraph
              characters={characters}
              relationships={relationships}
              stories={stories}
              weapons={weapons}
              beasts={beasts}
              showSecrets={showSecrets}
              onToggleSecrets={() => setShowSecrets(v => !v)}
              onSaveCharacter={handleSaveCharacter}
              onSaveRelationships={handleSaveRelationships}
              onSaveStories={handleSaveStories}
            />
          )}
          {view === 'grand-table' && (
            <GrandTable
              weapons={weapons}
              clans={clans}
              characters={characters}
              onSaveClans={handleSaveClans}
            />
          )}
          {view === 'library' && (
            <Library
              weapons={weapons}
              beasts={beasts}
              characters={characters}
              onSaveWeapons={handleSaveWeapons}
              onSaveBeasts={handleSaveBeasts}
            />
          )}
          {view === 'families' && (
            <FamilyTree
              characters={characters}
              relationships={relationships}
              showSecrets={showSecrets}
              selectedChar={selectedChar}
              onSelectChar={handleSelectChar}
              characterNotes={characterNotes}
              onSaveNote={handleSaveNote}
            />
          )}
          {view === 'magic' && (
            <MagicSystem />
          )}
          {view === 'worldmap' && (
            <WorldMap characters={characters} />
          )}
          {view === 'timeline' && (
            <Timeline
              eras={timelineEras}
              characters={characters}
              onAddEvent={handleAddEvent}
              onSelectChar={c => { handleSelectChar(c); setView('characters') }}
            />
          )}
          {view === 'lore' && (
            <LoreBible
              sections={defaultLoreSections}
              loreEdits={loreEdits}
              onSaveEdit={handleSaveLoreEdit}
            />
          )}
          {view === 'chat' && (
            <ChatPanel
              characters={characters}
              charStore={charStore}
              relationships={relationships}
              timelineEras={timelineEras}
              onSaveCharacter={handleSaveCharacter}
              weapons={weapons}
              beasts={beasts}
            />
          )}

          {view === 'kazemi' && (
            <KazemiTab />
          )}

          {/* Floating tab — appears at right edge when notebook is collapsed */}
          {!notebookOpen && (
            <button
              className="notebook-open-tab"
              onClick={() => setNotebookOpen(true)}
              title="Open Notebook"
            >
              ✎
            </button>
          )}
        </div>

        {/* ── Drag-to-resize handle ───────────────────────────────────── */}
        {notebookOpen && (
          <div
            className={`resize-handle${isResizing ? ' resize-handle--active' : ''}`}
            onMouseDown={handleResizeStart}
          />
        )}

        {/* ── Right pane: Notebook writing space ─────────────────────── */}
        <div
          className={`notebook-pane${notebookOpen ? '' : ' notebook-pane--collapsed'}`}
          style={notebookOpen ? { width: `${notebookWidth}%` } : {}}
        >
          <StoryBook
            characters={characters}
            charStore={charStore}
            onSaveCharacter={handleSaveCharacter}
            weapons={weapons}
            beasts={beasts}
          />
        </div>
      </div>
    </div>
  )
}
