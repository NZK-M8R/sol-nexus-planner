import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { defaultStoryChapters } from '../data/story-chapters'

// ── Persistence ────────────────────────────────────────────────────────────
const STORY_KEY = 'sol-nexus::story-book'

function loadStory() {
  try { const v = localStorage.getItem(STORY_KEY); return v ? JSON.parse(v) : null } catch { return null }
}
function persistStory(parts) {
  try { localStorage.setItem(STORY_KEY, JSON.stringify(parts)) } catch {}
}

// ── Tiny ID generator (no Date.now / Math.random in workflow scripts, but fine in components) ──
const uid = () => `s${Math.random().toString(36).slice(2, 9)}`

// ── Character detection ────────────────────────────────────────────────────
function detectCharsInText(text, characters) {
  if (!text || !characters?.length) return []
  const found = new Set()
  for (const char of characters) {
    const parts = char.name.split(' ').filter(p => p.length > 2)
    const terms = [char.name, ...parts]
    for (const term of terms) {
      if (text.includes(term)) { found.add(char.id); break }
    }
  }
  return characters.filter(c => found.has(c.id))
}

// ── Blank character template ───────────────────────────────────────────────
const blankChar = () => ({
  id: '', name: '', house: 'none', role: '', epithet: '', coreType: '',
  status: 'active', location: '', importance: 2, description: '',
  beast: {}, weapon: {}, gates: [], psyche: [], notes: '', _dataRev: 1,
})

export default function StoryBook({ characters = [], onSaveCharacter }) {
  const [parts, setParts]           = useState(() => loadStory() ?? defaultStoryChapters)
  const [partId, setPartId]         = useState(null)
  const [chapterId, setChapterId]   = useState(null)
  const [sceneId, setSceneId]       = useState(null)
  const [editingChar, setEditingChar]     = useState(null) // full char being edited
  const [showNewChar, setShowNewChar]     = useState(false)
  const [newChar, setNewChar]             = useState(blankChar)
  const [showAllChars, setShowAllChars]   = useState(false)
  const [saveStatus, setSaveStatus]       = useState('saved') // 'saved' | 'saving' | 'unsaved'
  const [expandedParts, setExpandedParts] = useState({})
  const saveTimer = useRef(null)
  const textareaRef = useRef(null)

  // ── Init default navigation ────────────────────────────────────────────
  useEffect(() => {
    if (!partId && parts.length) {
      const p = parts[0]
      const c = p.chapters?.[0]
      const s = c?.scenes?.[0]
      setPartId(p.id)
      setChapterId(c?.id ?? null)
      setSceneId(s?.id ?? null)
      setExpandedParts({ [p.id]: true })
    }
  }, [parts, partId])

  // ── Resolve current nodes ─────────────────────────────────────────────
  const currentPart    = parts.find(p => p.id === partId) ?? parts[0]
  const currentChapter = currentPart?.chapters?.find(c => c.id === chapterId) ?? currentPart?.chapters?.[0]
  const currentScene   = currentChapter?.scenes?.find(s => s.id === sceneId) ?? currentChapter?.scenes?.[0]

  // ── Detected characters ───────────────────────────────────────────────
  const detectedChars = useMemo(
    () => detectCharsInText(currentScene?.content ?? '', characters),
    [currentScene?.content, characters]
  )

  // ── Update helpers ─────────────────────────────────────────────────────
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

  // ── Navigation ────────────────────────────────────────────────────────
  const navTo = useCallback((pId, cId, sId) => {
    setPartId(pId); setChapterId(cId); setSceneId(sId)
    setEditingChar(null); setShowNewChar(false)
    setExpandedParts(prev => ({ ...prev, [pId]: true }))
  }, [])

  const togglePart = useCallback((pId) => {
    setExpandedParts(prev => ({ ...prev, [pId]: !prev[pId] }))
  }, [])

  // ── Add part ──────────────────────────────────────────────────────────
  const addPart = useCallback(() => {
    const firstScene = { id: uid(), title: 'Opening', content: '' }
    const firstChap  = { id: uid(), title: 'Chapter 1', scenes: [firstScene] }
    const np = { id: uid(), type: 'part', title: `Part ${parts.length + 1}: New Part`, chapters: [firstChap] }
    setParts(prev => { const next = [...prev, np]; persistStory(next); return next })
    navTo(np.id, firstChap.id, firstScene.id)
  }, [parts.length, navTo])

  // ── Add chapter to current part ───────────────────────────────────────
  const addChapter = useCallback(() => {
    const firstScene = { id: uid(), title: 'Opening', content: '' }
    const nc = { id: uid(), title: 'New Chapter', scenes: [firstScene] }
    setParts(prev => {
      const next = prev.map(p => p.id !== partId ? p : { ...p, chapters: [...p.chapters, nc] })
      persistStory(next); return next
    })
    navTo(partId, nc.id, firstScene.id)
  }, [partId, navTo])

  // ── Add scene to current chapter ──────────────────────────────────────
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

  // ── Character editing ──────────────────────────────────────────────────
  const openEditChar = useCallback((char) => {
    setEditingChar({ ...char })
    setShowNewChar(false)
  }, [])

  const handleSaveEditingChar = useCallback(() => {
    if (!editingChar) return
    onSaveCharacter(editingChar)
    setEditingChar(null)
  }, [editingChar, onSaveCharacter])

  // ── New character creation ─────────────────────────────────────────────
  const handleCreateChar = useCallback(() => {
    if (!newChar.name.trim()) return
    const id = newChar.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
    onSaveCharacter({ ...newChar, id })
    setNewChar(blankChar())
    setShowNewChar(false)
  }, [newChar, onSaveCharacter])

  // ── Word count ─────────────────────────────────────────────────────────
  const wordCount = useMemo(() => {
    const t = currentScene?.content?.trim() ?? ''
    return t ? t.split(/\s+/).length : 0
  }, [currentScene?.content])

  // ── Total story word count ─────────────────────────────────────────────
  const totalWords = useMemo(() => {
    let count = 0
    for (const p of parts)
      for (const c of p.chapters ?? [])
        for (const s of c.scenes ?? [])
          if (s.content?.trim()) count += s.content.trim().split(/\s+/).length
    return count
  }, [parts])

  return (
    <div className="storybook">

      {/* ── LEFT NAV ─────────────────────────────────────────────────────── */}
      <aside className="sb-nav">
        <div className="sb-nav-top">
          <span className="sb-nav-title">NOTEBOOK</span>
          <span className="sb-total-words">{totalWords.toLocaleString()} words</span>
        </div>

        <div className="sb-tree">
          {parts.map(part => {
            const isExpanded = expandedParts[part.id]
            const isActivePart = partId === part.id
            return (
              <div key={part.id} className="sb-part-block">
                <div
                  className={`sb-part-label ${isActivePart ? 'active' : ''}`}
                  onClick={() => togglePart(part.id)}
                >
                  <span className="sb-part-arrow">{isExpanded ? '▾' : '▸'}</span>
                  <span className="sb-part-text">{part.title}</span>
                </div>

                {isExpanded && (part.chapters ?? []).map(ch => {
                  const isActiveCh = chapterId === ch.id
                  return (
                    <div key={ch.id} className="sb-chapter-block">
                      <div
                        className={`sb-chapter-label ${isActiveCh ? 'active' : ''}`}
                        onClick={() => navTo(part.id, ch.id, ch.scenes?.[0]?.id ?? null)}
                      >
                        {ch.title}
                      </div>
                      {isActiveCh && (ch.scenes ?? []).map(sc => (
                        <div
                          key={sc.id}
                          className={`sb-scene-label ${sceneId === sc.id ? 'active' : ''}`}
                          onClick={() => navTo(part.id, ch.id, sc.id)}
                        >
                          {sc.title}
                        </div>
                      ))}
                    </div>
                  )
                })}

                {isExpanded && isActivePart && (
                  <button className="sb-add-chapter-btn" onClick={addChapter}>
                    + Chapter
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <button className="sb-add-part-btn" onClick={addPart}>+ New Part</button>
      </aside>

      {/* ── CENTER CANVAS ─────────────────────────────────────────────────── */}
      <main className="sb-canvas">
        {currentScene ? (
          <>
            <div className="sb-canvas-header">
              <div className="sb-canvas-breadcrumb">
                {currentPart?.title} · {currentChapter?.title}
              </div>
              <input
                className="sb-scene-title-input"
                value={currentScene.title}
                onChange={handleSceneTitleChange}
                placeholder="Scene title"
              />
              <div className="sb-canvas-meta">
                <span className={`sb-save-dot ${saveStatus}`} title={saveStatus} />
                <span className="sb-word-count">{wordCount.toLocaleString()} words</span>
                <button className="sb-add-scene-btn" onClick={addScene}>+ Scene</button>
              </div>
            </div>

            <textarea
              ref={textareaRef}
              className="sb-textarea"
              value={currentScene.content}
              onChange={handleContentChange}
              placeholder={`Begin writing "${currentScene.title}"…\n\nCharacter names typed here will be detected automatically in the panel on the right.`}
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
      <aside className="sb-panel">
        <div className="sb-panel-tabs">
          <button
            className={`sb-panel-tab ${!showNewChar && !editingChar && !showAllChars ? 'active' : ''}`}
            onClick={() => { setShowNewChar(false); setEditingChar(null); setShowAllChars(false) }}
          >Scene</button>
          <button
            className={`sb-panel-tab ${showAllChars ? 'active' : ''}`}
            onClick={() => { setShowAllChars(true); setShowNewChar(false); setEditingChar(null) }}
          >All</button>
          <button
            className={`sb-panel-tab ${showNewChar ? 'active' : ''}`}
            onClick={() => { setShowNewChar(true); setEditingChar(null); setShowAllChars(false) }}
          >+ New</button>
        </div>

        {/* ── NEW CHARACTER FORM ─────────────────────────────────────────── */}
        {showNewChar && (
          <div className="sb-char-form">
            <div className="sb-form-title">New Character</div>
            <input className="sb-field" placeholder="Name *"
              value={newChar.name} onChange={e => setNewChar(s => ({ ...s, name: e.target.value }))} />
            <input className="sb-field" placeholder="Role"
              value={newChar.role} onChange={e => setNewChar(s => ({ ...s, role: e.target.value }))} />
            <input className="sb-field" placeholder="Epithet"
              value={newChar.epithet} onChange={e => setNewChar(s => ({ ...s, epithet: e.target.value }))} />
            <input className="sb-field" placeholder="Core Type / Element"
              value={newChar.coreType} onChange={e => setNewChar(s => ({ ...s, coreType: e.target.value }))} />
            <input className="sb-field" placeholder="Status (active / deceased / unknown)"
              value={newChar.status} onChange={e => setNewChar(s => ({ ...s, status: e.target.value }))} />
            <input className="sb-field" placeholder="Location"
              value={newChar.location} onChange={e => setNewChar(s => ({ ...s, location: e.target.value }))} />
            <textarea className="sb-field sb-field-ta" placeholder="Description" rows={5}
              value={newChar.description} onChange={e => setNewChar(s => ({ ...s, description: e.target.value }))} />
            <div className="sb-form-actions">
              <button className="sb-btn-primary" onClick={handleCreateChar}>Create Character</button>
              <button className="sb-btn-ghost" onClick={() => setShowNewChar(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* ── EDITING EXISTING CHARACTER ─────────────────────────────────── */}
        {editingChar && !showNewChar && (
          <div className="sb-char-form">
            <div className="sb-form-title">Edit Character</div>
            <input className="sb-field" placeholder="Name"
              value={editingChar.name} onChange={e => setEditingChar(s => ({ ...s, name: e.target.value }))} />
            <input className="sb-field" placeholder="Role"
              value={editingChar.role ?? ''} onChange={e => setEditingChar(s => ({ ...s, role: e.target.value }))} />
            <input className="sb-field" placeholder="Epithet"
              value={editingChar.epithet ?? ''} onChange={e => setEditingChar(s => ({ ...s, epithet: e.target.value }))} />
            <input className="sb-field" placeholder="Core Type / Element"
              value={editingChar.coreType ?? ''} onChange={e => setEditingChar(s => ({ ...s, coreType: e.target.value }))} />
            <input className="sb-field" placeholder="Status"
              value={editingChar.status ?? ''} onChange={e => setEditingChar(s => ({ ...s, status: e.target.value }))} />
            <input className="sb-field" placeholder="Location"
              value={editingChar.location ?? ''} onChange={e => setEditingChar(s => ({ ...s, location: e.target.value }))} />
            <textarea className="sb-field sb-field-ta" placeholder="Description" rows={6}
              value={editingChar.description ?? ''} onChange={e => setEditingChar(s => ({ ...s, description: e.target.value }))} />
            <textarea className="sb-field sb-field-ta" placeholder="Notes" rows={3}
              value={editingChar.notes ?? ''} onChange={e => setEditingChar(s => ({ ...s, notes: e.target.value }))} />
            <div className="sb-form-actions">
              <button className="sb-btn-primary" onClick={handleSaveEditingChar}>Save</button>
              <button className="sb-btn-ghost" onClick={() => setEditingChar(null)}>Cancel</button>
            </div>
          </div>
        )}

        {/* ── ALL CHARACTERS LIST ────────────────────────────────────────── */}
        {showAllChars && !showNewChar && !editingChar && (
          <div className="sb-char-list">
            <div className="sb-panel-section-title">All Characters ({characters.length})</div>
            {characters.map(char => (
              <div key={char.id} className="sb-char-card" onClick={() => openEditChar(char)}>
                <div className="sb-char-name">{char.name}</div>
                <div className="sb-char-role">{char.role?.split('·')[0].trim()}</div>
                {char.coreType && <div className="sb-char-core">{char.coreType}</div>}
                <div className={`sb-char-status sb-status-${char.status}`}>{char.status}</div>
              </div>
            ))}
          </div>
        )}

        {/* ── SCENE CHARACTERS (detected) ───────────────────────────────── */}
        {!showNewChar && !editingChar && !showAllChars && (
          <div className="sb-scene-chars">
            <div className="sb-panel-section-title">
              In this scene{detectedChars.length > 0 ? ` — ${detectedChars.length}` : ''}
            </div>
            {detectedChars.length > 0 ? (
              detectedChars.map(char => (
                <div key={char.id} className="sb-char-card" onClick={() => openEditChar(char)}>
                  <div className="sb-char-name">{char.name}</div>
                  <div className="sb-char-role">{char.role?.split('·')[0].trim()}</div>
                  {char.coreType && <div className="sb-char-core">{char.coreType}</div>}
                </div>
              ))
            ) : (
              <div className="sb-chars-hint">
                <p>Type a character's name in the scene and they appear here automatically.</p>
                <p>Click any character to edit their data directly from the notebook.</p>
              </div>
            )}

            {detectedChars.length === 0 && (
              <>
                <div className="sb-panel-section-title" style={{ marginTop: '1.5rem' }}>Quick Reference</div>
                <div className="sb-chip-grid">
                  {characters.slice(0, 20).map(c => (
                    <div key={c.id} className="sb-char-chip" onClick={() => openEditChar(c)} title={c.role}>
                      {c.name.split(' ')[0]}
                    </div>
                  ))}
                  {characters.length > 20 && (
                    <div className="sb-char-chip sb-chip-more" onClick={() => setShowAllChars(true)}>
                      +{characters.length - 20} more
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </aside>
    </div>
  )
}
