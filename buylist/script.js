// Hover-Parallax für die Artikelkarten
document.querySelectorAll('.item-card').forEach(card => {
	card.addEventListener('mousemove', (e) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.05)`;
	});

	card.addEventListener('mouseleave', () => {
			card.style.transform = 'translate(0, 0) scale(1)';
	});
});

// Smooth Scroll für angenehme Benutzererfahrung
window.addEventListener('scroll', () => {
	document.querySelectorAll('.item-card').forEach((card, index) => {
			const position = card.getBoundingClientRect().top;
			if (position < window.innerHeight) {
					card.style.opacity = 1;
					card.style.transform = 'translateY(0)';
					card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
			} else {
					card.style.opacity = 0;
					card.style.transform = 'translateY(100px)';
			}
	});
});
