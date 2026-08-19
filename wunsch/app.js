/* ==============================================================
   WUNSCHLISTE — Rendering & Interaktion
   Liest WISHES aus wishes.js und baut daraus Grid, Karten,
   Sterne und Filter. Kein Framework, keine Abhängigkeiten.
   ============================================================== */

(function () {
  "use strict";

  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const empty = document.getElementById("empty");
  const count = document.getElementById("count");

  const MAX_STARS = 5;
  let activeFilter = "all";

  /* --------------------------------------------------------
     Baut eine Reihe von <svg>-Sternen für den Wunschgrad.
     -------------------------------------------------------- */
  function buildStars(rating) {
    const wrap = document.createElement("div");
    wrap.className = "card__stars";
    wrap.setAttribute("role", "img");
    wrap.setAttribute("aria-label", `Wunschgrad ${rating} von ${MAX_STARS}`);

    for (let i = 1; i <= MAX_STARS; i++) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("star");
      if (i <= rating) svg.classList.add("star--filled");
      svg.setAttribute("viewBox", "0 0 20 20");
      svg.setAttribute("aria-hidden", "true");

      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#star");
      svg.appendChild(use);

      wrap.appendChild(svg);
    }
    return wrap;
  }

  /* --------------------------------------------------------
     Baut eine einzelne Wunschkarte als <a>-Element.
     -------------------------------------------------------- */
  function buildCard(wish, index) {
    const card = document.createElement("a");
    card.className = "card";
    card.href = wish.link || "#";
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.style.setProperty("--delay", `${Math.min(index * 0.03, 0.3)}s`);

    const frame = document.createElement("div");
    frame.className = "card__frame";

    const img = document.createElement("img");
    img.className = "card__img";
    img.src = wish.image;
    img.alt = wish.title;
    img.loading = "lazy";
    frame.appendChild(img);
    frame.appendChild(buildStars(wish.rating));
    card.appendChild(frame);

    const body = document.createElement("div");
    body.className = "card__body";

    const title = document.createElement("h2");
    title.className = "card__title";
    title.textContent = wish.title;
    body.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "card__meta";

    const hint = document.createElement("span");
    hint.className = "card__hint";
    hint.textContent = wish.note && wish.note.trim() ? wish.note : `${wish.rating}/5`;
    meta.appendChild(hint);

    const go = document.createElement("span");
    go.className = "card__go";
    go.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><use href="#arrow"/></svg>';
    meta.appendChild(go);

    body.appendChild(meta);
    card.appendChild(body);

    return card;
  }

  /* --------------------------------------------------------
     Rendert das gesamte Grid nach aktuellem Filter.
     -------------------------------------------------------- */
  function renderGrid() {
    grid.innerHTML = "";

    const visible = WISHES.filter((wish) =>
      activeFilter === "all" ? true : wish.rating === Number(activeFilter)
    );

    visible.forEach((wish, i) => grid.appendChild(buildCard(wish, i)));

    const isEmpty = visible.length === 0;
    empty.hidden = !isEmpty;
    empty.textContent = "Keine Wünsche mit diesem Wunschgrad.";
    grid.hidden = isEmpty;

    count.textContent = `${visible.length} von ${WISHES.length}`;
  }

  /* --------------------------------------------------------
     Baut die Filterleiste aus den tatsächlich vorkommenden
     Wunschgraden.
     -------------------------------------------------------- */
  function renderFilters() {
    const present = Array.from(new Set(WISHES.map((w) => w.rating))).sort((a, b) => b - a);

    const chips = [{ value: "all", label: "Alle" }].concat(
      present.map((r) => ({ value: String(r), rating: r }))
    );

    filters.innerHTML = "";

    chips.forEach((chip) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter";
      btn.dataset.filter = chip.value;
      if (chip.value === activeFilter) btn.classList.add("is-active");

      if (chip.label) {
        btn.textContent = chip.label;
      } else {
        const label = document.createElement("span");
        label.textContent = chip.rating;
        btn.appendChild(label);

        const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        s.setAttribute("viewBox", "0 0 20 20");
        s.setAttribute("aria-hidden", "true");
        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#star");
        s.appendChild(use);
        btn.appendChild(s);
      }

      btn.addEventListener("click", () => {
        activeFilter = chip.value;
        filters.querySelectorAll(".filter").forEach((el) => el.classList.toggle("is-active", el === btn));
        renderGrid();
      });

      filters.appendChild(btn);
    });
  }

  /* --------------------------------------------------------
     Start
     -------------------------------------------------------- */
  function init() {
    if (!Array.isArray(WISHES) || WISHES.length === 0) {
      empty.hidden = false;
      empty.textContent = "Noch keine Wünsche eingetragen — leg los in wishes.js";
      filters.hidden = true;
      count.textContent = "0";
      return;
    }
    renderFilters();
    renderGrid();
  }

  document.addEventListener("DOMContentLoaded", init);
})();