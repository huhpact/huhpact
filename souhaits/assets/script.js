document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.progress');
  const progressNumbers = document.querySelector('.progress-numbers');
  const sections = document.querySelectorAll('.wishlist-item');

  sections.forEach((_, index) => {
      const number = document.createElement('span');
      number.textContent = (index + 1).toString().padStart(2, '0');
      progressNumbers.appendChild(number);
  });

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');

              const index = Array.from(sections).indexOf(entry.target);
              const progress = ((index + 1) / sections.length) * 100;
              progressBar.style.height = `${progress}%`;

              const img = entry.target.querySelector('img');
              if (img) {
                  const parallaxScroll = () => {
                      const rect = entry.target.getBoundingClientRect();
                      const scrollPercentage = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                      const scale = 1 + (scrollPercentage * 0.2);
                      const translate = scrollPercentage * 50;
                      img.style.transform = `scale(${scale}) translateY(${translate}px)`;
                  };
                  
                  window.addEventListener('scroll', parallaxScroll);
              }
          }
      });
  }, {
      threshold: 0.2,
      rootMargin: '-50px'
  });

  sections.forEach(item => {
      observer.observe(item);
  });

  const gradient = document.querySelector('.gradient');
  document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      gradient.style.setProperty('--mouse-x', `${x}%`);
      gradient.style.setProperty('--mouse-y', `${y}%`);
  });

  
  const main = document.querySelector('main');
  let isScrolling = false;
  let currentSection = 0;

  function scrollToSection(index) {
      if (index >= 0 && index < sections.length && !isScrolling) {
          isScrolling = true;
          sections[index].scrollIntoView({ behavior: 'smooth' });
          currentSection = index;
          setTimeout(() => {
              isScrolling = false;
          }, 1000);
      }
  }

  window.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (!isScrolling) {
          if (e.deltaY > 0) {
              scrollToSection(currentSection + 1);
          } else {
              scrollToSection(currentSection - 1);
          }
      }
  }, { passive: false });

  let touchStartY = 0;
  let touchStartX = 0;

  main.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
  }, { passive: true });

  main.addEventListener('touchmove', (e) => {
      if (isScrolling) return;
      
      const touchEndY = e.touches[0].clientY;
      const touchEndX = e.touches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = Math.abs(touchStartX - touchEndX);

      if (Math.abs(diffY) > diffX && Math.abs(diffY) > 50) {
          if (diffY > 0) {
              scrollToSection(currentSection + 1);
          } else {
              scrollToSection(currentSection - 1);
          }
          touchStartY = touchEndY;
      }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          scrollToSection(currentSection - 1);
      }
  });

  document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', () => {
          btn.classList.toggle('active');
      });
  });

  document.querySelectorAll('.product-link').forEach(link => {
      link.addEventListener('mousemove', (e) => {
          const rect = link.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          link.style.setProperty('--mouse-x', `${x}px`);
          link.style.setProperty('--mouse-y', `${y}px`);
      });
  });
});