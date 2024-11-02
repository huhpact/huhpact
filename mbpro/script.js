document.addEventListener("DOMContentLoaded", function() {
	const tradeArrow = document.getElementById("trade-arrow");
	const tradeSection = document.getElementById("trade");

	function handleScroll() {
			const tradeSectionPosition = tradeSection.getBoundingClientRect().top;
			const screenPosition = window.innerHeight / 1.3;

			if (tradeSectionPosition < screenPosition) {
					tradeArrow.style.opacity = "1"; 
					tradeArrow.style.transform = "rotate(360deg)"; 
			}
	}

	window.addEventListener("scroll", handleScroll);
});


document.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector('.scroll-video');
	let isScrolling;

	
	function pauseVideo() {
			video.pause();
	}

	
	function playVideo() {
			video.play();
	}

	
	window.addEventListener('scroll', () => {
			clearTimeout(isScrolling);

			
			playVideo();

			
			isScrolling = setTimeout(() => {
					pauseVideo();
			}, 150); 
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const icons = document.querySelectorAll('.fade-icon');

	
	function isInViewport(element) {
			const rect = element.getBoundingClientRect();
			return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
	}

	
	function handleScroll() {
			icons.forEach((icon, index) => {
					if (isInViewport(icon)) {
							setTimeout(() => {
									icon.classList.add('in-view');
							}, index * 200); 
					}
			});
	}


	window.addEventListener('scroll', handleScroll);

	
	handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const fills = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // Add the animation class
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  fills.forEach(fill => observer.observe(fill));
});
