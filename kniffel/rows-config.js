/**
 * rows-config.js
 * ---------------------------------------------------------------------------
 * Single source of truth describing every row of the Kniffel score sheet.
 * Both the renderer (app.js -> buildBodyRows) and the calculation logic
 * (app.js -> calculateAllScores) read from this array, so the sheet
 * structure only ever has to be defined once.
 *
 * Row "type" values:
 *   "input"     -> an editable score cell for every player
 *   "bonus"     -> the special Yes/No + auto +35 bonus row
 *   "total"     -> a computed, read-only total row
 *   "spacer"    -> the empty visual gap row between upper & lower sections
 * ---------------------------------------------------------------------------
 */

const SCORE_ROWS = [
  // ---------------- Upper Section ----------------
  { id: 'ones',        label: 'Einser',        icon: 'die-1', type: 'input', section: 'upper', hint: 'Anzahl gewürfelter 1er × 1' },
  { id: 'twos',        label: 'Zweier',        icon: 'die-2', type: 'input', section: 'upper', hint: 'Anzahl gewürfelter 2er × 2' },
  { id: 'threes',      label: 'Dreier',        icon: 'die-3', type: 'input', section: 'upper', hint: 'Anzahl gewürfelter 3er × 3' },
  { id: 'fours',       label: 'Vierer',        icon: 'die-4', type: 'input', section: 'upper', hint: 'Anzahl gewürfelter 4er × 4' },
  { id: 'fives',       label: 'Fünfer',        icon: 'die-5', type: 'input', section: 'upper', hint: 'Anzahl gewürfelter 5er × 5' },
  { id: 'sixes',       label: 'Sechser',       icon: 'die-6', type: 'input', section: 'upper', hint: 'Anzahl gewürfelter 6er × 6' },
  { id: 'bonus',       label: 'Bonus',         icon: 'star',  type: 'bonus', section: 'upper', hint: 'Ab 63 Punkten oben: automatisch +35' },
  { id: 'upperTotal',  label: 'Summe oben',    icon: null,    type: 'total', section: 'upper' },

  // ---------------- Spacer between sections ----------------
  { id: 'spacer-1', type: 'spacer' },

  // ---------------- Lower Section ----------------
  { id: 'threeKind',   label: 'Dreierpasch',    icon: 'dice',    type: 'input', section: 'lower', hint: 'Summe aller Würfel' },
  { id: 'fourKind',    label: 'Viererpasch',    icon: 'dice',    type: 'input', section: 'lower', hint: 'Summe aller Würfel' },
  { id: 'fullHouse',   label: 'Full House',     icon: 'house',   type: 'input', section: 'lower', hint: 'Feste 25 Punkte', fixedValue: 25 },
  { id: 'smallStraight', label: 'Kleine Straße', icon: 'straight', type: 'input', section: 'lower', hint: 'Feste 30 Punkte', fixedValue: 30 },
  { id: 'largeStraight', label: 'Große Straße',  icon: 'straight', type: 'input', section: 'lower', hint: 'Feste 40 Punkte', fixedValue: 40 },
  { id: 'yahtzee',     label: 'Kniffel',        icon: 'trophy',  type: 'input', section: 'lower', hint: 'Feste 50 Punkte', fixedValue: 50 },
  { id: 'chance',      label: 'Chance',         icon: 'sparkle', type: 'input', section: 'lower', hint: 'Summe aller Würfel' },
  { id: 'lowerTotal',  label: 'Summe unten',    icon: null,      type: 'total', section: 'lower' },

  // ---------------- Grand Total ----------------
  { id: 'grandTotal',  label: 'Gesamtsumme',   icon: 'crown', type: 'total', section: 'grand' },
];

/**
 * IDs (in order) of rows that are actual player-editable score categories.
 * Derived once here so app.js doesn't need to re-filter repeatedly.
 */
const EDITABLE_ROW_IDS = SCORE_ROWS.filter(r => r.type === 'input').map(r => r.id);

/** Maximum number of players allowed on one sheet. */
const MAX_PLAYERS = 6;

/** Upper section bonus threshold and reward, per official Kniffel rules. */
const BONUS_THRESHOLD = 63;
const BONUS_POINTS = 35;