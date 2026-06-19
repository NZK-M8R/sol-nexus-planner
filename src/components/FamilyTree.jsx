import { useState } from 'react'
import { HOUSE_COLORS, HOUSE_LABELS } from '../data/characters'
import CharacterPanel from './CharacterPanel'

const HOUSE_TREES = {
  primordial: {
    label: 'The Primordial Lineage',
    color: '#B8B8FF',
    description: 'Mana the Conceptual — father of the Arke twins and architect of the first humans through his final sacrifice.',
    layout: {
      svgW: 1060,
      svgH: 460,
      nodes: [
        { id: 'mana',       x: 530, y: 80,  size: 32,
          ghostName: 'Mana', ghostColor: '#B8B8FF', ghostRole: 'The Conceptual', ghostInitial: 'M' },
        { id: 'vrak_arke',  x: 210, y: 265, size: 26,
          ghostName: 'Vrak Arke',  ghostColor: '#E05050', ghostRole: 'Ferali Twin · Son of Mana',       ghostInitial: 'V' },
        { id: 'selis_arke', x: 470, y: 265, size: 26,
          ghostName: 'Selis Arke', ghostColor: '#50A0FF', ghostRole: 'Celestials Twin · Son of Mana',   ghostInitial: 'S' },
        { id: 'eva_osiro',  x: 740, y: 265, size: 26 },
        { id: 'adam_wov',   x: 960, y: 265, size: 26 },
        { id: 'auris',      x: 340, y: 410, size: 22 },
      ],
      edges: [
        { from: 'mana',       to: 'vrak_arke',  color: '#D4AF37', label: 'Son · Ferali bloodline' },
        { from: 'mana',       to: 'selis_arke', color: '#D4AF37', label: 'Son · Celestials bloodline' },
        { from: 'mana',       to: 'eva_osiro',  color: '#8880FF', dashed: true, label: 'Created through sacrifice' },
        { from: 'mana',       to: 'adam_wov',   color: '#8880FF', dashed: true },
        { from: 'vrak_arke',  to: 'auris',      color: '#A0A0C0', dashed: true, label: 'Living-World Agent' },
        { from: 'selis_arke', to: 'auris',      color: '#A0A0C0', dashed: true },
      ],
    },
  },

  kazemi: {
    label: 'House Kazemi',
    color: '#d4af37',
    description: 'Direct Enforcers of Planetary Stability. Rulers of Valariya.',
    layout: {
      svgW: 1200,
      svgH: 520,
      nodes: [
        { id: 'irane',      x: 530, y: 65,  size: 30 },
        { id: 'ember_hist', x: 100, y: 210, size: 18, dim: true },
        { id: 'arai',       x: 310, y: 210, size: 22 },
        { id: 'hope',       x: 530, y: 210, size: 22 },
        { id: 'zoe',        x: 780, y: 210, size: 22 },
        { id: 'summari',    x: 180, y: 400, size: 18 },
        { id: 'nighla',     x: 310, y: 400, size: 18 },
        { id: 'nova',       x: 440, y: 400, size: 22 },
        { id: 'aurora',     x: 560, y: 400, size: 20 },
        { id: 'iron',       x: 660, y: 400, size: 16 },
        { id: 'law',        x: 760, y: 400, size: 16 },
        { id: 'nebula',     x: 880, y: 400, size: 16 },
        { id: 'eon',        x: 980, y: 400, size: 16 },
        { id: 'pixel',      x: 1080, y: 400, size: 16 },
        { id: 'shadow',     x: 100, y: 400, size: 18, dim: true, dashed: true },
      ],
      edges: [
        { from: 'irane', to: 'arai',       color: '#f5c842' },
        { from: 'irane', to: 'hope',       color: '#f5c842' },
        { from: 'irane', to: 'zoe',        color: '#f5c842' },
        { from: 'irane', to: 'ember_hist', color: '#888', dashed: true },
        { from: 'arai',  to: 'summari',    color: '#5b9bd5' },
        { from: 'arai',  to: 'nighla',     color: '#5b9bd5' },
        { from: 'arai',  to: 'nova',       color: '#5b9bd5' },
        { from: 'hope',  to: 'aurora',     color: '#5b9bd5' },
        { from: 'hope',  to: 'iron',       color: '#5b9bd5' },
        { from: 'hope',  to: 'law',        color: '#5b9bd5' },
        { from: 'zoe',   to: 'nebula',     color: '#5b9bd5' },
        { from: 'zoe',   to: 'eon',        color: '#5b9bd5' },
        { from: 'zoe',   to: 'pixel',      color: '#5b9bd5' },
        { from: 'irane', to: 'shadow',     color: '#9b5de5', dashed: true },
        { from: 'ember_hist', to: 'shadow',color: '#9b5de5', dashed: true },
      ],
    },
  },

  matriarchs: {
    label: 'Matriarch Origins',
    color: '#f5c842',
    description: 'The three surviving clans who became the mothers of House Kazemi — Arai (Nexal), Hope (Apolo), Zoe (Navar).',
    layout: {
      svgW: 1260,
      svgH: 440,
      nodes: [
        { id: 'nexal_anc',  x: 185, y: 65,  size: 24,
          ghostName: 'Nexal Clan', ghostColor: '#5b9bd5', ghostRole: 'Arai\'s Origin Bloodline', ghostInitial: 'N' },
        { id: 'arai',       x: 185, y: 210, size: 24 },
        { id: 'summari',    x:  75, y: 370, size: 18 },
        { id: 'nighla',     x: 185, y: 370, size: 18 },
        { id: 'nova',       x: 300, y: 370, size: 20 },

        { id: 'apolo_anc',  x: 625, y: 65,  size: 24,
          ghostName: 'Apolo Clan', ghostColor: '#E87B22', ghostRole: 'Hope\'s Origin Bloodline · Survived by concealment', ghostInitial: 'A' },
        { id: 'hope',       x: 625, y: 210, size: 24 },
        { id: 'aurora',     x: 510, y: 370, size: 20 },
        { id: 'iron',       x: 625, y: 370, size: 18 },
        { id: 'law',        x: 740, y: 370, size: 18 },

        { id: 'navar_anc',  x: 1070, y: 65, size: 24,
          ghostName: 'Navar Clan', ghostColor: '#9b5de5', ghostRole: 'Zoe\'s Origin Bloodline · Survived by concealment', ghostInitial: 'N' },
        { id: 'zoe',        x: 1070, y: 210, size: 24 },
        { id: 'nebula',     x: 950,  y: 370, size: 16 },
        { id: 'eon',        x: 1070, y: 370, size: 16 },
        { id: 'pixel',      x: 1185, y: 370, size: 16 },
      ],
      edges: [
        { from: 'nexal_anc', to: 'arai',    color: '#5b9bd5', dashed: true },
        { from: 'arai',      to: 'summari', color: '#5b9bd5' },
        { from: 'arai',      to: 'nighla',  color: '#5b9bd5' },
        { from: 'arai',      to: 'nova',    color: '#5b9bd5' },
        { from: 'apolo_anc', to: 'hope',    color: '#E87B22', dashed: true },
        { from: 'hope',      to: 'aurora',  color: '#E87B22' },
        { from: 'hope',      to: 'iron',    color: '#E87B22' },
        { from: 'hope',      to: 'law',     color: '#E87B22' },
        { from: 'navar_anc', to: 'zoe',     color: '#9b5de5', dashed: true },
        { from: 'zoe',       to: 'nebula',  color: '#9b5de5' },
        { from: 'zoe',       to: 'eon',     color: '#9b5de5' },
        { from: 'zoe',       to: 'pixel',   color: '#9b5de5' },
      ],
    },
  },

  vane: {
    label: 'House Vane',
    color: '#e84855',
    description: 'Dynasty founded by the immortal Aevum Vane. Niro Vane (current lord) is his descendant — led the war against Valariya. Niro and Ember Osiro share secret Vane blood.',
    layout: {
      svgW: 960,
      svgH: 530,
      nodes: [
        { id: 'aevum_vane',  x: 195, y: 70,  size: 28 },
        { id: 'volva_vane',  x: 510, y: 70,  size: 20, dim: true },
        { id: 'nuro_vane',   x: 195, y: 200, size: 22 },
        { id: 'vane_gap',    x: 195, y: 305, type: 'gap', label: '~ Many Generations ~' },
        { id: 'niro',        x: 130, y: 405, size: 26 },
        { id: 'aqura',       x: 330, y: 405, size: 20 },
        { id: 'ember_osiro', x: 560, y: 405, size: 20, dim: true, dashed: true },
        { id: 'kael',        x: 130, y: 515, size: 20, dashed: true, dim: true },
      ],
      edges: [
        { from: 'aevum_vane',  to: 'volva_vane',  color: '#9b5de5', dashed: true,  label: 'Identity — 1st public alias' },
        { from: 'aevum_vane',  to: 'nuro_vane',   color: '#D4AF37',               label: 'Founded dynasty as Volva Vane' },
        { from: 'nuro_vane',   to: 'vane_gap',    color: '#D4AF37', dashed: true  },
        { from: 'vane_gap',    to: 'niro',         color: '#D4AF37' },
        { from: 'niro',        to: 'aqura',        color: '#50e3c2',               label: 'Siblings' },
        { from: 'niro',        to: 'ember_osiro',  color: '#E02244', dashed: true, label: 'Secret: Blood Siblings' },
        { from: 'niro',        to: 'kael',         color: '#9b5de5', dashed: true, label: 'Son (Secret)' },
      ],
    },
  },

  survivor: {
    label: 'Survivor Bloodlines',
    color: '#10CC70',
    description: 'The Wov line (keepers of Mana\'s legacy) and the Osiro line descending from the first humans — the three bloodlines who outlasted the Gods\' purge on Orius.',
    layout: {
      svgW: 1060,
      svgH: 470,
      nodes: [
        { id: 'exco_wov',    x: 200, y: 80,  size: 24 },
        { id: 'wov_gap',     x: 200, y: 250, type: 'gap', label: '~ Wov Bloodline ~' },
        { id: 'wov_modern',  x: 200, y: 360, size: 18,
          ghostName: 'House Wov', ghostColor: '#10CC70', ghostRole: 'Modern Orius survivors', ghostInitial: 'W' },

        { id: 'eva_osiro',   x: 660, y: 80,  size: 24 },
        { id: 'adam_wov',    x: 870, y: 80,  size: 24 },
        { id: 'seth_osiro',  x: 760, y: 240, size: 22,
          ghostName: 'Seth Osiro', ghostColor: '#00b4d8', ghostRole: 'Born before the escape · Captured by Vane', ghostInitial: 'S' },
        { id: 'osiro_gap',   x: 760, y: 360, type: 'gap', label: '~ Osiro Bloodline ~' },
        { id: 'ember_osiro', x: 760, y: 450, size: 22 },
      ],
      edges: [
        { from: 'exco_wov',   to: 'wov_gap',     color: '#10CC70', dashed: true, label: 'Keeper of Mother Nature\'s weapon' },
        { from: 'wov_gap',    to: 'wov_modern',   color: '#10CC70' },
        { from: 'eva_osiro',  to: 'seth_osiro',   color: '#00b4d8' },
        { from: 'adam_wov',   to: 'seth_osiro',   color: '#00b4d8' },
        { from: 'seth_osiro', to: 'osiro_gap',    color: '#00b4d8', dashed: true },
        { from: 'osiro_gap',  to: 'ember_osiro',  color: '#00b4d8' },
      ],
    },
  },

  valariyans: {
    label: 'Valariyan Heads',
    color: '#D4AF37',
    description: 'The five chosen by the Emperor to wield aspects of his Will — bound to the five Kazemi through the Empiric Drive chain.',
    layout: {
      svgW: 1380,
      svgH: 460,
      nodes: [
        { id: 'irane',        x: 690,  y: 68,  size: 30 },
        // Five Kazemi — authority layer
        { id: 'arai',         x: 160,  y: 215, size: 22 },
        { id: 'hope',         x: 415,  y: 215, size: 22 },
        { id: 'zoe',          x: 670,  y: 215, size: 22 },
        { id: 'summari',      x: 950,  y: 215, size: 22 },
        { id: 'nighla',       x: 1210, y: 215, size: 22 },
        // Five Valariyan Heads — will layer
        { id: 'aliya_hallow', x: 160,  y: 390, size: 20 },
        { id: 'mira_vael',    x: 415,  y: 390, size: 20 },
        { id: 'dokia_caedus', x: 670,  y: 390, size: 20 },
        { id: 'pandro_lexan', x: 950,  y: 390, size: 20 },
        { id: 'urial_ferran', x: 1210, y: 390, size: 20 },
      ],
      edges: [
        // Emperor → Kazemi (Drive)
        { from: 'irane', to: 'arai',    color: '#D4AF37', label: 'Mind / Time' },
        { from: 'irane', to: 'hope',    color: '#D4AF37', label: 'Heart / Space' },
        { from: 'irane', to: 'zoe',     color: '#D4AF37', label: 'Body / Life-Death' },
        { from: 'irane', to: 'summari', color: '#D4AF37', label: 'Arms / Creation' },
        { from: 'irane', to: 'nighla',  color: '#D4AF37', label: 'Arms / Destruction' },
        // Kazemi → Valariyan Heads (Will)
        { from: 'arai',    to: 'aliya_hallow', color: '#1A3FBF', label: 'Spirits' },
        { from: 'hope',    to: 'mira_vael',    color: '#CC1A1A', label: 'Emotions' },
        { from: 'zoe',     to: 'dokia_caedus', color: '#1A6B1A', label: 'Death' },
        { from: 'summari', to: 'pandro_lexan', color: '#20878A', label: 'Knowledge' },
        { from: 'nighla',  to: 'urial_ferran', color: '#177070', label: 'Guard' },
      ],
    },
  },

  vestarin: {
    label: 'Clan Vestarin',
    color: '#9b5de5',
    description: 'Arbiters of Intel, Inquisition, and Secrets.',
    layout: {
      svgW: 800,
      svgH: 260,
      nodes: [
        { id: 'vesper', x: 400, y: 120, size: 24 },
      ],
      edges: [],
    },
  },

  osiro: {
    label: 'Clan Osiro',
    color: '#00b4d8',
    description: 'Masters of Treasury and Material Commerce. Led by Ember A. Osiro. The Osiro bloodline descends from Seth Osiro — son of the first humans — captured and held by the Vane dynasty.',
    layout: {
      svgW: 800,
      svgH: 280,
      nodes: [
        { id: 'ember_osiro', x: 400, y: 130, size: 24 },
      ],
      edges: [],
    },
  },
}

function NodeCircle({ node, character, isSelected, onClick }) {
  if (node.type === 'gap') {
    return (
      <g transform={`translate(${node.x},${node.y})`}>
        <text
          textAnchor="middle" dominantBaseline="middle"
          fontSize="10" fill="rgba(200,220,255,0.22)" fontStyle="italic"
          style={{ userSelect: 'none' }}
        >
          {node.label || '···'}
        </text>
      </g>
    )
  }

  const isGhost = !character
  const name      = character?.name || node.ghostName || ''
  const color     = isGhost ? (node.ghostColor || '#556') : (HOUSE_COLORS[character.house] || '#888')
  const initial   = node.ghostInitial || name.charAt(0)
  const firstName = name.split(' ')[0]
  const r         = node.size || 18
  const opacity   = isGhost ? 0.65 : (node.dim ? 0.45 : 1)

  return (
    <g
      transform={`translate(${node.x},${node.y})`}
      style={{ cursor: isGhost ? 'default' : 'pointer', opacity }}
      onClick={isGhost ? undefined : () => onClick(character)}
    >
      {isSelected && !isGhost && (
        <circle r={r + 6} fill="none" stroke="#fff" strokeWidth="1.5" opacity={0.5} />
      )}
      <circle
        r={r}
        fill={isSelected ? color : `${color}33`}
        stroke={color}
        strokeWidth={isSelected ? 2.5 : 1.5}
        strokeDasharray={node.dashed ? '5,4' : (isGhost ? '4,3' : 'none')}
        strokeOpacity={isGhost ? 0.75 : 1}
      />
      <text
        textAnchor="middle" dominantBaseline="middle"
        fontSize={r * 0.72}
        fill={color}
        fontWeight="600"
        fontStyle={isGhost ? 'italic' : 'normal'}
        style={{ userSelect: 'none' }}
      >
        {initial}
      </text>
      {firstName && (
        <text
          y={r + 14} textAnchor="middle" fontSize="10"
          fill={isSelected ? '#fff' : (isGhost ? `${color}BB` : 'rgba(225,225,255,0.85)')}
          style={{ userSelect: 'none' }}
        >
          {firstName}
        </text>
      )}
      {isGhost && node.ghostRole && (
        <text
          y={r + 25} textAnchor="middle" fontSize="8"
          fill={`${color}77`}
          style={{ userSelect: 'none' }}
        >
          {node.ghostRole.split(' · ')[0]}
        </text>
      )}
    </g>
  )
}

export default function FamilyTree({
  characters, relationships, showSecrets,
  selectedChar, onSelectChar,
  characterNotes, onSaveNote,
}) {
  const [activeHouse, setActiveHouse] = useState('kazemi')

  const tree    = HOUSE_TREES[activeHouse]
  const nodeMap = Object.fromEntries((tree?.layout.nodes || []).map(n => [n.id, n]))
  const charMap = Object.fromEntries(characters.map(c => [c.id, c]))

  const handleNodeClick = (char) => {
    if (!char) return
    onSelectChar(char.id === selectedChar?.id ? null : char)
  }

  const svgW = tree?.layout.svgW || 1200
  const svgH = tree?.layout.svgH || 520

  return (
    <div className="family-tree-view">
      <div className="house-tabs">
        {Object.entries(HOUSE_TREES).map(([id, h]) => (
          <button
            key={id}
            className={`house-tab ${activeHouse === id ? 'active' : ''}`}
            style={activeHouse === id ? { borderBottomColor: h.color, color: h.color } : {}}
            onClick={() => { setActiveHouse(id); onSelectChar(null) }}
          >
            {h.label}
          </button>
        ))}
      </div>

      <div className="tree-main">
        <div className="tree-canvas-wrap">
          <div className="tree-header">
            <h2 style={{ color: tree.color }}>{tree.label}</h2>
            <p>{tree.description}</p>
          </div>

          <div className="tree-svg-scroll">
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ width: '100%', minWidth: svgW, height: svgH }}
            >
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#555" />
                </marker>
              </defs>

              {tree.layout.edges.map((edge, i) => {
                if (!showSecrets && edge.dashed) return null
                const s = nodeMap[edge.from]
                const t = nodeMap[edge.to]
                if (!s || !t) return null
                const mx = (s.x + t.x) / 2
                const my = (s.y + t.y) / 2
                return (
                  <g key={i}>
                    <line
                      x1={s.x} y1={s.y} x2={t.x} y2={t.y}
                      stroke={edge.color}
                      strokeWidth="1.5"
                      strokeDasharray={edge.dashed ? '6,4' : 'none'}
                      strokeOpacity={edge.dashed ? 0.55 : 0.65}
                    />
                    {edge.label && (
                      <text
                        x={mx + 6} y={my - 4}
                        fontSize="9" fill={edge.color} opacity="0.75"
                        style={{ userSelect: 'none' }}
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                )
              })}

              {tree.layout.nodes.map(node => (
                <NodeCircle
                  key={node.id}
                  node={node}
                  character={charMap[node.id]}
                  isSelected={selectedChar?.id === node.id}
                  onClick={handleNodeClick}
                />
              ))}

              {showSecrets && tree.layout.edges.some(e => e.dashed) && (
                <text x="16" y={svgH - 12} fontSize="10" fill="#9b5de5" opacity="0.6">
                  - - - Secret / Hidden connection
                </text>
              )}
            </svg>
          </div>

          {activeHouse === 'kazemi' && (
            <div className="matriline-legend">
              <span className="mat-label">Matrilines:</span>
              <span style={{ color: '#d4af37' }}>Arai → Summari, Nighla, Nova</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#E87B22' }}>Hope → Aurora, Iron, Law</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#9b5de5' }}>Zoe → Nebula, Eon, Pixel</span>
            </div>
          )}
          {activeHouse === 'primordial' && (
            <div className="matriline-legend">
              <span style={{ color: '#D4AF37' }}>Gold lines = sons by birth</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#8880FF' }}>Blue dashed = created through Mana's sacrifice</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#888' }}>Dashed circles = not yet fully documented</span>
            </div>
          )}
          {activeHouse === 'vane' && (
            <div className="matriline-legend">
              <span style={{ color: '#D4AF37' }}>Gold = direct lineage</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#9b5de5' }}>Purple dashed = secret identity or hidden connection</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#E02244' }}>Red dashed = secret blood relation</span>
            </div>
          )}
          {activeHouse === 'valariyans' && (
            <div className="matriline-legend">
              <span style={{ color: '#D4AF37' }}>Gold lines = Emperor → Kazemi (Empiric Drive)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#888' }}>Coloured lines = Kazemi → Valariyan Head (Emperor's Will)</span>
            </div>
          )}
          {activeHouse === 'matriarchs' && (
            <div className="matriline-legend">
              <span style={{ color: '#888' }}>Dashed line from ancestor = origin clan (not yet fully charted)</span>
              <span className="mat-sep">·</span>
              <span>Solid = direct parent-child</span>
            </div>
          )}
        </div>

        <CharacterPanel
          character={selectedChar}
          characters={characters}
          relationships={relationships}
          showSecrets={showSecrets}
          onSelectChar={onSelectChar}
          onClose={() => onSelectChar(null)}
          notes={selectedChar ? characterNotes[selectedChar.id] : ''}
          onSaveNote={onSaveNote}
        />
      </div>
    </div>
  )
}
