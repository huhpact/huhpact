let selectedQuestions = 10;
let selectedRegion = 'all';

document.addEventListener('DOMContentLoaded', () => {
    const questionBtns = document.querySelectorAll('.option-btn');
    const regionBtns = document.querySelectorAll('.region-btn');

    questionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            questionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedQuestions = parseInt(btn.dataset.questions);
        });
    });

    regionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            regionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRegion = btn.dataset.region;
        });
    });
});

function startQuiz() {
    sessionStorage.setItem('tldQuizQuestions', selectedQuestions);
    sessionStorage.setItem('tldQuizRegion', selectedRegion);
    window.location.href = 'quiz-tld.html';
}