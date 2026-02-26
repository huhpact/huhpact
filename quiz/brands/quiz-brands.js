/* ═══════════════════════════════════════════════════════════════
   QUIZ-BRANDS.JS
═══════════════════════════════════════════════════════════════ */

var questions     = [];
var current       = 0;
var score         = 0;
var answered      = false;
var advanceTimer  = null;
var countInterval = null;   // global so it can always be cleared

/* ── Bootstrap ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    var total    = parseInt(sessionStorage.getItem('brandsQuizQuestions')) || 10;
    var category = sessionStorage.getItem('brandsQuizCategory') || 'all';

    var pool = category === 'all'
        ? quizBrands.slice()
        : quizBrands.filter(function (b) { return b.category === category; });

    for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }

    questions = pool.slice(0, Math.min(total, pool.length));
    document.getElementById('total-questions').textContent = questions.length;

    // Enter key + button click — registered ONCE only, no onclick in HTML
    document.getElementById('brand-answer').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); submitAnswer(); }
    });
    document.getElementById('submit-btn').addEventListener('click', function () {
        submitAnswer();
    });

    loadQuestion();
});

/* ── Load a question ──────────────────────────────────────── */
function loadQuestion() {
    if (current >= questions.length) { showResults(); return; }

    answered = false;

    // Kill ALL pending timers
    if (advanceTimer  !== null) { clearTimeout(advanceTimer);   advanceTimer  = null; }
    if (countInterval !== null) { clearInterval(countInterval); countInterval = null; }

    var brand = questions[current];
    document.getElementById('current-question').textContent = current + 1;

    // Wipe and rebuild image
    var render = document.getElementById('brand-render');
    render.innerHTML = '';

    var wrapper = document.createElement('div');
    wrapper.className = 'brand-image-wrapper';

    var img = document.createElement('img');
    img.className = 'brand-image';
    img.alt       = 'Brand logo';
    img.onerror   = function () {
        img.onerror = null;
        img.style.display = 'none';
        var err = document.createElement('div');
        err.className   = 'brand-error-msg';
        err.textContent = 'Image not available';
        wrapper.appendChild(err);
    };
    img.src = brand.img;

    wrapper.appendChild(img);
    render.appendChild(wrapper);

    // Reset input
    var input         = document.getElementById('brand-answer');
    input.value       = '';
    input.disabled    = false;
    input.className   = 'brand-input';
    input.placeholder = 'Type the brand name…';

    // Reset button
    var btn       = document.getElementById('submit-btn');
    btn.disabled  = false;
    btn.textContent = 'Submit';

    // Clear feedback
    var fb       = document.getElementById('feedback-row');
    fb.textContent = '';
    fb.className   = 'feedback-row hidden';
    document.getElementById('hint-text').textContent = '';

    setTimeout(function () { input.focus(); }, 80);
}

/* ── Submit ───────────────────────────────────────────────── */
function submitAnswer() {
    if (answered) { advance(); return; }

    var input = document.getElementById('brand-answer');
    var raw   = input.value.trim();
    if (!raw) return;

    answered = true;
    input.disabled = true;

    var brand   = questions[current];
    var isRight = isAcceptable(normalise(raw), normalise(brand.name));

    var fb = document.getElementById('feedback-row');
    if (isRight) {
        score++;
        document.getElementById('score').textContent = score;
        input.classList.add('correct');
        fb.textContent = '✓ Correct! It\'s ' + brand.name;
        fb.className   = 'feedback-row correct';
    } else {
        input.classList.add('incorrect');
        fb.textContent = '✗ It was ' + brand.name;
        fb.className   = 'feedback-row incorrect';
        document.getElementById('hint-text').textContent = brand.name;
    }

    var btn       = document.getElementById('submit-btn');
    btn.disabled  = false;
    var delay     = isRight ? 1800 : 2500;
    var remaining = Math.ceil(delay / 1000);
    btn.textContent = 'Next (' + remaining + ')';

    // Use the GLOBAL countInterval — always clearable
    countInterval = setInterval(function () {
        remaining--;
        if (remaining > 0) {
            btn.textContent = 'Next (' + remaining + ')';
        } else {
            clearInterval(countInterval);
            countInterval = null;
        }
    }, 1000);

    advanceTimer = setTimeout(function () {
        advance();
    }, delay);
}

/* ── Advance ──────────────────────────────────────────────── */
function advance() {
    if (advanceTimer  !== null) { clearTimeout(advanceTimer);   advanceTimer  = null; }
    if (countInterval !== null) { clearInterval(countInterval); countInterval = null; }
    current++;
    loadQuestion();
}

/* ── Results ──────────────────────────────────────────────── */
function showResults() {
    var pct = Math.round((score / questions.length) * 100);
    document.getElementById('final-score').textContent      = score;
    document.getElementById('final-total').textContent      = questions.length;
    document.getElementById('final-percentage').textContent = pct + '%';
    document.getElementById('results-modal').classList.remove('hidden');
}

function restartQuiz() {
    window.location.href = 'quiz-brands-setup.html';
}

/* ── Helpers ──────────────────────────────────────────────── */
function normalise(str) {
    return str.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[''`´&]/g, '')
        .replace(/\s+/g, ' ').trim();
}

function isAcceptable(given, correct) {
    if (given === correct) return true;
    var g = given.replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    var c = correct.replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    if (g === c) return true;
    if (g.length >= 3 && c.includes(g)) return true;
    if (c.length >= 3 && g.includes(c)) return true;
    return false;
}