import { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { HOUSE_COLORS, HOUSE_LABELS } from '../data/characters'
import CharacterPanel from './CharacterPanel'
import ErrorBoundary from './ErrorBoundary'
import WillConstellation from './WillConstellation'
import ClanConstellation from './ClanConstellation'

const DENSE_SCALE = 0.68

// Clan constellations available alongside the Will-Bearers view — each reads
// members live from character.house, so the view never goes stale as the
// character data changes. Colors reuse HOUSE_COLORS where defined.
const CLAN_CONSTELLATIONS = [
  { id: 'vane',     label: 'House Vane',     color: '#e84855' },
  { id: 'more',     label: 'Clan More',      color: '#4A6E8A' },
  { id: 'revyn',    label: 'Clan Revyn',     color: '#6B5472' },
  { id: 'prescian', label: 'Clan Prescian',  color: '#9B9BAF' },
  { id: 'navar',    label: 'House Navar',    color: '#1A6B1A' },
  { id: 'apolo',    label: 'House Apolo',    color: '#5B9BD5' },
  { id: 'lucerne',  label: 'Clan Lucerne',   color: '#D4460A' },
  { id: 'seraph',   label: 'Clan Seraph',    color: '#C8C0FF' },
  { id: 'consa',    label: 'Clan Consa',     color: '#E02244' },
  { id: 'nexal',    label: 'House Nexal',    color: '#6A0DAD' },
]

// Camp = which side of the Aura/Force divide (or independent) a bloodline belongs to
const CAMP_CONFIG = {
  origins:   { label: 'Pre-World Origins',        color: '#B8B8FF' },
  imperial:  { label: 'Valariya',                 color: '#D4AF37' },
  vane:      { label: 'House Vane',               color: '#e84855' },
  survivor:  { label: 'Survivor Bloodlines',      color: '#10CC70' },
  grand:     { label: 'Grand Families',           color: '#D4AF37' },
  ascen:     { label: 'Ascen',                    color: '#5b9bd5' },
  aura:      { label: 'Alma (Ferali)',             color: '#D4460A' },
  force:     { label: 'Spirit (Celestial)',        color: '#C8C0FF' },
  primal:    { label: 'Primal Clans',             color: '#4A6E8A' },
  mana_born: { label: 'Pure Mana · Mana-Born',    color: '#C75FCF' },
  region:    { label: 'By Region — Where They Are Now', color: '#5FA88A' },
}

const CAMP_ORDER = ['origins', 'imperial', 'vane', 'survivor', 'grand', 'ascen', 'aura', 'force', 'primal', 'mana_born', 'region']

const HOUSE_TREES = {
  primordial: {
    label: 'The Primordial Lineage',
    color: '#B8B8FF',
    camp: 'origins',
    description: 'Arke named magic and died giving birth to Vrak and Selis. Mana\'s failed resurrection created Aeva — same body, new being. Aeva became the birth mother of Eva Osiro and Adam Wov. Two women in one body. Two families from one man\'s grief.',
    layout: {
      svgW: 1300,
      svgH: 560,
      nodes: [
        { id: 'arke',       x: 240,  y: 60,  size: 26 },
        { id: 'mana',       x: 660,  y: 60,  size: 32,
          ghostName: 'Mana', ghostColor: '#B8B8FF', ghostRole: 'The Conceptual · Father', ghostInitial: 'M' },
        { id: 'vrak_arke',  x: 100,  y: 260, size: 26,
          ghostName: 'Vrak Arke',  ghostColor: '#E05050', ghostRole: 'Son of Arke & Mana · Devils Twin',   ghostInitial: 'V' },
        { id: 'selis_arke', x: 360,  y: 260, size: 26,
          ghostName: 'Selis Arke', ghostColor: '#50A0FF', ghostRole: 'Son of Arke & Mana · Hallowed Twin', ghostInitial: 'S' },
        { id: 'aeva',       x: 700,  y: 260, size: 24 },
        { id: 'eva_osiro',  x: 960,  y: 420, size: 26 },
        { id: 'adam_wov',   x: 1180, y: 420, size: 26 },
        { id: 'auris',      x: 210,  y: 440, size: 22 },
      ],
      edges: [
        { from: 'arke',       to: 'mana',       color: '#C0A0D0', label: 'Wife · She named magic · Died in childbirth' },
        { from: 'arke',       to: 'vrak_arke',  color: '#C0A0D0', label: 'Mother' },
        { from: 'arke',       to: 'selis_arke', color: '#C0A0D0', label: 'Mother' },
        { from: 'mana',       to: 'vrak_arke',  color: '#D4AF37', label: 'Father · Devils bloodline' },
        { from: 'mana',       to: 'selis_arke', color: '#D4AF37', label: 'Father · Hallowed bloodline' },
        { from: 'arke',       to: 'aeva',       color: '#8B4B9E', dashed: true, label: 'Failed resurrection — same body · new being · not Arke' },
        { from: 'mana',       to: 'aeva',       color: '#8B4B9E', dashed: true, label: 'His grief made her exist' },
        { from: 'aeva',       to: 'eva_osiro',  color: '#8880FF', label: 'Birth mother · Eva Osiro (Eve)' },
        { from: 'aeva',       to: 'adam_wov',   color: '#8880FF', label: 'Birth mother · Adam Wov (Adam)' },
        { from: 'mana',       to: 'eva_osiro',  color: '#8880FF', dashed: true, label: 'Creator · through Aeva · through grief' },
        { from: 'mana',       to: 'adam_wov',   color: '#8880FF', dashed: true },
        { from: 'vrak_arke',  to: 'auris',      color: '#A0A0C0', dashed: true, label: 'Living-World Agent' },
        { from: 'selis_arke', to: 'auris',      color: '#A0A0C0', dashed: true },
      ],
    },
  },

  kazemi: {
    label: 'House Kazemi',
    color: '#d4af37',
    camp: 'imperial',
    description: 'Direct Enforcers of Planetary Stability. Rulers of Valariya. Note: Summari and Nighla\'s biological mother is Minia Consa — the facility director who used herself as the experiment subject. Ember Hist is mother only to Irane E. Osiro (Jr.), the Shadow of the Emperor.',
    layout: {
      svgW: 1280,
      svgH: 580,
      nodes: [
        { id: 'minia_consa', x: 50,   y: 65,  size: 18, dashed: true, dim: true },
        { id: 'irane',       x: 640,  y: 65,  size: 30 },
        { id: 'ember_hist',  x: 200,  y: 210, size: 16, dim: true },
        { id: 'arai',        x: 460,  y: 210, size: 22 },
        { id: 'hope',        x: 730,  y: 210, size: 22 },
        { id: 'zoe',         x: 1040, y: 210, size: 22 },
        { id: 'irane_e_osiro', x: 200, y: 420, size: 16, dashed: true },
        { id: 'summari',       x: 50,  y: 420, size: 18 },
        { id: 'nighla',        x: 130, y: 420, size: 18 },
        { id: 'nebula',     x: 355,  y: 420, size: 16 },
        { id: 'iron',       x: 440,  y: 420, size: 16 },
        { id: 'pixel',      x: 525,  y: 420, size: 16 },
        { id: 'nova',       x: 640,  y: 420, size: 22 },
        { id: 'law',        x: 745,  y: 420, size: 16 },
        { id: 'faith',      x: 830,  y: 420, size: 16 },
        { id: 'aurora',     x: 930,  y: 420, size: 20 },
        { id: 'eon',        x: 1040, y: 420, size: 16 },
        { id: 'alpha',      x: 1140, y: 420, size: 16 },
      ],
      edges: [
        { from: 'irane', to: 'arai',        color: '#f5c842' },
        { from: 'irane', to: 'hope',        color: '#f5c842' },
        { from: 'irane', to: 'zoe',         color: '#f5c842' },
        { from: 'irane', to: 'ember_hist',  color: '#888', dashed: true },
        { from: 'irane', to: 'minia_consa', color: '#5F9EA0', dashed: true, label: 'Facility — secret' },
        { from: 'irane',       to: 'summari',       color: '#D4AF37' },
        { from: 'irane',       to: 'nighla',        color: '#D4AF37' },
        { from: 'irane',       to: 'irane_e_osiro', color: '#9b5de5', dashed: true, label: 'Secret son' },
        { from: 'ember_hist',  to: 'irane_e_osiro', color: '#9b5de5', dashed: true, label: 'Mother — Jr only' },
        { from: 'minia_consa', to: 'summari',       color: '#5F9EA0', dashed: true, label: 'Biological mother (secret)' },
        { from: 'minia_consa', to: 'nighla',        color: '#5F9EA0', dashed: true },
        { from: 'arai', to: 'nebula', color: '#5b9bd5' },
        { from: 'arai', to: 'iron',   color: '#5b9bd5' },
        { from: 'arai', to: 'pixel',  color: '#5b9bd5' },
        { from: 'hope', to: 'nova',  color: '#CC1A1A' },
        { from: 'hope', to: 'law',   color: '#CC1A1A' },
        { from: 'hope', to: 'faith', color: '#CC1A1A' },
        { from: 'zoe', to: 'aurora', color: '#1A6B1A' },
        { from: 'zoe', to: 'eon',    color: '#1A6B1A' },
        { from: 'zoe', to: 'alpha',  color: '#1A6B1A' },
      ],
    },
  },

  matriarchs: {
    label: 'Matriarch Origins',
    color: '#f5c842',
    camp: 'ascen',
    description: 'The three clans that became the mothers of House Kazemi. Arai from House Nexal (time element, Ascen sphere — serves Clan Vane). Hope born as Hope Apolo of House Apolo (space core, Force aligned — spatial intelligence arm of Wov); took the Kazemi name. Zoe from House Navar (Alma aligned). Note: House Nexal and House Ardent both serve Clan Vane in the current story arc.',
    layout: {
      svgW: 1260,
      svgH: 440,
      nodes: [
        { id: 'nexal_anc', x: 185, y: 65,  size: 24,
          ghostName: 'House Nexal', ghostColor: '#5b9bd5', ghostRole: 'Arai\'s Origin · Time Element · Ascen / Vane sphere', ghostInitial: 'N' },
        { id: 'arai',      x: 185, y: 210, size: 24 },
        { id: 'nebula',    x: 75,  y: 370, size: 18 },
        { id: 'iron',      x: 185, y: 370, size: 18 },
        { id: 'pixel',     x: 295, y: 370, size: 16 },
        { id: 'apolo_anc', x: 625, y: 65,  size: 24,
          ghostName: 'House Apolo', ghostColor: '#E87B22', ghostRole: 'Hope Apolo (birth name) · Space Core · Force / Wov intel', ghostInitial: 'A' },
        { id: 'hope',      x: 625, y: 210, size: 24 },
        { id: 'nova',      x: 505, y: 370, size: 20 },
        { id: 'law',       x: 625, y: 370, size: 18 },
        { id: 'faith',     x: 745, y: 370, size: 16 },
        { id: 'navar_anc', x: 1075, y: 65, size: 24,
          ghostName: 'House Navar', ghostColor: '#9b5de5', ghostRole: 'Zoe\'s Origin · Alma aligned', ghostInitial: 'N' },
        { id: 'zoe',       x: 1075, y: 210, size: 24 },
        { id: 'aurora',    x: 955,  y: 370, size: 20 },
        { id: 'eon',       x: 1075, y: 370, size: 16 },
        { id: 'alpha',     x: 1185, y: 370, size: 16 },
      ],
      edges: [
        { from: 'nexal_anc', to: 'arai',   color: '#5b9bd5', dashed: true, label: 'Arai Nexal → took Kazemi name' },
        { from: 'arai',      to: 'nebula', color: '#5b9bd5' },
        { from: 'arai',      to: 'iron',   color: '#5b9bd5' },
        { from: 'arai',      to: 'pixel',  color: '#5b9bd5' },
        { from: 'apolo_anc', to: 'hope',   color: '#E87B22', dashed: true, label: 'Hope Apolo → took Kazemi name' },
        { from: 'hope',      to: 'nova',   color: '#E87B22' },
        { from: 'hope',      to: 'law',    color: '#E87B22' },
        { from: 'hope',      to: 'faith',  color: '#E87B22' },
        { from: 'navar_anc', to: 'zoe',    color: '#9b5de5', dashed: true, label: 'Zoe Navar → took Kazemi name' },
        { from: 'zoe',       to: 'aurora', color: '#9b5de5' },
        { from: 'zoe',       to: 'eon',    color: '#9b5de5' },
        { from: 'zoe',       to: 'alpha',  color: '#9b5de5' },
      ],
    },
  },

  vane: {
    label: 'House Vane',
    color: '#e84855',
    camp: 'vane',
    description: 'Dynasty founded by the immortal Aevum Vane. Both Vane and Clan More are the only houses that hold the full truth of the world\'s origin — from opposite sides. Two houses serve Vane directly in the current arc: House Nexal (Arai\'s bloodline, time element, open service) and House Ardent (bloodline secretly founded by Darkki Ardent — Dulla\'s son born on Orius — Aevum adopted it as cover without knowing it traced to Dulla\'s own secret family — covert Vane service). Ember Hist was born Ember Vane; her father is Historical Niro Vane. Her mother was Artic Osiro — a captured Osiro woman forced into the Vane household. When Ember took the Osiro name, she was reclaiming her mother\'s clan name, not borrowing it. The current-era Vane line runs through Historical Niro Vane\'s three children — Ember, Nuro, and Axola — down to Lord Niro Vane (Year 500), whose own son Axola lost his succession claim and title of "Reincarnate of Aevum" to Arai in single combat (Part 7), forfeiting it to a previously undisclosed second son held in reserve, "Aevum reborn," freed from an experimentation lab at the crisis\'s end with both arms marked black and white — the Devil/Angel signature.',
    layout: {
      svgW: 1400,
      svgH: 680,
      nodes: [
        { id: 'aevum_vane',    x: 195, y: 70,  size: 28 },
        { id: 'dulla_vane',    x: 680, y: 70,  size: 22 },
        { id: 'volva_vane',    x: 440, y: 70,  size: 20, dim: true },
        { id: 'nuro_vane',     x: 195, y: 200, size: 22 },
        { id: 'artic_osiro',   x: 560, y: 130, size: 16, dim: true,
          ghostName: 'Artic Osiro', ghostColor: '#00b4d8', ghostRole: 'Captured Osiro woman · Ember\'s mother · different mother from Nuro', ghostInitial: 'A' },
        { id: 'ember_hist',    x: 480, y: 280, size: 20, dim: true },
        { id: 'ardent_ghost',  x: 900, y: 200, size: 20,
          ghostName: 'House Ardent', ghostColor: '#8B2020', ghostRole: 'Founded by Dulla · Ascen assault · covert Vane service', ghostInitial: 'A' },
        { id: 'nexal_ghost',   x: 1160, y: 70,  size: 20,
          ghostName: 'House Nexal', ghostColor: '#5b9bd5', ghostRole: 'Arai\'s bloodline · Chronos Bow · open Vane service', ghostInitial: 'N' },
        { id: 'nuro',          x: 380, y: 310, size: 24 },
        { id: 'axola_vane',    x: 260, y: 380, size: 20 },
        { id: 'vane_gap',      x: 195, y: 430, type: 'gap', label: '~ Nuro\'s line · Many Generations ~' },
        { id: 'niro',          x: 130, y: 520, size: 26 },
        { id: 'aqura',         x: 330, y: 520, size: 20 },
        { id: 'more_ghost',    x: 800, y: 460, size: 22,
          ghostName: 'Clan More', ghostColor: '#4A6E8A', ghostRole: 'Bitter Rival · Arms Race · Full Truth', ghostInitial: 'M' },
        { id: 'kael',          x: 130, y: 620, size: 20, dashed: true, dim: true },
        { id: 'nuro_vane_brother', x: 330, y: 460, size: 20, dashed: true },
      ],
      edges: [
        { from: 'aevum_vane',  to: 'volva_vane',   color: '#9b5de5', dashed: true,  label: 'Identity — 1st public alias' },
        { from: 'aevum_vane',  to: 'dulla_vane',   color: '#D4AF37', label: 'Eldest son — faked death with Cith More · fled to Orius · never became Ardent; his son Darkki built that bloodline' },
        { from: 'aevum_vane',  to: 'nuro_vane',    color: '#D4AF37', label: 'Founded dynasty as Volva Vane' },
        { from: 'aevum_vane',  to: 'nexal_ghost',  color: '#5b9bd5', dashed: true, label: 'House Nexal serves Vane · Arai\'s origin clan' },
        { from: 'dulla_vane',  to: 'ardent_ghost', color: '#8B2020', label: 'Secret father of Darkki Ardent · who founded House Ardent' },
        { from: 'nuro_vane',   to: 'ember_hist',   color: '#CC5500', dashed: true, label: 'Daughter by Artic Osiro (different mother from Nuro) · born Ember Vane · took Osiro name' },
        { from: 'nuro_vane',   to: 'nuro',         color: '#D4AF37', label: 'Son — Unix-era warlord · held the Spear of Unix · killed by Irane ~Year 131' },
        { from: 'nuro_vane',   to: 'axola_vane',   color: '#B22222', label: '3rd child · "Reincarnate of Aevum" · replaced Nuro after his defeat' },
        { from: 'nuro_vane',   to: 'nuro_vane_brother', color: '#9b5de5', dashed: true, label: 'Undisclosed 2nd son · held as "Aevum reborn" succession contingency' },
        { from: 'axola_vane',  to: 'nuro_vane_brother', color: '#e84855', label: 'Half-brother · succession passes to him when Axola forfeits to Arai' },
        { from: 'artic_osiro', to: 'ember_hist',   color: '#00b4d8', dashed: true, label: 'Biological mother · Ember reclaimed this name' },
        { from: 'nuro',        to: 'kael',         color: '#e84855', dashed: true, label: 'True biological father (secret) · Kael born before Nuro died' },
        { from: 'nuro',        to: 'vane_gap',     color: '#D4AF37', dashed: true  },
        { from: 'vane_gap',    to: 'niro',         color: '#D4AF37' },
        { from: 'niro',        to: 'aqura',        color: '#50e3c2', label: 'Siblings' },
        { from: 'niro',        to: 'more_ghost',   color: '#4A6E8A', dashed: true, label: 'Arms Race · Both hold full truth' },
        { from: 'niro',        to: 'kael',         color: '#9b5de5', dashed: true, label: 'Raised as weapon · claimed false paternity to suppress true Vane heir' },
      ],
    },
  },

  survivor: {
    label: 'Survivor Bloodlines',
    color: '#10CC70',
    camp: 'survivor',
    description: 'Eve + Exco → Lyra/Mara/Sael Wov (Earth, Gaia beasts). Adam + Dana → Seth/Dain/Noa Osiro (Earth, Cronus tools). Exco\'s Orius line became House Wov. Dana\'s Orius line became Clan Osiro — reclaimed by Ember Vane (ember_hist).',
    layout: {
      svgW: 1320,
      svgH: 680,
      nodes: [
        // ── Wov side ──────────────────────────────────────────────────────
        { id: 'exco_wov',    x: 120,  y: 80,  size: 24 },
        { id: 'eva_osiro',   x: 300,  y: 80,  size: 24 },
        { id: 'lyra_wov',    x: 60,   y: 290, size: 20 },
        { id: 'mara_wov',    x: 205,  y: 290, size: 20 },
        { id: 'sael_wov',    x: 350,  y: 290, size: 20 },
        { id: 'wov_gap',     x: 120,  y: 440, type: 'gap', label: '~ Exco\'s Orius Branch ~' },
        { id: 'wov_modern',  x: 120,  y: 560, size: 18,
          ghostName: 'House Wov', ghostColor: '#10CC70', ghostRole: 'Keepers of the Tree of Eden', ghostInitial: 'W' },
        // ── Osiro side ─────────────────────────────────────────────────────
        { id: 'adam_wov',    x: 840,  y: 80,  size: 24 },
        { id: 'dana_osiro',  x: 1020, y: 80,  size: 24 },
        { id: 'seth_osiro',  x: 770,  y: 290, size: 20 },
        { id: 'dain_osiro',  x: 930,  y: 290, size: 20 },
        { id: 'noa_osiro',   x: 1090, y: 290, size: 20 },
        { id: 'osiro_gap',   x: 930,  y: 440, type: 'gap', label: '~ Dana\'s Orius Branch ~' },
        { id: 'ember_hist',  x: 930,  y: 560, size: 22, dim: true },
        { id: 'ember_osiro', x: 930,  y: 650, size: 22 },
      ],
      edges: [
        // Eve + Exco → 3 children (Earth)
        { from: 'exco_wov',   to: 'eva_osiro',  color: '#10CC70', dashed: true, label: 'Partners on Orius' },
        { from: 'exco_wov',   to: 'lyra_wov',   color: '#27AE60', label: 'Bloom Beast' },
        { from: 'eva_osiro',  to: 'lyra_wov',   color: '#27AE60' },
        { from: 'exco_wov',   to: 'mara_wov',   color: '#6C3483', label: 'Ruin Beast' },
        { from: 'eva_osiro',  to: 'mara_wov',   color: '#6C3483' },
        { from: 'exco_wov',   to: 'sael_wov',   color: '#95A5A6', label: 'Still Beast' },
        { from: 'eva_osiro',  to: 'sael_wov',   color: '#95A5A6' },
        // Exco's Orius branch → House Wov
        { from: 'exco_wov',   to: 'wov_gap',    color: '#10CC70', dashed: true, label: 'Orius branch · Tree of Eden' },
        { from: 'wov_gap',    to: 'wov_modern',  color: '#10CC70' },
        // Adam + Dana → 3 children (Earth)
        { from: 'adam_wov',   to: 'dana_osiro',  color: '#2176AE', dashed: true, label: 'Partners in the West' },
        { from: 'adam_wov',   to: 'seth_osiro',  color: '#1A85C4', label: 'Echo Tool' },
        { from: 'dana_osiro', to: 'seth_osiro',  color: '#1A85C4' },
        { from: 'adam_wov',   to: 'dain_osiro',  color: '#F39C12', label: 'Drift Tool' },
        { from: 'dana_osiro', to: 'dain_osiro',  color: '#F39C12' },
        { from: 'adam_wov',   to: 'noa_osiro',   color: '#AF7AC5', label: 'Seal Tool' },
        { from: 'dana_osiro', to: 'noa_osiro',   color: '#AF7AC5' },
        // Dana's Orius branch → Clan Osiro
        { from: 'dana_osiro', to: 'osiro_gap',   color: '#2176AE', dashed: true, label: 'Orius branch · Book of Time' },
        { from: 'osiro_gap',  to: 'ember_hist',  color: '#CC5500', dashed: true, label: 'Ember Vane → reclaimed Osiro name' },
        { from: 'ember_hist', to: 'ember_osiro', color: '#00b4d8', label: 'Ember Hist → Ember A. Osiro (modern)' },
      ],
    },
  },

  valariyans: {
    label: 'Valariyan Heads',
    color: '#D4AF37',
    camp: 'imperial',
    description: 'The five chosen by the Emperor to wield aspects of his Will — bound to the five Kazemi through the Empiric Drive chain.',
    layout: {
      svgW: 1380,
      svgH: 460,
      nodes: [
        { id: 'irane',        x: 690,  y: 68,  size: 30 },
        { id: 'arai',         x: 160,  y: 215, size: 22 },
        { id: 'hope',         x: 415,  y: 215, size: 22 },
        { id: 'zoe',          x: 670,  y: 215, size: 22 },
        { id: 'summari',      x: 950,  y: 215, size: 22 },
        { id: 'nighla',       x: 1210, y: 215, size: 22 },
        { id: 'aliya_hallow', x: 160,  y: 390, size: 20 },
        { id: 'mira_ardent',  x: 415,  y: 390, size: 20 },
        { id: 'dokia_caedus', x: 670,  y: 390, size: 20 },
        { id: 'pandro_lexan', x: 950,  y: 390, size: 20 },
        { id: 'urial_ferran', x: 1210, y: 390, size: 20 },
      ],
      edges: [
        { from: 'irane', to: 'arai',    color: '#D4AF37', label: 'Mind / Time' },
        { from: 'irane', to: 'hope',    color: '#D4AF37', label: 'Heart / Space' },
        { from: 'irane', to: 'zoe',     color: '#D4AF37', label: 'Body / Life-Death' },
        { from: 'irane', to: 'summari', color: '#D4AF37', label: 'Arms / Creation' },
        { from: 'irane', to: 'nighla',  color: '#D4AF37', label: 'Arms / Destruction' },
        { from: 'arai',    to: 'aliya_hallow', color: '#1A3FBF', label: 'Spirits' },
        { from: 'hope',    to: 'mira_ardent',  color: '#CC1A1A', label: 'Emotions' },
        { from: 'zoe',     to: 'dokia_caedus', color: '#1A6B1A', label: 'Death' },
        { from: 'summari', to: 'pandro_lexan', color: '#20878A', label: 'Knowledge' },
        { from: 'nighla',  to: 'urial_ferran', color: '#177070', label: 'Guard' },
      ],
    },
  },

  vestarin: {
    label: 'House Wov',
    color: '#9b5de5',
    camp: 'grand',
    description: 'Grand Pillar I — historical protectors of the Tree of Eden (Gaia\'s Grand weapon), tracing to Exco Wov\'s Orius branch out of Eve Osiro and Exco\'s three Earth-born children (Lyra, Mara, Sael). The ancient Inquisition operated through the Oracle\'s Eye, served alongside House Apolo (spatial intelligence arm) and House Navar (Osiro\'s Alma guard) through the Orian era. The clan\'s current arc centers on Nex Wov, who led it under a Fest-era debt to Toma More until Aliya killed him — and on the birth-swap secret at its heart: Nex\'s public son Vesper is actually Kia Osiro\'s biological child, while Nex\'s biological daughter Taliya (who always knew) is the clan\'s rightful heir and now bears the reawakened Tree of Eden as Mother Nature. Vesper inherited the reforged Oracle\'s Eye instead, and the two "twins" — genuine full siblings to neither parent in the way the cover story claimed — now lead the clan\'s next generation together.',
    layout: {
      svgW: 1100,
      svgH: 780,
      nodes: [
        { id: 'wov_intel',   x: 250, y: 70, size: 16, type: 'gap',
          label: '~ Wov Inquisition — Oracle\'s Eye · Intelligence Operations ~' },
        { id: 'exco_wov',    x: 700, y: 70,  size: 24 },
        { id: 'eva_osiro',   x: 900, y: 70,  size: 22 },
        { id: 'lyra_wov',    x: 620, y: 190, size: 18 },
        { id: 'mara_wov',    x: 740, y: 190, size: 18 },
        { id: 'sael_wov',    x: 860, y: 190, size: 18 },
        { id: 'wov_gap',     x: 620, y: 310, type: 'gap', label: '~ Exco\'s Orius Branch · Many Generations ~' },
        { id: 'gaia_link',   x: 900, y: 310, size: 16,
          ghostName: 'Gaia (Mother Nature)', ghostColor: '#10CC70', ghostRole: 'Sealed within the Tree of Eden · Lyra\'s will, native expression', ghostInitial: 'G' },
        { id: 'nex_wov',     x: 480, y: 440, size: 24 },
        { id: 'kai_osiro',   x: 720, y: 440, size: 18 },
        { id: 'toma_more_link', x: 260, y: 440, size: 18,
          ghostName: 'Toma More', ghostColor: '#4A6E8A', ghostRole: 'Fest-era debt · clan served him under obligation', ghostInitial: 'T' },
        { id: 'aliya_link',  x: 480, y: 560, size: 16,
          ghostName: 'Aliya Hallow (Aliya Nexal)', ghostColor: '#e84855', ghostRole: 'Killed Nex and Kia · left Gaia + Cronus cores in Vesper\'s hands', ghostInitial: 'A' },
        { id: 'taliya_wov',  x: 340, y: 660, size: 26 },
        { id: 'vesper_wov',  x: 600, y: 660, size: 26 },
        { id: 'irane_link',  x: 800, y: 660, size: 16,
          ghostName: 'Irane', ghostColor: '#D4AF37', ghostRole: 'Personal teacher · reawakened Mother Nature · marked both with his student tattoo', ghostInitial: 'I' },
      ],
      edges: [
        { from: 'exco_wov',  to: 'eva_osiro', color: '#10CC70', dashed: true, label: 'Partners on Orius' },
        { from: 'exco_wov',  to: 'lyra_wov',  color: '#27AE60', label: 'Bloom Beast' },
        { from: 'eva_osiro', to: 'lyra_wov',  color: '#27AE60' },
        { from: 'exco_wov',  to: 'mara_wov',  color: '#6C3483', label: 'Ruin Beast' },
        { from: 'eva_osiro', to: 'mara_wov',  color: '#6C3483' },
        { from: 'exco_wov',  to: 'sael_wov',  color: '#95A5A6', label: 'Still Beast' },
        { from: 'eva_osiro', to: 'sael_wov',  color: '#95A5A6' },
        { from: 'exco_wov',  to: 'wov_gap',   color: '#10CC70', dashed: true, label: 'Orius branch · Tree of Eden' },
        { from: 'lyra_wov',  to: 'gaia_link', color: '#10CC70', dashed: true, label: 'Native expression sealed within the Tree' },
        { from: 'wov_gap',   to: 'nex_wov',   color: '#10CC70', label: 'Current era · Head of Clan Wov' },
        { from: 'toma_more_link', to: 'nex_wov', color: '#4A6E8A', dashed: true, label: 'Fest-era debt · resented, still paid' },
        { from: 'nex_wov',   to: 'taliya_wov', color: '#10CC70', label: 'Biological daughter · eldest · heir by birthright' },
        { from: 'nex_wov',   to: 'vesper_wov', color: '#9b5de5', dashed: true, label: 'Raised as son (cover story) · not biological' },
        { from: 'kai_osiro', to: 'vesper_wov', color: '#9b5de5', dashed: true, label: 'True biological mother · secret until Part 8.2' },
        { from: 'aliya_link', to: 'kai_osiro', color: '#e84855', dashed: true, label: 'Killed alongside Nex, in front of Vesper' },
        { from: 'aliya_link', to: 'nex_wov',  color: '#e84855', dashed: true, label: 'Killed on Arai\'s order, in front of Vesper' },
        { from: 'aliya_link', to: 'vesper_wov', color: '#9b5de5', dashed: true, label: 'Left the awakened Gaia + Cronus cores in his hands' },
        { from: 'taliya_wov', to: 'vesper_wov', color: '#9b5de5', label: 'Raised as twins · Taliya always knew the truth' },
        { from: 'irane_link', to: 'taliya_wov', color: '#D4AF37', dashed: true, label: 'Trained her one month · gifted reforged Mother Nature' },
        { from: 'irane_link', to: 'vesper_wov', color: '#D4AF37', dashed: true, label: 'Trained him in Mira\'s program · earned the Oracle\'s Eye' },
      ],
    },
  },

  lucerne: {
    label: 'Clan Lucerne',
    color: '#D4460A',
    camp: 'aura',
    description: 'Grand Family of the Lucerne continent. The oldest Alma bloodline — Terrans who accepted Ferali beast-contracts at full depth. Wielders of Morningfall (13th Realm). Led by Azen Lucerne from Ashgard. His two children, Droom and Azura, are the sole survivors of the "Survival of the Fittest" Culling that killed their siblings. Droom wields the Eclipse Beast as Vraka\'s chosen warrior — her cross-house child with Olda Apolo, Evin, is raised within House Navar (see the Navar tree).',
    layout: {
      svgW: 800,
      svgH: 420,
      nodes: [
        { id: 'azen_lucerne', x: 400, y: 100, size: 28 },
        { id: 'droom_lucerne', x: 280, y: 260, size: 24 },
        { id: 'azura_lucerne', x: 520, y: 260, size: 22 },
        { id: 'evin_link',    x: 280, y: 380, size: 16,
          ghostName: 'Evin Navar', ghostColor: '#1A6B1A', ghostRole: 'Son with Olda Apolo · raised in House Navar · see Navar tree', ghostInitial: 'E' },
      ],
      edges: [
        { from: 'azen_lucerne', to: 'droom_lucerne', color: '#D4460A', label: 'Daughter · Culling survivor · Eclipse Beast' },
        { from: 'azen_lucerne', to: 'azura_lucerne', color: '#D4460A', label: 'Son · Culling survivor' },
        { from: 'droom_lucerne', to: 'azura_lucerne', color: '#D4460A', dashed: true, label: 'Siblings · the only two of Azen\'s children to survive the Culling' },
        { from: 'droom_lucerne', to: 'evin_link', color: '#9B30FF', dashed: true, label: 'Cross-house son with Olda Apolo · raised as Navar' },
      ],
    },
  },

  seraph: {
    label: 'Clan Seraph',
    color: '#C8C0FF',
    camp: 'force',
    description: 'Grand Family of the Seraph continent. The oldest Spirit bloodline — Terrans who accepted Celestial tool-contracts as divine mandates. Wielders of Covenant Seraph (14th Realm). Led by Elorah Seraph from Seraphel. Her son Tenma wields Tevan\'s Edict as a personal gift rather than an inherited Grand Table seat, and is himself father to Pino Seraph — whose cross-house union with Olda Apolo produced Edge Apolo (see the Apolo tree).',
    layout: {
      svgW: 800,
      svgH: 480,
      nodes: [
        { id: 'elorah_seraph', x: 400, y: 90,  size: 28 },
        { id: 'tenma_seraph',  x: 400, y: 230, size: 22 },
        { id: 'pino_seraph',   x: 400, y: 350, size: 20 },
        { id: 'edge_link',     x: 400, y: 450, size: 16,
          ghostName: 'Edge Apolo', ghostColor: '#E87B22', ghostRole: 'Son with Olda Apolo · raised in House Apolo · see Apolo tree', ghostInitial: 'E' },
      ],
      edges: [
        { from: 'elorah_seraph', to: 'tenma_seraph', color: '#C8C0FF', label: 'Son · wields Tevan\'s Edict as a personal gift' },
        { from: 'tenma_seraph',  to: 'pino_seraph',  color: '#C8C0FF', label: 'Father' },
        { from: 'pino_seraph',   to: 'edge_link',    color: '#E87B22', dashed: true, label: 'Cross-house son with Olda Apolo' },
      ],
    },
  },

  osiro: {
    label: 'Clan Osiro',
    color: '#00b4d8',
    camp: 'grand',
    description: 'Grand Pillar II — Treasury. Founded by Ember Vane (ember_hist), who reclaimed the Osiro surname as an act of defiance against House Vane. Ember A. Osiro is her modern descendant and current clan leader — cousin to Kai Osiro (Heaven-branch head) through twin-sister mothers neither knew about until Ember went looking (Part 8). Kia Osiro, another Heaven-branch head serving Toma More under the same Fest-era debt as Nex Wov, carries the clan\'s deepest secret: Vesper Wov is her biological son, swapped at birth to spare her the scandal of an unmarried pregnancy — a link that ties the clan directly to House Wov\'s current leadership (see the Wov tree). Ember\'s own children span three fathers: the secret son she bore Irane (Irane E. Osiro Jr., raised under the Kazemi name to hide his parentage), and Isaac More and Artemis Osiro, born of Alex More after Aevum took his body — both cross-listed in Clan More. The clan is no longer a quiet gap between eras; it is the center of the current arc\'s succession stakes.',
    layout: {
      svgW: 1200,
      svgH: 640,
      nodes: [
        { id: 'ember_hist',     x: 220, y: 60,  size: 22, dim: true },
        { id: 'osiro_gap',      x: 220, y: 190, type: 'gap', label: '~ Osiro Bloodline — Many Generations ~' },
        { id: 'ember_osiro',    x: 220, y: 320, size: 26 },
        { id: 'kai_osiro',      x: 460, y: 320, size: 20 },
        { id: 'vesper_wov_link', x: 700, y: 400, size: 18,
          ghostName: 'Vesper Wov', ghostColor: '#9b5de5', ghostRole: 'Kia\'s secret biological son · raised in House Wov · see Wov tree', ghostInitial: 'V' },
        { id: 'nex_wov_link',   x: 460, y: 460, size: 18,
          ghostName: 'Nex Wov', ghostColor: '#10CC70', ghostRole: 'Kia\'s clan-debt counterpart · Head of House Wov · see Wov tree', ghostInitial: 'N' },
        { id: 'alex_more_link', x: 20,  y: 460, size: 18,
          ghostName: 'Alex More / Aevum', ghostColor: '#4A6E8A', ghostRole: 'Father of Isaac & Artemis · possessed by Aevum · see More tree', ghostInitial: 'A' },
        { id: 'irane_e_osiro',  x: 220, y: 560, size: 24 },
        { id: 'isaac_more',     x: 20,  y: 560, size: 20 },
        { id: 'artemis_osiro',  x: 420, y: 560, size: 22 },
      ],
      edges: [
        { from: 'ember_hist',    to: 'osiro_gap',     color: '#CC5500', dashed: true, label: 'Ember Vane → took Osiro name · Founded clan' },
        { from: 'osiro_gap',     to: 'ember_osiro',   color: '#00b4d8' },
        { from: 'ember_osiro',   to: 'kai_osiro',     color: '#00b4d8', label: 'Cousins · mothers were twin sisters (secret until Part 8)' },
        { from: 'osiro_gap',     to: 'kai_osiro',     color: '#00b4d8', dashed: true, label: 'Heaven-branch head · Fest-era debt to Toma More' },
        { from: 'kai_osiro',     to: 'vesper_wov_link', color: '#9b5de5', dashed: true, label: 'Secret biological son · swapped at birth · raised by Nex Wov' },
        { from: 'kai_osiro',     to: 'nex_wov_link',  color: '#10CC70', dashed: true, label: 'Fest-era debt to Toma More · shared with Nex' },
        { from: 'ember_osiro',   to: 'irane_e_osiro', color: '#9b5de5', dashed: true, label: 'Secret son by Irane · surname kept Kazemi to hide parentage · Shadow of the Emperor' },
        { from: 'ember_osiro',   to: 'isaac_more',    color: '#4A6E8A', label: 'Son by Alex More/Aevum · favored heir, being groomed as a vessel' },
        { from: 'ember_osiro',   to: 'artemis_osiro', color: '#00b4d8', label: 'Daughter by Alex More/Aevum · overlooked heir · future clan leader' },
        { from: 'alex_more_link', to: 'isaac_more',   color: '#4A6E8A', dashed: true, label: 'Father (possessed by Aevum)' },
        { from: 'alex_more_link', to: 'artemis_osiro', color: '#4A6E8A', dashed: true },
        { from: 'isaac_more',    to: 'irane_e_osiro', color: '#9b5de5', dashed: true, label: 'Half-siblings through Ember · Isaac\'s one unbeaten rival' },
        { from: 'artemis_osiro', to: 'irane_e_osiro', color: '#00b4d8', dashed: true, label: 'Half-siblings through Ember · planned co-leaders of Clan Osiro' },
        { from: 'isaac_more',    to: 'artemis_osiro', color: '#4A6E8A', label: 'Full siblings · sharply unequal attention' },
      ],
    },
  },

  more: {
    label: 'Clan More',
    color: '#4A6E8A',
    camp: 'primal',
    description: 'The last great Primal house — predating the Arke twins, the Ferali system, and all contracts. Both More and Vane hold the world\'s full origin truth from opposite sides. Cith More recovered the cores of the Tree of Eden and Book of Time after the Fest massacre, ensuring the Grand weapons survived. The arms race between More and Vane is the silent war beneath the Sol-Nexus\'s surface. Toma\'s line runs three ways: Abe (public clan leader), Evelyn (fled to Earth, secretly Zoe\'s aunt through Tan Navar), and Alex — the eldest, sincere and unlucky in love, whose body Aevum took over after killing Toma at the assault on Heaven. Alex/Aevum then fathered Isaac More and Artemis Osiro with Ember Osiro; both children are cross-listed in the Osiro tree as heirs of that clan through their mother.',
    layout: {
      svgW: 1060,
      svgH: 780,
      nodes: [
        { id: 'primal_era',  x: 530, y: 40, type: 'gap', label: '~ Primal Age · Pre-Arke · Keepers of What Was Lost ~' },
        { id: 'cycla_more',  x: 260, y: 150, size: 28 },
        { id: 'arke_ghost',  x: 800, y: 150, size: 22,
          ghostName: 'Arke Twins', ghostColor: '#E05050', ghostRole: 'Vrak & Selis — The War', ghostInitial: '✕' },
        { id: 'cith_more',   x: 260, y: 300, size: 26 },
        { id: 'vane_ghost',  x: 800, y: 300, size: 22,
          ghostName: 'House Vane', ghostColor: '#e84855', ghostRole: 'Bitter Rival · Arms Race · Other half of the full truth', ghostInitial: 'V' },
        { id: 'toma_more',   x: 260, y: 420, size: 22 },
        { id: 'abe_more',    x: 90,  y: 540, size: 24 },
        { id: 'evelyn_more', x: 280, y: 540, size: 20 },
        { id: 'alex_more',   x: 470, y: 540, size: 22 },
        { id: 'aevum_ghost', x: 700, y: 540, size: 18,
          ghostName: 'Aevum', ghostColor: '#D4AF37', ghostRole: 'Killed Toma · possessed Alex\'s body at the assault on Heaven', ghostInitial: 'A' },
        { id: 'ember_osiro_link', x: 470, y: 660, size: 18,
          ghostName: 'Ember A. Osiro', ghostColor: '#00b4d8', ghostRole: 'Mother of Isaac & Artemis · see Osiro tree', ghostInitial: 'E' },
        { id: 'isaac_more',    x: 350, y: 720, size: 20 },
        { id: 'artemis_osiro', x: 590, y: 720, size: 20 },
      ],
      edges: [
        { from: 'arke_ghost', to: 'cycla_more', color: '#E05050', dashed: true, label: 'Arke War · The Hunt' },
        { from: 'cycla_more', to: 'cith_more',  color: '#4A6E8A', label: 'Daughter · The Inheritor' },
        { from: 'cith_more',  to: 'toma_more',  color: '#4A6E8A', dashed: true, label: 'Son · public lineage continuation' },
        { from: 'cith_more',  to: 'vane_ghost', color: '#e84855', dashed: true, label: 'Arms Race · Both hold the full truth · Neither can expose the other' },
        { from: 'toma_more',  to: 'abe_more',   color: '#4A6E8A', label: 'Daughter · 2nd daughter · Current clan leader' },
        { from: 'toma_more',  to: 'evelyn_more',color: '#C97064', label: 'Daughter · born on Earth · goes by Eve' },
        { from: 'toma_more',  to: 'alex_more',  color: '#4A6E8A', label: 'Eldest son · killed by Aevum, body taken' },
        { from: 'aevum_ghost', to: 'alex_more', color: '#D4AF37', dashed: true, label: 'Possession — Alex does not survive it' },
        { from: 'alex_more',  to: 'ember_osiro_link', color: '#4A6E8A', dashed: true, label: 'Forced union to secure Osiro succession' },
        { from: 'alex_more',  to: 'isaac_more', color: '#4A6E8A', label: 'Son · favored heir, secretly groomed as a vessel' },
        { from: 'alex_more',  to: 'artemis_osiro', color: '#00b4d8', label: 'Daughter · overlooked heir · future Osiro clan leader' },
        { from: 'ember_osiro_link', to: 'isaac_more', color: '#00b4d8', dashed: true },
        { from: 'ember_osiro_link', to: 'artemis_osiro', color: '#00b4d8', dashed: true },
        { from: 'isaac_more', to: 'artemis_osiro', color: '#4A6E8A', label: 'Full siblings · sharply unequal attention' },
      ],
    },
  },
  prescian: {
    label: 'Clan Prescian',
    color: '#9B9BAF',
    camp: 'primal',
    description: 'Major surviving Primal sovereign clan — Time Sovereign in its true, unreduced form. They do not participate in the Grand Table and hold no Noble weapon seat. Outside the Ferali and Celestial systems entirely. Sofia married Pandro Lexan at 8\'s direct order; he took the Prescian name and now leads the clan alongside her as Grand-Sage of Apexia, with their two children, Sethma and Julia, the newest generation.\n\nSovereign Ability — True Time Expression: To a Prescian elder, the past is not memory — it is present. Every ancestor who carried the ability left a complete record within the bloodline. A current Prescian can access the direct, unfiltered experience of any ancestor as vividly as their own present moment. The accumulated experience of an elder is staggering — they have lived, through lineage, longer than any individual in the Sol-Nexus.\n\nActive Ability — Temporal Compression: For brief durations, a Prescian compresses their personal experience of time — accelerating the mind through the present while the body continues at normal speed. Not freezing time. The cost scales with duration; extended use causes neurological degradation.\n\nCultural Role: The Prescians are the living archive of the Primal era. They remember what Limbo felt like before the Arke twins reshaped it, what the Primordials spoke about, what the 7 original Primal leaders were like as individuals. This knowledge is not shared openly. They have watched too many things get weaponised to give it away.',
    layout: {
      svgW: 800, svgH: 560,
      nodes: [
        { id: 'prescian_era',    x: 400, y: 50, type: 'gap', label: '~ Primal Age · Pre-Arke · Living Archive of the Pre-Arke Age ~' },
        { id: 'sofia_prescian',  x: 280, y: 210, size: 28 },
        { id: 'audis_prescian',  x: 520, y: 210, size: 20 },
        { id: 'pandro_lexan',    x: 140, y: 330, size: 24 },
        { id: 'sethma_prescian', x: 260, y: 460, size: 18 },
        { id: 'julia_prescian',  x: 400, y: 460, size: 18 },
        { id: 'prescian_note',   x: 560, y: 330, type: 'gap', label: '~ Time Sovereign: Perfect ancestral memory · Temporal Compression · No Grand Table seat ~' },
      ],
      edges: [
        { from: 'sofia_prescian', to: 'prescian_note', color: '#9B9BAF', dashed: true, label: 'Time Sovereign — unreduced form' },
        { from: 'sofia_prescian', to: 'audis_prescian', color: '#7DA6C9', label: 'Cousin · city-defense branch · held Heaven during the assault' },
        { from: 'sofia_prescian', to: 'pandro_lexan',   color: '#D4AF37', label: 'Married by 8\'s direct order · he took the Prescian name · current Grand-Sage of Apexia and head of House Prescian' },
        { from: 'pandro_lexan',   to: 'sethma_prescian', color: '#9B9BAF', label: 'Son · eldest' },
        { from: 'pandro_lexan',   to: 'julia_prescian',  color: '#9B9BAF', label: 'Daughter' },
        { from: 'sofia_prescian', to: 'sethma_prescian', color: '#9B9BAF', dashed: true },
        { from: 'sofia_prescian', to: 'julia_prescian',  color: '#9B9BAF', dashed: true },
      ],
    },
  },
  revyn: {
    label: 'Clan Revyn',
    color: '#6B5472',
    camp: 'primal',
    description: 'Major surviving Primal sovereign clan — Life/Death Sovereign in its full, undivided form. They hold both sides of the threshold simultaneously. Outside the Grand Table, Ferali, and Celestial systems entirely. Evelyn More, Toma\'s daughter, is Nevir\'s partner and the current head of House Revyn — confirmed at the peace-talks reception as head of Apexia\'s hospital units as well. Their son, Nevir Revyn Jr., is the clan\'s newest generation.\n\nSovereign Ability — True Life/Death Expression: Clan Revyn commands unfinished death — those killed before their time did not fully cross. Their presence persists briefly in the space between states. A Revyn practitioner reaches into that space and pulls the body back into function, animating it with whatever remains of the original consciousness.\n\nThe Raised: What returns is not the person — it is a construct built from the remnant. Fidelity scales with time since death: hours-dead = near-complete capability, fragmented personality; years-dead = reduced capacity, mostly instinct; decades-dead = barely functional animating force. Willing deaths and deaths by old age leave nothing to reach.\n\nThe Cost: Every raising takes biological aging from the practitioner — actual years, not metaphor. Minor raisings cost weeks. Significant raisings cost years. The most powerful Revyn elders look three centuries older than they are. They consider this appropriate: life extracted from one vessel to animate another.\n\nCultural Role: Sacred wardens of the threshold. When someone significant dies near a Revyn settlement, the clan is contacted — not to raise indefinitely, but to speak briefly with what remains at the threshold and ensure the crossing was complete.',
    layout: {
      svgW: 800, svgH: 520,
      nodes: [
        { id: 'revyn_era',       x: 400, y: 50, type: 'gap', label: '~ Primal Age · Pre-Arke · Wardens of the Threshold ~' },
        { id: 'nevir_revyn',     x: 280, y: 210, size: 28 },
        { id: 'evelyn_more',     x: 520, y: 210, size: 24 },
        { id: 'nevir_revyn_jr',  x: 400, y: 340, size: 20 },
        { id: 'revyn_note',      x: 280, y: 460, type: 'gap', label: '~ Life/Death Sovereign: Command over unfinished death · Biological aging cost · No Grand Table seat ~' },
      ],
      edges: [
        { from: 'nevir_revyn', to: 'revyn_note',     color: '#6B5472', dashed: true, label: 'Life/Death Sovereign — undivided form' },
        { from: 'nevir_revyn', to: 'evelyn_more',    color: '#D4AF37', label: 'Partner · current head of House Revyn · head of hospital units, Apexia' },
        { from: 'nevir_revyn', to: 'nevir_revyn_jr', color: '#6B5472', label: 'Son' },
        { from: 'evelyn_more', to: 'nevir_revyn_jr', color: '#6B5472', dashed: true },
      ],
    },
  },
  consa: {
    label: 'Clan Consa',
    color: '#5F9EA0',
    camp: 'primal',
    description: 'Major Primal sovereign clan — dual Sovereign alignment: Space + Life/Death held simultaneously. The same rare dual-sovereign architecture as Zoe Navar\'s Life/Death-Nature, but Consa pairs Space with Life/Death. Outside the Grand Table and all contract systems.\n\nDual Sovereign — What the Intersection Produces: Space governs transit between positions. Life/Death governs the threshold between states of being. Together they produce command over the crossing itself — the liminal space where a consciousness moves from one vessel to another. The world calls it Transference. It is not a new element — it is the intersection of two Sovereigns that already exist.\n\nCore State — Harmonic Dark: Ordered, inward, precise, accumulative. Abilities build quietly before resolving with force. A Consa practitioner working at full capacity looks like nothing is happening until the crossing is already complete.\n\nActive Ability — Vessel Bridge: Opens a temporary guided pathway between two compatible vessels through which consciousness can move without violent collapse. At high mastery: can hold a consciousness stable mid-transit — suspended between departure and arrival — while the receiving vessel is prepared. This is what the six Earth Vessel Families\' six-stage pipeline approximates with multiple weapons and generations of doctrine. A Consa elder achieves it alone.\n\nMinia Consa: A Primal core inhabiting a human body — a transfer she performed on herself before the facility existed. She is the most personal proof of her clan\'s ability. Her daughters Summari (Beginning) and Nighla (End) are the two poles that define any crossing: what a consciousness is before it moves, and what it becomes after.\n\nLong alliance with Clan More: A Consa elder was always present when the More clan needed to verify sealed Primordial essence.',
    layout: {
      svgW: 1000, svgH: 560,
      nodes: [
        { id: 'consa_era',    x: 500, y: 45, type: 'gap', label: '~ Primal Age · Pre-Arke · Dual Sovereign: Space + Life/Death ~' },
        { id: 'consa_anc',    x: 280, y: 170, size: 26,
          ghostName: 'Clan Consa (ancient)', ghostColor: '#5F9EA0',
          ghostRole: 'Space / Life-Death dual Sovereign · Vessel Bridge masters', ghostInitial: 'C' },
        { id: 'more_link',    x: 720, y: 170, size: 22,
          ghostName: 'Clan More', ghostColor: '#4A6E8A',
          ghostRole: 'Long alliance · Consa authenticated More\'s sealed Primordial essence', ghostInitial: 'M' },
        { id: 'minia_consa',  x: 280, y: 340, size: 28 },
        { id: 'irane_link',   x: 500, y: 340, size: 22,
          ghostName: 'Irane Kazemi', ghostColor: '#D4AF37',
          ghostRole: 'Facility · biological father of Summari and Nighla', ghostInitial: 'I' },
        { id: 'summari_node', x: 150, y: 480, size: 22,
          ghostName: 'Summari Kazemi', ghostColor: '#D4AF37',
          ghostRole: 'Beginning · R.A.C / R.A.B · daughter of Minia', ghostInitial: 'S' },
        { id: 'nighla_node',  x: 420, y: 480, size: 22,
          ghostName: 'Nighla Kazemi', ghostColor: '#D4AF37',
          ghostRole: 'End · L.A.D / L.A.E · daughter of Minia', ghostInitial: 'N' },
        { id: 'namo_consa',   x: 780, y: 340, size: 22 },
        { id: 'pandro_lexan', x: 900, y: 460, size: 18 },
        { id: 'adorn_more',   x: 780, y: 460, size: 16, dim: true },
        { id: 'taalor_consa', x: 950, y: 200, size: 16 },
        { id: 'saren_consa',  x: 1000, y: 340, size: 14 },
        { id: 'cai',          x: 100, y: 480, size: 18 },
      ],
      edges: [
        { from: 'consa_anc',   to: 'minia_consa',  color: '#5F9EA0', label: 'Clan champion · Primal core in human body' },
        { from: 'consa_anc',   to: 'more_link',    color: '#4A6E8A', dashed: true, label: 'Alliance · authenticated Primordial seals' },
        { from: 'minia_consa', to: 'irane_link',   color: '#5F9EA0', dashed: true, label: 'Facility — biological children (secret)' },
        { from: 'minia_consa', to: 'summari_node', color: '#5F9EA0', dashed: true, label: 'Biological mother · Beginning' },
        { from: 'minia_consa', to: 'nighla_node',  color: '#5F9EA0', dashed: true, label: 'Biological mother · End' },
        { from: 'irane_link',  to: 'summari_node', color: '#D4AF37', dashed: true, label: 'Biological father' },
        { from: 'irane_link',  to: 'nighla_node',  color: '#D4AF37', dashed: true },
        { from: 'namo_consa',  to: 'minia_consa',  color: '#5F9EA0', label: '29th of 30 engineered children · deposed and tortured by her' },
        { from: 'namo_consa',  to: 'pandro_lexan', color: '#5F9EA0', dashed: true, label: '30th and last child — took his mother\'s name' },
        { from: 'namo_consa',  to: 'adorn_more',   color: '#3A1010', dashed: true, label: 'Hidden 30th-generation child — too dangerous to feed to the trial' },
        { from: 'minia_consa', to: 'adorn_more',   color: '#3A1010', dashed: true, label: 'Twins — his birth killed their mother' },
        { from: 'taalor_consa', to: 'minia_consa', color: '#8A7048', dashed: true, label: 'Senior researcher · resents Cai\'s rapid rise' },
        { from: 'saren_consa',  to: 'minia_consa', color: '#5A4A66', dashed: true, label: 'Junior researcher · fully loyal' },
        { from: 'cai',          to: 'minia_consa', color: '#5F8B6E', dashed: true, label: 'Head of Medical Research — secretly Arai, infiltrating from within' },
      ],
    },
  },
  navar: {
    label: 'House Navar',
    color: '#1A6B1A',
    camp: 'aura',
    description: 'Alma clan — Ferali beast-contract lineage from a hidden mountain region. Guardians of Clan Osiro and the Book of Time. Broken at the Fest when Exoo Navar was killed by Duki; post-Fest, House Navar was absorbed as a client clan of House Lucerne, bound to Azen Lucerne via the Chimera Core — the Aura-camp mirror of Apolo\'s binding to Seraph. The Navar line carries a secret connection to Clan More: Toma More fathered Tan Navar with a Navar woman during the Ascen-Primal war. Tan\'s core (Life/Death; Harmony-Light) muted the chaotic-dark expression — but it resurfaced two generations down in Zoe. Neither Zoe nor Toma knew they were related when they met in the facility. Duki Navar, Tan\'s brother and Zoe\'s uncle, betrayed the clan to Lucerne at the Fest and was given Grand Table Seat I (the Ruin Beast) for it; his son of record, Evin, is biologically Olda Apolo and Droom Lucerne\'s cross-house child, raised as a Navar regardless.',
    layout: {
      svgW: 1200,
      svgH: 680,
      nodes: [
        { id: 'toma_ghost',  x: 220,  y: 55, size: 22,
          ghostName: 'Toma More', ghostColor: '#4A6E8A', ghostRole: 'Secret biological father of Tan · Primal leader · More clan bloodline', ghostInitial: 'T' },
        { id: 'navar_anc',   x: 700,  y: 55, size: 22,
          ghostName: 'House Navar (ancient)', ghostColor: '#1A6B1A', ghostRole: 'Alma lineage · Ferali beast-contract · guardians of Osiro', ghostInitial: 'N' },
        { id: 'tan_navar',   x: 220,  y: 190, size: 22 },
        { id: 'duki_navar',  x: 60,   y: 330, size: 20 },
        { id: 'exoo_navar',  x: 380,  y: 190, size: 22 },
        { id: 'zoe',         x: 300,  y: 330, size: 26 },
        { id: 'aurora',      x: 200,  y: 460, size: 18 },
        { id: 'eon',         x: 310,  y: 460, size: 16 },
        { id: 'alpha',       x: 410,  y: 460, size: 16 },
        { id: 'osiro_guard', x: 900,  y: 190, size: 20,
          ghostName: 'Clan Osiro', ghostColor: '#00b4d8', ghostRole: 'Protected — guardians of the Book of Time · hunted by Lucerne', ghostInitial: 'O' },
        { id: 'more_link',   x: 900,  y: 330, size: 18,
          ghostName: 'Clan More bloodline', ghostColor: '#4A6E8A', ghostRole: 'Chaotic-dark skipped Tan (Harmony-Light) · resurfaced in Zoe', ghostInitial: 'M' },
        { id: 'evelyn_ghost', x: 60,   y: 55,  size: 18,
          ghostName: 'Evelyn More', ghostColor: '#C97064', ghostRole: 'Secret half-sister of Tan · born later on Earth · unknowingly Zoe\'s aunt', ghostInitial: 'E' },
        { id: 'olda_link',   x: 60,   y: 460, size: 16,
          ghostName: 'Olda Apolo', ghostColor: '#E87B22', ghostRole: 'Evin\'s biological father · see Apolo tree', ghostInitial: 'O' },
        { id: 'droom_link',  x: 60,   y: 540, size: 16,
          ghostName: 'Droom Lucerne', ghostColor: '#9B30FF', ghostRole: 'Evin\'s biological mother · Azen\'s daughter', ghostInitial: 'D' },
        { id: 'evin_navar',  x: 60,   y: 620, size: 20 },
      ],
      edges: [
        { from: 'toma_ghost', to: 'tan_navar',  color: '#4A6E8A', dashed: true, label: 'Secret father · Toma left before Tan was born · neither ever knew' },
        { from: 'toma_ghost', to: 'evelyn_ghost', color: '#C97064', dashed: true, label: 'Tan\'s half-sister · born decades later on Earth' },
        { from: 'evelyn_ghost', to: 'zoe',      color: '#C97064', dashed: true, label: 'Secret aunt · neither of them knows it' },
        { from: 'navar_anc',  to: 'tan_navar',  color: '#1A6B1A', dashed: true, label: 'Raised in Navar clan · took Navar name' },
        { from: 'navar_anc',  to: 'duki_navar', color: '#1A6B1A', dashed: true, label: 'Tan\'s brother · same clan generation' },
        { from: 'tan_navar',  to: 'exoo_navar', color: '#1A6B1A', label: 'Married · Exoo took Navar name' },
        { from: 'tan_navar',  to: 'zoe',        color: '#1A6B1A', label: 'Father · died before Zoe was born' },
        { from: 'exoo_navar', to: 'zoe',        color: '#1A6B1A', label: 'Mother · killed by Duki at the Fest' },
        { from: 'duki_navar', to: 'exoo_navar', color: '#e84855', dashed: true, label: 'Killed her at the Fest — she hesitated; he did not' },
        { from: 'zoe',        to: 'aurora',     color: '#9b5de5' },
        { from: 'zoe',        to: 'eon',        color: '#9b5de5' },
        { from: 'zoe',        to: 'alpha',      color: '#9b5de5' },
        { from: 'navar_anc',  to: 'osiro_guard', color: '#00b4d8', dashed: true, label: 'Alma guard of Osiro · protectors of Book of Time' },
        { from: 'toma_ghost', to: 'more_link',   color: '#4A6E8A', dashed: true, label: 'More chaotic-dark ran through Tan invisibly' },
        { from: 'more_link',  to: 'zoe',         color: '#4A6E8A', dashed: true, label: 'Resurfaces in Zoe — Life/Death chaotic-dark' },
        { from: 'duki_navar', to: 'evin_navar',  color: '#1A6B1A', label: 'Son of record · raised as Navar' },
        { from: 'olda_link',  to: 'evin_navar',  color: '#E87B22', dashed: true, label: 'True biological father' },
        { from: 'droom_link', to: 'evin_navar',  color: '#9B30FF', dashed: true, label: 'True biological mother' },
      ],
    },
  },

  nexal_house: {
    label: 'House Nexal',
    color: '#5b9bd5',
    camp: 'ascen',
    description: 'Time element bloodline — Arai\'s ancestor line. Founded by Noxa Nexal (daughter of Dulla Vane and Cith More, born on Orius). The Nexal bloodline\'s defining trait: inherited future-sight (Noxa\'s Game) — the ability to calculate and predict outcomes with exceptional precision. Serves Clan Vane openly as temporal intelligence. Allied within the Vane sphere with House Ardent (both descended from Noxa\'s sibling Darkki, though neither house publicly acknowledges the shared origin). Nexal reads the board forward; Ardent reads the room in real time. Tonga (clan leader, Academy era) — carried Noxa\'s Game in full; named Arai to the Vane household without hesitation, then was killed by his own son Tenza during the Academy assault. Arai has since won the clan headship outright from Tenza by conquest (Part 7), becoming the single most powerful actor in Orian formal politics — and its most isolated, with no allies inside her own new clan.\n\n**Current standing:** Arai — leader of the clan. Nina — right hand and heir apparent, having been ceded to Irane as a peace-gift after Acana while carrying Axola Vane\'s child, and since borne two more sons (Nara and Milo) as a Valariyan under Irane\'s household. Nara — a member of the clan household, Nina\'s first son.',
    layout: {
      svgW: 1100,
      svgH: 820,
      nodes: [
        { id: 'noxa_nexal',   x: 200,  y: 50,  size: 24 },
        { id: 'nexal_gap',    x: 200,  y: 190, type: 'gap', label: '~ Nexal Bloodline · Noxa\'s Game · Many Generations ~' },
        { id: 'tonga',        x: 200,  y: 310, size: 24 },
        { id: 'tenza',        x: 80,   y: 470, size: 22 },
        { id: 'arai',         x: 225,  y: 470, size: 26 },
        { id: 'nina',         x: 370,  y: 470, size: 22 },
        { id: 'vane_service', x: 640,  y: 160, size: 22,
          ghostName: 'Clan Vane', ghostColor: '#e84855', ghostRole: 'Served openly · Ascen temporal intelligence arm', ghostInitial: 'V' },
        { id: 'ardent_ally',  x: 950,  y: 160, size: 20,
          ghostName: 'House Ardent', ghostColor: '#8B2020', ghostRole: 'Sibling bloodline · Darkki Ardent = Noxa\'s brother · neither house knows the shared origin', ghostInitial: 'A' },
        { id: 'more_enemy',   x: 640,  y: 380, size: 18,
          ghostName: 'House More', ghostColor: '#4A6E8A', ghostRole: 'Enemy camp · Primal side · Noxa\'s mother is Cith More — secret irony', ghostInitial: 'M' },
        { id: 'axola_link',   x: 500,  y: 590, size: 16,
          ghostName: 'Axola Vane', ghostColor: '#e84855', ghostRole: 'Nina\'s forced husband · see Vane tree', ghostInitial: 'A' },
        { id: 'irane_link',   x: 370,  y: 620, size: 16,
          ghostName: 'Irane', ghostColor: '#D4AF37', ghostRole: 'Received Nina as an Acana peace-gift · father of Nara and Milo', ghostInitial: 'I' },
        { id: 'nara_nexal',   x: 300,  y: 730, size: 18 },
        { id: 'milo_nexal',   x: 440,  y: 730, size: 18 },
      ],
      edges: [
        { from: 'noxa_nexal',   to: 'nexal_gap',    color: '#5b9bd5', label: 'Founded Nexal bloodline · Noxa\'s Game begins' },
        { from: 'nexal_gap',    to: 'tonga',        color: '#5b9bd5', label: 'Tonga — clan leader · Time-light · carried Noxa\'s Game in full' },
        { from: 'tonga',        to: 'tenza',        color: '#5b9bd5', label: 'Eldest · Noxa\'s Game inherited · betrayer · killed Tonga, took the clan' },
        { from: 'tonga',        to: 'arai',         color: '#5b9bd5', label: 'Named her to Vane household without hesitation · took Kazemi name' },
        { from: 'tonga',        to: 'nina',         color: '#5b9bd5', label: 'Youngest · Time-stream swimmer · major future role' },
        { from: 'arai',         to: 'tenza',        color: '#9b5de5', dashed: true, label: 'Won clan headship from him by conquest (Part 7) · Arai now clan leader' },
        { from: 'arai',         to: 'nina',         color: '#D4AF37', dashed: true, label: 'Right hand and heir apparent to the clan leadership' },
        { from: 'noxa_nexal',   to: 'vane_service', color: '#e84855', dashed: true, label: 'Serves Vane · temporal intel arm' },
        { from: 'noxa_nexal',   to: 'ardent_ally',  color: '#8B2020', dashed: true, label: 'Sibling bloodline — Darkki is Noxa\'s brother' },
        { from: 'vane_service', to: 'more_enemy',   color: '#4A6E8A', dashed: true, label: 'Ascen vs Primal — Noxa\'s mother was Cith More' },
        { from: 'axola_link',   to: 'nina',         color: '#e84855', dashed: true, label: 'Forced marriage · freed by Arai\'s duel victory' },
        { from: 'irane_link',   to: 'nina',         color: '#D4AF37', dashed: true, label: 'Ceded to him as an Acana peace-gift, pregnant with Axola\'s child' },
        { from: 'nina',         to: 'nara_nexal',   color: '#5b9bd5', label: 'First son · simultaneous vessel-transfer birth · household member' },
        { from: 'nina',         to: 'milo_nexal',   color: '#5b9bd5', label: 'Second son · born after her Valariyan induction' },
      ],
    },
  },

  ardent: {
    label: 'House Ardent',
    color: '#8B2020',
    camp: 'ascen',
    description: 'Bloodline founded by Darkki Ardent — first child of Dulla Vane and Cith More, born in secret on Orius. Darkki\'s sister Noxa Nexal founded the Nexal bloodline simultaneously — both houses descend from the same parents. House Ardent\'s defining inherited ability: full spatial omniscience across any space (every person\'s exact position, movement, and presence known simultaneously). Aevum used "House Ardent" as a public cover identity without knowing Dulla\'s secret family had already established it. Tola Ardent is the current leader — Hope\'s secret biological father, and father of two acknowledged children, Mira and Tunde, both unknowingly bred as Aevum\'s instruments. Mira and Tola are, as of the current arc, openly enemies; Tunde nearly lost his life pulling Tola out of the second siege of Paradise.',
    layout: {
      svgW: 1300,
      svgH: 760,
      nodes: [
        { id: 'dulla_vane',    x: 200,  y: 70,  size: 26 },
        { id: 'cith_more',     x: 500,  y: 70,  size: 24 },
        { id: 'darkki_ardent', x: 350,  y: 200, size: 26 },
        { id: 'ardent_gap',    x: 350,  y: 340, type: 'gap', label: '~ Ardent Bloodline · Spatial Omniscience · Generations ~' },
        { id: 'tola_ardent',   x: 350,  y: 480, size: 28 },
        { id: 'hope_secret',   x: 750,  y: 480, size: 20,
          ghostName: 'Hope (Secret)', ghostColor: '#c0a850', ghostRole: 'Hope Apolo — secret daughter of Tola · hidden Ardent ability · activated at the Fest', ghostInitial: '?' },
        { id: 'aevum_cover',   x: 900,  y: 200, size: 22,
          ghostName: 'Aevum (Cover)', ghostColor: '#D4AF37', ghostRole: 'Used House Ardent as cover identity — unknowingly founded on Dulla\'s secret family', ghostInitial: 'A' },
        { id: 'nexal_sibling', x: 900,  y: 340, size: 20,
          ghostName: 'House Nexal', ghostColor: '#5b9bd5', ghostRole: 'Sibling bloodline — Noxa Nexal = Darkki\'s sister · same parents', ghostInitial: 'N' },
        { id: 'mira_ardent',   x: 190,  y: 620, size: 22 },
        { id: 'tunde_ardent',  x: 480,  y: 620, size: 20 },
      ],
      edges: [
        { from: 'dulla_vane',    to: 'darkki_ardent', color: '#8B2020', secret: true, label: 'First child with Cith More · born on Orius in secret' },
        { from: 'cith_more',     to: 'darkki_ardent', color: '#4A6E8A', secret: true, label: 'First child with Dulla · Primal blood in the Ardent line' },
        { from: 'darkki_ardent', to: 'ardent_gap',    color: '#8B2020', label: 'Founded Ardent bloodline · spatial omniscience begins' },
        { from: 'ardent_gap',    to: 'tola_ardent',   color: '#8B2020', label: 'Current leader — great-great-grandson of Darkki' },
        { from: 'tola_ardent',   to: 'hope_secret',   color: '#c0a850', dashed: true, label: 'Secret father · Hope does not know' },
        { from: 'darkki_ardent', to: 'aevum_cover',   color: '#D4AF37', dashed: true, label: 'Aevum used the Ardent name as cover — never knew Dulla founded the bloodline' },
        { from: 'darkki_ardent', to: 'nexal_sibling', color: '#5b9bd5', dashed: true, label: 'Noxa Nexal = Darkki\'s sister · both born of Dulla + Cith' },
        { from: 'tola_ardent',   to: 'mira_ardent',   color: '#e84855', label: 'Daughter · now openly his enemy · Leader of the Valariyan Heads' },
        { from: 'tola_ardent',   to: 'tunde_ardent',  color: '#8B2020', label: 'Son · pulled Tola from the second siege of Paradise at the cost of his own arm' },
      ],
    },
  },

  apolo: {
    label: 'House Apolo',
    color: '#E87B22',
    camp: 'force',
    description: 'Space core clan — Spirit/Force aligned. Spatial intelligence arm of House Wov\'s Inquisition. Wield the Dimensional Shear (Celestial Force covenant); post-Fest, also bound to House Seraph via the Covenant Seal, gifted by Elorah Seraph. Hope was born Hope Apolo, daughter of clan leader Dima Apolo and (secretly) Tola Ardent; she took the Kazemi name when she became Emperor Irane\'s second wife and matriarch. Dima\'s own brother Olda betrayed the clan and the Fest alliance to House Lucerne and Seraph out of resentment at being passed over for leadership — Dima died in the massacre he sold out. Olda went on to father cross-house children with both Droom Lucerne (Evin Navar) and Pino Seraph (Edge Apolo). House Apolo and House Naval are sister houses in function: Apolo provides Force-tool spatial intelligence for Wov; Naval provides Alma-beast enforcement for Osiro.',
    layout: {
      svgW: 1200,
      svgH: 640,
      nodes: [
        { id: 'apolo_anc',  x: 200,  y: 70,  size: 26,
          ghostName: 'House Apolo (ancient)', ghostColor: '#E87B22', ghostRole: 'Space Core · Dimensional Shear · Celestial Force · pre-Merge', ghostInitial: 'A' },
        { id: 'apolo_gap',  x: 200,  y: 210, type: 'gap', label: '~ Apolo Bloodline · Dimensional Shear Contract · Many Generations ~' },
        { id: 'dima_apolo', x: 200,  y: 320, size: 24 },
        { id: 'olda_apolo', x: 430,  y: 320, size: 20 },
        { id: 'hope',       x: 200,  y: 440, size: 26 },
        { id: 'nova',       x: 80,   y: 540, size: 20 },
        { id: 'law',        x: 200,  y: 540, size: 18 },
        { id: 'faith',      x: 320,  y: 540, size: 16 },
        { id: 'tola_ardent', x: 30,  y: 320, size: 22 },
        { id: 'droom_lucerne', x: 550, y: 440, size: 18 },
        { id: 'evin_navar', x: 430,  y: 540, size: 18 },
        { id: 'pino_seraph', x: 700, y: 440, size: 18,
          ghostName: 'Pino Seraph', ghostColor: '#C8C0FF', ghostRole: 'Cross-house union with Olda · father of Edge Apolo', ghostInitial: 'P' },
        { id: 'edge_apolo', x: 650,  y: 540, size: 18 },
        { id: 'wov_ally',   x: 940,  y: 160, size: 22,
          ghostName: 'House Wov', ghostColor: '#9b5de5', ghostRole: 'Serves — spatial intel arm · Dimensional Shear operations', ghostInitial: 'W' },
        { id: 'naval_pair', x: 1080, y: 300, size: 20,
          ghostName: 'House Naval', ghostColor: '#4A4A6A', ghostRole: 'Sister house — Naval (Alma beast) serves Osiro · Apolo (Force tool) serves Wov', ghostInitial: 'N' },
        { id: 'osiro_link', x: 1080, y: 440, size: 18,
          ghostName: 'Clan Osiro', ghostColor: '#00b4d8', ghostRole: 'Indirect — Naval\'s principal · paired with Wov sphere', ghostInitial: 'O' },
      ],
      edges: [
        { from: 'apolo_anc', to: 'apolo_gap',  color: '#E87B22', dashed: true },
        { from: 'apolo_gap', to: 'dima_apolo', color: '#E87B22', label: 'Clan leader · protector of the Tree of Eden' },
        { from: 'apolo_gap', to: 'olda_apolo', color: '#E87B22', label: 'Dima\'s brother · passed over for leadership' },
        { from: 'dima_apolo', to: 'hope',      color: '#E87B22', label: 'Mother · died at the Fest before Hope knew her' },
        { from: 'tola_ardent', to: 'hope',     color: '#c0a850', dashed: true, label: 'Secret biological father · Hope does not know · Ardent bloodline' },
        { from: 'tola_ardent', to: 'dima_apolo', color: '#c0a850', dashed: true, label: 'Private relationship · produced Hope · secret died with Dima at the Fest' },
        { from: 'olda_apolo', to: 'dima_apolo', color: '#e84855', dashed: true, label: 'Betrayed her and the Fest alliance to Lucerne and Seraph out of resentment' },
        { from: 'hope',      to: 'nova',       color: '#CC1A1A' },
        { from: 'hope',      to: 'law',        color: '#CC1A1A' },
        { from: 'hope',      to: 'faith',      color: '#CC1A1A' },
        { from: 'olda_apolo', to: 'evin_navar', color: '#9B30FF', label: 'Cross-house son with Droom Lucerne · Arch-Demon general' },
        { from: 'droom_lucerne', to: 'evin_navar', color: '#9B30FF' },
        { from: 'olda_apolo', to: 'edge_apolo', color: '#C8C0FF', label: 'Cross-house son with Pino Seraph · Arch-Angel general' },
        { from: 'pino_seraph', to: 'edge_apolo', color: '#C8C0FF' },
        { from: 'evin_navar', to: 'edge_apolo', color: '#8B2020', dashed: true, label: 'Half-siblings through Olda' },
        { from: 'apolo_anc', to: 'wov_ally',   color: '#9b5de5', dashed: true, label: 'Wov spatial intel · Spirit tool arm of Inquisition' },
        { from: 'apolo_anc', to: 'naval_pair', color: '#4A4A6A', dashed: true, label: 'Sister house — tool (Apolo) + beast (Naval)' },
        { from: 'naval_pair', to: 'osiro_link', color: '#00b4d8', dashed: true, label: 'Naval serves Osiro' },
      ],
    },
  },

  naval: {
    label: 'House Naval',
    color: '#4A4A6A',
    camp: 'aura',
    description: 'Death–life core clan — Alma/Ferali beast-contract aligned. Enforcement arm of Clan Osiro. Wield the Hollow Dirge — a vast wraith-entity whose ambient life-drain field is permanently active; its life-drain aura is always on, making Naval operatives passively lethal in proximity. Osiro\'s Treasury records are kept honest partly because Naval stands behind them. Paired with House Apolo as sister houses: Apolo provides Force-tool spatial intelligence for Wov; Naval provides Alma-beast enforcement for Osiro. The current Naval head\'s identity is not publicly confirmed — Naval operates in enforcer silence.',
    layout: {
      svgW: 1100,
      svgH: 500,
      nodes: [
        { id: 'naval_anc',    x: 200,  y: 70,  size: 26,
          ghostName: 'House Naval (ancient)', ghostColor: '#4A4A6A', ghostRole: 'Death-Life Core · Hollow Dirge Beast · Ferali Alma side', ghostInitial: 'N' },
        { id: 'naval_gap',    x: 200,  y: 210, type: 'gap', label: '~ Naval Bloodline · Hollow Dirge Contract · Many Generations ~' },
        { id: 'naval_head',   x: 200,  y: 360, size: 22,
          ghostName: 'Current Naval Head', ghostColor: '#4A4A6A', ghostRole: 'Identity unconfirmed · Hollow Dirge bearer · Osiro enforcer', ghostInitial: '?' },
        { id: 'osiro_ally', x: 630,  y: 160, size: 22,
          ghostName: 'Clan Osiro', ghostColor: '#00b4d8', ghostRole: 'Serves — Alma beast enforcement · Treasury mandate', ghostInitial: 'O' },
        { id: 'apolo_pair', x: 980,  y: 160, size: 20,
          ghostName: 'House Apolo', ghostColor: '#E87B22', ghostRole: 'Sister house — Apolo (Force tool) serves Wov · Naval (Alma beast) serves Osiro', ghostInitial: 'A' },
        { id: 'wov_link',   x: 800,  y: 360, size: 18,
          ghostName: 'House Wov', ghostColor: '#9b5de5', ghostRole: 'Indirect — Apolo\'s principal · paired with Osiro sphere', ghostInitial: 'W' },
      ],
      edges: [
        { from: 'naval_anc',  to: 'naval_gap',   color: '#4A4A6A', dashed: true },
        { from: 'naval_gap',  to: 'naval_head',  color: '#4A4A6A', label: 'Current era · bearer of the Hollow Dirge' },
        { from: 'naval_head', to: 'osiro_ally',  color: '#00b4d8', dashed: true, label: 'Active service · Osiro Treasury enforcement' },
        { from: 'naval_anc',  to: 'apolo_pair',  color: '#E87B22', dashed: true, label: 'Sister house — beast + tool complement' },
        { from: 'apolo_pair', to: 'wov_link',    color: '#9b5de5', dashed: true, label: 'Apolo serves Wov' },
      ],
    },
  },

  noble_clans: {
    label: 'Noble Clans — Grand Table',
    color: '#D4AF37',
    camp: 'grand',
    description: 'Six Primal Original 7 clans once held Grand Table Seats I–VI: Vael, Ashveil, and Nullar under House Lucerne (Vrak group, beast weapons); Sovenne, Kethis, and Tevanis under House Seraph (Selis group, tool weapons forged from defeated Primal champions). All six bloodlines are extinct — spent as Arke-loyal shock troops across the centuries of continued Primal suppression that followed the twins\' victory. Seats I and IV have since been personally granted to individuals with no blood tie to the original clans: Duki Navar (Ruin Beast, Seat I) and Olda Apolo (Sova\'s Chain, Seat IV). Seats II, III, V, and VI remain vacant.',
    layout: {
      svgW: 1300,
      svgH: 460,
      nodes: [
        { id: 'azen_lucerne',  x: 325,  y: 60,  size: 26 },
        { id: 'duki_navar',    x: 80,   y: 240, size: 22 },
        { id: 'ashveil_ghost', x: 280,  y: 240, size: 20,
          ghostName: 'Clan Ashveil (extinct)', ghostColor: '#9B30FF', ghostRole: 'Eclipse Beast · Seat II · Vacant', ghostInitial: 'A' },
        { id: 'nullar_ghost',  x: 480,  y: 240, size: 20,
          ghostName: 'Clan Nullar (extinct)', ghostColor: '#9B30FF', ghostRole: 'Erasure Beast · Seat III · Vacant', ghostInitial: 'N' },
        { id: 'elorah_seraph', x: 980,  y: 60,  size: 26 },
        { id: 'olda_apolo',    x: 760,  y: 240, size: 22 },
        { id: 'kethis_ghost',  x: 960,  y: 240, size: 20,
          ghostName: 'Clan Kethis (extinct)', ghostColor: '#D4AF37', ghostRole: "Keth's Brand · Seat V · Vacant", ghostInitial: 'K' },
        { id: 'tevanis_ghost', x: 1160, y: 240, size: 20,
          ghostName: 'Clan Tevanis (extinct)', ghostColor: '#D4AF37', ghostRole: "Tevan's Edict · Seat VI · Vacant", ghostInitial: 'T' },
        { id: 'table_center',  x: 650,  y: 400, type: 'gap', label: '~ Grand Table Seats I–VI · Vael/Ashveil/Nullar and Sovenne/Kethis/Tevanis all extinct ~' },
      ],
      edges: [
        { from: 'azen_lucerne',  to: 'duki_navar',    color: '#9B30FF', label: 'Ruin Beast · Seat I · granted after the Fest, no Vael blood' },
        { from: 'azen_lucerne',  to: 'ashveil_ghost',  color: '#9B30FF', label: 'Eclipse Beast · Seat II' },
        { from: 'azen_lucerne',  to: 'nullar_ghost',   color: '#9B30FF', label: 'Erasure Beast · Seat III' },
        { from: 'elorah_seraph', to: 'olda_apolo',    color: '#D4AF37', label: "Sova's Chain · Seat IV · granted after the Fest, no Sovenne blood" },
        { from: 'elorah_seraph', to: 'kethis_ghost',   color: '#D4AF37', label: "Keth's Brand · Seat V" },
        { from: 'elorah_seraph', to: 'tevanis_ghost',  color: '#D4AF37', label: "Tevan's Edict · Seat VI" },
        { from: 'azen_lucerne',  to: 'table_center',   color: '#D4AF37', dashed: true },
        { from: 'elorah_seraph', to: 'table_center',   color: '#D4AF37', dashed: true },
      ],
    },
  },

  surya: {
    label: 'House Surya',
    color: '#E8B84B',
    camp: null,
    description: 'Gaia\'s Life aspect — Guardian of the Stellar Beast. South Asia. Stage 1 of the Vessel Doctrine Pipeline: The Vessel Awakeners. House Surya identifies suitable human vessels and prepares them at the core level — marking them, igniting their capacity, and expanding their structural space before any transfer attempt is made.\n\nVessel Doctrine Role: AWAKEN. Surya marks vessels so every subsequent stage in the pipeline can read and build on what Surya started.\n\nWeapon — Stellar Beast (Surya\'s Chariot / Celestial Fire / Bloom Call):\n• Surya\'s Chariot: The beast\'s golden radiance touches a dormant human core and marks it as a prepared vessel. Invisible to the subject but readable by all downstream stages.\n• Celestial Fire: Ignites the sealed core just enough to expand receptivity without triggering the human\'s awareness of their own core. Too much ignition wakes the self — the most delicate calibration in Stage 1.\n• Bloom Call: Expands the vessel\'s mana-space — not the body\'s physical form, but the container a Primal-scale consciousness needs room to enter without tearing the body apart.\n\nSealed Within: Lyra Wov\'s will (Gaia\'s Life aspect, native expression) + Gaia\'s active will (sealed voluntarily, guiding the family from within — not imprisoned; teaching). Vedic mythology formed around this weapon: Surya the Sun God, avatars of cosmic life. Only direct bloodline can touch the Stellar Beast without burns.',
    layout: {
      svgW: 700, svgH: 400,
      nodes: [
        { id: 'sin_surya', x: 350, y: 100, size: 28, ghostName: 'Sin Surya', ghostColor: '#E8B84B', ghostRole: 'Head · Stage 1: Vessel Awakener · South Asia', ghostInitial: 'S' },
        { id: 'surya_weapon', x: 350, y: 250, type: 'gap', label: '~ Stellar Beast · Lyra Wov\'s will sealed within · South Asia ~' },
      ],
      edges: [
        { from: 'sin_surya', to: 'surya_weapon', color: '#E8B84B', dashed: true, label: 'Bearer of the Torch of Surya' },
      ],
    },
  },
  oba: {
    label: 'House Oba',
    color: '#8B5E3C',
    camp: null,
    description: 'Gaia\'s Death aspect — Guardian of the Wane Beast. Africa. Stage 2 of the Vessel Doctrine Pipeline: The Consciousness Assessors. House Oba reads the weight of a vessel\'s free will and determines whether it can be reduced through later preparation stages — or must be removed entirely before the pipeline can proceed.\n\nVessel Doctrine Role: ASSESS. Oba determines which vessels are suitable for standard preparation and which require full selfhood erasure before transfer.\n\nWeapon — Wane Beast (Anubis Scale / Final Wane):\n• Anubis Scale: The Wane Beast measures the weight of a vessel\'s independent identity — how strongly they recognise themselves as a self, how much resistance an incoming Primal consciousness will face. Light-weighted vessels proceed to Stage 3. Heavy-weighted require further processing.\n• Final Wane: For vessels whose free will cannot be reduced by preparation alone — complete selfhood erasure. The death aspect applied to the identity layer, not the body. What remains is the biological system, functional and intact. The self that owned it is gone. The vessel is empty.\n\nSealed Within: Mara Wov\'s will (Gaia\'s Death aspect, native expression) + Gaia\'s active will (sealed voluntarily, guiding the family from within). Egyptian and African mythology formed around this weapon: Anubis, the scale of judgment, Osiris\'s resurrection cycle. House Oba are the world\'s foremost specialists in what the death boundary actually is and what it means when it is crossed before its time.',
    layout: {
      svgW: 700, svgH: 400,
      nodes: [
        { id: 'gould_oba', x: 350, y: 100, size: 28, ghostName: 'Gould Oba', ghostColor: '#8B5E3C', ghostRole: 'Head · Stage 2: Consciousness Assessor · Africa', ghostInitial: 'G' },
        { id: 'oba_weapon', x: 350, y: 250, type: 'gap', label: '~ Wane Beast · Mara Wov\'s will sealed within · Africa ~' },
      ],
      edges: [
        { from: 'gould_oba', to: 'oba_weapon', color: '#8B5E3C', dashed: true, label: 'Bearer of the Judge' },
      ],
    },
  },
  long: {
    label: 'House Long',
    color: '#4A8B6E',
    camp: null,
    description: 'Gaia\'s Balance aspect — Guardian of the Root Beast. East Asia. Stage 3 of the Vessel Doctrine Pipeline: The Vessel Stabilisers. House Long ensures that a prepared vessel does not reject its incoming consciousness, and that whatever remains of the human self cannot re-emerge once the transfer has begun.\n\nVessel Doctrine Role: STABILISE. Long holds the vessel body open and anchors the incoming consciousness permanently — preventing the most common failure mode: the human self fighting back.\n\nWeapon — Root Beast (Still Point / Deep Root):\n• Still Point: Suppresses the re-emergence impulse during the transfer window. When foreign consciousness enters a prepared body, biological memory of the original self attempts to re-assert — an instinctive refusal independent of conscious will. Still Point holds that threshold closed for the duration of the transfer.\n• Deep Root: Permanently anchors the incoming Primal consciousness in the vessel\'s biological foundation — nervous system, instinctive layer, cellular memory. Once the Root is established, the new consciousness is recognised by the body itself as origin. The human self cannot displace it even if re-emergence is later attempted. Root is the difference between a Primal consciousness that inhabits a body and one that becomes that body.\n\nSealed Within: Sael Wov\'s will (Gaia\'s Balance aspect, native expression) + Gaia\'s active will (sealed voluntarily, guiding the family from within). Daoist Five Elements, the Chinese dragon, Buddhist immovable stillness — all emerged from contact with this weapon. Known for producing the most unshakeable practitioners in any generation.',
    layout: {
      svgW: 700, svgH: 400,
      nodes: [
        { id: 'long_head', x: 350, y: 100, size: 28, ghostName: 'House Long', ghostColor: '#4A8B6E', ghostRole: 'Guardian · Root Beast · Gaia Balance Aspect', ghostInitial: 'L' },
        { id: 'long_weapon', x: 350, y: 250, type: 'gap', label: '~ Root Beast · Sael Wov\'s will sealed within · East Asia ~' },
      ],
      edges: [
        { from: 'long_head', to: 'long_weapon', color: '#4A8B6E', dashed: true, label: 'Bearer of the Ancestor' },
      ],
    },
  },
  ouranos: {
    label: 'House Ouranos',
    color: '#6B8BB8',
    camp: null,
    description: 'Cronus\'s Present aspect — Guardian of the Drift Tool. Europe. Stage 4 of the Vessel Doctrine Pipeline: The Transfer Managers. House Ouranos controls the actual crossing — the liminal moment when Primal consciousness moves from its origin state into a prepared human vessel. Without Ouranos, the transfer has no managed entry.\n\nVessel Doctrine Role: TRANSFER. Ouranos governs the pace, spread, and completion of the crossing itself — what happens in the moment a Primal consciousness enters a human body.\n\nWeapon — Drift Tool (Zeus / Poseidon / Hades / Sovereign Sky):\n• Zeus: The spark of first entry — the initial contact between incoming essence and vessel body. Too fast = rupture. Zeus governs the opening instant at exactly the speed the prepared vessel can receive.\n• Poseidon: Spreads the new consciousness through the body\'s systems in managed waves. Each wave settles before the next arrives. Poseidon is why Stage 3\'s Root matters — it gives each wave somewhere to anchor as it lands.\n• Hades: Manages the recession of the human self during the spread. The original consciousness does not vanish instantly; Hades guides its descent into the biological substrate where it cannot interfere with the arriving Primal during the window when both occupy the same body.\n• Sovereign Sky: At full mastery — removes all environmental resistance from the transfer moment. The body accepts the incoming consciousness as if it recognises it. No biological trauma signature.\n\nSealed Within: Dain Osiro\'s will (Cronus\'s Present aspect, native expression) + Cronus\'s active will (sealed voluntarily, guiding the family from within). The only one of the six families with written records acknowledging the weapon is "not of this world." Greek Zeus/Poseidon/Hades are three aspects of this single weapon witnessed by different generations. Their human account of the Sol-Nexus is the most complete — and still mostly wrong.',
    layout: {
      svgW: 700, svgH: 400,
      nodes: [
        { id: 'saga_ouranos', x: 350, y: 100, size: 28, ghostName: 'Saga Ouranos', ghostColor: '#6B8BB8', ghostRole: 'Head · Stage 4: Transfer Manager · Europe', ghostInitial: 'S' },
        { id: 'ouranos_weapon', x: 350, y: 250, type: 'gap', label: '~ Drift Tool · Dain Osiro\'s will sealed within · Europe ~' },
      ],
      edges: [
        { from: 'saga_ouranos', to: 'ouranos_weapon', color: '#6B8BB8', dashed: true, label: 'Bearer of the Sovereign' },
      ],
    },
  },
  rongo: {
    label: 'House Rongo',
    color: '#5B9B8A',
    camp: null,
    description: 'Cronus\'s Past aspect — Guardian of the Echo Tool. Oceania. Stage 5 of the Vessel Doctrine Pipeline: The Template Keepers. House Rongo accesses what a human vessel was designed to be before the deviation of free will corrupted the template — and overlays that original design to bring the vessel into alignment with its intended purpose.\n\nVessel Doctrine Role: TEMPLATE. Rongo restores the pre-deviation blueprint and drains the specific resistance that free will generates when contact with incoming Primal consciousness is made.\n\nWeapon — Echo Tool (Ancestor Call / Rongo\'s Harvest):\n• Ancestor Call: Reaches through the vessel\'s lineage using Cronus\'s past aspect to surface the pre-deviation template — the body as it was designed before human consciousness introduced independent will into the genome. This is not historical record. It is structural blueprint. Overlaying the template brings the vessel\'s receptivity into alignment with what Adam and Eve\'s bodies were built to do before they became people.\n• Rongo\'s Harvest: Drains the resistance impulse that free will generates on contact with incoming Primal consciousness — not removing free will entirely (Stage 2\'s function), but specifically targeting the defensive alarm that activates during transfer and can destabilise an otherwise successful crossing even in a well-prepared vessel.\n\nSealed Within: Seth Osiro\'s will (Cronus\'s Past aspect, native expression) + Cronus\'s active will (sealed voluntarily, guiding the family from within). Never broke their oral lineage. Every generation memorises: "a stranger came from across the sky; he left something with us; we must keep it safe until the sky opens again." Pacific navigation traditions and ancestor memory culture all trace to this weapon.',
    layout: {
      svgW: 700, svgH: 400,
      nodes: [
        { id: 'rongo_head', x: 350, y: 100, size: 28, ghostName: 'House Rongo', ghostColor: '#5B9B8A', ghostRole: 'Guardian · Echo Tool · Cronus Past Aspect', ghostInitial: 'R' },
        { id: 'rongo_weapon', x: 350, y: 250, type: 'gap', label: '~ Echo Tool · Seth Osiro\'s will sealed within · Oceania ~' },
      ],
      edges: [
        { from: 'rongo_head', to: 'rongo_weapon', color: '#5B9B8A', dashed: true, label: 'Bearer of the Memory' },
      ],
    },
  },
  wakan: {
    label: 'House Wakan',
    color: '#9B7B55',
    camp: null,
    description: 'Cronus\'s Future aspect — Guardian of the Seal Tool. Americas. Stage 6 of the Vessel Doctrine Pipeline: The Permanent Sealers. House Wakan closes the process — making the completed transfer irreversible, shutting every pathway through which the original human self could return, and identifying future candidates before any other stage has touched them.\n\nVessel Doctrine Role: SEAL + IDENTIFY. Wakan finalises completed vessels and guides the pipeline\'s intake by seeing who is coming before they arrive.\n\nWeapon — Seal Tool (Seal of Silence / The Unchangeable / Future Sight):\n• Seal of Silence: Closes every re-emergence pathway in a completed vessel. Every biological or mana-level channel through which the original human consciousness could attempt to surface is shut. Not locked — closed. A lock implies a key exists. Seal of Silence does not produce a key.\n• The Unchangeable: Writes the completed transfer as permanent fact into the vessel\'s core structure — at the level that defines what a body fundamentally is. The Primal consciousness inhabiting the vessel is not a tenant. It is the owner. The original human self has no legal claim on its former address.\n• Future Sight (passive): The Seal Tool\'s inherited echo from Cronus\'s future aspect. House Wakan members perceive future-candidate vessels before Stage 1 has marked them. They see which humans the pipeline will need before Surya\'s Chariot has touched them. This is why Wakan functions as the pipeline\'s administrative head as well as its closing stage — they always know what\'s coming next.\n\nSealed Within: Noa Osiro\'s will (Cronus\'s Future aspect, native expression) + Cronus\'s active will (sealed voluntarily, guiding the family from within). Most geographically dispersed of the six families. Indigenous American wind and spirit traditions trace to this weapon. Internal warning passed every generation: "never use the Unchangeable for small things." Noa Osiro used it three times. House Wakan believes all three uses were for something large enough to justify the cost.',
    layout: {
      svgW: 700, svgH: 400,
      nodes: [
        { id: 'deina_wakan', x: 350, y: 100, size: 28, ghostName: 'Deina Wakan', ghostColor: '#9B7B55', ghostRole: 'Head · Stage 6: Permanent Sealer · Americas', ghostInitial: 'D' },
        { id: 'wakan_weapon', x: 350, y: 250, type: 'gap', label: '~ Seal Tool · Noa Osiro\'s will sealed within · Americas ~' },
      ],
      edges: [
        { from: 'deina_wakan', to: 'wakan_weapon', color: '#9B7B55', dashed: true, label: 'Bearer of the Voice of What Will Be' },
      ],
    },
  },

  hallow: {
    label: 'The Hallow Family',
    color: '#C9A227',
    camp: 'survivor',
    description: 'Paul Hallow\'s daughters — rescued humans, captured a year later in the destruction of Miho Frame\'s resistance camp. Valariya is the namesake of the future city and the true origin of Irane\'s name, given first as a child\'s private nickname and again, decades later, at her own death. Aliya becomes the youngest of the five Valariyan Heads. The family now spans three generations under one roof: Aliya alongside her late sister Valariya, and Valariya\'s son Urial — Aliya\'s own nephew, raised without either of his parents present, now the Empire\'s Enforcer.',
    layout: {
      svgW: 1000,
      svgH: 620,
      nodes: [
        { id: 'paul_hallow',      x: 500, y: 60,  size: 24 },
        { id: 'aliya_hallow',     x: 350, y: 220, size: 26 },
        { id: 'valariya_hallow',  x: 650, y: 220, size: 26 },
        { id: 'cai',              x: 220, y: 360, size: 20 },
        { id: 'dio_ferran',       x: 650, y: 360, size: 20 },
        { id: 'leo_proude',       x: 800, y: 360, size: 18 },
        { id: 'irane',            x: 500, y: 460, size: 24 },
        { id: 'urial_ferran',     x: 650, y: 540, size: 22 },
      ],
      edges: [
        { from: 'paul_hallow',     to: 'aliya_hallow',    color: '#C9A227', label: 'Father · killed shielding both daughters' },
        { from: 'paul_hallow',     to: 'valariya_hallow', color: '#C9A227', label: 'Told her the bedtime-story emperor that becomes "Irane"' },
        { from: 'aliya_hallow',    to: 'valariya_hallow', color: '#C9A227', label: 'Sisters · ran together, never looked back' },
        { from: 'cai',             to: 'aliya_hallow',    color: '#5F8B6E', dashed: true, label: 'Given to Cai by 8 · raised as her own' },
        { from: 'valariya_hallow', to: 'dio_ferran',      color: '#C0603A', label: 'Married as adults' },
        { from: 'leo_proude',      to: 'valariya_hallow', color: '#888', dashed: true, label: 'Unrequited love · friendship with Dio survived it' },
        { from: 'valariya_hallow', to: 'irane',            color: '#D4AF37', dashed: true, label: 'Names him "Irane" as a child, again at her own death' },
        { from: 'valariya_hallow', to: 'urial_ferran',    color: '#C9A227', label: 'Son · his core completed Arai\'s seal at the moment of her death' },
        { from: 'dio_ferran',      to: 'urial_ferran',    color: '#C0603A', dashed: true, label: 'Father · met his son for the first time only in Part 7.4' },
        { from: 'aliya_hallow',    to: 'urial_ferran',    color: '#C9A227', dashed: true, label: 'Aunt and nephew — Valariya\'s sister and Valariya\'s son' },
      ],
    },
  },

  human_leaders: {
    label: 'Human Resistance Leaders',
    color: '#7A8A6A',
    camp: 'survivor',
    description: 'Earth\'s two confirmed human lineages of consequence so far — allies to each other, not blood relations. The Night family: Crimi Night, who leads what remains of humanity\'s resistance and sent her own son Terra to administer Apexia\'s first wave of human refugees. Tan Loo, second resistance leader, wielder of the Stellar Beast — a standalone lineage with no recorded family of his own yet, grouped here as the second of Earth\'s two confirmed human power centers.',
    layout: {
      svgW: 800,
      svgH: 380,
      nodes: [
        { id: 'crimi_night',  x: 220, y: 100, size: 26 },
        { id: 'terra_night',  x: 220, y: 260, size: 22 },
        { id: 'tan_loo',      x: 560, y: 180, size: 24 },
      ],
      edges: [
        { from: 'crimi_night', to: 'terra_night', color: '#7A8A6A', label: 'Son · sent to Apexia to lead and administer the first wave of human refugees' },
        { from: 'crimi_night', to: 'tan_loo',      color: '#8A8A5A', dashed: true, label: 'Allied resistance leaders · fellow Earth power center, not blood kin' },
      ],
    },
  },

  region_orians: {
    label: 'Orians',
    color: '#5b9bd5',
    camp: 'region',
    description: 'Cross-clan snapshot of who remains on Orians — the Ascen/Alma/Spirit homeworld — as of the Part 9 coronation crisis, rather than a bloodline. Niro Vane and Tunde Ardent are shown here as their point of origin, but both are marked captured and converted, now bound to Summari and Nighla respectively in Apexia (see the Apexia region tree for their current status). Axola Vane remains imprisoned on Orians after his public breakdown; his previously undisclosed half-brother, freed from an experimentation lab at the crisis\'s end and held as "Aevum reborn," remains the throne\'s active succession contingency. Duki Navar and Olda Apolo, the two Grand Table seat-holders granted after the Fest, were both killed at the second siege of Paradise — shown here as historical/deceased rather than omitted, since their seats and legacies remain rooted on Orians. Arai, Hope, Zoe, and Aliya have all relocated to Apexia per Part 9 forward-planned material and do not appear here — see the Apexia region tree.',
    layout: {
      svgW: 1500,
      svgH: 760,
      nodes: [
        // ── The Throne · Vane succession ─────────────────────────────
        { id: 'tenza',              x: 200, y: 80,  size: 24 },
        { id: 'axola_vane',         x: 380, y: 80,  size: 22 },
        { id: 'nuro_vane_brother',  x: 560, y: 80,  size: 22 },
        { id: 'throne_gap',         x: 380, y: 200, type: 'gap', label: '~ Ascen Throne · Succession Contingency ~' },
        { id: 'niro_vane_current',  x: 380, y: 320, size: 26, dashed: true },
        // ── House Ardent field command ───────────────────────────────
        { id: 'tola_ardent',        x: 780, y: 80,  size: 26 },
        { id: 'tunde_ardent',       x: 960, y: 80,  size: 22, dashed: true },
        // ── Grand Table — active holders ─────────────────────────────
        { id: 'gt_gap',             x: 1180, y: 80, type: 'gap', label: '~ Grand Table — House Lucerne / House Seraph ~' },
        { id: 'azen_lucerne',       x: 1180, y: 200, size: 26 },
        { id: 'elorah_seraph',      x: 1380, y: 200, size: 26 },
        { id: 'droom_lucerne',      x: 1080, y: 320, size: 20 },
        { id: 'azura_lucerne',      x: 1250, y: 320, size: 20 },
        { id: 'tenma_seraph',       x: 1380, y: 320, size: 20 },
        { id: 'pino_seraph',        x: 1480, y: 400, size: 18 },
        // ── Retired Grand Table seats — deceased ─────────────────────
        { id: 'duki_navar',         x: 100,  y: 460, size: 20, dim: true },
        { id: 'olda_apolo',         x: 260,  y: 460, size: 20, dim: true },
        { id: 'gt_retired_gap',     x: 180,  y: 560, type: 'gap', label: '~ Both killed alongside Irane at the second siege of Paradise ~' },
        // ── Force/Spirit sister houses — spatial intelligence arm ───
        { id: 'evin_navar',         x: 480,  y: 460, size: 18 },
        { id: 'edge_apolo',         x: 620,  y: 460, size: 18 },
      ],
      edges: [
        { from: 'tenza',             to: 'axola_vane',        color: '#e84855', dashed: true, label: 'Confirmed his account of the Orian defeat before the full court' },
        { from: 'axola_vane',        to: 'nuro_vane_brother', color: '#e84855', label: 'Half-brother · succession passed to him when Axola forfeited to Arai' },
        { from: 'axola_vane',        to: 'throne_gap',        color: '#e84855', dashed: true, label: 'Imprisoned after his public breakdown · "the 8-Anathema" naming' },
        { from: 'nuro_vane_brother', to: 'throne_gap',        color: '#9b5de5', dashed: true, label: '"Aevum reborn" · freed from an experimentation lab, both arms marked black and white' },
        { from: 'throne_gap',        to: 'niro_vane_current', color: '#5b9bd5', label: 'King of the Ascen · point of origin' },
        { from: 'tola_ardent',       to: 'tunde_ardent',      color: '#8B2020', label: 'Son · point of origin' },
        { from: 'azen_lucerne',      to: 'droom_lucerne',     color: '#D4460A', label: 'Daughter' },
        { from: 'azen_lucerne',      to: 'azura_lucerne',     color: '#D4460A', label: 'Son' },
        { from: 'elorah_seraph',     to: 'tenma_seraph',      color: '#C8C0FF', label: 'Son' },
        { from: 'tenma_seraph',      to: 'pino_seraph',       color: '#C8C0FF', label: 'Son' },
        { from: 'azen_lucerne',      to: 'gt_gap',            color: '#D4AF37', dashed: true },
        { from: 'elorah_seraph',     to: 'gt_gap',            color: '#D4AF37', dashed: true },
        { from: 'duki_navar',        to: 'gt_retired_gap',    color: '#9B30FF', dashed: true, label: 'Ruin Beast · Seat I · killed at the second siege' },
        { from: 'olda_apolo',        to: 'gt_retired_gap',    color: '#9B30FF', dashed: true, label: "Sova's Chain · Seat IV · killed at the second siege" },
        { from: 'droom_lucerne',     to: 'evin_navar',        color: '#9B30FF', dashed: true, label: 'Cross-house son with Olda Apolo' },
        { from: 'pino_seraph',       to: 'edge_apolo',        color: '#E87B22', dashed: true, label: 'Cross-house son with Olda Apolo' },
      ],
    },
  },

  region_apexia: {
    label: 'Apexia (Limbo)',
    color: '#D4AF37',
    camp: 'region',
    description: 'Irane\'s empire — the Valariyan / Kazemi-core population centered on Paradise/Valariya in Limbo. Distinct from "Earth," where Toma\'s Primal court and Aevum\'s vessel now operate (see the Earth region tree). Grouped informally by cluster: the Emperor\'s Household, the Next Generation, the Inner Circle, and the Captured/Converted — Niro Vane and Tunde Ardent, both bound as guards to Summari and Nighla respectively during the coronation crisis, cross-referenced back to House Vane and House Ardent on the Orians region tree. Isaac More and Artemis Osiro remain Earth/Heaven-resident under Aevum\'s grooming, but Artemis\'s forward-planned arc draws her toward the Kazemi side — she is cross-referenced here as a connection, not a resident. Evelyn More, born on Earth, normally serves as Apexia\'s head of hospital units; per Part 9.6, she fled to Earth with Irane Jr. during the mana-storm crisis and was taken into custody by Mira at the close of the Genesis visit, delivered to a holding cell in the Apexian settlement rather than returned to her post — shown here in custody, sentencing unconfirmed.',
    layout: {
      svgW: 1600,
      svgH: 1000,
      nodes: [
        // ── The Emperor's Household ──────────────────────────────────
        { id: 'household_gap',   x: 700,  y: 40,  type: 'gap', label: "~ The Emperor's Household ~" },
        { id: 'irane',           x: 700,  y: 140, size: 30 },
        { id: 'arai',            x: 380,  y: 260, size: 24 },
        { id: 'hope',            x: 560,  y: 260, size: 24 },
        { id: 'zoe',             x: 740,  y: 260, size: 24 },
        { id: 'aliya_hallow',    x: 920,  y: 260, size: 24 },
        { id: 'summari',         x: 380,  y: 380, size: 22 },
        { id: 'nighla',          x: 520,  y: 380, size: 22 },
        { id: 'dokia_caedus',    x: 660,  y: 380, size: 22 },
        { id: 'urial_ferran',    x: 800,  y: 380, size: 22 },
        // ── The Inner Circle — Valariyan Heads & Council ─────────────
        { id: 'circle_gap',      x: 1150, y: 140, type: 'gap', label: '~ The Inner Circle ~' },
        { id: 'mira_ardent',     x: 1080, y: 240, size: 22 },
        { id: 'pandro_lexan',    x: 1230, y: 240, size: 22 },
        { id: 'criya_sin',       x: 1380, y: 240, size: 20 },
        { id: 'evelyn_more',     x: 1080, y: 340, size: 18 },
        { id: 'milla_ores',      x: 1230, y: 340, size: 18 },
        { id: 'adri_suin',       x: 1380, y: 340, size: 16 },
        { id: 'aura_veil',       x: 1080, y: 440, size: 16 },
        { id: 'nina',            x: 1230, y: 440, size: 18 },
        { id: 'jade_alge',       x: 1380, y: 440, size: 16 },
        { id: 'isoke_mvel',      x: 1230, y: 540, size: 16 },
        // ── The Next Generation ──────────────────────────────────────
        { id: 'nextgen_gap',     x: 380,  y: 520, type: 'gap', label: '~ The Next Generation ~' },
        { id: 'sethma_prescian', x: 160,  y: 620, size: 18 },
        { id: 'julia_prescian',  x: 300,  y: 620, size: 18 },
        { id: 'nevir_revyn_jr',  x: 440,  y: 620, size: 18 },
        { id: 'tyler_ores',      x: 580,  y: 620, size: 18 },
        { id: 'nara_nexal',      x: 160,  y: 720, size: 16 },
        { id: 'milo_nexal',      x: 300,  y: 720, size: 16 },
        { id: 'forge_neel',      x: 440,  y: 720, size: 16 },
        { id: 'apolo',           x: 580,  y: 720, size: 18 },
        { id: 'vesper_wov',      x: 160,  y: 820, size: 20 },
        { id: 'taliya_wov',      x: 320,  y: 820, size: 20 },
        // ── Captured / Converted — origin on Orians ──────────────────
        { id: 'captured_gap',    x: 900,  y: 620, type: 'gap', label: '~ Captured & Converted — origin: Orians ~' },
        { id: 'niro_vane_current', x: 820, y: 720, size: 20 },
        { id: 'tunde_ardent',      x: 980, y: 720, size: 20 },
        // ── Connected, not resident ───────────────────────────────────
        { id: 'artemis_link',    x: 700,  y: 880, size: 16,
          ghostName: 'Artemis Osiro', ghostColor: '#00b4d8', ghostRole: 'Earth/Heaven-resident · forward-planned arc draws her toward the Kazemi side · see Earth tree', ghostInitial: 'A' },
      ],
      edges: [
        { from: 'irane', to: 'arai',         color: '#f5c842' },
        { from: 'irane', to: 'hope',         color: '#f5c842' },
        { from: 'irane', to: 'zoe',          color: '#f5c842' },
        { from: 'irane', to: 'aliya_hallow', color: '#f5c842' },
        { from: 'irane', to: 'summari',      color: '#D4AF37' },
        { from: 'irane', to: 'nighla',       color: '#D4AF37' },
        { from: 'irane', to: 'dokia_caedus', color: '#D4AF37' },
        { from: 'irane', to: 'urial_ferran', color: '#D4AF37' },
        { from: 'irane', to: 'circle_gap',   color: '#D4AF37', dashed: true },
        { from: 'circle_gap', to: 'mira_ardent',  color: '#D4AF37' },
        { from: 'circle_gap', to: 'pandro_lexan', color: '#D4AF37' },
        { from: 'circle_gap', to: 'criya_sin',    color: '#D4AF37' },
        { from: 'mira_ardent',  to: 'evelyn_more', color: '#D4AF37', dashed: true, label: 'Part 9.6: taken into custody at Genesis and held in the Apexian settlement\'s prison (unauthorized departure with Irane Jr.); sentencing not yet shown on-page' },
        { from: 'pandro_lexan', to: 'milla_ores',  color: '#D4AF37', dashed: true },
        { from: 'criya_sin',    to: 'adri_suin',   color: '#D4AF37', dashed: true, label: 'Escort' },
        { from: 'criya_sin',    to: 'jade_alge',   color: '#D4AF37', dashed: true, label: 'Escort' },
        { from: 'irane',        to: 'aura_veil',   color: '#D4AF37', dashed: true, label: 'First cured citizen of Apexia' },
        { from: 'irane',        to: 'nina',        color: '#D4AF37', dashed: true, label: 'Ceded as an Acana peace-gift' },
        { from: 'milla_ores',   to: 'isoke_mvel',  color: '#888', dashed: true, label: 'Co-caretakers of the royal children' },
        { from: 'summari',      to: 'julia_prescian', color: '#20878A', dashed: true, label: 'Companion · matched Time-Energy core' },
        { from: 'nighla',       to: 'nara_nexal',     color: '#177070', dashed: true, label: 'Companion · matched Time-Energy core' },
        { from: 'summari',      to: 'niro_vane_current', color: '#20878A', label: 'Claimed guard · captured and converted' },
        { from: 'nighla',       to: 'tunde_ardent',      color: '#177070', label: 'Claimed guard · captured and converted' },
        { from: 'urial_ferran', to: 'tyler_ores',     color: '#5A7FA0', dashed: true, label: 'Half-brothers through Dio Ferran' },
        { from: 'urial_ferran', to: 'apolo',          color: '#5A7FA0', dashed: true, label: 'Bound guard · Dio Ferran\'s reincarnation' },
        { from: 'dokia_caedus', to: 'sethma_prescian', color: '#6B5472', dashed: true, label: 'Paired companion' },
        { from: 'dokia_caedus', to: 'forge_neel',      color: '#6B5472', dashed: true, label: 'Bound guard, shared with Sethma' },
        { from: 'sethma_prescian', to: 'forge_neel',   color: '#9B9BAF', dashed: true },
        { from: 'pandro_lexan', to: 'sethma_prescian', color: '#9B9BAF', label: 'Son' },
        { from: 'pandro_lexan', to: 'julia_prescian',  color: '#9B9BAF', label: 'Daughter' },
        { from: 'evelyn_more',  to: 'nevir_revyn_jr',  color: '#6B5472', dashed: true, label: 'Son (with Nevir Revyn)' },
        { from: 'nara_nexal',   to: 'milo_nexal',      color: '#5b9bd5', dashed: true, label: 'Siblings — both Nina\'s sons' },
        { from: 'mira_ardent',  to: 'vesper_wov',      color: '#9b5de5', dashed: true, label: 'Trains him in her own program' },
        { from: 'irane',        to: 'taliya_wov',      color: '#D4AF37', dashed: true, label: 'Trains her directly · reforged Mother Nature' },
        { from: 'vesper_wov',   to: 'taliya_wov',      color: '#9b5de5', dashed: true, label: 'Raised as twins' },
        { from: 'taliya_wov',   to: 'artemis_link',    color: '#00b4d8', dashed: true, label: 'Forward-planned thread — Wov\'s deepening alignment with the Kazemi' },
      ],
    },
  },

  region_earth: {
    label: 'Earth',
    color: '#4A6E8A',
    camp: 'region',
    description: 'Where the Primals now are — Toma More\'s former domain, now led publicly by Alex More\'s body under Aevum\'s possession. Toma More himself is deceased, killed by Aevum during the assault on Heaven in Part 8.2; shown here historically for lineage context, since his household and succession are still the shape of Earth\'s current politics. Nex Wov and Kia Osiro, the Fest-debt clan heads who served Toma under obligation, are both deceased — killed by Aliya per the current arc — and shown historically rather than omitted. Isaac More and Artemis Osiro are Ember Osiro and Alex/Aevum\'s children, raised on Earth under Aevum\'s household; Artemis is cross-referenced to Apexia given her forward-planned drift toward the Kazemi side. Saga Ouranos\'s current whereabouts are unconfirmed in the story text, but Clan Ouranos\'s entire operational history runs through Toma\'s Earth infrastructure, so he is placed here as his last known operational base.',
    layout: {
      svgW: 1200,
      svgH: 760,
      nodes: [
        // ── The Primal Court — Toma's line ───────────────────────────
        { id: 'court_gap',     x: 400, y: 40,  type: 'gap', label: "~ The Primal Court — Toma More's Line ~" },
        { id: 'toma_more',     x: 400, y: 140, size: 26, dim: true },
        { id: 'alex_more',     x: 220, y: 260, size: 26 },
        { id: 'evelyn_more_link', x: 580, y: 260, size: 18,
          ghostName: 'Evelyn More', ghostColor: '#C97064', ghostRole: 'Born on Earth · now Apexia-resident, head of hospital units · see Apexia tree', ghostInitial: 'E' },
        { id: 'aevum_ghost',   x: 60,  y: 140, size: 20,
          ghostName: 'Aevum', ghostColor: '#D4AF37', ghostRole: 'Killed Toma · possesses Alex\'s body · leads the Primals publicly', ghostInitial: 'A' },
        // ── The Household Alex/Aevum Fathered ────────────────────────
        { id: 'ember_osiro_link', x: 220, y: 380, size: 18,
          ghostName: 'Ember A. Osiro', ghostColor: '#00b4d8', ghostRole: 'Osiro Territory · mother of Isaac & Artemis · see Osiro tree', ghostInitial: 'E' },
        { id: 'isaac_more',    x: 120, y: 480, size: 22 },
        { id: 'artemis_osiro', x: 320, y: 480, size: 22 },
        // ── Earth-Based Clan Heads — deceased ────────────────────────
        { id: 'debt_gap',      x: 780, y: 380, type: 'gap', label: "~ Toma's Fest-Debt Clan Heads — both killed by Aliya ~" },
        { id: 'nex_wov',       x: 700, y: 480, size: 20, dim: true },
        // ── Consa & Ouranos — Earth infrastructure ───────────────────
        { id: 'minia_consa',   x: 1000, y: 140, size: 24 },
        { id: 'saga_ouranos',  x: 1000, y: 280, size: 20, dashed: true },
        // ── Ember's own base ──────────────────────────────────────────
        { id: 'kai_osiro',     x: 420, y: 480, size: 18 },
      ],
      edges: [
        { from: 'aevum_ghost', to: 'toma_more', color: '#D4AF37', dashed: true, label: 'Killed him during the assault on Heaven, Part 8.2' },
        { from: 'aevum_ghost', to: 'alex_more',  color: '#D4AF37', dashed: true, label: 'Takes his body immediately after — Alex does not survive it' },
        { from: 'toma_more',   to: 'alex_more',  color: '#4A6E8A', label: 'Eldest son' },
        { from: 'toma_more',   to: 'evelyn_more_link', color: '#C97064', label: 'Daughter · born on Earth' },
        { from: 'alex_more',   to: 'ember_osiro_link', color: '#4A6E8A', dashed: true, label: 'Forced union to secure Osiro succession' },
        { from: 'ember_osiro_link', to: 'isaac_more',    color: '#00b4d8', dashed: true },
        { from: 'ember_osiro_link', to: 'artemis_osiro', color: '#00b4d8', dashed: true },
        { from: 'ember_osiro_link', to: 'kai_osiro',     color: '#00b4d8', dashed: true, label: 'Cousins · see Osiro tree' },
        { from: 'isaac_more',  to: 'artemis_osiro', color: '#4A6E8A', label: 'Full siblings' },
        { from: 'toma_more',   to: 'debt_gap',      color: '#4A6E8A', dashed: true, label: 'Both served him under a Fest-era debt' },
        { from: 'debt_gap',    to: 'nex_wov',        color: '#10CC70', dashed: true, label: 'Head of Clan Wov · killed by Aliya' },
        { from: 'debt_gap',    to: 'kai_osiro',       color: '#00b4d8', dashed: true, label: 'Heaven-branch head of Osiro · killed by Aliya' },
        { from: 'toma_more',   to: 'minia_consa',    color: '#5F9EA0', dashed: true, label: 'Reduced to a subordinate under his direct control' },
        { from: 'minia_consa', to: 'saga_ouranos',   color: '#5F9EA0', dashed: true, label: 'Namo Consa ran parallel research at the Ouranos facility' },
      ],
    },
  },
}

function NodeCircle({ node, character, isSelected, isFaded, onClick, isCollapsed, canCollapse, onToggleCollapse }) {
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

  const isGhost  = !character
  const name     = character?.name || node.ghostName || ''
  const color    = isGhost ? (node.ghostColor || '#556') : (HOUSE_COLORS[character.house] || '#888')
  const initial  = node.ghostInitial || name.charAt(0)
  const firstName = name.split(' ')[0]
  const r        = node.size || 18
  const opacity  = isFaded ? 0.14 : (isGhost ? 0.65 : (node.dim ? 0.45 : 1))

  // Core element label — show under name when present
  const rawEl   = character?.core?.element || (character?.coreType ? character.coreType.split(/[;,]/)[0].trim() : null)
  const coreEl  = rawEl ? rawEl.replace(/\s*\(dual\)/i, '').trim() : null

  const handleToggle = (e) => {
    e.stopPropagation()
    onToggleCollapse?.(node.id)
  }

  return (
    <g
      transform={`translate(${node.x},${node.y})`}
      style={{ cursor: isGhost ? 'default' : 'pointer', opacity, transition: 'opacity .15s' }}
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
        style={{ transition: 'fill 0.15s' }}
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
      {!isGhost && coreEl && (
        <text
          y={r + 26} textAnchor="middle" fontSize="8"
          fill={isSelected ? `${color}DD` : `${color}77`}
          style={{ userSelect: 'none' }}
        >
          {coreEl}
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
      {canCollapse && (
        <g onClick={handleToggle} style={{ cursor: 'pointer' }}>
          <circle
            cx={r} cy={-r}
            r={7}
            fill="#080e1a"
            stroke={color}
            strokeWidth="1.2"
          />
          <text
            x={r} y={-r + 4}
            textAnchor="middle"
            fontSize="11"
            fill={color}
            fontWeight="700"
            style={{ userSelect: 'none' }}
          >
            {isCollapsed ? '+' : '−'}
          </text>
        </g>
      )}
    </g>
  )
}

export default function FamilyTree({
  characters, relationships, showSecrets,
  selectedChar, onSelectChar,
  characterNotes, onSaveNote,
  onOpenBoard,
  stories,
}) {
  const [viewMode, setViewMode] = useState('trees') // 'trees' | 'constellation'
  const [constellationClan, setConstellationClan] = useState('will') // 'will' | a CLAN_CONSTELLATIONS id
  const [activeHouse, setActiveHouse] = useState('kazemi')
  const [search, setSearch] = useState('')
  const [charJump, setCharJump] = useState('')
  const [view, setView] = useState({ x: 20, y: 20, scale: 1 })
  const viewRef = useRef({ x: 20, y: 20, scale: 1 })
  const [collapsed, setCollapsed] = useState(new Set())
  const [dense, setDense] = useState(false)
  const svgWrapRef = useRef(null)
  const dragging = useRef(false)
  const dragStart = useRef({})
  const canClick = useRef(true)

  const tree    = HOUSE_TREES[activeHouse]
  const nodeMap = Object.fromEntries((tree?.layout.nodes || []).map(n => [n.id, n]))
  const charMap = Object.fromEntries(characters.map(c => [c.id, c]))

  const nodesWithChildren = useMemo(() =>
    new Set((tree?.layout.edges || []).map(e => e.from))
  , [tree])

  const showEdges = useMemo(() =>
    (tree?.layout.edges || []).filter(e => showSecrets || !e.dashed)
  , [tree, showSecrets])

  const visibleEdges = useMemo(() =>
    showEdges.filter(e => !collapsed.has(e.from))
  , [showEdges, collapsed])

  const hiddenNodes = useMemo(() => {
    const incoming = new Map()
    showEdges.forEach(e => {
      if (!incoming.has(e.to)) incoming.set(e.to, [])
      incoming.get(e.to).push(e.from)
    })
    const hidden = new Set()
    incoming.forEach((parents, nodeId) => {
      if (parents.every(p => collapsed.has(p))) hidden.add(nodeId)
    })
    return hidden
  }, [showEdges, collapsed])

  const toggleCollapse = useCallback(nodeId => {
    setCollapsed(prev => {
      const next = new Set(prev)
      next.has(nodeId) ? next.delete(nodeId) : next.add(nodeId)
      return next
    })
  }, [])

  const updateView = useCallback(fn => {
    setView(prev => {
      const next = fn(prev)
      viewRef.current = next
      return next
    })
  }, [])

  const resetView = useCallback(() => {
    if (!svgWrapRef.current || !tree) return
    const rect = svgWrapRef.current.getBoundingClientRect()
    const sw = tree.layout.svgW
    const sh = tree.layout.svgH
    const pad = 40
    const s = Math.min((rect.width - pad) / sw, (rect.height - pad) / sh, 1)
    const scale = Math.max(0.3, s)
    const v = {
      scale,
      x: (rect.width - sw * scale) / 2,
      y: Math.max(12, (rect.height - sh * scale) / 2),
    }
    setView(v)
    viewRef.current = v
  }, [tree])

  // Re-center when switching trees
  useEffect(() => {
    setCollapsed(new Set())
    setCharJump('')
    const timer = setTimeout(resetView, 40)
    return () => clearTimeout(timer)
  }, [activeHouse]) // eslint-disable-line react-hooks/exhaustive-deps

  // In-tree "jump to character" — search by name within the current tree's
  // nodes only, so a large tree can be navigated without visually scanning
  // for a person. Selecting a match centers the view on it and selects it,
  // which also triggers the connection-highlighting above.
  const jumpMatches = useMemo(() => {
    if (!charJump.trim() || !tree) return []
    const q = charJump.trim().toLowerCase()
    return tree.layout.nodes
      .filter(n => n.type !== 'gap')
      .map(n => ({ node: n, character: charMap[n.id] }))
      .filter(({ node, character }) => (character?.name || node.ghostName || '').toLowerCase().includes(q))
      .slice(0, 8)
  }, [charJump, tree, charMap])

  const jumpToNode = useCallback((node, character) => {
    if (!svgWrapRef.current) return
    if (character) onSelectChar(character)
    const rect = svgWrapRef.current.getBoundingClientRect()
    const scale = Math.max(viewRef.current.scale, 0.9)
    const v = { scale, x: rect.width / 2 - node.x * scale, y: rect.height / 2 - node.y * scale }
    setView(v)
    viewRef.current = v
    setCharJump('')
  }, [onSelectChar])

  const handleMouseDown = useCallback(e => {
    if (e.button !== 0) return
    dragging.current = true
    canClick.current = true
    dragStart.current = { mx: e.clientX, my: e.clientY, px: viewRef.current.x, py: viewRef.current.y }
  }, [])

  const handleMouseMove = useCallback(e => {
    if (!dragging.current) return
    const dx = e.clientX - dragStart.current.mx
    const dy = e.clientY - dragStart.current.my
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) canClick.current = false
    updateView(prev => ({ ...prev, x: dragStart.current.px + dx, y: dragStart.current.py + dy }))
  }, [updateView])

  const handleMouseUp = useCallback(() => { dragging.current = false }, [])

  useEffect(() => {
    const el = svgWrapRef.current
    if (!el) return
    const onWheel = e => {
      e.preventDefault()
      const factor = e.deltaY > 0 ? 0.88 : 1.14
      const rect = el.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      updateView(prev => {
        const newScale = Math.max(0.25, Math.min(4, prev.scale * factor))
        const ratio = newScale / prev.scale
        return { scale: newScale, x: cx - ratio * (cx - prev.x), y: cy - ratio * (cy - prev.y) }
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [updateView])

  const handleNodeClick = useCallback(char => {
    if (!char || !canClick.current) return
    onSelectChar(char.id === selectedChar?.id ? null : char)
  }, [onSelectChar, selectedChar])

  const collapseAll = () => setCollapsed(new Set(nodesWithChildren))
  const expandAll   = () => setCollapsed(new Set())

  const EARTH_GUARDIAN_IDS = ['surya', 'oba', 'long', 'ouranos', 'rongo', 'wakan']

  const filteredEntries = Object.entries(HOUSE_TREES).filter(([, h]) =>
    !search || h.label.toLowerCase().includes(search.toLowerCase())
  )

  const campGroups = CAMP_ORDER.map(camp => ({
    camp,
    label: CAMP_CONFIG[camp]?.label || camp,
    color: CAMP_CONFIG[camp]?.color || '#888',
    entries: filteredEntries.filter(([id, h]) => h.camp === camp && !EARTH_GUARDIAN_IDS.includes(id)),
  })).filter(g => g.entries.length > 0)

  const earthEntries = filteredEntries.filter(([id]) => EARTH_GUARDIAN_IDS.includes(id))

  return (
    <div className="family-tree-view">
      <div className="ft-mode-switch" role="group" aria-label="Family Trees view">
        <button className={`ft-mode-btn${viewMode === 'trees' ? ' active' : ''}`} onClick={() => setViewMode('trees')}>
          Clan Trees
        </button>
        <button className={`ft-mode-btn${viewMode === 'constellation' ? ' active' : ''}`} onClick={() => setViewMode('constellation')}>
          ✦ Constellations
        </button>
        {viewMode === 'constellation' && (
          <select
            className="ft-constellation-picker"
            value={constellationClan}
            onChange={e => setConstellationClan(e.target.value)}
          >
            <option value="will">Will-Bearers (Mira, Aliya, Dokia, Urial, Pandro)</option>
            {CLAN_CONSTELLATIONS.map(c => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        )}
      </div>

      {viewMode === 'constellation' ? (
        <div className="family-tree-constellation-wrap">
          {constellationClan === 'will' ? (
            <WillConstellation
              characters={characters}
              relationships={relationships}
              stories={stories}
              selectedChar={selectedChar}
              onSelectChar={onSelectChar}
            />
          ) : (
            <ClanConstellation
              clanId={constellationClan}
              clanLabel={CLAN_CONSTELLATIONS.find(c => c.id === constellationClan)?.label}
              clanColor={CLAN_CONSTELLATIONS.find(c => c.id === constellationClan)?.color}
              characters={characters}
              relationships={relationships}
              stories={stories}
              selectedChar={selectedChar}
              onSelectChar={onSelectChar}
            />
          )}
          <ErrorBoundary label={selectedChar?.name || 'Character panel'} resetKey={selectedChar?.id}>
            <CharacterPanel
              character={selectedChar}
              characters={characters}
              relationships={relationships}
              showSecrets={showSecrets}
              onSelectChar={onSelectChar}
              onClose={() => onSelectChar(null)}
              notes={selectedChar ? characterNotes[selectedChar.id] : ''}
              onSaveNote={onSaveNote}
              onOpenBoard={onOpenBoard}
            />
          </ErrorBoundary>
        </div>
      ) : (
      <div className="ft-trees-row">
      <div className="ft-nav-sidebar">
        <input
          type="text"
          className="ft-nav-search"
          placeholder="Search clans…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {campGroups.map(({ camp, label, color, entries }) => (
          <div key={camp}>
            <div className="ft-nav-group-header">{label}</div>
            {entries.map(([id, h]) => (
              <button
                key={id}
                className={`ft-nav-item${activeHouse === id ? ' active' : ''}`}
                style={activeHouse === id ? { background: `${h.color}22`, borderLeft: `2px solid ${h.color}` } : {}}
                onClick={() => { setActiveHouse(id); onSelectChar(null) }}
              >
                <span className="ft-nav-dot" style={{ background: h.color }} />
                <span className="ft-nav-label">{h.label}</span>
              </button>
            ))}
          </div>
        ))}
        {earthEntries.length > 0 && (
          <>
            <div className="ft-nav-group-header">Earth Guardians</div>
            {earthEntries.map(([id, h]) => (
              <button
                key={id}
                className={`ft-nav-item${activeHouse === id ? ' active' : ''}`}
                style={activeHouse === id ? { background: `${h.color}22`, borderLeft: `2px solid ${h.color}` } : {}}
                onClick={() => { setActiveHouse(id); onSelectChar(null) }}
              >
                <span className="ft-nav-dot" style={{ background: h.color }} />
                <span className="ft-nav-label">{h.label}</span>
              </button>
            ))}
          </>
        )}
      </div>

      <div className="tree-main">
        <div className="tree-canvas-wrap">
          <div className="tree-header">
            <div className="tree-header-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <h2 style={{ color: tree.color, margin: 0 }}>{tree.label}</h2>
                {tree.camp && CAMP_CONFIG[tree.camp] && (
                  <span style={{
                    fontSize: '10px', fontWeight: 600, letterSpacing: '0.04em',
                    padding: '2px 8px', borderRadius: '10px',
                    backgroundColor: CAMP_CONFIG[tree.camp].color + '22',
                    color: CAMP_CONFIG[tree.camp].color,
                    border: `1px solid ${CAMP_CONFIG[tree.camp].color}55`,
                  }}>
                    {CAMP_CONFIG[tree.camp].label}
                  </span>
                )}
              </div>
              <p>{tree.description}</p>
            </div>
            <div className="ft-controls">
              <div className="ft-jump-wrap">
                <input
                  type="text"
                  className="ft-jump-input"
                  placeholder="Jump to person…"
                  value={charJump}
                  onChange={e => setCharJump(e.target.value)}
                />
                {jumpMatches.length > 0 && (
                  <div className="ft-jump-dropdown">
                    {jumpMatches.map(({ node, character }) => (
                      <button
                        key={node.id}
                        className="ft-jump-option"
                        onClick={() => jumpToNode(node, character)}
                      >
                        {character?.name || node.ghostName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="ft-control-btn" onClick={expandAll}>Expand All</button>
              <button className="ft-control-btn" onClick={collapseAll}>Collapse All</button>
              <button
                className={`ft-control-btn ${dense ? 'active' : ''}`}
                onClick={() => setDense(v => !v)}
                title="Compact layout"
              >
                Dense
              </button>
              <div className="ft-zoom-row">
                <button className="ft-control-btn ft-zoom-btn"
                  onClick={() => updateView(p => ({ ...p, scale: Math.min(4, p.scale * 1.2) }))}>
                  +
                </button>
                <span className="ft-zoom-display">{Math.round(view.scale * 100)}%</span>
                <button className="ft-control-btn ft-zoom-btn"
                  onClick={() => updateView(p => ({ ...p, scale: Math.max(0.25, p.scale / 1.2) }))}>
                  −
                </button>
                <button className="ft-control-btn ft-zoom-btn" onClick={resetView} title="Fit to view">⊙</button>
              </div>
            </div>
          </div>

          <div
            className="tree-svg-scroll"
            ref={svgWrapRef}
            style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <svg width="100%" height="100%" style={{ display: 'block' }}>
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#555" />
                </marker>
              </defs>

              <g transform={`translate(${view.x},${view.y}) scale(${view.scale})`}>
                <g transform={dense ? `scale(${DENSE_SCALE})` : undefined}>
                  {/* Edges — when a character is selected, its own ties render bold and
                      bright while every other edge dims, so connections stand out on
                      dense trees instead of blending into a flat wall of lines. */}
                  {visibleEdges.map((edge, i) => {
                    const s = nodeMap[edge.from]
                    const t = nodeMap[edge.to]
                    if (!s || !t || hiddenNodes.has(edge.to)) return null
                    const mx = (s.x + t.x) / 2
                    const my = (s.y + t.y) / 2
                    const isFocused = !!selectedChar && (edge.from === selectedChar.id || edge.to === selectedChar.id)
                    const isDimmed  = !!selectedChar && !isFocused
                    return (
                      <g key={i}>
                        <line
                          x1={s.x} y1={s.y} x2={t.x} y2={t.y}
                          stroke={edge.color}
                          strokeWidth={isFocused ? 3 : 1.5}
                          strokeDasharray={edge.dashed ? '6,4' : 'none'}
                          strokeOpacity={isDimmed ? 0.12 : (isFocused ? 0.95 : (edge.dashed ? 0.55 : 0.65))}
                          style={{ transition: 'stroke-opacity .15s, stroke-width .15s' }}
                        />
                        {edge.label && (
                          <text
                            x={mx + 6} y={my - 4}
                            fontSize="9" fill={edge.color} opacity={isDimmed ? 0.1 : (isFocused ? 1 : 0.75)}
                            fontWeight={isFocused ? 700 : 400}
                            style={{ userSelect: 'none', transition: 'opacity .15s' }}
                          >
                            {edge.label}
                          </text>
                        )}
                      </g>
                    )
                  })}

                  {/* Nodes */}
                  {tree.layout.nodes.filter(n => !hiddenNodes.has(n.id)).map(node => {
                    const isConnected = !selectedChar || node.id === selectedChar.id ||
                      showEdges.some(e => (e.from === selectedChar.id && e.to === node.id) || (e.to === selectedChar.id && e.from === node.id))
                    return (
                      <NodeCircle
                        key={node.id}
                        node={node}
                        character={charMap[node.id]}
                        isSelected={selectedChar?.id === node.id}
                        isFaded={!!selectedChar && !isConnected}
                        onClick={handleNodeClick}
                        isCollapsed={collapsed.has(node.id)}
                        canCollapse={nodesWithChildren.has(node.id)}
                        onToggleCollapse={toggleCollapse}
                      />
                    )
                  })}

                  {showSecrets && tree.layout.edges.some(e => e.dashed) && (
                    <text x="16" y={tree.layout.svgH - 12} fontSize="10" fill="#9b5de5" opacity="0.6"
                      style={{ userSelect: 'none' }}>
                      - - - Secret / Hidden connection
                    </text>
                  )}
                </g>
              </g>
            </svg>
          </div>

          {activeHouse === 'kazemi' && (
            <div className="matriline-legend">
              <span className="mat-label">Matrilines:</span>
              <span style={{ color: '#5F9EA0' }}>Minia → Summari, Nighla (chose Kazemi name — biological mother kept secret)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#888' }}>Ember → Irane E. Osiro only (chose Osiro name — secret)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#1A3FBF' }}>Arai → Nebula, Iron, Pixel</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#CC1A1A' }}>Hope → Nova, Law, Faith</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#1A6B1A' }}>Zoe → Aurora, Eon, Alpha</span>
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
              <span style={{ color: '#5b9bd5' }}>Arai → Nebula, Iron, Pixel</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#E87B22' }}>Hope → Nova, Law, Faith</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#9b5de5' }}>Zoe → Aurora, Eon, Alpha</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#888' }}>Ember's children appear in the Kazemi tree (secret matriline)</span>
            </div>
          )}
          {activeHouse === 'more' && (
            <div className="matriline-legend">
              <span style={{ color: '#4A6E8A' }}>Cycla held the door · Cith led the evacuation into Mana's hidden realm</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#E05050' }}>Red dashed = the Arke War — the hunt that failed to end them</span>
            </div>
          )}
          {activeHouse === 'nexal_house' && (
            <div className="matriline-legend">
              <span style={{ color: '#5b9bd5' }}>Blue = Nexal bloodline · Arai Nexal took Kazemi name</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#e84855' }}>Red dashed = serves Clan Vane openly (Ascen sphere)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#8B2020' }}>Dark red dashed = allied with House Ardent · Nexal reads future · Ardent strikes</span>
            </div>
          )}
          {activeHouse === 'ardent' && (
            <div className="matriline-legend">
              <span style={{ color: '#D4AF37' }}>Gold = Vane bloodline · Dulla born as first son of Aevum</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#8B2020' }}>Red = founded House Ardent as cover — changed name from Dulla Vane</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#e84855' }}>Red dashed = serves Vane covertly · appears as independent ally</span>
            </div>
          )}
          {activeHouse === 'apolo' && (
            <div className="matriline-legend">
              <span style={{ color: '#E87B22' }}>Orange = Apolo bloodline · Hope Apolo took Kazemi name</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#9b5de5' }}>Purple dashed = serves House Wov as spatial intel (Dimensional Shear)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#4A4A6A' }}>Dark dashed = sister house pairing with House Naval (tool + beast)</span>
            </div>
          )}
          {activeHouse === 'naval' && (
            <div className="matriline-legend">
              <span style={{ color: '#4A4A6A' }}>Dark = Naval bloodline · Hollow Dirge wraith-beast contract</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#00b4d8' }}>Blue dashed = serves Clan Osiro as Alma beast enforcement</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#E87B22' }}>Orange dashed = sister house pairing with House Apolo (beast + tool)</span>
            </div>
          )}
          {activeHouse === 'noble_clans' && (
            <div className="matriline-legend">
              <span style={{ color: '#9B30FF' }}>Purple = Lucerne/Vrak group · beast weapons (Ruin, Eclipse, Erasure)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#D4AF37' }}>Gold = Seraph/Selis group · tools forged from defeated Primals (Sova, Keth, Tevan)</span>
              <span className="mat-sep">·</span>
              <span style={{ color: '#888' }}>Duki Navar (Seat I) and Olda Apolo (Seat IV) hold their seats with no blood tie to the extinct clans</span>
            </div>
          )}
        </div>

        <ErrorBoundary label={selectedChar?.name || 'Character panel'} resetKey={selectedChar?.id}>
          <CharacterPanel
            character={selectedChar}
            characters={characters}
            relationships={relationships}
            showSecrets={showSecrets}
            onSelectChar={onSelectChar}
            onClose={() => onSelectChar(null)}
            notes={selectedChar ? characterNotes[selectedChar.id] : ''}
            onSaveNote={onSaveNote}
            onOpenBoard={onOpenBoard}
          />
        </ErrorBoundary>
      </div>
      </div>
      )}
    </div>
  )
}
