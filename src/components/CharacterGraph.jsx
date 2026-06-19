import { useState, useMemo } from 'react'
import RelationshipTree from './RelationshipTree'
import StoryPanel from './StoryPanel'
import CharacterEditor from './CharacterEditor'
import { CHAR_COLORS } from '../data/characters'

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

  const handleSelectStory = (storyId) => {
    setSelectedStoryId(storyId)
    setSelectedArcId(null)
  }

  const handleSelectArc = (arcId) => {
    setSelectedArcId(arcId)
    // Find which story owns this arc so the story also shows as active
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
    // Keep editor open with updated data
  }

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

      {/* Centre: toolbar + SVG canvas */}
      <div className="workspace-center">
        <div className="workspace-toolbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search characters…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          {filterCharIds && (
            <div style={{
              fontSize: 11, color: 'var(--accent)',
              background: 'var(--accent-glow)', borderRadius: 20,
              padding: '3px 10px', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {filterCharIds.length} characters
              <button
                onClick={handleClearFilter}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 12, padding: 0, lineHeight: 1 }}
              >
                ✕
              </button>
            </div>
          )}

          <button
            className={`toggle-btn${showSecrets ? ' on' : ''}`}
            onClick={onToggleSecrets}
          >
            {showSecrets ? '🔓 Secrets On' : '🔒 Secrets Off'}
          </button>

          <button
            className="add-char-btn"
            title="Character creation coming soon"
            disabled
          >
            + Character
          </button>
        </div>

        <RelationshipTree
          characters={characters}
          relationships={relationships}
          selectedId={selectedCharId}
          onSelect={handleSelectNode}
          showSecrets={showSecrets}
          filterCharIds={filterCharIds}
          searchQuery={searchQuery}
        />
      </div>

      {/* Right: character editor (slides in when a node is selected) */}
      {selectedChar ? (
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
