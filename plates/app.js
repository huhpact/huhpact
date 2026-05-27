/* ================================================
   PLATEWORLD — APP.JS
   ================================================ */

(function () {
  "use strict";

  // ─── DOM REFS ────────────────────────────────────
  const searchInput    = document.getElementById("search-input");
  const clearBtn       = document.getElementById("clear-btn");
  const resultsSection = document.getElementById("results-section");
  const resultsTitle   = document.getElementById("results-title");
  const resultsCount   = document.getElementById("results-count");
  const resultsGrid    = document.getElementById("results-grid");
  const countryBubbles = document.getElementById("country-bubbles");
  const countriesSection = document.getElementById("countries-section");
  const countryDetailSection = document.getElementById("country-detail-section");
  const countryPlatesGrid = document.getElementById("country-plates-grid");
  const cdName         = document.getElementById("cd-name");
  const cdFlag         = document.getElementById("cd-flag");
  const cdSub          = document.getElementById("cd-sub");
  const backBtn        = document.getElementById("back-btn");
  const featuredGrid   = document.getElementById("featured-grid");
  const popupOverlay   = document.getElementById("popup-overlay");
  const popupClose     = document.getElementById("popup-close");
  const popupImg       = document.getElementById("popup-img");
  const popupCountryTag = document.getElementById("popup-country-tag");
  const popupMiniPlate = document.getElementById("popup-mini-plate");
  const popupCode      = document.getElementById("popup-code");
  const popupName      = document.getElementById("popup-name");
  const popupRegionLine = document.getElementById("popup-region-line");
  const popupDesc      = document.getElementById("popup-desc");
  const popupStats     = document.getElementById("popup-stats");
  const popupExtraFacts = document.getElementById("popup-extra-facts");
  const footerCount    = document.getElementById("footer-count");
  const randomBtn      = document.getElementById("random-btn");
  const heroCityEl     = document.getElementById("hero-city");

  // ─── INIT ─────────────────────────────────────────
  function init() {
    buildCountryBubbles();
    buildFeatured();
    setupSearch();
    setupPopup();
    footerCount.textContent = PLATE_INDEX.length;
    animateHeroPlate();
  }

  // ─── HERO PLATE ANIMATION ─────────────────────────
  const heryCodes = ["B", "RM", "P", "ZH", "LN", "NY", "M", "HH", "W", "75"];
  let heroIdx = 0;
  function animateHeroPlate() {
    setInterval(() => {
      heroIdx = (heroIdx + 1) % heryCodes.length;
      heroCityEl.style.opacity = 0;
      setTimeout(() => {
        heroCityEl.textContent = heryCodes[heroIdx];
        heroCityEl.style.opacity = 1;
      }, 200);
    }, 2200);
    heroCityEl.style.transition = "opacity 0.2s ease";
  }

  // ─── BUILD COUNTRY BUBBLES ────────────────────────
  function buildCountryBubbles() {
    Object.entries(COUNTRIES).forEach(([code, country]) => {
      const count = country.plates.length;
      const btn = document.createElement("button");
      btn.className = "country-bubble";
      btn.dataset.code = code;
      btn.innerHTML = `
        <span class="flag">${country.flag}</span>
        <span class="cname">${country.name}</span>
        <span class="ccount">${count}</span>
      `;
      btn.addEventListener("click", () => showCountryDetail(code, btn));
      countryBubbles.appendChild(btn);
    });
  }

  // ─── SHOW COUNTRY DETAIL ─────────────────────────
  let activeBubble = null;
  function showCountryDetail(code, bubbleEl) {
    const country = COUNTRIES[code];
    if (!country) return;

    // highlight bubble
    if (activeBubble) activeBubble.classList.remove("active");
    bubbleEl.classList.add("active");
    activeBubble = bubbleEl;

    cdFlag.textContent = country.flag;
    cdName.textContent = country.name;
    cdSub.textContent = `${country.plates.length} Kennzeichen · ${country.region_label}`;

    countryPlatesGrid.innerHTML = "";
    const plates = getCountryPlates(code);
    plates.forEach((plate, i) => {
      const card = buildPlateCard(plate, i * 60);
      countryPlatesGrid.appendChild(card);
    });

    countryDetailSection.classList.remove("hidden");
    countryDetailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  backBtn.addEventListener("click", () => {
    countryDetailSection.classList.add("hidden");
    if (activeBubble) {
      activeBubble.classList.remove("active");
      activeBubble = null;
    }
    countriesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ─── BUILD FEATURED ──────────────────────────────
  function buildFeatured() {
    const featured = [
      PLATE_INDEX.find(p => p.code === "B" && p.countryCode === "DE"),
      PLATE_INDEX.find(p => p.code === "RM"),
      PLATE_INDEX.find(p => p.code === "75"),
      PLATE_INDEX.find(p => p.code === "NY"),
      PLATE_INDEX.find(p => p.code === "ZH"),
      PLATE_INDEX.find(p => p.code === "34"),
    ].filter(Boolean);

    featured.forEach((plate, i) => {
      const card = buildPlateCard(plate, i * 80);
      featuredGrid.appendChild(card);
    });
  }

  // ─── SEARCH ──────────────────────────────────────
  let searchTimer;
  function setupSearch() {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimer);
      const val = searchInput.value.trim();
      clearBtn.classList.toggle("visible", val.length > 0);
      searchTimer = setTimeout(() => runSearch(val), 200);
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.remove("visible");
      runSearch("");
      searchInput.focus();
    });

    // pill buttons
    document.querySelectorAll(".pill").forEach(pill => {
      pill.addEventListener("click", () => {
        searchInput.value = pill.dataset.q;
        clearBtn.classList.add("visible");
        runSearch(pill.dataset.q);
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    randomBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const rand = PLATE_INDEX[Math.floor(Math.random() * PLATE_INDEX.length)];
      openPopup(rand);
    });
  }

  function runSearch(query) {
    if (!query) {
      resultsSection.classList.add("hidden");
      return;
    }

    const results = searchPlates(query);
    resultsSection.classList.remove("hidden");
    resultsTitle.textContent = `Ergebnisse für „${query.toUpperCase()}"`;
    resultsCount.textContent = `${results.length} Treffer`;

    resultsGrid.innerHTML = "";

    if (results.length === 0) {
      resultsGrid.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-circle-xmark"></i>
          <p>Kein Kennzeichen gefunden für <strong>${query.toUpperCase()}</strong></p>
        </div>`;
      return;
    }

    // Group by country
    const byCountry = {};
    results.forEach(p => {
      if (!byCountry[p.countryCode]) byCountry[p.countryCode] = [];
      byCountry[p.countryCode].push(p);
    });

    let delay = 0;
    Object.entries(byCountry).forEach(([cc, plates]) => {
      const country = COUNTRIES[cc];

      // Country heading
      const heading = document.createElement("div");
      heading.className = "country-group-heading";
      heading.innerHTML = `
        <span class="flag-big">${country.flag}</span>
        <h3>${country.name}</h3>
        <span class="plate-count">${plates.length} Kennzeichen</span>
      `;
      resultsGrid.appendChild(heading);

      // Cards
      plates.forEach(plate => {
        const card = buildPlateCard(plate, delay);
        resultsGrid.appendChild(card);
        delay += 60;
      });
    });

    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ─── BUILD PLATE CARD ────────────────────────────
  function buildPlateCard(plate, animDelay = 0) {
    const card = document.createElement("div");
    card.className = "plate-card";
    card.style.animationDelay = animDelay + "ms";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${plate.name} – ${plate.code}`);

    const imgContent = plate.imageReal
      ? `<img class="card-img" src="${plate.imageReal}" alt="${plate.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\'card-img-placeholder\'>${plate.countryFlag}</div>'" />`
      : `<div class="card-img-placeholder">${plate.countryFlag}</div>`;

    card.innerHTML = `
      <div class="card-img-wrap">
        ${imgContent}
        <div class="card-country-badge">
          <span>${plate.countryFlag}</span>
          <span>${plate.countryName}</span>
        </div>
        <div class="card-img-overlay"></div>
      </div>
      <div class="card-body">
        <div class="card-plate-display">
          <div class="mini-plate-card">
            <div class="eu-strip"></div>
            <span class="code-text">${plate.code}</span>
          </div>
          ${plate.hasRegions ? `<span class="card-region-tag">${plate.region}</span>` : ""}
        </div>
        <div class="card-name">${plate.name}</div>
        <div class="card-facts">
          <div class="card-fact">
            <i class="fa-solid fa-people-group"></i>
            <span>${formatNum(plate.population)} Einwohner</span>
          </div>
          <div class="card-fact">
            <i class="fa-solid fa-id-card"></i>
            <span>~${formatNum(plate.registered)} Kfz zugelassen</span>
          </div>
          ${plate.hasRegions ? `<div class="card-fact"><i class="fa-solid fa-map"></i><span>${plate.region_label}: ${plate.region}</span></div>` : ""}
        </div>
        <div class="card-cta">Mehr erfahren <i class="fa-solid fa-chevron-right"></i></div>
      </div>
    `;

    card.addEventListener("click", () => openPopup(plate));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openPopup(plate); });

    return card;
  }

  // ─── POPUP ───────────────────────────────────────
  function setupPopup() {
    popupClose.addEventListener("click", closePopup);
    popupOverlay.addEventListener("click", e => {
      if (e.target === popupOverlay) closePopup();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closePopup();
    });
  }

  function openPopup(plate) {
    // Image
    if (plate.imageReal) {
      popupImg.src = plate.imageReal;
      popupImg.alt = plate.name;
    } else {
      popupImg.src = "";
      popupImg.alt = "";
    }

    popupCountryTag.textContent = `${plate.countryFlag} ${plate.countryName}`;
    popupCode.textContent = plate.code;
    popupName.textContent = plate.name;
    popupRegionLine.textContent = plate.hasRegions
      ? `${plate.region_label}: ${plate.region} · ${plate.countryName}`
      : plate.countryName;

    popupDesc.textContent = plate.description || "Keine Beschreibung verfügbar.";

    // Stats
    popupStats.innerHTML = `
      <div class="popup-stat">
        <i class="fa-solid fa-people-group"></i>
        <span class="stat-val">${formatNum(plate.population)}</span>
        <span class="stat-label">Einwohner</span>
      </div>
      <div class="popup-stat">
        <i class="fa-solid fa-id-card"></i>
        <span class="stat-val">~${formatNum(plate.registered)}</span>
        <span class="stat-label">Kfz zugelassen</span>
      </div>
      ${plate.area ? `
      <div class="popup-stat">
        <i class="fa-solid fa-vector-square"></i>
        <span class="stat-val">${plate.area}</span>
        <span class="stat-label">Fläche</span>
      </div>` : ""}
      ${plate.founded ? `
      <div class="popup-stat">
        <i class="fa-solid fa-building-columns"></i>
        <span class="stat-val">${plate.founded}</span>
        <span class="stat-label">Gegründet</span>
      </div>` : ""}
    `;

    // Extra facts
    const extras = [];
    if (plate.nickname) extras.push({ icon: "fa-tag", label: "Status", val: plate.nickname });
    if (plate.extra) extras.push({ icon: "fa-star", label: "Besonderheit", val: plate.extra });
    if (plate.hasRegions && plate.region) extras.push({ icon: "fa-map-location-dot", label: plate.region_label, val: plate.region });
    if (plate.countryName) extras.push({ icon: "fa-flag", label: "Land", val: `${plate.countryFlag} ${plate.countryName}` });

    popupExtraFacts.innerHTML = extras.map(f => `
      <div class="extra-fact">
        <i class="fa-solid ${f.icon}"></i>
        <span><strong>${f.label}:</strong> ${f.val}</span>
      </div>
    `).join("");

    popupOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    popupClose.focus();
  }

  function closePopup() {
    popupOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // ─── HELPERS ─────────────────────────────────────
  function formatNum(n) {
    if (!n) return "–";
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + " Mio.";
    if (n >= 1_000) return (n / 1_000).toFixed(0) + " Tsd.";
    return n.toString();
  }

  // ─── START ───────────────────────────────────────
  init();

})();