let selectedQuestions = 10;
let selectedLang = 'all';
let selectedLevel = 'all';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedQuestions = parseInt(btn.dataset.questions);
        });
    });

    document.querySelectorAll('.region-btn[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.region-btn[data-lang]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedLang = btn.dataset.lang;
        });
    });

    document.querySelectorAll('.region-btn[data-level]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.region-btn[data-level]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedLevel = btn.dataset.level;
        });
    });
});

function startQuiz() {
    sessionStorage.setItem('vocabQuizQuestions', selectedQuestions);
    sessionStorage.setItem('vocabQuizLang', selectedLang);
    sessionStorage.setItem('vocabQuizLevel', selectedLevel);
    window.location.href = 'quiz-vocab.html';
}