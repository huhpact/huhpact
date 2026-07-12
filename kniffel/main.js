/**
 * app.js
 * ---------------------------------------------------------------------------
 * Kniffelblock — application logic.
 *
 * Structure of this file:
 *   1. State
 *   2. DOM references
 *   3. Icon helper
 *   4. Rendering: table body rows, player columns
 *   5. Player management: add / rename / remove
 *   6. Score calculation
 *   7. Persistence (localStorage)
 *   8. Toast notifications
 *   9. Event wiring
 *   10. PWA: service worker + install prompt
 * ---------------------------------------------------------------------------
 */

(function () {
  'use strict';

  /* ===========================================================================
     1. STATE
     =========================================================================== */

  /**
   * players: Array of player objects.
   * Each player: { id, name, nameConfirmed, colorHue, sheets: [scores, ...],
   * struck: [struckMap, ...] } where each entry in `sheets` is a
   * { [rowId]: number|null } map and each entry in `struck` is a parallel
   * { [rowId]: boolean } map (same indexing as `sheets`) marking categories
   * deliberately crossed out — see emptyStruckMap(). In "single" mode every
   * player has exactly one sheet (and one struck map); in "double" mode
   * every player has exactly two of each (see STATE.mode below), rendered
   * as two sub-columns under that player.
   */
  let players = [];
  let nextPlayerId = 1;

  /**
   * mode: 'single' -> one score sheet per player (classic).
   *       'double' -> two independent score sheets per player, entered side
   *                   by side; each has its own totals/bonus, and the
   *                   player's grand total adds both sheets together.
   */
  let mode = 'single';

  /**
   * seniorMode: "Rentner-Modus" — an independent, orthogonal accessibility
   * toggle (can be combined with either single or double mode). When on:
   * much stronger player/section background tints, larger & bolder type,
   * a header row that stays pinned to the top of the viewport while
   * scrolling, hard column-divider rules, and a per-cell "erledigt/
   * durchgestrichen" (done/crossed-out) toggle to help mark categories
   * that can't be used. Applied as a single class on <body> (see
   * applySeniorModeUI) so all the CSS lives in one attribute-scoped block.
   */
  let seniorMode = false;

  /* Distinct, paper-friendly "pen color" hues assigned round-robin to players
     so each player's column header gets a small identifying flag. */
  const PLAYER_HUES = ['#a8342a', '#2f5f8a', '#4a7a4a', '#8a5a2f', '#6a4a8a', '#8a2f5f'];

  /* ===========================================================================
     2. DOM REFERENCES
     =========================================================================== */

  const els = {
    headerRow: document.querySelector('.row-players'),
    body: document.getElementById('scorepad-body'),
    btnAddPlayer: document.getElementById('btn-add-player'),
    btnCalculate: document.getElementById('btn-calculate'),
    btnNewGame: document.getElementById('btn-new-game'),
    emptyHint: document.getElementById('empty-state-hint'),
    toast: document.getElementById('toast'),
    table: document.getElementById('scorepad-table'),
    btnModeSingle: document.getElementById('btn-mode-single'),
    btnModeDouble: document.getElementById('btn-mode-double'),
    sheetsHeaderRow: document.getElementById('row-sheets'),
    btnSeniorMode: document.getElementById('btn-senior-mode'),
  };

  /* ===========================================================================
     3. ICON HELPER
     ---------------------------------------------------------------------------
     Small inline-SVG icon set so we need zero external icon library.
     =========================================================================== */

  const ICONS = {
    'die-1': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>',
    'die-2': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.4" fill="currentColor"/><circle cx="16" cy="16" r="1.4" fill="currentColor"/></svg>',
    'die-3': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="16" cy="16" r="1.3" fill="currentColor"/></svg>',
    'die-4': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.3" fill="currentColor"/><circle cx="16" cy="8" r="1.3" fill="currentColor"/><circle cx="8" cy="16" r="1.3" fill="currentColor"/><circle cx="16" cy="16" r="1.3" fill="currentColor"/></svg>',
    'die-5': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/><circle cx="16" cy="8" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="8" cy="16" r="1.2" fill="currentColor"/><circle cx="16" cy="16" r="1.2" fill="currentColor"/></svg>',
    'die-6': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="7.5" r="1.2" fill="currentColor"/><circle cx="16" cy="7.5" r="1.2" fill="currentColor"/><circle cx="8" cy="12" r="1.2" fill="currentColor"/><circle cx="16" cy="12" r="1.2" fill="currentColor"/><circle cx="8" cy="16.5" r="1.2" fill="currentColor"/><circle cx="16" cy="16.5" r="1.2" fill="currentColor"/></svg>',
    'star': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.8 1.5 6.9L12 17.9l-6.1 3.4 1.5-6.9-5.2-4.8 6.9-.7z"/></svg>',
    'dice': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="10" height="10" rx="2.5"/><circle cx="7" cy="14" r="1" fill="currentColor"/><rect x="11" y="4" width="10" height="10" rx="2.5"/><circle cx="14" cy="7" r="1" fill="currentColor"/><circle cx="18" cy="11" r="1" fill="currentColor"/></svg>',
    'house': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M9.5 19.5v-6h5v6"/></svg>',
    'straight': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 17 21 5"/><circle cx="5" cy="16.2" r="1.1" fill="currentColor" stroke="none"/><circle cx="10" cy="13" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="9.8" r="1.1" fill="currentColor" stroke="none"/><circle cx="19.5" cy="6.9" r="1.1" fill="currentColor" stroke="none"/></svg>',
    'trophy': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 5H4v1a4 4 0 0 0 4 4"/><path d="M17 5h3v1a4 4 0 0 1-4 4"/></svg>',
    'sparkle': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 8.5 13.4 12 12 15.5 10.6 12z" fill="currentColor" stroke="none"/></svg>',
    'crown': '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 2-9 5 4 2-6 2 6 5-4 2 9z"/><path d="M3 20h18"/></svg>',
    'pencil': '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || '';
  }

  /* ===========================================================================
     4. RENDERING
     =========================================================================== */

  /**
   * Build the entire <tbody> from SCORE_ROWS. Called once on load and whenever
   * the player list changes (add/remove), since column counts shift.
   */
  function renderBody() {
    els.body.innerHTML = '';

    if (players.length === 0) {
      const tr = document.createElement('tr');
      tr.className = 'empty-state-row';
      const td = document.createElement('td');
      td.colSpan = 1;
      td.textContent = 'Noch keine Spieler auf dem Blatt.';
      tr.appendChild(td);
      els.body.appendChild(tr);
      return;
    }

    SCORE_ROWS.forEach((row) => {
      const tr = document.createElement('tr');

      if (row.type === 'spacer') {
        tr.className = 'row-spacer';
        tr.appendChild(makeLabelCell(null));
        players.forEach((player) => {
          sheetsFor(player).forEach(() => tr.appendChild(document.createElement('td')));
        });
        els.body.appendChild(tr);
        return;
      }

      tr.className = rowClassFor(row);
      tr.appendChild(makeLabelCell(row));

      players.forEach((player) => {
        // The grand total is one combined figure per player (sum of both
        // sheets in double mode), so it gets a single merged cell spanning
        // both sub-columns instead of one cell per sheet.
        if (row.id === 'grandTotal' && mode === 'double') {
          tr.appendChild(makeScoreCell(row, player, 0, { colSpan: 2 }));
          return;
        }
        sheetsFor(player).forEach((sheetScores, sheetIndex) => {
          tr.appendChild(makeScoreCell(row, player, sheetIndex));
        });
      });

      els.body.appendChild(tr);
    });
  }

  /**
   * Returns the array of score-sheet objects for a player, e.g. [scoresA] in
   * single mode or [scoresA, scoresB] in double mode. Centralizing this means
   * every render/calculate loop below automatically adapts to the mode.
   */
  function sheetsFor(player) {
    return player.sheets;
  }

  function rowClassFor(row) {
    const classes = [];
    if (row.section === 'upper') classes.push('row-upper');
    if (row.section === 'lower') classes.push('row-lower');
    if (row.id === 'bonus') classes.push('row-bonus');
    if (row.id === 'upperTotal') classes.push('row-upper-total');
    if (row.id === 'upperTotalWithBonus') classes.push('row-upper-total-with-bonus');
    if (row.id === 'lowerTotal') classes.push('row-lower-total');
    if (row.id === 'grandTotal') classes.push('row-grand-total');
    if (row.fixedValue) classes.push('fixed-value-row');
    return classes.join(' ');
  }

  /** Builds the sticky left-hand label cell for a given row config. */
  function makeLabelCell(row) {
    const td = document.createElement('td');
    td.className = 'col-label';

    if (!row) return td; // spacer row: empty label cell

    if (row.type === 'total' || row.type === 'total-with-bonus') {
      td.innerHTML = `
        <span class="total-label">
          ${row.icon ? icon(row.icon) : ''}
          <span>${row.label}</span>
        </span>`;
    } else {
      td.innerHTML = `
        <span class="category-label">
          <span class="category-icon">${icon(row.icon)}</span>
          <span>
            ${row.label}
            ${row.hint ? `<span class="category-hint">${row.hint}</span>` : ''}
          </span>
        </span>`;
    }
    return td;
  }

  /**
   * Builds a unique DOM id fragment for a given row/player/sheet combination.
   * In single mode sheetIndex is always 0, so ids stay identical to the
   * pre-double-mode format for that case (keeps old saved games compatible).
   */
  function cellKey(playerId, sheetIndex) {
    return sheetIndex === 0 ? `${playerId}` : `${playerId}-s${sheetIndex}`;
  }

  /** Builds one player's cell for a given row + sheet (input, bonus, or total). */
  function makeScoreCell(row, player, sheetIndex, opts) {
    const td = document.createElement('td');
    td.className = 'cell-score player-tinted-col';
    if (mode === 'double') td.classList.add(sheetIndex === 0 ? 'cell-sheet-a' : 'cell-sheet-b');
    if (opts && opts.colSpan) {
      td.colSpan = opts.colSpan;
      td.classList.add('cell-merged');
    }
    td.dataset.rowId = row.id;
    td.dataset.playerId = player.id;
    td.dataset.sheetIndex = sheetIndex;
    // Carries this player's pen color down through every cell in their
    // column (not just the header flag) as a CSS var, so a very light tint
    // of "who's who" stays visible even once the header scrolls out of view.
    td.style.setProperty('--player-tint', player.colorHue);

    const key = cellKey(player.id, sheetIndex);
    const sheetScores = player.sheets[sheetIndex];
    const sheetStruck = player.struck && player.struck[sheetIndex];

    if (row.type === 'total' || row.type === 'total-with-bonus') {
      td.innerHTML = `<span class="total-value" id="total-${row.id}-${key}">0</span>`;
      return td;
    }

    if (row.type === 'bonus') {
      td.innerHTML = `<div class="bonus-cell" id="bonus-${key}">
        <span class="bonus-badge is-pending">${icon('star')} &nbsp;+0</span>
      </div>`;
      return td;
    }

    // Standard editable input cell
    const inputId = `score-${row.id}-${key}`;
    const existingValue = sheetScores[row.id];
    const maxAllowed = maxValueFor(row); // e.g. 25 for Full House, 30 for Sixes/Chance, null if unbounded

    const input = document.createElement('input');
    input.type = 'number';
    input.inputMode = 'numeric';
    input.min = '0';
    if (maxAllowed !== null) input.max = String(maxAllowed);
    input.className = 'score-input';
    input.id = inputId;
    input.placeholder = '–';
    const sheetSuffix = mode === 'double' ? ` (Zettel ${sheetIndex + 1})` : '';
    const maxHint = maxAllowed !== null ? ` (max. ${maxAllowed})` : '';
    input.setAttribute('aria-label', `${row.label} – ${player.name}${sheetSuffix}${maxHint}`);
    if (maxAllowed !== null) input.title = `Maximal ${maxAllowed} Punkte in dieser Kategorie`;
    if (existingValue !== null && existingValue !== undefined) {
      input.value = existingValue;
    }

    input.addEventListener('input', () => {
      const raw = input.value;

      if (raw === '') {
        sheetScores[row.id] = null;
        savePlayers();
        return;
      }

      let numeric = Number(raw);

      // Clamp to what's physically possible in this category (e.g. Full
      // House can never exceed 25, Sixes can never exceed 30) rather than
      // rejecting the keystroke outright — typing "99" in the Sixes box
      // just settles at 30, the real ceiling for that box.
      if (maxAllowed !== null && numeric > maxAllowed) {
        numeric = maxAllowed;
        input.value = String(numeric);
      } else if (numeric < 0) {
        numeric = 0;
        input.value = '0';
      }

      sheetScores[row.id] = numeric;
      savePlayers();
    });

    // Enter key on a score input moves focus to the next row's cell (same
    // player + same sheet) for fast, calculator-like data entry.
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        focusNextInput(row.id, player.id, sheetIndex);
      }
    });

    td.appendChild(input);

    if (row.fixedValue) {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'quick-fill-btn';
      chip.textContent = row.fixedValue;
      chip.title = `${row.fixedValue} Punkte eintragen`;
      chip.addEventListener('click', () => {
        input.value = row.fixedValue;
        sheetScores[row.id] = row.fixedValue;
        savePlayers();
        input.focus();
      });
      td.appendChild(chip);
    }

    // "Durchgestrichen" (struck-out) toggle — a Rentner-Modus affordance for
    // marking a category as deliberately unusable this round, the way many
    // players cross out a box on a real paper sheet. Always built (so no
    // extra render pass is needed when senior mode is switched on), but
    // only shown via CSS while .senior-mode is active on <body>. Struck
    // cells lock their input so a crossed-out box can't also hold a value.
    const isStruck = !!(sheetStruck && sheetStruck[row.id]);
    td.classList.toggle('is-struck', isStruck);
    input.disabled = isStruck;

    const strikeBtn = document.createElement('button');
    strikeBtn.type = 'button';
    strikeBtn.className = 'strike-toggle-btn';
    strikeBtn.title = isStruck ? 'Streichung aufheben' : `${row.label} durchstreichen`;
    strikeBtn.setAttribute('aria-label', isStruck ? `Streichung bei ${row.label} aufheben` : `${row.label} durchstreichen`);
    strikeBtn.setAttribute('aria-pressed', String(isStruck));
    strikeBtn.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M4 12h16"/></svg>';
    strikeBtn.addEventListener('click', () => {
      if (!player.struck) player.struck = [];
      if (!player.struck[sheetIndex]) player.struck[sheetIndex] = emptyStruckMap();
      const nowStruck = !player.struck[sheetIndex][row.id];
      player.struck[sheetIndex][row.id] = nowStruck;

      td.classList.toggle('is-struck', nowStruck);
      input.disabled = nowStruck;
      strikeBtn.setAttribute('aria-pressed', String(nowStruck));
      strikeBtn.title = nowStruck ? 'Streichung aufheben' : `${row.label} durchstreichen`;
      strikeBtn.setAttribute('aria-label', nowStruck ? `Streichung bei ${row.label} aufheben` : `${row.label} durchstreichen`);
      if (nowStruck) {
        // Crossing out a box clears any stray value in it, matching what
        // crossing it out on paper means: this box is no longer in play.
        sheetScores[row.id] = null;
        input.value = '';
      } else {
        input.focus();
      }
      savePlayers();
    });
    td.appendChild(strikeBtn);

    return td;
  }

  /** Moves keyboard focus to the next editable input below the current one (same sheet). */
  function focusNextInput(currentRowId, playerId, sheetIndex) {
    const editableRows = EDITABLE_ROW_IDS;
    const idx = editableRows.indexOf(currentRowId);
    const key = cellKey(playerId, sheetIndex);
    for (let i = idx + 1; i < editableRows.length; i++) {
      const next = document.getElementById(`score-${editableRows[i]}-${key}`);
      if (next) {
        next.focus();
        next.select();
        return;
      }
    }
    // Wrapped around / reached the end — just blur.
    document.activeElement && document.activeElement.blur();
  }

  /** Renders the player header row (name inputs/display + remove button). */
  function renderPlayerHeaders() {
    // Remove existing player <th> elements (keep the fixed label <th>).
    els.headerRow.querySelectorAll('.col-player-head').forEach((el) => el.remove());

    players.forEach((player) => {
      const th = document.createElement('th');
      th.className = 'col-player-head player-header-cell player-tinted-col';
      th.scope = 'col';
      if (mode === 'double') th.colSpan = 2;
      th.style.setProperty('--player-tint', player.colorHue);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-remove-player';
      removeBtn.innerHTML = '&times;';
      removeBtn.title = `${player.name} entfernen`;
      removeBtn.setAttribute('aria-label', `${player.name} entfernen`);
      removeBtn.addEventListener('click', () => removePlayer(player.id));
      th.appendChild(removeBtn);

      const flag = document.createElement('span');
      flag.className = 'player-color-flag';
      flag.style.background = player.colorHue;
      th.appendChild(flag);

      th.appendChild(buildNameElement(player));

      els.headerRow.appendChild(th);
    });

    renderSheetSubHeaders();
    updateAddPlayerButtonState();
    updateStickyHeaderOffset();
  }

  /**
   * Rentner-Modus sticky headers: the player-name row (.row-players) sticks
   * at top: 0, and — in double mode — the "Zettel 1/2" sub-header row
   * (.row-sheets) needs to stick directly beneath it. Row heights aren't
   * fixed (fluid padding + senior-mode's larger type both change them), so
   * rather than hardcoding an offset in CSS, measure the actual rendered
   * height of .row-players after each render and expose it as a CSS var
   * that .row-sheets' `top` reads. Cheap enough to just always keep in
   * sync, even when senior mode / double mode aren't currently active.
   */
  function updateStickyHeaderOffset() {
    const headerRowHeight = els.headerRow.getBoundingClientRect().height;
    els.table.style.setProperty('--sticky-header-row-height', `${Math.ceil(headerRowHeight)}px`);
  }

  window.addEventListener('resize', updateStickyHeaderOffset);

  /**
   * Renders (or hides) the "Zettel 1 / Zettel 2" sub-header row shown right
   * below the player names. Only relevant in double mode — in single mode
   * the row is hidden entirely since there's nothing to disambiguate.
   */
  function renderSheetSubHeaders() {
    els.sheetsHeaderRow.querySelectorAll('.col-sheet-head').forEach((el) => el.remove());

    if (mode !== 'double' || players.length === 0) {
      els.sheetsHeaderRow.classList.add('hidden');
      return;
    }

    els.sheetsHeaderRow.classList.remove('hidden');

    players.forEach((player) => {
      [0, 1].forEach((sheetIndex) => {
        const th = document.createElement('th');
        th.className = `col-sheet-head player-tinted-col ${sheetIndex === 0 ? 'is-sheet-a' : 'is-sheet-b'}`;
        th.scope = 'col';
        th.textContent = `Zettel ${sheetIndex + 1}`;
        th.style.setProperty('--player-tint', player.colorHue);
        els.sheetsHeaderRow.appendChild(th);
      });
    });

    // The sub-header row's own height can change too (e.g. text wrapping
    // differently once populated), so re-measure once more after it's built.
    updateStickyHeaderOffset();
  }

  /** Builds either the name <input> (unconfirmed) or the name display (confirmed). */
  function buildNameElement(player) {
    if (!player.nameConfirmed) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'player-name-input';
      input.placeholder = 'Name eingeben…';
      input.value = player.name === defaultNameFor(player) ? '' : player.name;
      input.maxLength = 18;
      input.setAttribute('aria-label', 'Spielername eingeben, dann Enter drücken');

      const confirm = () => {
        const trimmed = input.value.trim();
        player.name = trimmed || defaultNameFor(player);
        player.nameConfirmed = true;
        savePlayers();
        renderPlayerHeaders();
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          confirm();
        }
      });
      input.addEventListener('blur', confirm);

      // Autofocus the newest player's name field.
      requestAnimationFrame(() => input.focus());

      return input;
    }

    const wrap = document.createElement('div');
    wrap.className = 'player-name-display';
    wrap.tabIndex = 0;
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('aria-label', `Name „${player.name}" bearbeiten`);
    wrap.innerHTML = `<span>${escapeHtml(player.name)}</span><span class="rename-icon">${icon('pencil')}</span>`;

    const startRename = () => {
      player.nameConfirmed = false;
      renderPlayerHeaders();
    };
    wrap.addEventListener('click', startRename);
    wrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        startRename();
      }
    });

    return wrap;
  }

  function defaultNameFor(player) {
    return `Spieler ${players.indexOf(player) + 1}`;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ===========================================================================
     5. PLAYER MANAGEMENT
     =========================================================================== */

  /** Builds one empty { [rowId]: null } score map for a single sheet. */
  function emptyScoreMap() {
    const scores = {};
    EDITABLE_ROW_IDS.forEach((id) => { scores[id] = null; });
    return scores;
  }

  /**
   * Builds one empty { [rowId]: false } "durchgestrichen" (struck-out) map
   * for a single sheet — Rentner-Modus-only affordance for marking a
   * category as deliberately skipped/not usable, kept fully separate from
   * the numeric score map above so it can never collide with a row id or
   * interfere with sumRows()/calculateAllScores(). One entry per player
   * sheet, same indexing as player.sheets (player.struck[sheetIndex]).
   */
  function emptyStruckMap() {
    const struck = {};
    EDITABLE_ROW_IDS.forEach((id) => { struck[id] = false; });
    return struck;
  }

  /** Builds the sheets array for a fresh player, sized to the current mode. */
  function emptySheets() {
    const count = SHEETS_PER_MODE[mode] || 1;
    return Array.from({ length: count }, () => emptyScoreMap());
  }

  /** Builds the struck-rows array for a fresh player, mirroring emptySheets(). */
  function emptyStruckSheets() {
    const count = SHEETS_PER_MODE[mode] || 1;
    return Array.from({ length: count }, () => emptyStruckMap());
  }

  function addPlayer() {
    if (players.length >= MAX_PLAYERS) {
      showToast(`Maximal ${MAX_PLAYERS} Spieler pro Blatt.`, 'error');
      return;
    }

    const player = {
      id: nextPlayerId++,
      name: `Spieler ${players.length + 1}`,
      nameConfirmed: false,
      colorHue: PLAYER_HUES[players.length % PLAYER_HUES.length],
      sheets: emptySheets(),
      struck: emptyStruckSheets(),
    };

    players.push(player);
    renderBody();
    renderPlayerHeaders();
    savePlayers();
    updateEmptyHint();
  }

  function removePlayer(id) {
    const player = players.find((p) => p.id === id);
    if (!player) return;

    players = players.filter((p) => p.id !== id);
    renderBody();
    renderPlayerHeaders();
    savePlayers();
    updateEmptyHint();
    showToast(`${player.name} wurde entfernt.`);
  }

  function updateAddPlayerButtonState() {
    const atMax = players.length >= MAX_PLAYERS;
    els.btnAddPlayer.disabled = atMax;
    els.btnAddPlayer.title = atMax
      ? `Maximal ${MAX_PLAYERS} Spieler erreicht`
      : 'Spieler hinzufügen';
  }

  function updateEmptyHint() {
    if (players.length === 0) {
      els.emptyHint.style.display = '';
    } else {
      els.emptyHint.style.display = 'none';
    }
  }

  /* ===========================================================================
     6. SCORE CALCULATION
     =========================================================================== */

  const UPPER_ROW_IDS = SCORE_ROWS.filter((r) => r.section === 'upper' && r.type === 'input').map((r) => r.id);
  const LOWER_ROW_IDS = SCORE_ROWS.filter((r) => r.section === 'lower' && r.type === 'input').map((r) => r.id);

  /**
   * Recalculates and displays Upper Total, Bonus, and Lower Total for every
   * sheet of every player, then the Grand Total per player — which, in
   * double mode, is the sum of BOTH sheets' totals (two independent score
   * sheets rolled up into one combined result for that player).
   */
  function calculateAllScores() {
    if (players.length === 0) {
      showToast('Füge zuerst mindestens einen Spieler hinzu.', 'error');
      return;
    }

    players.forEach((player) => {
      let grandTotal = 0;

      player.sheets.forEach((sheetScores, sheetIndex) => {
        const key = cellKey(player.id, sheetIndex);

        const upperSum = sumRows(sheetScores, UPPER_ROW_IDS);
        const bonusEarned = upperSum >= BONUS_THRESHOLD;
        const bonusPoints = bonusEarned ? BONUS_POINTS : 0;
        const upperTotal = upperSum + bonusPoints;

        const lowerTotal = sumRows(sheetScores, LOWER_ROW_IDS);
        const sheetTotal = upperTotal + lowerTotal;
        grandTotal += sheetTotal;

        updateTotalDisplay('upperTotal', key, upperSum);
        updateBonusDisplay(key, upperSum, bonusEarned, bonusPoints);
        // "Summe oben inkl. Bonus": the plain upper sum with the +35 folded
        // in once earned (63 -> 98). Before the bonus is reached this just
        // mirrors the plain sum, since there's nothing yet to add.
        updateTotalDisplay('upperTotalWithBonus', key, upperTotal);
        updateTotalDisplay('lowerTotal', key, lowerTotal);
      });

      // Grand total is rendered once per player, on sheet 0's cell — in
      // single mode that's the only cell anyway; in double mode the second
      // sheet's grandTotal cell is visually merged away (see CSS) so only
      // the first is shown, spanning both sub-columns.
      updateTotalDisplay('grandTotal', cellKey(player.id, 0), grandTotal);
    });

    savePlayers();
    showToast('Punkte wurden berechnet!', 'success');
  }

  /** Sums the numeric scores of the given row ids for one sheet (nulls -> 0). */
  function sumRows(sheetScores, rowIds) {
    return rowIds.reduce((sum, id) => {
      const val = sheetScores[id];
      return sum + (typeof val === 'number' && !Number.isNaN(val) ? val : 0);
    }, 0);
  }

  function updateTotalDisplay(rowId, key, value) {
    const el = document.getElementById(`total-${rowId}-${key}`);
    if (!el) return;
    el.textContent = value;
    el.classList.remove('just-updated');
    // Force reflow so the animation can retrigger on repeated calculations.
    void el.offsetWidth;
    el.classList.add('just-updated');
  }

  function updateBonusDisplay(key, upperSum, earned, bonusPoints) {
    const container = document.getElementById(`bonus-${key}`);
    if (!container) return;

    let badgeClass = 'is-pending';
    let text = `Noch ${Math.max(0, BONUS_THRESHOLD - upperSum)} bis Bonus`;

    if (upperSum === 0) {
      badgeClass = 'is-pending';
      text = `Ziel: ${BONUS_THRESHOLD}+`;
    } else if (earned) {
      badgeClass = 'is-earned';
      text = `+${bonusPoints} erreicht!`;
    } else {
      badgeClass = 'is-missed';
      text = `Fehlt: ${BONUS_THRESHOLD - upperSum}`;
    }

    container.innerHTML = `<span class="bonus-badge ${badgeClass}">${icon('star')}&nbsp;${text}</span>`;
  }

  /* ===========================================================================
     7. PERSISTENCE (localStorage)
     ---------------------------------------------------------------------------
     Keeps the current sheet across reloads/offline use. Nothing leaves the
     device — this is why the footer says "deine Daten bleiben auf diesem
     Gerät" (your data stays on this device).
     =========================================================================== */

  const STORAGE_KEY = 'kniffelblock.state.v2';
  const LEGACY_STORAGE_KEY = 'kniffelblock.state.v1'; // pre-"Doppel" format (single `scores` map)

  function savePlayers() {
    try {
      const payload = {
        mode,
        seniorMode,
        players: players.map((p) => ({
          id: p.id,
          name: p.name,
          nameConfirmed: p.nameConfirmed,
          colorHue: p.colorHue,
          sheets: p.sheets,
          struck: p.struck,
        })),
        nextPlayerId,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      // localStorage may be unavailable (private browsing / quota) — fail silently,
      // the app still works, it just won't persist across reloads.
      console.warn('Konnte Spielstand nicht speichern:', err);
    }
  }

  function loadPlayers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const payload = JSON.parse(raw);
        if (!payload || !Array.isArray(payload.players)) return false;

        players = payload.players;
        mode = payload.mode === 'double' ? 'double' : 'single';
        seniorMode = payload.seniorMode === true;
        nextPlayerId = payload.nextPlayerId || players.length + 1;
        // Backfill: saves written before the "durchgestrichen" feature
        // existed won't have a `struck` array at all — give every such
        // player a fresh, correctly-sized, all-false one rather than
        // leaving it undefined (which the renderer isn't expecting).
        players.forEach((p) => {
          if (!Array.isArray(p.struck) || p.struck.length !== p.sheets.length) {
            p.struck = p.sheets.map(() => emptyStruckMap());
          }
        });
        return true;
      }

      // No v2 save yet — try migrating an old v1 save (single-sheet format)
      // so upgrading the app doesn't wipe anyone's in-progress game.
      return migrateLegacySave();
    } catch (err) {
      console.warn('Konnte Spielstand nicht laden:', err);
      return false;
    }
  }

  /** Migrates a pre-"Doppel" save ({ scores }) into the current ({ sheets }) format. */
  function migrateLegacySave() {
    const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return false;

    const payload = JSON.parse(raw);
    if (!payload || !Array.isArray(payload.players)) return false;

    players = payload.players.map((p) => ({
      id: p.id,
      name: p.name,
      nameConfirmed: p.nameConfirmed,
      colorHue: p.colorHue,
      sheets: [p.scores || emptyScoreMap()],
      struck: [emptyStruckMap()],
    }));
    mode = 'single';
    seniorMode = false;
    nextPlayerId = payload.nextPlayerId || players.length + 1;

    savePlayers();
    try { localStorage.removeItem(LEGACY_STORAGE_KEY); } catch (err) { /* ignore */ }
    return true;
  }

  function clearSavedGame() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignore */ }
  }

  function startNewGame() {
    const proceed = players.length === 0 || window.confirm(
      'Ein neues Blatt beginnen? Der aktuelle Punktestand geht dabei verloren.'
    );
    if (!proceed) return;

    players = [];
    clearSavedGame();
    renderBody();
    renderPlayerHeaders();
    updateEmptyHint();
    showToast('Neues Blatt bereit — viel Glück! 🎲');
  }

  /**
   * Switches between "single" and "double" mode.
   *  - single -> double: lossless. Every player simply gains a second, empty
   *    sheet; sheet 1's existing scores are untouched.
   *  - double -> single: lossy for anyone who has entered anything on their
   *    second sheet, so it asks for confirmation first and then just drops
   *    each player's second sheet.
   */
  function setMode(newMode) {
    if (newMode === mode) return;

    if (newMode === 'single' && mode === 'double') {
      const anySecondSheetData = players.some((p) => {
        const hasScores = p.sheets[1] && Object.values(p.sheets[1]).some((v) => v !== null && v !== undefined);
        const hasStrikes = p.struck && p.struck[1] && Object.values(p.struck[1]).some(Boolean);
        return hasScores || hasStrikes;
      });
      if (anySecondSheetData) {
        const proceed = window.confirm(
          'Zurück zu Einfach wechseln? Die Punkte auf dem zweiten Zettel jedes Spielers gehen dabei verloren.'
        );
        if (!proceed) return;
      }
      players.forEach((p) => {
        p.sheets = [p.sheets[0] || emptyScoreMap()];
        p.struck = [(p.struck && p.struck[0]) || emptyStruckMap()];
      });
    } else if (newMode === 'double' && mode === 'single') {
      players.forEach((p) => {
        p.sheets = [p.sheets[0] || emptyScoreMap(), emptyScoreMap()];
        p.struck = [(p.struck && p.struck[0]) || emptyStruckMap(), emptyStruckMap()];
      });
    }

    mode = newMode;
    updateModeToggleUI();
    renderBody();
    renderPlayerHeaders();
    savePlayers();
    showToast(
      newMode === 'double'
        ? 'Doppel-Modus aktiv — zwei Zettel pro Spieler! 🎲🎲'
        : 'Einfach-Modus aktiv — ein Zettel pro Spieler.'
    );
  }

  /** Syncs the toggle buttons' visual/active state with the current mode. */
  function updateModeToggleUI() {
    const isDouble = mode === 'double';
    els.btnModeSingle.classList.toggle('is-active', !isDouble);
    els.btnModeSingle.setAttribute('aria-checked', String(!isDouble));
    els.btnModeDouble.classList.toggle('is-active', isDouble);
    els.btnModeDouble.setAttribute('aria-checked', String(isDouble));
  }

  /**
   * Toggles "Rentner-Modus" — independent of single/double, so it can be
   * combined with either. Unlike setMode(), this never touches player data,
   * only presentation, so there's nothing to confirm before switching.
   */
  function toggleSeniorMode() {
    seniorMode = !seniorMode;
    applySeniorModeUI();
    updateStickyHeaderOffset();
    savePlayers();
    showToast(
      seniorMode
        ? 'Rentner-Modus aktiv — große Schrift & starke Farben. 🔍'
        : 'Rentner-Modus ausgeschaltet.'
    );
  }

  /** Syncs the <body> class + button state with the current seniorMode flag. */
  function applySeniorModeUI() {
    document.body.classList.toggle('senior-mode', seniorMode);
    els.btnSeniorMode.classList.toggle('is-active', seniorMode);
    els.btnSeniorMode.setAttribute('aria-pressed', String(seniorMode));
  }

  /* ===========================================================================
     8. TOAST NOTIFICATIONS
     =========================================================================== */

  let toastTimer = null;

  function showToast(message, kind) {
    els.toast.textContent = message;
    els.toast.className = 'toast is-visible' + (kind === 'success' ? ' is-success' : kind === 'error' ? ' is-error' : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove('is-visible');
    }, 2600);
  }

  /* ===========================================================================
     9. EVENT WIRING
     =========================================================================== */

  els.btnAddPlayer.addEventListener('click', addPlayer);
  els.btnCalculate.addEventListener('click', () => {
    els.btnCalculate.classList.add('is-calculating');
    // Tiny delay purely so the calculator-icon spin + pulse feel intentional
    // rather than instantaneous (no real async work is happening).
    setTimeout(() => {
      calculateAllScores();
      els.btnCalculate.classList.remove('is-calculating');
    }, 260);
  });
  els.btnNewGame.addEventListener('click', startNewGame);
  els.btnModeSingle.addEventListener('click', () => setMode('single'));
  els.btnModeDouble.addEventListener('click', () => setMode('double'));
  els.btnSeniorMode.addEventListener('click', toggleSeniorMode);

  /* ===========================================================================
     10. PWA: SERVICE WORKER + INSTALL PROMPT
     =========================================================================== */

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch((err) => {
        console.warn('Service Worker Registrierung fehlgeschlagen:', err);
      });
    });
  }

  let deferredInstallPrompt = null;
  const btnInstall = document.getElementById('btn-install');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    btnInstall.classList.remove('hidden');
  });

  btnInstall.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') {
      showToast('App wird installiert…', 'success');
    }
    deferredInstallPrompt = null;
    btnInstall.classList.add('hidden');
  });

  window.addEventListener('appinstalled', () => {
    btnInstall.classList.add('hidden');
    showToast('Kniffelblock wurde installiert! 🎉', 'success');
  });

  /* ===========================================================================
     INITIALIZATION x
     =========================================================================== */

  function init() {
    const hadSavedGame = loadPlayers();
    updateModeToggleUI();
    applySeniorModeUI();
    renderBody();
    renderPlayerHeaders();
    updateStickyHeaderOffset();
    updateEmptyHint();
    if (hadSavedGame && players.length > 0) {
      showToast('Dein letztes Blatt wurde geladen.');
    }
  }

  init();
})();