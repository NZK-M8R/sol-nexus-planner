import { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { HOUSE_COLORS, HOUSE_LABELS } from '../data/characters'
import CharacterPanel from './CharacterPanel'

const DENSE_SCALE = 0.68

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
}

const CAMP_ORDER = ['origins', 'imperial', 'vane', 'survivor', 'grand', 'ascen', 'aura', 'force', 'primal', 'mana_born']

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
    description: 'Dynasty founded by the immortal Aevum Vane. Both Vane and Clan More are the only houses that hold the full truth of the world\'s origin — from opposite sides. Two houses serve Vane directly in the current arc: House Nexal (Arai\'s bloodline, time element, open service) and House Ardent (bloodline secretly founded by Darkki Ardent — Dulla\'s son born on Orius — Aevum adopted it as cover without knowing it traced to Dulla\'s own secret family — covert Vane service). Ember Hist was born Ember Vane; her father is Historical Niro Vane. Her mother was Artic Osiro — a captured Osiro woman forced into the Vane household. When Ember took the Osiro name, she was reclaiming her mother\'s clan name, not borrowing it.',
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
    description: 'Grand Family of the Eura continent. Lady Vesper Wov leads the Inquisition through the Oracle\'s Eye. Historical protectors of the Tree of Eden — the Gaia Grand weapon. Served alongside House Apolo (spatial intelligence arm) and House Navar (Osiro\'s Alma guard) through the Orian era.',
    layout: {
      svgW: 900,
      svgH: 320,
      nodes: [
        { id: 'vesper',    x: 450, y: 90,  size: 28 },
        { id: 'wov_intel', x: 450, y: 240, size: 18, type: 'gap',
          label: '~ Wov Inquisition — Oracle\'s Eye · Intelligence Operations ~' },
      ],
      edges: [
        { from: 'vesper', to: 'wov_intel', color: '#7B5EA7', dashed: true, label: 'Inquisition authority' },
      ],
    },
  },

  lucerne: {
    label: 'Clan Lucerne',
    color: '#D4460A',
    camp: 'aura',
    description: 'Grand Family of the Lucerne continent. The oldest Alma bloodline — Terrans who accepted Ferali beast-contracts at full depth. Wielders of Morningfall (13th Realm). Led by Azen Lucerne from Ashgard.',
    layout: {
      svgW: 800,
      svgH: 260,
      nodes: [
        { id: 'azen_lucerne', x: 400, y: 120, size: 28 },
      ],
      edges: [],
    },
  },

  seraph: {
    label: 'Clan Seraph',
    color: '#C8C0FF',
    camp: 'force',
    description: 'Grand Family of the Seraph continent. The oldest Spirit bloodline — Terrans who accepted Celestial tool-contracts as divine mandates. Wielders of Covenant Seraph (14th Realm). Led by Elorah Seraph from Seraphel.',
    layout: {
      svgW: 800,
      svgH: 260,
      nodes: [
        { id: 'elorah_seraph', x: 400, y: 120, size: 28 },
      ],
      edges: [],
    },
  },

  osiro: {
    label: 'Clan Osiro',
    color: '#00b4d8',
    camp: 'grand',
    description: 'Grand Pillar II — Treasury. Founded by Ember Vane (ember_hist), who reclaimed the Osiro surname as an act of defiance against House Vane. Ember A. Osiro is her modern descendant. The Shadow of the Emperor (Irane E. Osiro) is embedded within the clan.',
    layout: {
      svgW: 880,
      svgH: 380,
      nodes: [
        { id: 'ember_hist',     x: 220, y: 100, size: 22, dim: true },
        { id: 'irane_e_osiro',  x: 620, y: 100, size: 20, dim: true, dashed: true },
        { id: 'osiro_gap',      x: 220, y: 250, type: 'gap', label: '~ Osiro Bloodline — Many Generations ~' },
        { id: 'ember_osiro',    x: 220, y: 340, size: 26 },
      ],
      edges: [
        { from: 'ember_hist',    to: 'irane_e_osiro', color: '#9b5de5', dashed: true, label: 'Secret son · Shadow of the Emperor' },
        { from: 'ember_hist',    to: 'osiro_gap',     color: '#CC5500', dashed: true, label: 'Ember Vane → took Osiro name · Founded clan' },
        { from: 'osiro_gap',     to: 'ember_osiro',   color: '#00b4d8' },
      ],
    },
  },

  more: {
    label: 'Clan More',
    color: '#4A6E8A',
    camp: 'primal',
    description: 'The last great Primal house — predating the Arke twins, the Ferali system, and all contracts. Both More and Vane hold the world\'s full origin truth from opposite sides. Cith More recovered the cores of the Tree of Eden and Book of Time after the Fest massacre, ensuring the Grand weapons survived. The arms race between More and Vane is the silent war beneath the Sol-Nexus\'s surface.',
    layout: {
      svgW: 1060,
      svgH: 600,
      nodes: [
        { id: 'primal_era',  x: 530, y: 40, type: 'gap', label: '~ Primal Age · Pre-Arke · Keepers of What Was Lost ~' },
        { id: 'cycla_more',  x: 260, y: 150, size: 28 },
        { id: 'arke_ghost',  x: 800, y: 150, size: 22,
          ghostName: 'Arke Twins', ghostColor: '#E05050', ghostRole: 'Vrak & Selis — The War', ghostInitial: '✕' },
        { id: 'cith_more',   x: 260, y: 300, size: 26 },
        { id: 'vane_ghost',  x: 800, y: 300, size: 22,
          ghostName: 'House Vane', ghostColor: '#e84855', ghostRole: 'Bitter Rival · Arms Race · Other half of the full truth', ghostInitial: 'V' },
        { id: 'toma_more',   x: 260, y: 420, size: 22 },
        { id: 'abe_more',    x: 150, y: 540, size: 24 },
        { id: 'evelyn_more', x: 380, y: 540, size: 20 },
      ],
      edges: [
        { from: 'arke_ghost', to: 'cycla_more', color: '#E05050', dashed: true, label: 'Arke War · The Hunt' },
        { from: 'cycla_more', to: 'cith_more',  color: '#4A6E8A', label: 'Daughter · The Inheritor' },
        { from: 'cith_more',  to: 'toma_more',  color: '#4A6E8A', dashed: true, label: 'Son · public lineage continuation' },
        { from: 'cith_more',  to: 'vane_ghost', color: '#e84855', dashed: true, label: 'Arms Race · Both hold the full truth · Neither can expose the other' },
        { from: 'toma_more',  to: 'abe_more',   color: '#4A6E8A', label: 'Daughter · 2nd daughter · Current clan leader' },
        { from: 'toma_more',  to: 'evelyn_more',color: '#C97064', label: 'Daughter · born on Earth · goes by Eve' },
      ],
    },
  },
  prescian: {
    label: 'Clan Prescian',
    color: '#9B9BAF',
    camp: 'primal',
    description: 'Major surviving Primal sovereign clan — Time Sovereign in its true, unreduced form. They do not participate in the Grand Table and hold no Noble weapon seat. Outside the Ferali and Celestial systems entirely.\n\nSovereign Ability — True Time Expression: To a Prescian elder, the past is not memory — it is present. Every ancestor who carried the ability left a complete record within the bloodline. A current Prescian can access the direct, unfiltered experience of any ancestor as vividly as their own present moment. The accumulated experience of an elder is staggering — they have lived, through lineage, longer than any individual in the Sol-Nexus.\n\nActive Ability — Temporal Compression: For brief durations, a Prescian compresses their personal experience of time — accelerating the mind through the present while the body continues at normal speed. Not freezing time. The cost scales with duration; extended use causes neurological degradation.\n\nCultural Role: The Prescians are the living archive of the Primal era. They remember what Limbo felt like before the Arke twins reshaped it, what the Primordials spoke about, what the 7 original Primal leaders were like as individuals. This knowledge is not shared openly. They have watched too many things get weaponised to give it away.',
    layout: {
      svgW: 800, svgH: 480,
      nodes: [
        { id: 'prescian_era',    x: 400, y: 50, type: 'gap', label: '~ Primal Age · Pre-Arke · Living Archive of the Pre-Arke Age ~' },
        { id: 'sofia_prescian',  x: 280, y: 210, size: 28 },
        { id: 'audis_prescian',  x: 520, y: 210, size: 20 },
        { id: 'prescian_note',   x: 400, y: 390, type: 'gap', label: '~ Time Sovereign: Perfect ancestral memory · Temporal Compression · No Grand Table seat ~' },
      ],
      edges: [
        { from: 'sofia_prescian', to: 'prescian_note', color: '#9B9BAF', dashed: true, label: 'Time Sovereign — unreduced form' },
        { from: 'sofia_prescian', to: 'audis_prescian', color: '#7DA6C9', label: 'Cousin · city-defense branch · held Heaven during the assault' },
      ],
    },
  },
  revyn: {
    label: 'Clan Revyn',
    color: '#6B5472',
    camp: 'primal',
    description: 'Major surviving Primal sovereign clan — Life/Death Sovereign in its full, undivided form. They hold both sides of the threshold simultaneously. Outside the Grand Table, Ferali, and Celestial systems entirely.\n\nSovereign Ability — True Life/Death Expression: Clan Revyn commands unfinished death — those killed before their time did not fully cross. Their presence persists briefly in the space between states. A Revyn practitioner reaches into that space and pulls the body back into function, animating it with whatever remains of the original consciousness.\n\nThe Raised: What returns is not the person — it is a construct built from the remnant. Fidelity scales with time since death: hours-dead = near-complete capability, fragmented personality; years-dead = reduced capacity, mostly instinct; decades-dead = barely functional animating force. Willing deaths and deaths by old age leave nothing to reach.\n\nThe Cost: Every raising takes biological aging from the practitioner — actual years, not metaphor. Minor raisings cost weeks. Significant raisings cost years. The most powerful Revyn elders look three centuries older than they are. They consider this appropriate: life extracted from one vessel to animate another.\n\nCultural Role: Sacred wardens of the threshold. When someone significant dies near a Revyn settlement, the clan is contacted — not to raise indefinitely, but to speak briefly with what remains at the threshold and ensure the crossing was complete.',
    layout: {
      svgW: 800, svgH: 480,
      nodes: [
        { id: 'revyn_era',    x: 400, y: 50, type: 'gap', label: '~ Primal Age · Pre-Arke · Wardens of the Threshold ~' },
        { id: 'nevir_revyn',  x: 400, y: 210, size: 28 },
        { id: 'revyn_note',   x: 400, y: 390, type: 'gap', label: '~ Life/Death Sovereign: Command over unfinished death · Biological aging cost · No Grand Table seat ~' },
      ],
      edges: [
        { from: 'nevir_revyn', to: 'revyn_note', color: '#6B5472', dashed: true, label: 'Life/Death Sovereign — undivided form' },
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
    description: 'Alma clan — Ferali beast-contract lineage from a hidden mountain region. Guardians of Clan Osiro and the Book of Time. Broken at the Fest when Exoo Navar was killed by Duki; post-Fest, House Navar was absorbed as a client clan of House Lucerne, bound to Azen Lucerne via the Chimera Core — the Aura-camp mirror of Apolo\'s binding to Seraph. The Navar line carries a secret connection to Clan More: Toma More fathered Tan Navar with a Navar woman during the Ascen-Primal war. Tan\'s core (Life/Death; Harmony-Light) muted the chaotic-dark expression — but it resurfaced two generations down in Zoe. Neither Zoe nor Toma knew they were related when they met in the facility.',
    layout: {
      svgW: 1200,
      svgH: 560,
      nodes: [
        { id: 'toma_ghost',  x: 220,  y: 55, size: 22,
          ghostName: 'Toma More', ghostColor: '#4A6E8A', ghostRole: 'Secret biological father of Tan · Primal leader · More clan bloodline', ghostInitial: 'T' },
        { id: 'navar_anc',   x: 700,  y: 55, size: 22,
          ghostName: 'House Navar (ancient)', ghostColor: '#1A6B1A', ghostRole: 'Alma lineage · Ferali beast-contract · guardians of Osiro', ghostInitial: 'N' },
        { id: 'tan_navar',   x: 220,  y: 190, size: 22 },
        { id: 'duki_navar',  x: 60,   y: 330, size: 18, dashed: true },
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
      ],
    },
  },

  nexal_house: {
    label: 'House Nexal',
    color: '#5b9bd5',
    camp: 'ascen',
    description: 'Time element bloodline — Arai\'s ancestor line. Founded by Noxa Nexal (daughter of Dulla Vane and Cith More, born on Orius). The Nexal bloodline\'s defining trait: inherited future-sight (Noxa\'s Game) — the ability to calculate and predict outcomes with exceptional precision. Serves Clan Vane openly as temporal intelligence. Allied within the Vane sphere with House Ardent (both descended from Noxa\'s sibling Darkki, though neither house publicly acknowledges the shared origin). Nexal reads the board forward; Ardent reads the room in real time. Tonga (clan leader, Academy era) — carried Noxa\'s Game in full; named Arai to the Vane household without hesitation. Nina (youngest sibling) — Time-water; chaotic-dark; swims through the time-stream rather than calculating it. A major future player.',
    layout: {
      svgW: 1100,
      svgH: 640,
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
      ],
      edges: [
        { from: 'noxa_nexal',   to: 'nexal_gap',    color: '#5b9bd5', label: 'Founded Nexal bloodline · Noxa\'s Game begins' },
        { from: 'nexal_gap',    to: 'tonga',        color: '#5b9bd5', label: 'Tonga — clan leader · Time-light · carried Noxa\'s Game in full' },
        { from: 'tonga',        to: 'tenza',        color: '#5b9bd5', label: 'Eldest · Noxa\'s Game inherited · betrayer' },
        { from: 'tonga',        to: 'arai',         color: '#5b9bd5', label: 'Named her to Vane household without hesitation · took Kazemi name' },
        { from: 'tonga',        to: 'nina',         color: '#5b9bd5', label: 'Youngest · Time-stream swimmer · major future role' },
        { from: 'noxa_nexal',   to: 'vane_service', color: '#e84855', dashed: true, label: 'Serves Vane · temporal intel arm' },
        { from: 'noxa_nexal',   to: 'ardent_ally',  color: '#8B2020', dashed: true, label: 'Sibling bloodline — Darkki is Noxa\'s brother' },
        { from: 'vane_service', to: 'more_enemy',   color: '#4A6E8A', dashed: true, label: 'Ascen vs Primal — Noxa\'s mother was Cith More' },
      ],
    },
  },

  ardent: {
    label: 'House Ardent',
    color: '#8B2020',
    camp: 'ascen',
    description: 'Bloodline founded by Darkki Ardent — first child of Dulla Vane and Cith More, born in secret on Orius. Darkki\'s sister Noxa Nexal founded the Nexal bloodline simultaneously — both houses descend from the same parents. House Ardent\'s defining inherited ability: full spatial omniscience across any space (every person\'s exact position, movement, and presence known simultaneously). Aevum used "House Ardent" as a public cover identity without knowing Dulla\'s secret family had already established it. Tola Ardent is the current leader — Hope\'s secret biological father.',
    layout: {
      svgW: 1300,
      svgH: 600,
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
      ],
      edges: [
        { from: 'dulla_vane',    to: 'darkki_ardent', color: '#8B2020', secret: true, label: 'First child with Cith More · born on Orius in secret' },
        { from: 'cith_more',     to: 'darkki_ardent', color: '#4A6E8A', secret: true, label: 'First child with Dulla · Primal blood in the Ardent line' },
        { from: 'darkki_ardent', to: 'ardent_gap',    color: '#8B2020', label: 'Founded Ardent bloodline · spatial omniscience begins' },
        { from: 'ardent_gap',    to: 'tola_ardent',   color: '#8B2020', label: 'Current leader — great-great-grandson of Darkki' },
        { from: 'tola_ardent',   to: 'hope_secret',   color: '#c0a850', dashed: true, label: 'Secret father · Hope does not know' },
        { from: 'darkki_ardent', to: 'aevum_cover',   color: '#D4AF37', dashed: true, label: 'Aevum used the Ardent name as cover — never knew Dulla founded the bloodline' },
        { from: 'darkki_ardent', to: 'nexal_sibling', color: '#5b9bd5', dashed: true, label: 'Noxa Nexal = Darkki\'s sister · both born of Dulla + Cith' },
      ],
    },
  },

  apolo: {
    label: 'House Apolo',
    color: '#E87B22',
    camp: 'force',
    description: 'Space core clan — Spirit/Force aligned. Spatial intelligence arm of House Wov\'s Inquisition. Wield the Dimensional Shear (Celestial Force covenant); post-Fest, also bound to House Seraph via the Covenant Seal, gifted by Elorah Seraph. Hope was born Hope Apolo; she took the Kazemi name when she became Emperor Irane\'s second wife and matriarch. House Apolo and House Naval are sister houses in function: Apolo provides Force-tool spatial intelligence for Wov; Naval provides Alma-beast enforcement for Osiro.',
    layout: {
      svgW: 1200,
      svgH: 460,
      nodes: [
        { id: 'apolo_anc',  x: 200,  y: 70,  size: 26,
          ghostName: 'House Apolo (ancient)', ghostColor: '#E87B22', ghostRole: 'Space Core · Dimensional Shear · Celestial Force · pre-Merge', ghostInitial: 'A' },
        { id: 'apolo_gap',  x: 200,  y: 210, type: 'gap', label: '~ Apolo Bloodline · Dimensional Shear Contract · Many Generations ~' },
        { id: 'hope',       x: 200,  y: 350, size: 26 },
        { id: 'nova',       x: 80,   y: 440, size: 20 },
        { id: 'law',        x: 200,  y: 440, size: 18 },
        { id: 'faith',      x: 320,  y: 440, size: 16 },
        { id: 'tola_ardent', x: 560,  y: 280, size: 22 },
        { id: 'wov_ally',   x: 620,  y: 160, size: 22,
          ghostName: 'House Wov', ghostColor: '#9b5de5', ghostRole: 'Serves — spatial intel arm · Dimensional Shear operations', ghostInitial: 'W' },
        { id: 'naval_pair', x: 980,  y: 160, size: 20,
          ghostName: 'House Naval', ghostColor: '#4A4A6A', ghostRole: 'Sister house — Naval (Alma beast) serves Osiro · Apolo (Force tool) serves Wov', ghostInitial: 'N' },
        { id: 'osiro_link', x: 800,  y: 340, size: 18,
          ghostName: 'Clan Osiro', ghostColor: '#00b4d8', ghostRole: 'Indirect — Naval\'s principal · paired with Wov sphere', ghostInitial: 'O' },
      ],
      edges: [
        { from: 'apolo_anc', to: 'apolo_gap',  color: '#E87B22', dashed: true },
        { from: 'apolo_gap', to: 'hope',       color: '#E87B22', label: 'Hope Apolo → took Kazemi name' },
        { from: 'tola_ardent', to: 'hope',     color: '#c0a850', dashed: true, label: 'Secret biological father · Hope does not know · Ardent bloodline' },
        { from: 'hope',      to: 'nova',       color: '#CC1A1A' },
        { from: 'hope',      to: 'law',        color: '#CC1A1A' },
        { from: 'hope',      to: 'faith',      color: '#CC1A1A' },
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
    label: 'The Hallow Sisters',
    color: '#C9A227',
    camp: 'survivor',
    description: 'Paul Hallow\'s daughters — rescued humans, captured a year later in the destruction of Miho Frame\'s resistance camp. Valariya is the namesake of the future city and the true origin of Irane\'s name, given first as a child\'s private nickname and again, decades later, at her own death. Aliya becomes the youngest of the five Valariyan Heads.',
    layout: {
      svgW: 1000,
      svgH: 520,
      nodes: [
        { id: 'paul_hallow',      x: 500, y: 60,  size: 24 },
        { id: 'aliya_hallow',     x: 350, y: 220, size: 26 },
        { id: 'valariya_hallow',  x: 650, y: 220, size: 26 },
        { id: 'cai',              x: 220, y: 360, size: 20 },
        { id: 'dio',              x: 650, y: 360, size: 20 },
        { id: 'leo_proude',       x: 800, y: 360, size: 18 },
        { id: 'irane',            x: 500, y: 460, size: 24 },
      ],
      edges: [
        { from: 'paul_hallow',     to: 'aliya_hallow',    color: '#C9A227', label: 'Father · killed shielding both daughters' },
        { from: 'paul_hallow',     to: 'valariya_hallow', color: '#C9A227', label: 'Told her the bedtime-story emperor that becomes "Irane"' },
        { from: 'aliya_hallow',    to: 'valariya_hallow', color: '#C9A227', label: 'Sisters · ran together, never looked back' },
        { from: 'cai',             to: 'aliya_hallow',    color: '#5F8B6E', dashed: true, label: 'Given to Cai by 8 · raised as her own' },
        { from: 'valariya_hallow', to: 'dio',              color: '#C0603A', label: 'Married as adults' },
        { from: 'leo_proude',      to: 'valariya_hallow', color: '#888', dashed: true, label: 'Unrequited love · friendship with Dio survived it' },
        { from: 'valariya_hallow', to: 'irane',            color: '#D4AF37', dashed: true, label: 'Names him "Irane" as a child, again at her own death' },
      ],
    },
  },
}

function NodeCircle({ node, character, isSelected, onClick, isCollapsed, canCollapse, onToggleCollapse }) {
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
  const opacity  = isGhost ? 0.65 : (node.dim ? 0.45 : 1)

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
}) {
  const [activeHouse, setActiveHouse] = useState('kazemi')
  const [search, setSearch] = useState('')
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
    const timer = setTimeout(resetView, 40)
    return () => clearTimeout(timer)
  }, [activeHouse]) // eslint-disable-line react-hooks/exhaustive-deps

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
                  {/* Edges */}
                  {visibleEdges.map((edge, i) => {
                    const s = nodeMap[edge.from]
                    const t = nodeMap[edge.to]
                    if (!s || !t || hiddenNodes.has(edge.to)) return null
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

                  {/* Nodes */}
                  {tree.layout.nodes.filter(n => !hiddenNodes.has(n.id)).map(node => (
                    <NodeCircle
                      key={node.id}
                      node={node}
                      character={charMap[node.id]}
                      isSelected={selectedChar?.id === node.id}
                      onClick={handleNodeClick}
                      isCollapsed={collapsed.has(node.id)}
                      canCollapse={nodesWithChildren.has(node.id)}
                      onToggleCollapse={toggleCollapse}
                    />
                  ))}

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
