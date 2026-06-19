import { useState, useMemo } from 'react'

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function renderInline(text, highlight) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  const bolded = parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i}>{p}</strong> : p
  )
  if (!highlight || highlight.length < 2) return bolded

  return bolded.map((node, ni) => {
    if (typeof node !== 'string') return node
    const regex = new RegExp(`(${escapeRegex(highlight)})`, 'gi')
    const sub = node.split(regex)
    if (sub.length === 1) return node
    return sub.map((s, si) =>
      regex.test(s) ? <mark key={`${ni}-${si}`} className="hl">{s}</mark> : s
    )
  })
}

function renderContent(content, highlight) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('# '))    return <h1 key={i}>{renderInline(line.slice(2), highlight)}</h1>
    if (line.startsWith('## '))   return <h2 key={i}>{renderInline(line.slice(3), highlight)}</h2>
    if (line.startsWith('### '))  return <h3 key={i}>{renderInline(line.slice(4), highlight)}</h3>
    if (line.startsWith('> '))    return <blockquote key={i}>{renderInline(line.slice(2), highlight)}</blockquote>
    if (line.match(/^[-*] /))     return <div key={i} className="md-li">• {renderInline(line.slice(2), highlight)}</div>
    if (/^\d+\. /.test(line))     return <div key={i} className="md-li">{renderInline(line, highlight)}</div>
    if (line.trim() === '')       return <div key={i} className="md-spacer" />
    return <p key={i}>{renderInline(line, highlight)}</p>
  })
}

export default function LoreBible({ sections, loreEdits, onSaveEdit }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '')
  const [activeSubsection, setActiveSubsection] = useState(sections[0]?.subsections[0]?.id || '')
  const [editingKey, setEditingKey] = useState(null)
  const [editContent, setEditContent] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const getContent = (sId, ssId) => {
    const key = `${sId}::${ssId}`
    if (loreEdits[key] !== undefined) return loreEdits[key]
    return sections.find(s => s.id === sId)
      ?.subsections.find(s => s.id === ssId)
      ?.content || ''
  }

  const currentSection = sections.find(s => s.id === activeSection)
  const currentSub = currentSection?.subsections.find(s => s.id === activeSubsection)
  const currentKey = `${activeSection}::${activeSubsection}`
  const isEditing = editingKey === currentKey
  const isEdited = loreEdits[currentKey] !== undefined

  const startEdit = () => {
    setEditContent(getContent(activeSection, activeSubsection))
    setEditingKey(currentKey)
  }

  const saveEdit = () => {
    onSaveEdit(activeSection, activeSubsection, editContent)
    setEditingKey(null)
  }

  const cancelEdit = () => setEditingKey(null)

  const resetEdit = () => {
    onSaveEdit(activeSection, activeSubsection, undefined)
  }

  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return []
    const q = searchQuery.toLowerCase()
    const results = []
    sections.forEach(s => {
      s.subsections.forEach(ss => {
        const content = getContent(s.id, ss.id)
        if (
          ss.title.toLowerCase().includes(q) ||
          content.toLowerCase().includes(q) ||
          (ss.tags || []).some(t => t.includes(q))
        ) {
          results.push({ sId: s.id, ssId: ss.id, sTitle: s.title, ssTitle: ss.title })
        }
      })
    })
    return results
  }, [searchQuery, sections, loreEdits])

  const navigateTo = (sId, ssId) => {
    setActiveSection(sId)
    setActiveSubsection(ssId)
    setSearchQuery('')
  }

  return (
    <div className="lore-view">
      <nav className={`lore-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <button
          className="lore-sidebar-toggle"
          onClick={() => setSidebarCollapsed(v => !v)}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? '▶' : '◀'}
        </button>

        {!sidebarCollapsed && (
          <>
            <div className="lore-search-wrap">
              <input
                className="search-input"
                type="text"
                placeholder="Search lore..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {searchQuery.length >= 2 && (
              <div className="search-results-panel">
                <div className="sr-title">{searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</div>
                {searchResults.map((r, i) => (
                  <button key={i} className="sr-item" onClick={() => navigateTo(r.sId, r.ssId)}>
                    <span className="sr-sub">{r.ssTitle}</span>
                    <span className="sr-section">{r.sTitle}</span>
                  </button>
                ))}
                {searchResults.length === 0 && (
                  <div className="sr-empty">No matches found</div>
                )}
              </div>
            )}

            {sections.map(s => (
              <div key={s.id} className="lore-nav-section">
                <button
                  className={`lore-nav-title ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => { setActiveSection(s.id); setActiveSubsection(s.subsections[0]?.id) }}
                >
                  <span>{s.icon}</span> {s.title}
                </button>
                {activeSection === s.id && (
                  <div className="lore-nav-subs">
                    {s.subsections.map(ss => (
                      <button
                        key={ss.id}
                        className={`lore-nav-sub ${activeSubsection === ss.id ? 'active' : ''}`}
                        onClick={() => setActiveSubsection(ss.id)}
                      >
                        {ss.title}
                        {loreEdits[`${s.id}::${ss.id}`] !== undefined && (
                          <span className="edited-dot" title="Edited" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </nav>

      <div className="lore-content-area">
        {currentSub ? (
          <>
            <div className="lore-content-hdr">
              <div>
                <div className="lore-breadcrumb">
                  {currentSection?.icon} {currentSection?.title}
                </div>
                <h1 className="lore-content-title">{currentSub.title}</h1>
                {currentSub.tags && (
                  <div className="lore-tags">
                    {currentSub.tags.map(t => (
                      <span key={t} className="lore-tag" onClick={() => setSearchQuery(t)}>
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="lore-actions">
                {isEdited && !isEditing && (
                  <button className="btn-reset" onClick={resetEdit} title="Revert to original">↺ Reset</button>
                )}
                {isEditing ? (
                  <>
                    <button className="btn-save" onClick={saveEdit}>✓ Save</button>
                    <button className="btn-cancel" onClick={cancelEdit}>✕</button>
                  </>
                ) : (
                  <button className="btn-edit" onClick={startEdit}>✎ Edit</button>
                )}
                {isEdited && <span className="edited-badge">edited</span>}
              </div>
            </div>

            {isEditing ? (
              <textarea
                className="lore-editor"
                value={editContent}
                onChange={e => setEditContent(e.target.value)}
                spellCheck
              />
            ) : (
              <div className="lore-text">
                {renderContent(getContent(activeSection, activeSubsection), searchQuery)}
              </div>
            )}
          </>
        ) : (
          <div className="lore-placeholder">Select a section from the left</div>
        )}
      </div>
    </div>
  )
}
