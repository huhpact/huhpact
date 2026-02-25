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
    document.getElementById('plate-render').innerHTML = buildPlateImages(q);
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
   IMAGE PLATE RENDERER
   Displays real license plate images from Wikimedia Commons.
   If a country has multiple plate variants, all are shown.
═══════════════════════════════════════════════════════════════ */

function buildPlateImages(country) {
    const plates = country.plates || [];
    const multipleVariants = plates.length > 1;

    const plateItems = plates.map(plate => {
        const label = multipleVariants
            ? `<span class="plate-variant-label">${plate.label}</span>`
            : '';
        return `
            <div class="plate-image-wrapper">
                <img
                    src="${plate.url}"
                    alt="${country.name} license plate${multipleVariants ? ' — ' + plate.label : ''}"
                    class="plate-image"
                    loading="eager"
                    onerror="this.closest('.plate-image-wrapper').classList.add('plate-error'); this.style.display='none'; this.nextElementSibling && (this.nextElementSibling.style.display='none'); this.closest('.plate-image-wrapper').querySelector('.plate-error-msg').style.display='flex';"
                />
                ${label}
                <div class="plate-error-msg" style="display:none;">
                    <span>⚠ Image unavailable</span>
                </div>
            </div>`;
    }).join('');

    const wrapperClass = multipleVariants ? 'plate-images-grid plate-images-multi' : 'plate-images-grid';
    return `<div class="${wrapperClass}">${plateItems}</div>`;
}