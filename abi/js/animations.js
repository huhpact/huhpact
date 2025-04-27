// Function to handle intersection observer animations
function setupIntersectionObserver() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const animateOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the element is visible
    };
    
    const animateObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, animateOptions);
    
    // Observe all elements with animate-in class
    document.querySelectorAll('.animate-in').forEach(element => {
      animateObserver.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('.animate-in').forEach(element => {
      element.classList.add('active');
    });
  }
}

// Function to animate destination cards when they come into view
function setupDestinationCardAnimations() {
  if ('IntersectionObserver' in window) {
    const cardOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add staggered animations with slight delay based on index
          const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, 100 * index);
          
          // Once animated, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, cardOptions);
    
    // Re-observe destination cards when they're loaded
    const observeCards = () => {
      document.querySelectorAll('.destination-card').forEach(card => {
        cardObserver.observe(card);
      });
    };
    
    // Initial observation
    observeCards();
    
    // Create a mutation observer to detect when new cards are added
    const cardContainer = document.getElementById('destinations-container');
    if (cardContainer) {
      const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            observeCards();
          }
        });
      });
      
      mutationObserver.observe(cardContainer, { childList: true });
    }
  }
}

// Setup scroll animations for different sections
function setupScrollAnimations() {
  // Add scroll indicator to hero
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    hero.appendChild(scrollIndicator);
    
    // Fade out scroll indicator when scrolling down
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
    });
  }
  
  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (hero) {
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
  });
}

// Function to setup header scroll behavior
function setupHeaderScroll() {
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Function to handle mobile menu toggle
function setupMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Prevent scrolling when menu is open
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

// Function to handle smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.style.overflow = '';
        }
        
        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
}

// Setup theme toggle functionality
function setupThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

// Handle page loader
function setupPageLoader() {
  const loader = document.querySelector('.loader');
  
  if (loader) {
    // Hide loader after page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        
        // Remove loader after animation completes
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 800);
    });
  }
}

// Function to add dynamic animations to various elements
function addDynamicAnimations() {
  // Add floating animation to cards on hover
  document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.animation = 'float 3s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset animation on mouse leave
      card.style.animation = '';
    });
  });
  
  // Add interactive effect to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = 'var(--shadow-lg)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
      button.style.boxShadow = '';
    });
  });
}

// Setup form animations and validation
function setupFormAnimations() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    const inputs = form.querySelectorAll('input, textarea');
    
    // Add focus animations
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          input.parentElement.classList.remove('focused');
        }
      });
    });
    
    // Form submission animation
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validate form
      let isValid = true;
      inputs.forEach(input => {
        if (input.required && input.value.trim() === '') {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Show success message
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + translateText('Sent!');
        submitBtn.classList.add('success');
        
        // Reset form
        setTimeout(() => {
          form.reset();
          submitBtn.innerHTML = translateText('contact.send');
          submitBtn.classList.remove('success');
          
          // Show success message
          const successMessage = document.createElement('div');
          successMessage.className = 'success-message';
          successMessage.textContent = translateText('Thank you for your message!');
          form.appendChild(successMessage);
          
          // Remove success message after a delay
          setTimeout(() => {
            successMessage.remove();
          }, 3000);
        }, 2000);
      }
    });
  }
}

// Newsletter form animation
function setupNewsletterAnimation() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const input = newsletterForm.querySelector('input');
      const submitBtn = newsletterForm.querySelector('button');
      
      if (input.value.trim() !== '') {
        // Show success state
        submitBtn.innerHTML = '<i class="fas fa-check"></i>';
        submitBtn.classList.add('success');
        
        // Reset form
        setTimeout(() => {
          input.value = '';
          submitBtn.innerHTML = translateText('footer.subscribe');
          submitBtn.classList.remove('success');
        }, 2000);
      }
    });
  }
}

// Initialize all animations
function initializeAnimations() {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', () => {
    setupIntersectionObserver();
    setupDestinationCardAnimations();
    setupScrollAnimations();
    setupHeaderScroll();
    setupMobileMenu();
    setupSmoothScrolling();
    setupThemeToggle();
    setupPageLoader();
    addDynamicAnimations();
    setupFormAnimations();
    setupNewsletterAnimation();
  });
}

// Make functions globally available
window.initializeAnimations = initializeAnimations;