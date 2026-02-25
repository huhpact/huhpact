let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let selectedRegion = 'all';
let isAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
    totalQuestions = parseInt(sessionStorage.getItem('tldQuizQuestions')) || 10;
    selectedRegion = sessionStorage.getItem('tldQuizRegion') || 'all';
    initializeQuiz();
});

function initializeQuiz() {
    let availableCountries = countriesTLD;

    if (selectedRegion !== 'all') {
        availableCountries = countriesTLD.filter(c => c.region === selectedRegion);
    }

    if (availableCountries.length < 2) {
        alert('Not enough countries in this region. Redirecting to setup.');
        window.location.href = 'quiz-tld-setup.html';
        return;
    }

    const shuffled = [...availableCountries].sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, Math.min(totalQuestions, availableCountries.length));

    document.getElementById('total-questions').textContent = quizQuestions.length;

    loadQuestion();

    document.getElementById('answer-submit').addEventListener('click', submitAnswer);
    document.getElementById('answer-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') submitAnswer();
    });
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    isAnswered = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    document.getElementById('tld-display').textContent = currentQuestion.tld;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;

    const input = document.getElementById('answer-input');
    const feedback = document.getElementById('answer-feedback');
    const submitBtn = document.getElementById('answer-submit');

    input.value = '';
    input.disabled = false;
    input.classList.remove('input-correct', 'input-incorrect');
    feedback.textContent = '';
    feedback.className = 'answer-feedback';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';

    setTimeout(() => input.focus(), 80);
}

/* Build the full list of accepted answers for a country (case-insensitive) */
function getAcceptedAnswers(country) {
    const norm = s => s.trim().toLowerCase();
    const accepted = [
        norm(country.name),
        norm(country.de || ''),
        ...(country.aliases || []).map(norm),
    ].filter(Boolean);
    // Deduplicate
    return [...new Set(accepted)];
}

function isCorrectAnswer(typed, country) {
    if (!typed.trim()) return false;
    const t = typed.trim().toLowerCase();
    return getAcceptedAnswers(country).includes(t);
}

function submitAnswer() {
    if (isAnswered) {
        currentQuestionIndex++;
        loadQuestion();
        return;
    }

    const input = document.getElementById('answer-input');
    const typed = input.value;

    if (!typed.trim()) return;

    isAnswered = true;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correct = isCorrectAnswer(typed, currentQuestion);

    const feedback = document.getElementById('answer-feedback');
    const submitBtn = document.getElementById('answer-submit');

    input.disabled = true;
    submitBtn.textContent = 'Next →';

    if (correct) {
        score++;
        document.getElementById('score').textContent = score;
        input.classList.add('input-correct');
        feedback.textContent = '✓ Correct!';
        feedback.classList.add('feedback-correct');
    } else {
        input.classList.add('input-incorrect');
        const deNote = currentQuestion.de && currentQuestion.de !== currentQuestion.name
            ? ` (${currentQuestion.de})`
            : '';
        feedback.textContent = `✗  ${currentQuestion.name}${deNote}`;
        feedback.classList.add('feedback-incorrect');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1800);
}

function showResults() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = quizQuestions.length;
    document.getElementById('final-percentage').textContent = percentage + '%';
    document.getElementById('results-modal').classList.remove('hidden');
}

function restartQuiz() {
    window.location.href = 'quiz-tld-setup.html';
}