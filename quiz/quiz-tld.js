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

    if (availableCountries.length < 4) {
        alert('Not enough countries in this region. Redirecting to setup.');
        window.location.href = 'quiz-tld-setup.html';
        return;
    }

    const shuffled = [...availableCountries].sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, Math.min(totalQuestions, availableCountries.length));

    document.getElementById('total-questions').textContent = quizQuestions.length;

    loadQuestion();

    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(btn));
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

    const wrongAnswers = getRandomWrongAnswers(currentQuestion);
    const allAnswers = [currentQuestion, ...wrongAnswers].sort(() => Math.random() - 0.5);

    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach((btn, index) => {
        btn.querySelector('.answer-text').textContent = allAnswers[index].name;
        btn.dataset.correct = allAnswers[index].name === currentQuestion.name;
        btn.classList.remove('correct', 'incorrect', 'disabled');
        btn.disabled = false;
    });
}

function getRandomWrongAnswers(correctCountry) {
    let availableCountries = countriesTLD.filter(c => c.name !== correctCountry.name);

    if (selectedRegion !== 'all') {
        const sameRegion = availableCountries.filter(c => c.region === selectedRegion);
        if (sameRegion.length >= 3) {
            availableCountries = sameRegion;
        }
    }

    const shuffled = availableCountries.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

function handleAnswer(selectedBtn) {
    if (isAnswered) return;

    isAnswered = true;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    const answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        } else if (btn === selectedBtn && !isCorrect) {
            btn.classList.add('incorrect');
        }
        btn.classList.add('disabled');
    });

    if (isCorrect) {
        score++;
        document.getElementById('score').textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
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