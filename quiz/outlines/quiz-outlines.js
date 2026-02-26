/* ═══════════════════════════════════════════════════════════════
   OUTLINE QUIZ LOGIC
═══════════════════════════════════════════════════════════════ */
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let selectedRegion = 'all';
let isAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
    totalQuestions = parseInt(sessionStorage.getItem('outlinesQuizQuestions')) || 10;
    selectedRegion  = sessionStorage.getItem('outlinesQuizRegion') || 'all';
    initializeQuiz();
});

function initializeQuiz() {
    let available = countriesOutlines;
    if (selectedRegion !== 'all') available = countriesOutlines.filter(c => c.region === selectedRegion);
    if (available.length < 4) {
        alert('Not enough countries in this region. Redirecting to setup.');
        window.location.href = 'quiz-outlines-setup.html';
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
    document.getElementById('outline-render').innerHTML = buildOutlineImage(q);

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
    let pool = countriesOutlines.filter(c => c.name !== correct.name);
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

function restartQuiz() { window.location.href = 'quiz-outlines-setup.html'; }

/* ═══════════════════════════════════════════════════════════════
   IMAGE RENDERER
═══════════════════════════════════════════════════════════════ */
function buildOutlineImage(country) {
    return `
        <div class="outline-image-wrapper">
            <img
                src="${country.img}"
                alt="${country.name} outline"
                class="outline-image"
                loading="eager"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="outline-error-msg" style="display:none;">
                <span>⚠ Image unavailable</span>
            </div>
        </div>`;
}