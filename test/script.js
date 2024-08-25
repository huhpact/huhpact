
  document.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const nav = document.querySelector('nav');
    
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the top of the #about section is within the viewport
    if (aboutSectionTop <= windowHeight / 2) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  });


	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});