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
   * Each player: { id, name, nameConfirmed, colorHue, scores: { [rowId]: number|null } }
   */
  let players = [];
  let nextPlayerId = 1;

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
        players.forEach(() => tr.appendChild(document.createElement('td')));
        els.body.appendChild(tr);
        return;
      }

      tr.className = rowClassFor(row);
      tr.appendChild(makeLabelCell(row));

      players.forEach((player) => {
        tr.appendChild(makeScoreCell(row, player));
      });

      els.body.appendChild(tr);
    });
  }

  function rowClassFor(row) {
    const classes = [];
    if (row.section === 'upper') classes.push('row-upper');
    if (row.section === 'lower') classes.push('row-lower');
    if (row.id === 'bonus') classes.push('row-bonus');
    if (row.id === 'upperTotal') classes.push('row-upper-total');
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

    if (row.type === 'total') {
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

  /** Builds one player's cell for a given row (input, bonus, or total). */
  function makeScoreCell(row, player) {
    const td = document.createElement('td');
    td.className = 'cell-score';
    td.dataset.rowId = row.id;
    td.dataset.playerId = player.id;

    if (row.type === 'total') {
      td.innerHTML = `<span class="total-value" id="total-${row.id}-${player.id}">0</span>`;
      return td;
    }

    if (row.type === 'bonus') {
      td.innerHTML = `<div class="bonus-cell" id="bonus-${player.id}">
        <span class="bonus-badge is-pending">${icon('star')} &nbsp;+0</span>
      </div>`;
      return td;
    }

    // Standard editable input cell
    const inputId = `score-${row.id}-${player.id}`;
    const existingValue = player.scores[row.id];

    const input = document.createElement('input');
    input.type = 'number';
    input.inputMode = 'numeric';
    input.min = '0';
    input.className = 'score-input';
    input.id = inputId;
    input.placeholder = '–';
    input.setAttribute('aria-label', `${row.label} – ${player.name}`);
    if (existingValue !== null && existingValue !== undefined) {
      input.value = existingValue;
    }

    input.addEventListener('input', () => {
      const raw = input.value;
      player.scores[row.id] = raw === '' ? null : Number(raw);
      savePlayers();
    });

    // Enter key on a score input moves focus to the next row's cell (same
    // player) for fast, calculator-like data entry.
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        focusNextInput(row.id, player.id);
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
        player.scores[row.id] = row.fixedValue;
        savePlayers();
        input.focus();
      });
      td.appendChild(chip);
    }

    return td;
  }

  /** Moves keyboard focus to the next editable input below the current one. */
  function focusNextInput(currentRowId, playerId) {
    const editableRows = EDITABLE_ROW_IDS;
    const idx = editableRows.indexOf(currentRowId);
    for (let i = idx + 1; i < editableRows.length; i++) {
      const next = document.getElementById(`score-${editableRows[i]}-${playerId}`);
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
      th.className = 'col-player-head player-header-cell';
      th.scope = 'col';

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

    updateAddPlayerButtonState();
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

  function addPlayer() {
    if (players.length >= MAX_PLAYERS) {
      showToast(`Maximal ${MAX_PLAYERS} Spieler pro Blatt.`, 'error');
      return;
    }

    const scores = {};
    EDITABLE_ROW_IDS.forEach((id) => { scores[id] = null; });

    const player = {
      id: nextPlayerId++,
      name: `Spieler ${players.length + 1}`,
      nameConfirmed: false,
      colorHue: PLAYER_HUES[players.length % PLAYER_HUES.length],
      scores,
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
   * Recalculates and displays Upper Total, Bonus, Lower Total, and Grand Total
   * for every player currently on the sheet.
   */
  function calculateAllScores() {
    if (players.length === 0) {
      showToast('Füge zuerst mindestens einen Spieler hinzu.', 'error');
      return;
    }

    players.forEach((player) => {
      const upperSum = sumRows(player, UPPER_ROW_IDS);
      const bonusEarned = upperSum >= BONUS_THRESHOLD;
      const bonusPoints = bonusEarned ? BONUS_POINTS : 0;
      const upperTotal = upperSum + bonusPoints;

      const lowerTotal = sumRows(player, LOWER_ROW_IDS);
      const grandTotal = upperTotal + lowerTotal;

      updateTotalDisplay('upperTotal', player.id, upperSum);
      updateBonusDisplay(player, upperSum, bonusEarned, bonusPoints);
      updateTotalDisplay('lowerTotal', player.id, lowerTotal);
      updateTotalDisplay('grandTotal', player.id, grandTotal);
    });

    savePlayers();
    showToast('Punkte wurden berechnet!', 'success');
  }

  /** Sums the numeric scores of the given row ids for one player (nulls -> 0). */
  function sumRows(player, rowIds) {
    return rowIds.reduce((sum, id) => {
      const val = player.scores[id];
      return sum + (typeof val === 'number' && !Number.isNaN(val) ? val : 0);
    }, 0);
  }

  function updateTotalDisplay(rowId, playerId, value) {
    const el = document.getElementById(`total-${rowId}-${playerId}`);
    if (!el) return;
    el.textContent = value;
    el.classList.remove('just-updated');
    // Force reflow so the animation can retrigger on repeated calculations.
    void el.offsetWidth;
    el.classList.add('just-updated');
  }

  function updateBonusDisplay(player, upperSum, earned, bonusPoints) {
    const container = document.getElementById(`bonus-${player.id}`);
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

  const STORAGE_KEY = 'kniffelblock.state.v1';

  function savePlayers() {
    try {
      const payload = {
        players: players.map((p) => ({
          id: p.id,
          name: p.name,
          nameConfirmed: p.nameConfirmed,
          colorHue: p.colorHue,
          scores: p.scores,
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
      if (!raw) return false;
      const payload = JSON.parse(raw);
      if (!payload || !Array.isArray(payload.players)) return false;

      players = payload.players;
      nextPlayerId = payload.nextPlayerId || players.length + 1;
      return true;
    } catch (err) {
      console.warn('Konnte Spielstand nicht laden:', err);
      return false;
    }
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
     INITIALIZATION
     =========================================================================== */

  function init() {
    const hadSavedGame = loadPlayers();
    renderBody();
    renderPlayerHeaders();
    updateEmptyHint();
    if (hadSavedGame && players.length > 0) {
      showToast('Dein letztes Blatt wurde geladen.');
    }
  }

  init();
})();