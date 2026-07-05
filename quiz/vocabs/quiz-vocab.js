/* ═══════════════════════════════════════════════════════════════
   QUIZ-VOCAB.JS
═══════════════════════════════════════════════════════════════ */

var questions     = [];
var current       = 0;
var score         = 0;
var answered      = false;
var advanceTimer  = null;
var countInterval = null;   // global so it can always be cleared

var LEVEL_LABEL = { easy: 'Einfach', medium: 'Mittel', hard: 'Schwer' };

/* ── Bootstrap ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    var total = parseInt(sessionStorage.getItem('vocabQuizQuestions')) || 10;
    var lang  = sessionStorage.getItem('vocabQuizLang')  || 'all';
    var level = sessionStorage.getItem('vocabQuizLevel') || 'all';

    var pool = quizVocab.filter(function (w) {
        var langOk  = (lang  === 'all') || (w.lang  === lang);
        var levelOk = (level === 'all') || (w.level === level);
        return langOk && levelOk;
    });

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

    var word = questions[current];
    document.getElementById('current-question').textContent = current + 1;
    document.getElementById('level-badge').textContent = LEVEL_LABEL[word.level] || '';

    // Wipe and rebuild word display
    var render = document.getElementById('brand-render');
    render.innerHTML = '';

    var wrapper = document.createElement('div');
    wrapper.className = 'word-wrapper';

    var flagRow = document.createElement('div');
    flagRow.className = 'lang-flag-row';
    var flag = document.createElement('span');
    flag.className = 'lang-flag ' + word.lang;
    flag.textContent = word.lang === 'fr' ? 'Französisch' : 'Englisch';
    flagRow.appendChild(flag);
    wrapper.appendChild(flagRow);

    var term = document.createElement('div');
    term.className = 'word-term';
    term.textContent = word.term;
    wrapper.appendChild(term);

    if (word.note) {
        var note = document.createElement('div');
        note.className = 'word-note';
        note.textContent = word.note;
        wrapper.appendChild(note);
    }

    render.appendChild(wrapper);

    // Reset input
    var input         = document.getElementById('brand-answer');
    input.value       = '';
    input.disabled    = false;
    input.className   = 'brand-input';
    input.placeholder = 'Deutsche Übersetzung eingeben…';

    // Reset button
    var btn       = document.getElementById('submit-btn');
    btn.disabled  = false;
    btn.textContent = 'Prüfen';

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

    var word    = questions[current];
    var isRight = isAcceptable(normalise(raw), word.answers);

    var fb = document.getElementById('feedback-row');
    var displayAnswer = word.answers[0];
    if (isRight) {
        score++;
        document.getElementById('score').textContent = score;
        input.classList.add('correct');
        fb.textContent = '✓ Richtig! ' + displayAnswer;
        fb.className   = 'feedback-row correct';
    } else {
        input.classList.add('incorrect');
        fb.textContent = '✗ Richtig wäre: ' + displayAnswer;
        fb.className   = 'feedback-row incorrect';
        document.getElementById('hint-text').textContent =
            word.answers.length > 1 ? ('auch akzeptiert: ' + word.answers.slice(1).join(', ')) : '';
    }

    var btn       = document.getElementById('submit-btn');
    btn.disabled  = false;
    var delay     = isRight ? 1800 : 2800;
    var remaining = Math.ceil(delay / 1000);
    btn.textContent = 'Weiter (' + remaining + ')';

    // Use the GLOBAL countInterval — always clearable
    countInterval = setInterval(function () {
        remaining--;
        if (remaining > 0) {
            btn.textContent = 'Weiter (' + remaining + ')';
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
    var pct = questions.length ? Math.round((score / questions.length) * 100) : 0;
    document.getElementById('final-score').textContent      = score;
    document.getElementById('final-total').textContent      = questions.length;
    document.getElementById('final-percentage').textContent = pct + '%';
    document.getElementById('results-modal').classList.remove('hidden');
}

function restartQuiz() {
    window.location.href = 'quiz-vocab-setup.html';
}

/* ── Helpers ──────────────────────────────────────────────── */
/* Normalisiert deutsche Eingaben: Kleinschreibung, Umlaute bleiben
   erhalten (wichtig fürs Deutsche!), aber ß/ss werden vereinheitlicht,
   Artikel (der/die/das) werden separat behandelt, Mehrfach-Leerzeichen
   entfernt. */
function normalise(str) {
    return str.toLowerCase()
        .replace(/ß/g, 'ss')
        .replace(/\s+/g, ' ')
        .trim();
}

function stripArticle(str) {
    return str.replace(/^(der|die|das)\s+/, '').trim();
}

function isAcceptable(given, correctAnswers) {
    var g        = given;
    var gNoArt   = stripArticle(given);

    for (var i = 0; i < correctAnswers.length; i++) {
        var c      = normalise(correctAnswers[i]);
        var cNoArt = stripArticle(c);

        if (g === c) return true;
        if (gNoArt === cNoArt) return true;
        // erlaubt geringe Tippfehler-Toleranz bei längeren Wörtern (ein Zeichen Unterschied)
        if (gNoArt.length >= 4 && cNoArt.length >= 4 && levenshtein(gNoArt, cNoArt) <= 1) return true;
    }
    return false;
}

/* Einfache Levenshtein-Distanz für Tippfehler-Toleranz */
function levenshtein(a, b) {
    var m = a.length, n = b.length;
    if (Math.abs(m - n) > 1) return 99; // early exit, spart Rechenzeit
    var dp = [];
    for (var i = 0; i <= m; i++) { dp[i] = [i]; }
    for (var j = 0; j <= n; j++) { dp[0][j] = j; }
    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}