import { useState } from 'react'
import { HOUSE_COLORS } from '../data/characters'

const SIGNIFICANCE_COLORS = {
  critical:    '#e84855',
  major:       '#d4af37',
  foundation:  '#6c757d',
  upcoming:    '#06d6a0',
}

const SIGNIFICANCE_LABELS = {
  critical:    'Critical',
  major:       'Major',
  foundation:  'Foundation',
  upcoming:    'Upcoming',
}

export default function Timeline({ eras, characters, onAddEvent, onSelectChar }) {
  const [activeEra, setActiveEra] = useState(eras[0]?.id || '')
  const [expandedEvent, setExpandedEvent] = useState(null)
  const [addingEvent, setAddingEvent] = useState(false)
  const [newEvent, setNewEvent] = useState({ title: '', year: '', description: '', significance: 'major' })

  const currentEra = eras.find(e => e.id === activeEra)
  const charMap = Object.fromEntries(characters.map(c => [c.id, c]))

  const handleAddEvent = () => {
    if (!newEvent.title.trim()) return
    onAddEvent(activeEra, {
      id: `custom-${Date.now()}`,
      ...newEvent,
      characters: [],
    })
    setNewEvent({ title: '', year: '', description: '', significance: 'major' })
    setAddingEvent(false)
  }

  return (
    <div className="timeline-view">
      <div className="era-tabs">
        {eras.map(era => (
          <button
            key={era.id}
            className={`era-tab ${activeEra === era.id ? 'active' : ''}`}
            style={activeEra === era.id ? { borderBottomColor: era.color, color: era.color } : {}}
            onClick={() => setActiveEra(era.id)}
          >
            <span>{era.name}</span>
            <span className="era-period">{era.period}</span>
          </button>
        ))}
      </div>

      {currentEra && (
        <div className="timeline-content">
          <div className="timeline-header">
            <div>
              <h2 style={{ color: currentEra.color }}>{currentEra.name}</h2>
              <span className="era-period-label">{currentEra.period}</span>
            </div>
            <button className="add-event-btn" onClick={() => setAddingEvent(v => !v)}>
              {addingEvent ? '✕ Cancel' : '+ Add Event'}
            </button>
          </div>

          {addingEvent && (
            <div className="add-event-form">
              <div className="form-row">
                <input
                  className="form-input"
                  placeholder="Event title"
                  value={newEvent.title}
                  onChange={e => setNewEvent(v => ({ ...v, title: e.target.value }))}
                />
                <input
                  className="form-input year-input"
                  placeholder="Year / Date"
                  value={newEvent.year}
                  onChange={e => setNewEvent(v => ({ ...v, year: e.target.value }))}
                />
                <select
                  className="form-select"
                  value={newEvent.significance}
                  onChange={e => setNewEvent(v => ({ ...v, significance: e.target.value }))}
                >
                  <option value="critical">Critical</option>
                  <option value="major">Major</option>
                  <option value="foundation">Foundation</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
              <textarea
                className="form-textarea"
                placeholder="Event description..."
                value={newEvent.description}
                rows={3}
                onChange={e => setNewEvent(v => ({ ...v, description: e.target.value }))}
              />
              <button className="save-event-btn" onClick={handleAddEvent}>Add to Timeline</button>
            </div>
          )}

          <div className="events-track">
            <div className="timeline-spine" style={{ borderColor: `${currentEra.color}40` }} />
            {currentEra.events.map((event, i) => {
              const sigColor = SIGNIFICANCE_COLORS[event.significance] || '#888'
              const isExpanded = expandedEvent === event.id
              const involvedChars = (event.characters || [])
                .map(id => charMap[id])
                .filter(Boolean)

              return (
                <div
                  key={event.id}
                  className={`event-card ${isExpanded ? 'expanded' : ''}`}
                  style={{ '--sig-color': sigColor }}
                >
                  <div className="event-dot" style={{ background: sigColor, boxShadow: `0 0 8px ${sigColor}88` }} />
                  <div
                    className="event-body"
                    onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                  >
                    <div className="event-header">
                      <span className="event-year" style={{ color: currentEra.color }}>{event.year}</span>
                      <span className="sig-badge" style={{ color: sigColor, borderColor: `${sigColor}55` }}>
                        {SIGNIFICANCE_LABELS[event.significance] || event.significance}
                      </span>
                    </div>
                    <h3 className="event-title">{event.title}</h3>

                    {isExpanded && (
                      <>
                        <p className="event-description">{event.description}</p>
                        {involvedChars.length > 0 && (
                          <div className="event-chars">
                            <span className="chars-label">Key Characters:</span>
                            {involvedChars.map(c => (
                              <button
                                key={c.id}
                                className="char-chip"
                                style={{ borderColor: HOUSE_COLORS[c.house], color: HOUSE_COLORS[c.house] }}
                                onClick={e => { e.stopPropagation(); onSelectChar(c) }}
                              >
                                {c.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="timeline-legend">
            {Object.entries(SIGNIFICANCE_LABELS).map(([k, v]) => (
              <span key={k} className="sig-legend-item">
                <span style={{ color: SIGNIFICANCE_COLORS[k] }}>●</span> {v}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
