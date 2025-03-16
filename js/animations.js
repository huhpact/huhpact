const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
			if (entry.isIntersecting) {
					entry.target.classList.add('visible');
			}
	});
}, { threshold: 0.1 });

document.querySelectorAll('.reveal__text').forEach(el => observer.observe(el));

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
	cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			target.scrollIntoView({ behavior: 'smooth' });
	});
});

document.querySelectorAll('.price__card').forEach(card => {
	card.addEventListener('click', () => {
			document.querySelectorAll('.price__card').forEach(otherCard => {
					if (otherCard !== card) {
							otherCard.classList.remove('active');
					}
			});
			card.classList.toggle('active');
	});
});