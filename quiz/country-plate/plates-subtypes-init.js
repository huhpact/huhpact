/*
 * plates-subtypes-init.js
 * -----------------------------------------------------------------
 * Initialisiert die zwei gekoppelten Eingabefelder des Quiz:
 *
 *   Links  (#country-search-input / #country-search-results)
 *          Freitext-Live-Suche auf Deutsch. Tippt der Nutzer z.B.
 *          "deu", erscheinen darunter passende Länder (Name +
 *          Aliases). Klick auf einen Treffer wählt das Land aus.
 *
 *   Rechts (#subtype-select)
 *          Ein <select>, das erst nach der Länderauswahl befüllt
 *          und freigeschaltet wird — mit genau den Unterkennzeichen-
 *          Typen des gewählten Landes aus PLATE_COUNTRIES.
 *
 * Hängt von plates-subtypes-data.js ab (muss vorher geladen sein).
 * Stellt globale Helper bereit, die das Quiz-Skript nutzt:
 *
 *   PlatesSubtypeUI.init(onSelectionChange)
 *   PlatesSubtypeUI.reset()
 *   PlatesSubtypeUI.getSelection()  -> { country, subtype } oder null-Felder
 * -----------------------------------------------------------------
 */

var PlatesSubtypeUI = (function () {
  'use strict';

  var els = {};
  var state = {
    selectedCountry: null, // Objekt aus PLATE_COUNTRIES
    selectedSubtype: null, // Objekt aus country.subtypes
    activeResultIndex: -1  // für Tastatur-Navigation in der Ergebnisliste
  };
  var onChangeCallback = null;

  function normalise(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ß/g, 'ss')
      .trim();
  }

  function matchesQuery(country, query) {
    var q = normalise(query);
    if (!q) return false;
    if (normalise(country.name).indexOf(q) !== -1) return true;
    if (normalise(country.euCode).indexOf(q) !== -1) return true;
    for (var i = 0; i < (country.aliases || []).length; i++) {
      if (normalise(country.aliases[i]).indexOf(q) !== -1) return true;
    }
    return false;
  }

  function cacheEls() {
    els.searchInput   = document.getElementById('country-search-input');
    els.searchResults = document.getElementById('country-search-results');
    els.subtypeSelect = document.getElementById('subtype-select');
    els.subtypeWrap   = document.getElementById('subtype-select-wrap');
  }

  function renderResults(list) {
    els.searchResults.innerHTML = '';
    state.activeResultIndex = -1;

    if (list.length === 0) {
      els.searchResults.classList.add('hidden');
      return;
    }

    list.forEach(function (country, idx) {
      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'country-result-item';
      item.setAttribute('data-index', idx);

      var flagCode = document.createElement('span');
      flagCode.className = 'country-result-code';
      flagCode.textContent = country.euCode;

      var label = document.createElement('span');
      label.className = 'country-result-name';
      label.textContent = country.name;

      item.appendChild(flagCode);
      item.appendChild(label);

      item.addEventListener('click', function () {
        selectCountry(country);
      });

      els.searchResults.appendChild(item);
    });

    els.searchResults.classList.remove('hidden');
  }

  function handleSearchInput() {
    var query = els.searchInput.value;

    // Sobald der Nutzer wieder tippt, verwirft eine bereits getroffene
    // Länderauswahl (falls vorhanden) — sinnvoll bei Korrektur.
    if (state.selectedCountry && normalise(query) !== normalise(state.selectedCountry.name)) {
      deselectCountry();
    }

    if (!query.trim()) {
      renderResults([]);
      return;
    }

    var matches = PLATE_COUNTRIES.filter(function (c) {
      return matchesQuery(c, query);
    });

    renderResults(matches);
  }

  function handleSearchKeydown(e) {
    var items = els.searchResults.querySelectorAll('.country-result-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.activeResultIndex = Math.min(state.activeResultIndex + 1, items.length - 1);
      highlightActiveResult(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.activeResultIndex = Math.max(state.activeResultIndex - 1, 0);
      highlightActiveResult(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      var idx = state.activeResultIndex >= 0 ? state.activeResultIndex : 0;
      items[idx].click();
    } else if (e.key === 'Escape') {
      renderResults([]);
    }
  }

  function highlightActiveResult(items) {
    items.forEach(function (it, i) {
      it.classList.toggle('active', i === state.activeResultIndex);
    });
    if (state.activeResultIndex >= 0) {
      items[state.activeResultIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  function selectCountry(country) {
    state.selectedCountry = country;
    state.selectedSubtype = null;

    els.searchInput.value = country.name;
    renderResults([]);
    els.searchInput.classList.add('country-chosen');

    populateSubtypeSelect(country);
    fireChange();
  }

  function deselectCountry() {
    state.selectedCountry = null;
    state.selectedSubtype = null;
    els.searchInput.classList.remove('country-chosen');
    clearSubtypeSelect();
    fireChange();
  }

  function populateSubtypeSelect(country) {
    els.subtypeSelect.innerHTML = '';

    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.textContent = 'Kennzeichenart wählen…';
    els.subtypeSelect.appendChild(placeholder);

    country.subtypes.forEach(function (subtype) {
      var opt = document.createElement('option');
      opt.value = subtype.id;
      opt.textContent = subtype.name;
      els.subtypeSelect.appendChild(opt);
    });

    els.subtypeSelect.disabled = false;
    els.subtypeWrap.classList.remove('disabled');
  }

  function clearSubtypeSelect() {
    els.subtypeSelect.innerHTML = '';
    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.textContent = 'Erst Land auswählen…';
    els.subtypeSelect.appendChild(placeholder);

    els.subtypeSelect.disabled = true;
    els.subtypeWrap.classList.add('disabled');
  }

  function handleSubtypeChange() {
    if (!state.selectedCountry) return;
    var subtypeId = els.subtypeSelect.value;
    state.selectedSubtype = state.selectedCountry.subtypes.filter(function (s) {
      return s.id === subtypeId;
    })[0] || null;
    fireChange();
  }

  function fireChange() {
    if (typeof onChangeCallback === 'function') {
      onChangeCallback(getSelection());
    }
  }

  function getSelection() {
    return {
      country: state.selectedCountry,
      subtype: state.selectedSubtype
    };
  }

  function reset() {
    state.selectedCountry = null;
    state.selectedSubtype = null;
    state.activeResultIndex = -1;

    els.searchInput.value = '';
    els.searchInput.classList.remove('country-chosen');
    els.searchInput.disabled = false;
    renderResults([]);
    clearSubtypeSelect();
  }

  function lock() {
    els.searchInput.disabled = true;
    els.subtypeSelect.disabled = true;
  }

  function init(onSelectionChange) {
    onChangeCallback = onSelectionChange || null;
    cacheEls();
    clearSubtypeSelect();

    els.searchInput.addEventListener('input', handleSearchInput);
    els.searchInput.addEventListener('keydown', handleSearchKeydown);
    els.searchInput.addEventListener('blur', function () {
      // Kleiner Timeout, damit ein Klick auf ein Ergebnis-Item vor dem
      // Ausblenden der Liste noch registriert wird.
      setTimeout(function () { renderResults([]); }, 150);
    });

    els.subtypeSelect.addEventListener('change', handleSubtypeChange);

    // Klick außerhalb schließt die Ergebnisliste
    document.addEventListener('click', function (e) {
      if (!els.searchResults.contains(e.target) && e.target !== els.searchInput) {
        renderResults([]);
      }
    });
  }

  return {
    init: init,
    reset: reset,
    lock: lock,
    getSelection: getSelection
  };
})();