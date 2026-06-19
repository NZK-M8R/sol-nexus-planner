const API_KEY = import.meta.env.VITE_CLAUDE_API_KEY

export const isApiConfigured = () =>
  Boolean(API_KEY && !API_KEY.includes('your-key-here'))

export async function sendMessage(messages, systemPrompt) {
  if (!isApiConfigured()) {
    throw new Error(
      'Claude API key not configured.\n\n' +
      'Create a file called .env.local in the sol-nexus-planner folder with:\n' +
      'VITE_CLAUDE_API_KEY=sk-ant-...\n\n' +
      'Get your key at console.anthropic.com, then restart the dev server.'
    )
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: systemPrompt,
      messages,
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error?.message || `API error ${response.status}`)
  }

  const data = await response.json()
  return data.content[0].text
}

export function buildSystemPrompt(characters, relationships, timelineEras) {
  const charSummary = characters
    .map(c => `- **${c.name}** [${c.house}/${c.role}]: ${c.description.slice(0, 150)}...`)
    .join('\n')

  const relSummary = relationships
    .map(r => {
      const src = characters.find(c => c.id === r.source)?.name || r.source
      const tgt = characters.find(c => c.id === r.target)?.name || r.target
      return `- ${src} → ${r.type.replace('_', ' ')} → ${tgt}${r.secret ? ' [SECRET]' : ''}${r.note ? ` (${r.note})` : ''}`
    })
    .join('\n')

  const eventSummary = timelineEras
    .flatMap(era => era.events.map(e => `[${era.name} / ${e.year}] ${e.title}: ${e.description}`))
    .join('\n')

  return `You are the creative story-planning co-writer for the Sol-Nexus universe.

## Your Role
You help the creator plan, expand, and refine their story world. You can:
- Analyse how a proposed change would ripple through the existing lore
- Suggest new characters, arcs, and plot developments
- Point out logical conflicts with established canon
- Write draft scenes, dialogue, or event descriptions
- Help develop backstory for minor characters or factions
- Suggest thematic parallels to comparable epic stories (Dune, Star Wars, AoT, One Piece)

## Core Rules
- Always ground answers in the established canon below
- Flag any contradiction with existing lore before suggesting it
- Be specific — reference character names, house names, Unix year timestamps
- When proposing changes, briefly note the downstream effects

## Sol-Nexus Canon

### Characters (${characters.length})
${charSummary}

### Relationships
${relSummary}

### Timeline Events
${eventSummary}

### World Rules
- Sol-Nexus = fused Earth + Aethelgard, Jupiter-scale, 300-year lifespans
- Core types: L/D (standard), HC/CH (reality-warping Conceptuals)
- Irane's psyche: Core 1-15%, Champion 15-50%, Emperor/Calamity 50-100%
- Grand Table bound to 4 Houses: Kazemi, Vestarin, Osiro, Vane
- 16 Noble Treasures locked to bloodlines; if a line dies → planetary instability
- Mana Tax: citizens pay with internal energy → Core-Hollow if over-extracted
- Cosmic Eclipse occurs every 500 years — activates Bounded Law
- Kael's power: Aetheric Nullification — collapses spatial tears on contact`
}
