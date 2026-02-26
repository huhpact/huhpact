let selectedQuestions = 10;
let selectedCategory = 'all';

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
            selectedCategory = btn.dataset.category;
        });
    });
});

function startQuiz() {
    sessionStorage.setItem('brandsQuizQuestions', selectedQuestions);
    sessionStorage.setItem('brandsQuizCategory', selectedCategory);
    window.location.href = 'quiz-brands.html';
}