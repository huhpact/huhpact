// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize loaders
  const loader = document.querySelector('.loader');
  
  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close mobile menu when clicking on links
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Wait for all resources to load
  window.addEventListener('load', () => {
    // Initialize language system
    initializeLanguage();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize destinations
    initializeDestinations();
    
    // Initialize map
    initializeMapSection();
    
    // Hide loader after everything is initialized
    setTimeout(() => {
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }
    }, 800);
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !message) {
        alert(translateText('Please fill in all fields'));
        return;
      }
      
      // Here you would typically send the form data to a server
      // But for this demo, we'll just simulate a successful submission
      
      // Change button text to show submission in progress
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = '...';
      submitButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        submitButton.textContent = '✓';
        submitButton.classList.add('success');
        
        // Reset button after delay
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          submitButton.classList.remove('success');
        }, 2000);
        
        // Create and show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = translateText('Your message has been sent successfully!');
        contactForm.appendChild(successMessage);
        
        // Remove success message after delay
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }, 1500);
    });
  }
  
  // Newsletter subscription
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get email
      const email = newsletterForm.querySelector('input').value;
      
      // Basic validation
      if (!email) {
        return;
      }
      
      // Change button text
      const submitButton = newsletterForm.querySelector('button');
      const originalText = submitButton.textContent;
      submitButton.textContent = '...';
      submitButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        // Reset form
        newsletterForm.reset();
        
        // Show success
        submitButton.textContent = '✓';
        submitButton.classList.add('success');
        
        // Reset button after delay
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          submitButton.classList.remove('success');
        }, 2000);
      }, 1000);
    });
  }
  
  // Activate navigation links based on scroll position
  function activateNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
    
    // Get current scroll position
    const scrollPosition = window.scrollY + 100; // Adding offset for header
    
    // Find current section
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to corresponding link
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Listen for scroll events to activate navigation links
  window.addEventListener('scroll', activateNavLinks);
  
  // Initial call to set active link on page load
  activateNavLinks();
});