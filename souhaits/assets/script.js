document.addEventListener('DOMContentLoaded', () => {
	const statusButtons = document.querySelectorAll('.status-button');
	const modals = document.querySelectorAll('.modal');
	const favoriteButtons = document.querySelectorAll('.favorite-button');

	// Modal öffnen/schließen
	document.querySelectorAll('.wishlist-image').forEach(image => {
			image.addEventListener('click', () => {
					const modalId = image.getAttribute('data-modal');
					document.getElementById(modalId).style.display = 'flex';
			});
	});

	modals.forEach(modal => {
			modal.querySelector('.close').addEventListener('click', () => {
					modal.style.display = 'none';
			});
	});

	// Status ändern und Animation auslösen
	statusButtons.forEach(button => {
			button.addEventListener('click', () => {
					button.innerText = button.innerText.includes("Offen") ? "Status: Erfüllt" : "Status: Offen";
					button.classList.toggle('glow');
			});
	});

	// Favoriten-Herz anklicken
	favoriteButtons.forEach(button => {
			button.addEventListener('click', () => {
					button.classList.toggle('bxs-heart');
					button.classList.toggle('bxs-heart-circle');
					button.style.color = button.classList.contains('bxs-heart') ? '#ff4c72' : '#3fc1ff';
			});
	});
});
