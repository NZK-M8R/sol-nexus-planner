import { HOUSE_COLORS, HOUSE_LABELS } from '../data/characters'

export default function Dashboard({ characters, relationships, timelineEras, onNavigate }) {
  const houses = ['kazemi', 'vestarin', 'osiro', 'vane', 'fenrir', 'chimera']
  const houseCount = houses.map(h => ({
    house: h,
    count: characters.filter(c => c.house === h).length,
  })).filter(x => x.count > 0)

  const totalEvents = timelineEras.reduce((sum, e) => sum + e.events.length, 0)
  const secretRels = relationships.filter(r => r.secret).length
  const criticalEvents = timelineEras
    .flatMap(e => e.events)
    .filter(e => e.significance === 'critical')

  const keyChars = characters.filter(c => c.importance === 3)

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-accent">◈</span> SOL-NEXUS
          </h1>
          <p className="hero-sub">The Mana Empire · The Grand Table · The Lineage of Kazemi</p>
          <p className="hero-desc">
            A unified production bible for your story universe — characters, timelines, family trees, and AI-assisted world building.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-num">{characters.length}</span>
            <span className="stat-label">Characters</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{relationships.length}</span>
            <span className="stat-label">Relationships</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{secretRels}</span>
            <span className="stat-label">Secrets</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{totalEvents}</span>
            <span className="stat-label">Events</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="dash-section">
          <h2>Key Characters</h2>
          <div className="key-chars">
            {keyChars.map(c => (
              <div
                key={c.id}
                className="key-char-card"
                style={{ borderLeftColor: HOUSE_COLORS[c.house] }}
                onClick={() => onNavigate('characters', c.id)}
              >
                <div className="kc-avatar" style={{ background: `${HOUSE_COLORS[c.house]}22`, color: HOUSE_COLORS[c.house] }}>
                  {c.name.charAt(0)}
                </div>
                <div>
                  <div className="kc-name">{c.name}</div>
                  <div className="kc-role" style={{ color: HOUSE_COLORS[c.house] }}>{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dash-section">
          <h2>Houses & Factions</h2>
          <div className="house-list">
            {houseCount.map(({ house, count }) => (
              <div
                key={house}
                className="house-row"
                onClick={() => onNavigate('families')}
              >
                <span className="house-dot" style={{ background: HOUSE_COLORS[house] }} />
                <span className="house-name">{HOUSE_LABELS[house] || house}</span>
                <span className="house-count">{count} member{count !== 1 ? 's' : ''}</span>
                <div
                  className="house-bar"
                  style={{ width: `${(count / characters.length) * 100}%`, background: HOUSE_COLORS[house] }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="dash-section">
          <h2>Critical Story Beats</h2>
          <div className="beats-list">
            {criticalEvents.map((e, i) => {
              const era = timelineEras.find(er => er.events.some(ev => ev.id === e.id))
              return (
                <div
                  key={i}
                  className="beat-item"
                  onClick={() => onNavigate('timeline')}
                >
                  <span className="beat-year" style={{ color: era?.color }}>{e.year}</span>
                  <div>
                    <div className="beat-title">{e.title}</div>
                    <div className="beat-era">{era?.name}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="dash-section">
          <h2>World Rules</h2>
          <div className="world-rules">
            {[
              { label: 'Planet Scale', value: 'Jupiter-volume, 35% land / 65% ocean' },
              { label: 'Lifespan', value: '300 years (post-fusion average)' },
              { label: 'Core Types', value: 'L/D (standard) · HC/CH (Conceptuals)' },
              { label: 'Cosmic Eclipse', value: 'Every 500 years — activates Bounded Law' },
              { label: 'Noble Treasures', value: '16 total — bloodline locked to 4 Houses' },
              { label: 'Mana Tax', value: 'Over-extraction → Core-Hollow degeneration' },
            ].map((r, i) => (
              <div key={i} className="rule-row">
                <span className="rule-label">{r.label}</span>
                <span className="rule-value">{r.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
