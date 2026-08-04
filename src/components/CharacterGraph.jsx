import { useState, useMemo } from 'react'
import RelationshipTree from './RelationshipTree'
import StoryPanel from './StoryPanel'
import CharacterEditor from './CharacterEditor'
import { CHAR_COLORS, HOUSE_LABELS } from '../data/characters'

const STATUS_DOT = {
  active:     '#4ade80',
  alive:      '#4ade80',
  antagonist: '#f87171',
  protected:  '#facc15',
  hidden:     '#a78bfa',
  deceased:   '#6b7280',
  unknown:    '#6b7280',
}

function CharacterCard({ char, isSelected, onClick, compact }) {
  const dotColor = STATUS_DOT[char.status] ?? '#6b7280'
  const houseColor = CHAR_COLORS[char.house] ?? '#4A5568'

  return (
    <div
      className={`char-card${isSelected ? ' selected' : ''}`}
      style={{ borderLeftColor: houseColor }}
      onClick={() => onClick(char.id)}
    >
      <div className="char-card-header">
        <span className="char-card-dot" style={{ background: dotColor }} />
        <span className="char-card-name">{char.name}</span>
      </div>
      {char.role && (
        <div className="char-card-role">{char.role}</div>
      )}
      {!compact && char.coreType && (
        <div className="char-card-core">{char.coreType.split('·')[0].trim()}</div>
      )}
      {!compact && char.epithet && (
        <div className="char-card-epithet">{char.epithet.split('·')[0].trim()}</div>
      )}
    </div>
  )
}

function AddToArcModal({ characters, stories, selectedArcId, onAdd, onClose }) {
  const [query, setQuery] = useState('')

  const arc = useMemo(() => {
    for (const s of stories) {
      const a = s.arcs.find(x => x.id === selectedArcId)
      if (a) return a
    }
    return null
  }, [stories, selectedArcId])

  const alreadyIn = new Set(arc?.characters ?? [])

  const filtered = useMemo(() => {
    return characters.filter(c => {
      if (alreadyIn.has(c.id)) return false
      if (!query) return true
      return c.name.toLowerCase().includes(query.toLowerCase()) ||
        (c.role ?? '').toLowerCase().includes(query.toLowerCase())
    })
  }, [characters, alreadyIn, query])

  return (
    <div className="arc-modal-overlay" onClick={onClose}>
      <div className="arc-modal" onClick={e => e.stopPropagation()}>
        <div className="arc-modal-header">
          <span>Add to: <em>{arc?.title ?? selectedArcId}</em></span>
          <button className="panel-close" onClick={onClose}>✕</button>
        </div>
        <input
          className="search-input"
          placeholder="Search characters…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          style={{ margin: '8px 12px', width: 'calc(100% - 24px)' }}
        />
        <div className="arc-modal-list">
          {filtered.length === 0 && (
            <div style={{ padding: '12px 16px', color: 'var(--text-dim)', fontSize: 12 }}>
              {characters.filter(c => !alreadyIn.has(c.id)).length === 0
                ? 'All characters are already in this arc.'
                : 'No matches.'}
            </div>
          )}
          {filtered.map(c => (
            <div
              key={c.id}
              className="arc-modal-item"
              onClick={() => { onAdd(c.id); onClose() }}
            >
              <span className="char-card-dot" style={{ background: STATUS_DOT[c.status] ?? '#6b7280', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{c.name}</div>
                {c.role && <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{c.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CharacterGraph({
  characters, relationships, stories,
  weapons, beasts,
  showSecrets, onToggleSecrets,
  onSaveCharacter, onSaveRelationships, onSaveStories,
}) {
  const [selectedCharId, setSelectedCharId] = useState(null)
  const [selectedStoryId, setSelectedStoryId] = useState(null)
  const [selectedArcId, setSelectedArcId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('roster')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newCharName, setNewCharName] = useState('')
  const [newCharRole, setNewCharRole] = useState('')
  const [newCharHouse, setNewCharHouse] = useState('unknown')
  const [newCharStatus, setNewCharStatus] = useState('active')
  const [newCharDesc, setNewCharDesc] = useState('')

  const selectedChar = selectedCharId
    ? characters.find(c => c.id === selectedCharId) ?? null
    : null

  // Compute the character filter for the active arc/story selection
  const filterCharIds = useMemo(() => {
    if (selectedArcId) {
      for (const story of stories) {
        const arc = story.arcs.find(a => a.id === selectedArcId)
        if (arc) return arc.characters?.length ? arc.characters : null
      }
    }
    if (selectedStoryId) {
      const story = stories.find(s => s.id === selectedStoryId)
      if (story) {
        const all = new Set()
        story.arcs.forEach(a => (a.characters || []).forEach(id => all.add(id)))
        return all.size ? [...all] : null
      }
    }
    return null
  }, [selectedStoryId, selectedArcId, stories])

  // Characters visible in the current view
  const displayChars = useMemo(() => {
    let chars = characters
    if (filterCharIds) chars = chars.filter(c => filterCharIds.includes(c.id))
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      chars = chars.filter(c =>
        c.name.toLowerCase().includes(q) ||
        (c.role ?? '').toLowerCase().includes(q) ||
        (c.epithet ?? '').toLowerCase().includes(q)
      )
    }
    return [...chars].sort((a, b) => (b.importance ?? 0) - (a.importance ?? 0))
  }, [characters, filterCharIds, searchQuery])

  const handleSelectStory = (storyId) => {
    setSelectedStoryId(storyId)
    setSelectedArcId(null)
  }

  const handleSelectArc = (arcId) => {
    setSelectedArcId(arcId)
    const story = stories.find(s => s.arcs.some(a => a.id === arcId))
    if (story) setSelectedStoryId(story.id)
  }

  const handleClearFilter = () => {
    setSelectedStoryId(null)
    setSelectedArcId(null)
  }

  const handleSelectNode = (charId) => {
    setSelectedCharId(prev => prev === charId ? null : charId)
  }

  const handleSaveChar = (updatedChar) => {
    onSaveCharacter(updatedChar)
  }

  const handleAddToArc = (charId) => {
    if (!selectedArcId) return
    const updated = stories.map(s => ({
      ...s,
      arcs: s.arcs.map(a => {
        if (a.id !== selectedArcId) return a
        const chars = new Set(a.characters ?? [])
        chars.add(charId)
        return { ...a, characters: [...chars] }
      }),
    }))
    onSaveStories(updated)
  }

  const filterLabel = useMemo(() => {
    if (selectedArcId) {
      for (const s of stories) {
        const a = s.arcs.find(x => x.id === selectedArcId)
        if (a) return a.title
      }
    }
    if (selectedStoryId) {
      return stories.find(s => s.id === selectedStoryId)?.title ?? null
    }
    return null
  }, [selectedStoryId, selectedArcId, stories])

  return (
    <div className="char-workspace">
      {/* Left: story / arc filter panel */}
      <div className="workspace-left">
        <StoryPanel
          stories={stories}
          selectedStoryId={selectedStoryId}
          selectedArcId={selectedArcId}
          onSelectStory={handleSelectStory}
          onSelectArc={handleSelectArc}
          onClearFilter={handleClearFilter}
        />
      </div>

      {/* Centre: toolbar + content */}
      <div className="workspace-center">
        <div className="workspace-toolbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search characters…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          {filterLabel && (
            <div style={{
              fontSize: 11, color: 'var(--accent)',
              background: 'var(--accent-glow)', borderRadius: 20,
              padding: '3px 10px', display: 'flex', alignItems: 'center', gap: 6,
              maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {displayChars.length} / {filterLabel}
              </span>
              <button
                onClick={handleClearFilter}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 12, padding: 0, lineHeight: 1, flexShrink: 0 }}
              >
                ✕
              </button>
            </div>
          )}

          {/* Add existing char to arc */}
          {selectedArcId && (
            <button
              className="add-char-btn"
              onClick={() => setShowAddModal(true)}
              title="Add existing character to this arc"
            >
              + Add to Arc
            </button>
          )}

          {/* View toggle */}
          <div className="view-toggle">
            <button
              className={`view-toggle-btn${viewMode === 'roster' ? ' active' : ''}`}
              onClick={() => setViewMode('roster')}
              title="Roster view"
            >
              Roster
            </button>
            <button
              className={`view-toggle-btn${viewMode === 'graph' ? ' active' : ''}`}
              onClick={() => setViewMode('graph')}
              title="Relationship graph"
            >
              Graph
            </button>
          </div>

          <button
            className={`toggle-btn${showSecrets ? ' on' : ''}`}
            onClick={onToggleSecrets}
          >
            {showSecrets ? '🔓' : '🔒'}
          </button>

          <button
            className="add-char-btn"
            onClick={() => { setShowCreateForm(v => !v); setSelectedCharId(null) }}
            title="Create a new character"
          >
            {showCreateForm ? '✕' : '+ New'}
          </button>
        </div>

        {viewMode === 'roster' ? (
          <div className="roster-grid">
            {displayChars.length === 0 && (
              <div className="roster-empty">
                {filterCharIds
                  ? 'No characters in this arc yet. Use "+ Add to Arc" to add existing characters.'
                  : 'No characters match the search.'}
              </div>
            )}
            {displayChars.map(char => (
              <CharacterCard
                key={char.id}
                char={char}
                isSelected={selectedCharId === char.id}
                onClick={handleSelectNode}
                compact={false}
              />
            ))}
          </div>
        ) : (
          <RelationshipTree
            characters={characters}
            relationships={relationships}
            selectedId={selectedCharId}
            onSelect={handleSelectNode}
            showSecrets={showSecrets}
            filterCharIds={filterCharIds}
            searchQuery={searchQuery}
          />
        )}
      </div>

      {/* Modals */}
      {showAddModal && selectedArcId && (
        <AddToArcModal
          characters={characters}
          stories={stories}
          selectedArcId={selectedArcId}
          onAdd={handleAddToArc}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Right: character editor or create form */}
      {showCreateForm ? (
        <aside className="workspace-right char-create-panel">
          <div className="char-create-header">
            <span>New Character</span>
            <button className="panel-close" onClick={() => setShowCreateForm(false)}>✕</button>
          </div>
          <div className="char-create-body">
            <input
              className="sb-field"
              placeholder="Name *"
              value={newCharName}
              onChange={e => setNewCharName(e.target.value)}
              autoFocus
            />
            <input
              className="sb-field"
              placeholder="Role / Title"
              value={newCharRole}
              onChange={e => setNewCharRole(e.target.value)}
            />
            <select
              className="sb-field"
              value={newCharHouse}
              onChange={e => setNewCharHouse(e.target.value)}
            >
              {Object.entries(HOUSE_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
            <select
              className="sb-field"
              value={newCharStatus}
              onChange={e => setNewCharStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="alive">Alive</option>
              <option value="antagonist">Antagonist</option>
              <option value="protected">Protected</option>
              <option value="hidden">Hidden</option>
              <option value="deceased">Deceased</option>
              <option value="unknown">Unknown</option>
            </select>
            <textarea
              className="sb-field sb-field-ta"
              placeholder="Description"
              value={newCharDesc}
              onChange={e => setNewCharDesc(e.target.value)}
              rows={4}
            />
            <button
              className="sb-btn-primary"
              style={{ marginTop: 8 }}
              disabled={!newCharName.trim()}
              onClick={() => {
                const id = newCharName.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
                onSaveCharacter({
                  id, name: newCharName, role: newCharRole, house: newCharHouse,
                  status: newCharStatus, description: newCharDesc,
                  epithet: '', coreType: '', location: '', importance: 2,
                  beast: {}, weapon: {}, gates: [], psyche: [], notes: '', _dataRev: 1,
                })
                setShowCreateForm(false)
                setNewCharName(''); setNewCharRole(''); setNewCharHouse('unknown')
                setNewCharStatus('active'); setNewCharDesc('')
              }}
            >
              Create Character
            </button>
          </div>
        </aside>
      ) : selectedChar ? (
        <CharacterEditor
          character={selectedChar}
          characters={characters}
          relationships={relationships}
          stories={stories}
          weapons={weapons}
          beasts={beasts}
          onSave={handleSaveChar}
          onSaveRelationships={onSaveRelationships}
          onSaveStories={onSaveStories}
          onClose={() => setSelectedCharId(null)}
        />
      ) : (
        <div className={`workspace-right closed`} />
      )}
    </div>
  )
}
