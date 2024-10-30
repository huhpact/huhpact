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

document.addEventListener("DOMContentLoaded", function () {
	// Überprüfe die Bildschirmgröße
	if (window.innerWidth <= 600) {
			document.body.classList.add("blur"); // Hintergrund unscharf
			document.querySelector('.device-warning-modal').style.display = "flex"; // Modal anzeigen
	}
});


    


    document.getElementById('chevronMacBook').addEventListener('click', function() {
        const reasons = document.getElementById('reasonsMacBook');
        const chevron = document.getElementById('chevronMacBook');
        if (reasons.style.display === 'none') {
            reasons.style.display = 'block';
            chevron.classList.replace('bx-chevron-down', 'bx-chevron-up');
        } else {
            reasons.style.display = 'none';
            chevron.classList.replace('bx-chevron-up', 'bx-chevron-down');
        }
    });
    
    
