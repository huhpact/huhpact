/* ═══════════════════════════════════════════════════════════════
   QUIZ LOGIC
═══════════════════════════════════════════════════════════════ */
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let selectedRegion = 'all';
let isAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
    totalQuestions = parseInt(sessionStorage.getItem('platesQuizQuestions')) || 10;
    selectedRegion  = sessionStorage.getItem('platesQuizRegion') || 'all';
    initializeQuiz();
});

function initializeQuiz() {
    let available = countriesPlates;
    if (selectedRegion !== 'all') available = countriesPlates.filter(c => c.region === selectedRegion);
    if (available.length < 4) {
        alert('Not enough countries in this region. Redirecting to setup.');
        window.location.href = 'quiz-plates-setup.html';
        return;
    }
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, Math.min(totalQuestions, available.length));
    document.getElementById('total-questions').textContent = quizQuestions.length;
    loadQuestion();
    document.querySelectorAll('.answer-btn').forEach(btn => btn.addEventListener('click', () => handleAnswer(btn)));
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) { showResults(); return; }
    isAnswered = false;
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('plate-render').innerHTML = buildPlateSVG(q.plate);
    const wrong = getWrongAnswers(q);
    const all = [q, ...wrong].sort(() => Math.random() - 0.5);
    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
        btn.querySelector('.answer-text').textContent = all[i].name;
        btn.dataset.correct = all[i].name === q.name;
        btn.classList.remove('correct', 'incorrect', 'disabled');
        btn.disabled = false;
    });
}

function getWrongAnswers(correct) {
    let pool = countriesPlates.filter(c => c.name !== correct.name);
    if (selectedRegion !== 'all') {
        const same = pool.filter(c => c.region === selectedRegion);
        if (same.length >= 3) pool = same;
    }
    return pool.sort(() => Math.random() - 0.5).slice(0, 3);
}

function handleAnswer(btn) {
    if (isAnswered) return;
    isAnswered = true;
    const correct = btn.dataset.correct === 'true';
    document.querySelectorAll('.answer-btn').forEach(b => {
        b.disabled = true; b.classList.add('disabled');
        if (b.dataset.correct === 'true') b.classList.add('correct');
        else if (b === btn && !correct) b.classList.add('incorrect');
    });
    if (correct) { score++; document.getElementById('score').textContent = score; }
    setTimeout(() => { currentQuestionIndex++; loadQuestion(); }, 1600);
}

function showResults() {
    const pct = Math.round((score / quizQuestions.length) * 100);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = quizQuestions.length;
    document.getElementById('final-percentage').textContent = pct + '%';
    document.getElementById('results-modal').classList.remove('hidden');
}

function restartQuiz() { window.location.href = '/quiz/plates/quiz-plates-setup.html'; }

/* ═══════════════════════════════════════════════════════════════
   SVG PLATE RENDERER
   Every plate is pure SVG — no emojis, no images, no HTML tricks.
═══════════════════════════════════════════════════════════════ */

function buildPlateSVG(p) {
    switch (p.type) {
        case 'eu_standard': return svgEUStandard(p);
        case 'eu_fr':       return svgFrance(p);
        case 'eu_it':       return svgItaly(p);
        case 'eu_nl':       return svgNetherlands(p);
        case 'eu_be':       return svgBelgium(p);
        case 'eu_lu':       return svgLuxembourg(p);
        case 'ch':          return svgSwitzerland(p);
        case 'uk':          return svgUK(p);
        case 'ua':          return svgUkraine(p);
        case 'by':          return svgBelarus(p);
        case 'rs':          return svgSerbia(p);
        case 'jp':          return svgJapan(p);
        case 'cn':          return svgChina(p);
        case 'kr':          return svgKorea(p);
        case 'il':          return svgIsrael(p);
        case 'in':          return svgIndia(p);
        case 'th':          return svgThailand(p);
        case 'sg':          return svgSingapore(p);
        case 'my':          return svgMalaysia(p);
        case 'id':          return svgIndonesia(p);
        case 'tr':          return svgTurkey(p);
        case 'ir':          return svgIran(p);
        case 'sa':          return svgSaudiArabia(p);
        case 'ae':          return svgUAE(p);
        case 'us':          return svgUSA(p);
        case 'ca':          return svgCanada(p);
        case 'mx':          return svgMexico(p);
        case 'br':          return svgBrazil(p);
        case 'ar':          return svgArgentina(p);
        case 'cl':          return svgChile(p);
        case 'co':          return svgColombia(p);
        case 'pe':          return svgPeru(p);
        case 'za':          return svgSouthAfrica(p);
        case 'ng':          return svgNigeria(p);
        case 'ke':          return svgKenya(p);
        case 'eg':          return svgEgypt(p);
        case 'ma':          return svgMorocco(p);
        case 'au':          return svgAustralia(p);
        case 'nz':          return svgNewZealand(p);
        default:            return svgGeneric(p);
    }
}

/* ── Shared SVG definitions (gradients, filters) ── */
function sharedDefs() {
    return `<defs>
        <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(255,255,255,0.30)"/>
            <stop offset="55%" stop-color="rgba(255,255,255,0.04)"/>
            <stop offset="100%" stop-color="rgba(0,0,0,0.07)"/>
        </linearGradient>
        <radialGradient id="boltG" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#e0e0e0"/>
            <stop offset="100%" stop-color="#777"/>
        </radialGradient>
    </defs>`;
}

/* ── Wrap any plate content in an <svg> with shadow + gloss ── */
function wrap(W, H, inner, extra_style) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
        style="display:block;filter:drop-shadow(0 5px 18px rgba(0,0,0,0.32));${extra_style||''}" class="plate-svg">
        ${sharedDefs()}
        ${inner}
        <rect x="2" y="2" width="${W-4}" height="${(H-4)*0.48}" rx="4" fill="url(#gloss)" pointer-events="none"/>
    </svg>`;
}

/* ── Plate background rect ── */
function bg(W, H, fill, stroke, sw=3, rx=5) {
    const o = sw/2;
    return `<rect x="${o}" y="${o}" width="${W-sw}" height="${H-sw}" rx="${rx}" ry="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

/* ── Bolt screws (4 corners) ── */
function bolts(W, H, r=6) {
    const bx = 13, by = 10;
    function b(x, y) {
        return `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#boltG)" stroke="#555" stroke-width="0.7"/>
                <line x1="${x-r*.45}" y1="${y}" x2="${x+r*.45}" y2="${y}" stroke="rgba(0,0,0,0.45)" stroke-width="1.4"/>
                <line x1="${x}" y1="${y-r*.45}" x2="${x}" y2="${y+r*.45}" stroke="rgba(0,0,0,0.45)" stroke-width="1.4"/>`;
    }
    return b(bx,by) + b(W-bx,by) + b(bx,H-by) + b(W-bx,H-by);
}

/* ── 5-pointed star (pure SVG path) ── */
function star5(cx, cy, r, fill) {
    const inner = r * 0.382;
    let d = '';
    for (let i = 0; i < 10; i++) {
        const a = (i * 36 - 90) * Math.PI / 180;
        const rr = (i % 2 === 0) ? r : inner;
        d += (i === 0 ? 'M' : 'L') + (cx + rr * Math.cos(a)).toFixed(2) + ',' + (cy + rr * Math.sin(a)).toFixed(2);
    }
    return `<path d="${d}Z" fill="${fill}"/>`;
}

/* ── 12 stars in a perfect circle (EU standard) ── */
function euStars(cx, cy, orbitR, starR, color) {
    color = color || '#FFDD00';
    let out = '';
    for (let i = 0; i < 12; i++) {
        const a = (i * 30 - 90) * Math.PI / 180;
        out += star5(cx + orbitR * Math.cos(a), cy + orbitR * Math.sin(a), starR, color);
    }
    return out;
}

/* ── EU blue left strip (stars circle + country code) ── */
function euStrip(SW, H, code) {
    // clip the left strip using a path that matches the plate's rounded corners on the left only
    const starCY = H * 0.375;
    const codeFSize = code.length >= 3 ? 11 : 13;
    return `
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#003399"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#003399"/>
        ${euStars(SW/2, starCY, SW*0.30, SW*0.077)}
        <text x="${SW/2}" y="${H*0.815}"
            text-anchor="middle" dominant-baseline="auto"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="${codeFSize}" fill="#fff" letter-spacing="0.3">${code}</text>`;
}

/* ── Star of David (pure SVG, no emoji) ── */
function starOfDavid(cx, cy, r, color) {
    const sw = (r * 0.20).toFixed(2);
    function tri(flip) {
        const s = flip ? -1 : 1;
        return `<polygon points="${cx.toFixed(1)},${(cy - s*r).toFixed(1)} ${(cx - r*0.866).toFixed(1)},${(cy + s*r*0.5).toFixed(1)} ${(cx + r*0.866).toFixed(1)},${(cy + s*r*0.5).toFixed(1)}"
            fill="none" stroke="${color}" stroke-width="${sw}" stroke-linejoin="round"/>`;
    }
    return tri(false) + tri(true);
}

/* ── Israeli flag (pure SVG: white bg, two blue stripes, Star of David) ── */
function israelFlag(x, y, w, h, blueColor) {
    blueColor = blueColor || '#0038B8';
    const stripeH = h * 0.21;
    return `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="white"/>
        <rect x="${x}" y="${y + stripeH}" width="${w}" height="${stripeH}" fill="${blueColor}"/>
        <rect x="${x}" y="${y + h - stripeH * 2}" width="${w}" height="${stripeH}" fill="${blueColor}"/>
        ${starOfDavid(x + w/2, y + h/2, h * 0.25, blueColor)}`;
}

/* ── Ukrainian flag (pure SVG: blue top + yellow bottom) ── */
function ukraineFlag(x, y, w, h) {
    const half = h / 2;
    return `
        <rect x="${x}" y="${y}" width="${w}" height="${half}" fill="#005BBB"/>
        <rect x="${x}" y="${y+half}" width="${w}" height="${half}" fill="#FFD500"/>`;
}

/* ── Moroccan star (5-pointed, outline style) ── */
function moroccanStar(cx, cy, r, color) {
    // Moroccan flag has an outlined pentagram
    const inner = r * 0.40;
    let d = '';
    for (let i = 0; i < 10; i++) {
        const a = (i * 36 - 90) * Math.PI / 180;
        const rr = (i % 2 === 0) ? r : inner;
        d += (i === 0 ? 'M' : 'L') + (cx + rr * Math.cos(a)).toFixed(2) + ',' + (cy + rr * Math.sin(a)).toFixed(2);
    }
    return `<path d="${d}Z" fill="none" stroke="${color}" stroke-width="1.8"/>`;
}

/* ── Singapore crescent + 5 stars (pure SVG) ── */
function singaporeEmblem(cx, cy, scale) {
    // Crescent moon: large circle minus offset circle
    const R = 11 * scale, r = 8.5 * scale, offset = 5 * scale;
    // Arc approach: draw the crescent as a path
    const crescent = `<path d="
        M ${(cx - R*0.7).toFixed(1)} ${(cy - R*0.5).toFixed(1)}
        A ${R} ${R} 0 1 1 ${(cx - R*0.7).toFixed(1)} ${(cy + R*0.5).toFixed(1)}
        A ${r} ${r} 0 1 0 ${(cx - R*0.7).toFixed(1)} ${(cy - R*0.5).toFixed(1)}
        Z" fill="white"/>`;
    // 5 stars in a pentagonal arc
    const starR = 3.5 * scale;
    const arcR  = 14 * scale;
    let stars = '';
    for (let i = 0; i < 5; i++) {
        const a = (i * 36 - 108 + 90) * Math.PI / 180;
        stars += star5(cx + arcR * Math.cos(a), cy + arcR * Math.sin(a), starR, 'white');
    }
    return crescent + stars;
}

/* ══════════════════════════════════════════════════
   EUROPE
══════════════════════════════════════════════════ */

function svgEUStandard(p) {
    const W = 520, H = 110, SW = 52;
    const fsize = p.sample.length > 10 ? 38 : p.sample.length > 8 ? 44 : 50;
    return wrap(W, H, `
        ${bg(W, H, p.bg, '#aaa', 3)}
        ${euStrip(SW, H, p.code)}
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'FE-Schrift','Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="${fsize}" fill="${p.text}" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* France: EU left strip + right blue strip with region logo + dept number.
   The two strips are each 52px wide; the plate text sits in the middle zone. */
function svgFrance(p) {
    const W = 560, H = 110, SW = 52;
    const textCX = SW + (W - SW*2) / 2;
    return wrap(W, H, `
        ${bg(W, H, p.bg, '#aaa', 3)}
        ${euStrip(SW, H, p.code)}
        <!-- Right blue strip -->
        <rect x="${W-SW-1.5}" y="1.5" width="${SW+0.5}" height="${H-3}" rx="4" ry="4" fill="#003399"/>
        <rect x="${W-SW-1.5}" y="1.5" width="2" height="${H-3}" fill="#003399"/>
        <!-- Region name in right strip (2 lines) -->
        <text x="${W-SW/2-1}" y="${H*0.34}" text-anchor="middle"
            font-family="Arial,sans-serif" font-weight="700" font-size="9" fill="#fff">ÎLE-DE</text>
        <text x="${W-SW/2-1}" y="${H*0.47}" text-anchor="middle"
            font-family="Arial,sans-serif" font-weight="700" font-size="9" fill="#fff">FRANCE</text>
        <!-- Department number in right strip -->
        <text x="${W-SW/2-1}" y="${H*0.79}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="16" fill="#fff">75</text>
        <!-- Main plate text centred in the white zone -->
        <text x="${textCX}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="${p.text}" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Italy: EU left strip + right blue strip.
   Right strip has a small yellow circle with the year, and province code below. */
function svgItaly(p) {
    const W = 560, H = 110, SW = 48;
    const textCX = SW + (W - SW*2) / 2;
    const rx = W - SW - 1.5;      // right strip x
    const rCX = W - SW/2 - 1;     // right strip centre-x
    return wrap(W, H, `
        ${bg(W, H, p.bg, '#aaa', 3)}
        ${euStrip(SW, H, p.code)}
        <!-- Right blue strip -->
        <rect x="${rx}" y="1.5" width="${SW+0.5}" height="${H-3}" rx="4" ry="4" fill="#003399"/>
        <rect x="${rx}" y="1.5" width="2" height="${H-3}" fill="#003399"/>
        <!-- Yellow circle with registration year -->
        <circle cx="${rCX}" cy="${H*0.38}" r="${SW*0.33}" fill="#FFDD00"/>
        <text x="${rCX}" y="${H*0.44}" text-anchor="middle" dominant-baseline="auto"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="13" fill="#003399">25</text>
        <!-- Province abbreviation -->
        <text x="${rCX}" y="${H*0.80}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="14" fill="#fff">MI</text>
        <!-- Main plate text in the white zone -->
        <text x="${textCX}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="${p.text}" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Netherlands: yellow background, EU left strip, black characters */
function svgNetherlands(p) {
    const W = 520, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#FFEE00', '#aaa', 3)}
        ${euStrip(SW, H, p.code)}
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'FE-Schrift','Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Belgium: white background, EU left strip, RED characters */
function svgBelgium(p) {
    const W = 520, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        ${euStrip(SW, H, p.code)}
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'FE-Schrift','Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#CC0000" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Luxembourg: YELLOW background, EU left strip, black characters */
function svgLuxembourg(p) {
    const W = 520, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#FFEE00', '#aaa', 3)}
        ${euStrip(SW, H, p.code)}
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'FE-Schrift','Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Switzerland: white plate with RED border; red left strip with white cross, CH code */
function svgSwitzerland(p) {
    const W = 480, H = 110, SW = 50;
    const cx = SW/2, cy = H/2;
    const cw = 18, ch = 18;   // cross dimensions
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#DD0000', 4, 5)}
        <rect x="2" y="2" width="${SW}" height="${H-4}" rx="4" ry="4" fill="#DD0000"/>
        <!-- Swiss white cross -->
        <rect x="${cx - cw/2}" y="${cy - ch*0.19}" width="${cw}" height="${ch*0.38}" rx="1" fill="white"/>
        <rect x="${cx - ch*0.19}" y="${cy - ch/2}" width="${ch*0.38}" height="${ch}" rx="1" fill="white"/>
        <text x="${cx}" y="${H*0.85}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="12" fill="white">CH</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* UK: front plate (white) stacked over rear plate (yellow).
   Both have the standard GB blue left strip with 12-star circle. */
function svgUK(p) {
    const W = 520, H = 100, SW = 44;
    function onePlate(plateBg, label) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
            style="display:block;filter:drop-shadow(0 3px 10px rgba(0,0,0,0.24));" class="plate-svg">
            ${sharedDefs()}
            ${bg(W, H, plateBg, '#333', 2.5, 5)}
            <rect x="1.25" y="1.25" width="${SW}" height="${H-2.5}" rx="4" ry="4" fill="#003399"/>
            <rect x="${SW-1}" y="1.25" width="2" height="${H-2.5}" fill="#003399"/>
            ${euStars(SW/2, H*0.355, SW*0.285, SW*0.073)}
            <text x="${SW/2}" y="${H*0.81}" text-anchor="middle"
                font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="13" fill="#fff">GB</text>
            <text x="${SW + (W-SW)/2}" y="${H*0.695}" text-anchor="middle"
                font-family="'Arial Black',Arial,sans-serif"
                font-weight="900" font-size="52" fill="#000" letter-spacing="7">${p.sample}</text>
            <text x="${W-10}" y="16" text-anchor="end"
                font-family="Arial,sans-serif" font-size="9" fill="rgba(0,0,0,0.35)">${label}</text>
            ${bolts(W, H, 5)}
            <rect x="2" y="2" width="${W-4}" height="${(H-4)*0.48}" rx="4" fill="url(#gloss)" pointer-events="none"/>
        </svg>`;
    }
    return `<div style="display:flex;flex-direction:column;gap:9px;">
        ${onePlate('#ffffff','FRONT')}
        ${onePlate('#FFDD00','REAR')}
    </div>`;
}

/* Ukraine: white plate, EU-style blue left strip.
   The strip contains the Ukrainian flag (blue/yellow) instead of EU stars,
   with UA country code below — exactly as on real Ukrainian plates. */
function svgUkraine(p) {
    const W = 520, H = 110, SW = 52;
    // Flag dimensions inside the strip
    const fW = SW * 0.68, fH = fW * 0.60;
    const fX = (SW - fW) / 2;
    const fY = H * 0.15;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#003399"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#003399"/>
        ${ukraineFlag(fX, fY, fW, fH)}
        <rect x="${fX}" y="${fY}" width="${fW}" height="${fH}"
            fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>
        <text x="${SW/2}" y="${H*0.83}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="13" fill="#fff">UA</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Belarus: white plate, red left strip, 12-star circle, BY code */
function svgBelarus(p) {
    const W = 480, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#CF101A"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#CF101A"/>
        ${euStars(SW/2, H*0.375, SW*0.29, SW*0.075)}
        <text x="${SW/2}" y="${H*0.815}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="12" fill="#fff">BY</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Serbia: white plate, blue left strip with stars and SRB code */
function svgSerbia(p) {
    const W = 480, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#003399"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#003399"/>
        ${euStars(SW/2, H*0.375, SW*0.29, SW*0.074)}
        <text x="${SW/2}" y="${H*0.815}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="11" fill="#fff">SRB</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* ══════════════════════════════════════════════════
   ASIA
══════════════════════════════════════════════════ */

/* Japan: white plate, dark green border + inner border line.
   Top row: prefecture kanji (left), class (centre), number (right).
   Bottom row: hiragana character + 4-digit number. */
function svgJapan(p) {
    const W = 450, H = 115;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#2b6b2b', 4, 4)}
        <rect x="11" y="11" width="${W-22}" height="${H-22}" rx="2" fill="none" stroke="#2b6b2b" stroke-width="1.5"/>
        <!-- Top row -->
        <text x="24" y="41"
            font-family="'Noto Sans JP','MS Gothic',sans-serif"
            font-weight="700" font-size="19" fill="#2b6b2b">品川</text>
        <text x="${W/2}" y="41" text-anchor="middle"
            font-family="'Noto Sans JP','MS Gothic',sans-serif"
            font-size="16" fill="#2b6b2b">普通</text>
        <text x="${W-24}" y="41" text-anchor="end"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="19" fill="#2b6b2b">33</text>
        <!-- Bottom row: hiragana + number -->
        <text x="36" y="${H-16}" text-anchor="middle"
            font-family="'Noto Sans JP','MS Gothic',sans-serif"
            font-size="34" fill="#2b6b2b">あ</text>
        <text x="${W/2+45}" y="${H-14}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="44" fill="#2b6b2b" letter-spacing="6">1234</text>
        ${bolts(W, H, 6)}
    `);
}

/* China: blue plate, thin yellow inner border, red star (left), province kanji + dot + number */
function svgChina(p) {
    const W = 480, H = 115;
    return wrap(W, H, `
        <rect x="0" y="0" width="${W}" height="${H}" rx="5" fill="#0033BB"/>
        <rect x="4" y="4" width="${W-8}" height="${H-8}" rx="3" fill="none" stroke="#FFDD00" stroke-width="1.8"/>
        ${star5(28, H/2, 12, '#FF0000')}
        <text x="54" y="${H*0.685}"
            font-family="'Noto Sans SC','SimHei',sans-serif"
            font-weight="900" font-size="46" fill="#FFDD00">京</text>
        <text x="108" y="${H*0.67}"
            font-family="Arial,sans-serif" font-size="38" fill="#FFDD00">·</text>
        <text x="${W/2+65}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="44" fill="#FFDD00" letter-spacing="5">A12345</text>
        ${bolts(W, H, 6)}
    `);
}

/* South Korea: white plate, blue left strip, Korean characters */
function svgKorea(p) {
    const W = 460, H = 110, SW = 50;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        ${euStrip(SW, H, 'ROK')}
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Noto Sans KR','Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="42" fill="#000" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H, 6)}
    `);
}

/* Israel: white plate, blue left strip.
   Strip contains the Israeli flag (white bg + two blue stripes + Star of David) in pure SVG.
   Plate number on white area. Real Israeli plates are WHITE with black text. */
function svgIsrael(p) {
    const W = 480, H = 110, SW = 52;
    // Flag inside the blue strip
    const fPad = 5;
    const fW = SW - fPad * 2;
    const fH = fW * 0.60;
    const fX = fPad;
    const fY = (H - fH) / 2 - 8;   // push slightly up to leave room for IL code
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#003399"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#003399"/>
        ${israelFlag(fX, fY, fW, fH, '#4169E1')}
        <rect x="${fX}" y="${fY}" width="${fW}" height="${fH}"
            fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="0.7"/>
        <text x="${SW/2}" y="${H*0.84}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="13" fill="#fff">IL</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* India: white plate, black text. Tricolour top stripe (saffron/white/green) + Ashoka chakra. */
function svgIndia(p) {
    const W = 520, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#888', 3)}
        <rect x="1.5" y="1.5" width="${W-3}" height="21" rx="4" fill="#FF9933"/>
        <rect x="1.5" y="8.5" width="${W-3}" height="7" fill="#fff"/>
        <rect x="1.5" y="15.5" width="${W-3}" height="7" rx="0" fill="#138808"/>
        <!-- Ashoka chakra: simple circle with spokes -->
        <circle cx="${W/2}" cy="12.5" r="5" fill="none" stroke="#000088" stroke-width="1"/>
        <circle cx="${W/2}" cy="12.5" r="1" fill="#000088"/>
        <text x="${W/2}" y="${H*0.73}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="38" fill="#000" letter-spacing="2">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Thailand: white plate, black text. No country name on plate. */
function svgThailand(p) {
    const W = 480, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <text x="${W/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Noto Sans Thai','Arial',sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Singapore: white plate, red left strip with SVG crescent moon + 5 stars. No country name. */
function svgSingapore(p) {
    const W = 480, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#EF3340"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#EF3340"/>
        ${singaporeEmblem(SW/2, H*0.43, 1)}
        <text x="${SW/2}" y="${H*0.84}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff">SGP</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="44" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Malaysia: black plate, white text. No country name on plate. */
function svgMalaysia(p) {
    const W = 480, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#111', '#333', 3, 5)}
        <text x="${W/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="48" fill="#fff" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Indonesia: red plate, white text. No country name shown. */
function svgIndonesia(p) {
    const W = 480, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#CC0000', '#880000', 3, 5)}
        <text x="${W/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="48" fill="#fff" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Turkey: white plate, red left strip with SVG Turkish crescent+star, TR code. */
function svgTurkey(p) {
    const W = 480, H = 110, SW = 52;
    const cx = SW/2, cy = H*0.40;
    const moonR = 13, moonOff = 6;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#E30A17"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#E30A17"/>
        <!-- Turkish crescent (two overlapping circles) -->
        <circle cx="${cx-1}" cy="${cy}" r="${moonR}" fill="white"/>
        <circle cx="${cx+moonOff-1}" cy="${cy}" r="${moonR*0.77}" fill="#E30A17"/>
        <!-- Star to the right of crescent -->
        ${star5(cx + moonR + 3, cy, 5.5, 'white')}
        <text x="${cx}" y="${H*0.83}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff">TR</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Narrow',Arial,sans-serif"
            font-weight="900" font-size="48" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Iran: white plate, green left strip with IR code. No country name. */
function svgIran(p) {
    const W = 480, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#239F40"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#239F40"/>
        <!-- Iranian emblem: stylised tulip/sword in a circle -->
        <circle cx="${SW/2}" cy="${H*0.40}" r="15" fill="none" stroke="white" stroke-width="1.5"/>
        <text x="${SW/2}" y="${H*0.46}" text-anchor="middle"
            font-family="serif" font-size="13" fill="white">الله</text>
        <text x="${SW/2}" y="${H*0.82}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="white">IR</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.69}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="44" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Saudi Arabia: white plate, green top band, Arabic text. */
function svgSaudiArabia(p) {
    const W = 500, H = 115;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${W-3}" height="26" rx="4" fill="#006C35"/>
        <rect x="1.5" y="22" width="${W-3}" height="5" fill="#006C35"/>
        <text x="${W/2}" y="20" text-anchor="middle"
            font-family="serif" font-size="13" fill="white">المملكة العربية السعودية</text>
        <text x="${W/2}" y="${H*0.73}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="44" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* UAE: white plate. Left vertical green stripe. Three horizontal bands: red/white/black. */
function svgUAE(p) {
    const W = 500, H = 110;
    const gx = 3, gw = 16;
    const bandH = (H - 3) / 3;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <!-- Red top third -->
        <rect x="${gx+gw}" y="1.5" width="${W-gx-gw-1.5}" height="${bandH}" rx="4" fill="#FF0000"/>
        <!-- White middle third -->
        <rect x="${gx+gw}" y="${1.5+bandH}" width="${W-gx-gw-1.5}" height="${bandH}" fill="#fff"/>
        <!-- Black bottom third -->
        <rect x="${gx+gw}" y="${1.5+bandH*2}" width="${W-gx-gw-1.5}" height="${bandH}" rx="0" fill="#000"/>
        <!-- Green left vertical stripe -->
        <rect x="1.5" y="1.5" width="${gw+2}" height="${H-3}" rx="4" fill="#00732F"/>
        <!-- Plate number: sits in the white (middle) band, so we centre vertically in white zone -->
        <text x="${gx+gw + (W-gx-gw-1.5)/2}" y="${1.5 + bandH*1.78}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="6">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* ══════════════════════════════════════════════════
   AMERICAS
══════════════════════════════════════════════════ */

/* USA: white plate, coloured top state banner, .gov URL bottom. */
function svgUSA(p) {
    const W = 490, H = 105;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#bbb', 2.5, 6)}
        <rect x="1.25" y="1.25" width="${W-2.5}" height="25" rx="5" fill="${p.border}"/>
        <rect x="1.25" y="21" width="${W-2.5}" height="5" fill="${p.border}"/>
        <text x="${W/2}" y="18.5" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="13" fill="#fff" letter-spacing="4">${p.state||'STATE'}</text>
        <text x="${W/2}" y="${H*0.77}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="5">${p.sample}</text>
        <text x="${W/2}" y="${H-6}" text-anchor="middle"
            font-family="Arial,sans-serif" font-size="8" fill="#000" opacity="0.4"
            letter-spacing="1.5">${(p.state||'state').toLowerCase()}.gov</text>
        ${bolts(W, H)}
    `);
}

/* Canada: similar to USA. */
function svgCanada(p) {
    const W = 490, H = 105;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#bbb', 2.5, 6)}
        <rect x="1.25" y="1.25" width="${W-2.5}" height="25" rx="5" fill="${p.border}"/>
        <rect x="1.25" y="21" width="${W-2.5}" height="5" fill="${p.border}"/>
        <text x="${W/2}" y="18.5" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="13" fill="#fff" letter-spacing="4">${p.state||'PROVINCE'}</text>
        <text x="${W/2}" y="${H*0.77}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="5">${p.sample}</text>
        <text x="${W/2}" y="${H-6}" text-anchor="middle"
            font-family="Arial,sans-serif" font-size="8" fill="#000" opacity="0.4"
            letter-spacing="1.5">${(p.state||'province').toLowerCase()}.ca</text>
        ${bolts(W, H)}
    `);
}

/* Mexico: white plate, tricolour top bar (green/white/red). No country name on plate. */
function svgMexico(p) {
    const W = 490, H = 115;
    const bw = W - 3, third = bw / 3;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3, 5)}
        <rect x="1.5" y="1.5" width="${third}" height="22" rx="4" fill="#006847"/>
        <rect x="${1.5+third}" y="1.5" width="${third}" height="22" fill="#fff"/>
        <rect x="${1.5+third*2}" y="1.5" width="${third}" height="22" rx="4" fill="#CE1126"/>
        <text x="${W/2}" y="${H*0.75}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="44" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Brazil: white plate, MERCOSUL blue top band with stars. */
function svgBrazil(p) {
    const W = 510, H = 120;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3, 5)}
        <rect x="1.5" y="1.5" width="${W-3}" height="30" rx="4" fill="#003087"/>
        <rect x="1.5" y="26" width="${W-3}" height="5" fill="#003087"/>
        ${star5(18,15,5.5,'#FFDD00')}${star5(33,15,5.5,'#FFDD00')}${star5(48,15,5.5,'#FFDD00')}
        <text x="${W/2}" y="22" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff" letter-spacing="2">MERCOSUL · BR</text>
        ${star5(W-48,15,5.5,'#FFDD00')}${star5(W-33,15,5.5,'#FFDD00')}${star5(W-18,15,5.5,'#FFDD00')}
        <text x="${W/2}" y="${H*0.80}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="52" fill="#000" letter-spacing="7">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Argentina: light blue plate, MERCOSUR top band. */
function svgArgentina(p) {
    const W = 510, H = 120;
    return wrap(W, H, `
        ${bg(W, H, '#ADD8E6', '#aaa', 3, 5)}
        <rect x="1.5" y="1.5" width="${W-3}" height="30" rx="4" fill="#003087"/>
        <rect x="1.5" y="26" width="${W-3}" height="5" fill="#003087"/>
        ${star5(18,15,5.5,'#FFDD00')}${star5(33,15,5.5,'#FFDD00')}${star5(48,15,5.5,'#FFDD00')}
        <text x="${W/2}" y="22" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff" letter-spacing="2">MERCOSUR · RA</text>
        ${star5(W-48,15,5.5,'#FFDD00')}${star5(W-33,15,5.5,'#FFDD00')}${star5(W-18,15,5.5,'#FFDD00')}
        <text x="${W/2}" y="${H*0.80}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="52" fill="#000" letter-spacing="7">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Chile: white plate, thin red top + bottom lines. No country name on plate. */
function svgChile(p) {
    const W = 470, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#CC0000', 3, 5)}
        <rect x="3" y="3" width="${W-6}" height="6" rx="2" fill="#CC0000"/>
        <rect x="3" y="${H-9}" width="${W-6}" height="6" rx="2" fill="#CC0000"/>
        <text x="${W/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="48" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Colombia: white plate, yellow top band (actually Colombia plates have a yellow bg historically). */
function svgColombia(p) {
    const W = 470, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#FFEE00', '#888', 3, 5)}
        <text x="${W/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="50" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Peru: white plate, thin red top + bottom stripes. */
function svgPeru(p) {
    const W = 470, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#CC0000', 3, 5)}
        <rect x="3" y="3" width="${W-6}" height="6" rx="2" fill="#CC0000"/>
        <rect x="3" y="${H-9}" width="${W-6}" height="6" rx="2" fill="#CC0000"/>
        <text x="${W/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="48" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* ══════════════════════════════════════════════════
   AFRICA
══════════════════════════════════════════════════ */

/* South Africa: white plate, black thin border, black text, province code top-left.
   Real format: e.g. "CA 123-456" with "WESTERN CAPE" in tiny text above or just the number. */
function svgSouthAfrica(p) {
    const W = 490, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#111', 3, 5)}
        <!-- Province code + province name row at top -->
        <text x="${W/2}" y="22" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#111" letter-spacing="3">GP · GAUTENG</text>
        <!-- Main plate number centred -->
        <text x="${W/2}" y="${H*0.74}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#111" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Nigeria: white plate with green left + right border stripes, black text. No country name. */
function svgNigeria(p) {
    const W = 490, H = 110, stripeW = 6;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#006600', 4, 5)}
        <rect x="2" y="2" width="${stripeW}" height="${H-4}" rx="3" fill="#006600"/>
        <rect x="${W-stripeW-2}" y="2" width="${stripeW}" height="${H-4}" rx="3" fill="#006600"/>
        <text x="${W/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Kenya: white plate, thin green top + bottom stripes. No country name. */
function svgKenya(p) {
    const W = 470, H = 110;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#006600', 3, 5)}
        <rect x="3" y="3" width="${W-6}" height="6" rx="2" fill="#006600"/>
        <rect x="3" y="${H-9}" width="${W-6}" height="6" rx="2" fill="#006600"/>
        <text x="${W/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Egypt: white plate, red left strip with Arabic "مصر" and EGY code. */
function svgEgypt(p) {
    const W = 490, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#CC0000"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#CC0000"/>
        <text x="${SW/2}" y="${H*0.44}" text-anchor="middle"
            font-family="serif" font-size="14" fill="#fff" font-weight="700">مصر</text>
        <text x="${SW/2}" y="${H*0.75}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff">EGY</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="44" fill="#000" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* Morocco: white plate, red left strip with the Moroccan green pentagram + MA code.
   The star is an outlined pentagram (not filled) matching the Moroccan flag. */
function svgMorocco(p) {
    const W = 490, H = 110, SW = 52;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#C1272D"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#C1272D"/>
        ${moroccanStar(SW/2, H*0.42, 14, '#006233')}
        <text x="${SW/2}" y="${H*0.82}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff">MA</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="44" fill="#000" letter-spacing="3">${p.sample}</text>
        ${bolts(W, H)}
    `);
}

/* ══════════════════════════════════════════════════
   OCEANIA
══════════════════════════════════════════════════ */

/* Australia: white plate, coloured top state bar. No country name. */
function svgAustralia(p) {
    const W = 470, H = 105;
    return wrap(W, H, `
        ${bg(W, H, '#f8f8f8', '#bbb', 2.5, 5)}
        <rect x="1.25" y="1.25" width="${W-2.5}" height="23" rx="4" fill="${p.border}"/>
        <rect x="1.25" y="19" width="${W-2.5}" height="5" fill="${p.border}"/>
        <text x="${W/2}" y="17" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="12" fill="#fff" letter-spacing="4">${p.state||'AUSTRALIA'}</text>
        <text x="${W/2}" y="${H*0.79}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="46" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H, 6)}
    `);
}

/* New Zealand: white plate, dark blue left strip with SVG silver fern + NZ code.
   The silver fern is drawn with pure SVG paths — no emoji. */
function svgNewZealand(p) {
    const W = 470, H = 110, SW = 58;
    // SVG silver fern: a simplified frond shape using bezier curves
    const fX = SW/2;
    const fern = `
        <path d="M${fX},${H*0.82}
            L${fX-2},${H*0.72} C${fX-12},${H*0.60} ${fX-18},${H*0.45} ${fX-8},${H*0.22}
            C${fX-14},${H*0.36} ${fX-8},${H*0.52} ${fX-2},${H*0.62}
            L${fX},${H*0.72}
            L${fX+2},${H*0.62} C${fX+8},${H*0.52} ${fX+14},${H*0.36} ${fX+8},${H*0.22}
            C${fX+18},${H*0.45} ${fX+12},${H*0.60} ${fX+2},${H*0.72}
            Z" fill="rgba(255,255,255,0.90)"/>
        <!-- Side fronds left -->
        <path d="M${fX-2},${H*0.60} C${fX-14},${H*0.52} ${fX-20},${H*0.44} ${fX-12},${H*0.34}
            C${fX-16},${H*0.42} ${fX-10},${H*0.50} ${fX-2},${H*0.56} Z"
            fill="rgba(255,255,255,0.55)"/>
        <!-- Side fronds right -->
        <path d="M${fX+2},${H*0.60} C${fX+14},${H*0.52} ${fX+20},${H*0.44} ${fX+12},${H*0.34}
            C${fX+16},${H*0.42} ${fX+10},${H*0.50} ${fX+2},${H*0.56} Z"
            fill="rgba(255,255,255,0.55)"/>`;
    return wrap(W, H, `
        ${bg(W, H, '#fff', '#aaa', 3, 5)}
        <rect x="1.5" y="1.5" width="${SW}" height="${H-3}" rx="4" ry="4" fill="#00247D"/>
        <rect x="${SW-1}" y="1.5" width="2" height="${H-3}" fill="#00247D"/>
        ${fern}
        <text x="${SW/2}" y="${H*0.92}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif" font-weight="900"
            font-size="11" fill="rgba(255,255,255,0.85)">NZ</text>
        <text x="${SW + (W-SW)/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="48" fill="#000" letter-spacing="5">${p.sample}</text>
        ${bolts(W, H, 6)}
    `);
}

/* Generic fallback */
function svgGeneric(p) {
    const W = 470, H = 110;
    return wrap(W, H, `
        ${bg(W, H, p.bg||'#fff', p.border||'#888', 3, 5)}
        <text x="${W/2}" y="${H*0.685}" text-anchor="middle"
            font-family="'Arial Black',Arial,sans-serif"
            font-weight="900" font-size="48" fill="${p.text||'#000'}" letter-spacing="4">${p.sample}</text>
        ${bolts(W, H)}
    `);
}