let selectedQuestions = 10;
let selectedRegion = 'all';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedQuestions = parseInt(btn.dataset.questions);
        });
    });
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRegion = btn.dataset.region;
        });
    });
});

function startQuiz() {
    sessionStorage.setItem('platesQuizQuestions', selectedQuestions);
    sessionStorage.setItem('platesQuizRegion', selectedRegion);
    window.location.href = 'quiz-plates.html';
}