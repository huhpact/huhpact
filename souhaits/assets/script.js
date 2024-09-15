document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.wishlist-item');
	items.forEach((item, index) => {
			item.style.setProperty('--delay', `${index * 0.2}s`);
	});

	const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
					if (entry.isIntersecting) {
							entry.target.classList.add('visible');
					}
			});
	}, {
			threshold: 0.1
	});

	items.forEach(item => {
			observer.observe(item);
	});
});
