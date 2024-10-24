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


    // Toggle content and chevron rotation
    document.getElementById('macbookChevron').addEventListener('click', function() {
        var details = document.getElementById('macbookDetails');
        var chevronIcon = this.querySelector('i'); // Find the chevron icon

        // Toggle visibility of the content
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block"; // Show the box
            chevronIcon.className = 'bx bx-chevron-up'; // Change to chevron-up
        } else {
            details.style.display = "none"; // Hide the box
            chevronIcon.className = 'bx bx-chevron-down'; // Change to chevron-down
        }
    });


    // Open modal when the image is clicked
    document.getElementById('macbookImage').addEventListener('click', function() {
        var modal = document.getElementById('imageModal');
        var modalImg = document.getElementById('modalImage');
        
        modal.style.display = "flex"; // Show the modal
        modalImg.src = this.src; // Set the modal image to the clicked image
    });

    // Close the modal when clicking anywhere outside the image
    window.addEventListener('click', function(event) {
        var modal = document.getElementById('imageModal');
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });



