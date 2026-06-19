export default function StoryPanel({
  stories, selectedStoryId, selectedArcId, onSelectStory, onSelectArc, onClearFilter,
}) {
  return (
    <div className="story-panel">
      <div className="story-panel-hdr">
        <h3>Stories</h3>
        <button
          className={`show-all-btn${!selectedStoryId && !selectedArcId ? ' active' : ''}`}
          onClick={onClearFilter}
        >
          Show All Characters
        </button>
      </div>

      <div className="story-list">
        {stories.map(story => {
          const isStoryActive = selectedStoryId === story.id
          return (
            <div key={story.id} className="story-item">
              <button
                className={`story-btn${isStoryActive && !selectedArcId ? ' active' : ''}`}
                onClick={() => onSelectStory(story.id)}
              >
                <span className="story-dot" style={{ background: story.color }} />
                <span className="story-title-text">{story.title}</span>
                <span
                  className="story-status-badge"
                  style={{
                    color: story.status === 'active' ? '#D4AF37' : 'var(--text-dim)',
                    borderColor: story.status === 'active' ? '#D4AF3766' : 'var(--border)',
                  }}
                >
                  {story.status}
                </span>
              </button>

              {/* Arc list — always expanded */}
              <div className="arc-list">
                {story.arcs.map(arc => (
                  <button
                    key={arc.id}
                    className={`arc-btn${selectedArcId === arc.id ? ' active' : ''}`}
                    onClick={() => onSelectArc(arc.id)}
                  >
                    <span
                      className="story-dot"
                      style={{ background: arc.color, width: 6, height: 6 }}
                    />
                    <span style={{ flex: 1 }}>{arc.title}</span>
                    <span style={{ fontSize: 10, color: 'var(--text-dim)', flexShrink: 0 }}>
                      {arc.characters?.length ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="story-panel-footer">
        <button className="add-story-btn" disabled title="Coming soon">
          + New Story
        </button>
      </div>
    </div>
  )
}
