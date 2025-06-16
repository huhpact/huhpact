// Modern Cookie Banner Management
class CookieBanner {
    constructor() {
        this.banner = document.getElementById('cookieBanner');
        this.overlay = document.getElementById('cookieOverlay');
        this.acceptBtn = document.getElementById('acceptCookies');
        this.declineBtn = document.getElementById('declineCookies');
        
        this.cookieName = 'huhpact_cookie_consent';
        this.cookieExpiry = 365; // days
        
        this.init();
    }
    
    init() {
        // Check if user has already made a choice
        if (!this.getCookie(this.cookieName)) {
            // Show banner after page load with delay for better UX
            setTimeout(() => {
                this.showBanner();
            }, 1500);
        }
        
        // Event listeners
        this.acceptBtn?.addEventListener('click', () => this.acceptCookies());
        this.declineBtn?.addEventListener('click', () => this.declineCookies());
        this.overlay?.addEventListener('click', () => this.hideBanner());
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.banner?.classList.contains('show')) {
                this.hideBanner();
            }
        });
    }
    
    showBanner() {
        this.overlay?.classList.add('show');
        this.banner?.classList.add('show');
        
        // Prevent body scroll when banner is shown
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        setTimeout(() => {
            this.acceptBtn?.focus();
        }, 300);
    }
    
    hideBanner() {
        this.overlay?.classList.remove('show');
        this.banner?.classList.remove('show');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    acceptCookies() {
        this.setCookie(this.cookieName, 'accepted', this.cookieExpiry);
        this.hideBanner();
        
        // Enable analytics/tracking here
        console.log('Cookies accepted - Analytics can be enabled');
        
        // Show success notification
        this.showNotification('Cookies acceptés! Merci pour votre consentement.', 'success');
    }
    
    declineCookies() {
        this.setCookie(this.cookieName, 'declined', this.cookieExpiry);
        this.hideBanner();
        
        // Disable non-essential cookies/tracking
        console.log('Cookies declined - Only essential cookies will be used');
        
        // Show info notification
        this.showNotification('Préférences enregistrées. Seuls les cookies essentiels seront utilisés.', 'info');
    }
    
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
    }
    
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            zIndex: '10000',
            transform: 'translateX(400px)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontFamily: 'var(--font-family)',
            fontSize: '0.9rem',
            fontWeight: '500'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }, 4000);
    }
}

// Scroll Progress Bar
class ScrollProgress {
    constructor() {
        this.progressBar = document.querySelector('.nav-progress-bar');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            if (this.progressBar) {
                this.progressBar.style.width = scrollPercent + '%';
            }
        });
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar?.classList.add('scrolled');
            } else {
                this.navbar?.classList.remove('scrolled');
            }
        });
    }
}

// Reveal Animations on Scroll
class RevealAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all reveal elements
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            observer.observe(el);
        });
    }
}

// Back to Top Button
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.progressCircle = this.button?.querySelector('circle:last-child');
        this.init();
    }
    
    init() {
        if (!this.button) return;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            
            // Show/hide button
            if (scrollTop > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
            
            // Update progress circle
            if (this.progressCircle) {
                const circumference = 2 * Math.PI * 25;
                const offset = circumference - (scrollPercent * circumference);
                this.progressCircle.style.strokeDashoffset = offset;
            }
        });
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Enhanced Ripple Effect
class RippleEffect {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('.ripple-effect').forEach(button => {
            button.addEventListener('click', (e) => {
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add ripple animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Smooth Page Transitions
class PageTransitions {
    constructor() {
        this.init();
    }
    
    init() {
        // Add page load animation
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                document.body.style.opacity = '1';
                document.body.style.transform = 'translateY(0)';
            }, 100);
        });
        
        // Enhanced link transitions
        document.querySelectorAll('a[href^="privacy.html"], a[href^="index.html"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                // Fade out animation
                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    }
}

// Enhanced Accessibility
class AccessibilityEnhancement {
    constructor() {
        this.init();
    }
    
    init() {
        // Skip to content link
        this.createSkipLink();
        
        // Enhanced focus management
        this.enhanceFocusManagement();
        
        // Keyboard navigation
        this.setupKeyboardNavigation();
    }
    
    createSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Passer au contenu principal';
        skipLink.className = 'skip-link';
        
        Object.assign(skipLink.style, {
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: 'var(--primary)',
            color: 'white',
            padding: '8px 12px',
            textDecoration: 'none',
            borderRadius: '4px',
            zIndex: '10000',
            transition: 'top 0.3s',
            fontSize: '14px',
            fontWeight: '500'
        });
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.prepend(skipLink);
    }
    
    enhanceFocusManagement() {
        // Add focus indicators for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Enhanced focus styles
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-navigation *:focus {
                outline: 2px solid var(--primary) !important;
                outline-offset: 2px !important;
                box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupKeyboardNavigation() {
        // Enhanced keyboard support for interactive elements
        document.querySelectorAll('.info-card, .legal-card, .privacy-section').forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${pageLoadTime}ms`);
                
                // Send analytics if cookies accepted
                const cookieConsent = this.getCookie('huhpact_cookie_consent');
                if (cookieConsent === 'accepted') {
                    // Analytics code here
                    console.log('Analytics enabled - tracking page load time');
                }
            }
        });
        
        // Monitor resource loading errors
        window.addEventListener('error', (e) => {
            if (e.target !== window) {
                console.warn('Resource failed to load:', e.target.src || e.target.href);
            }
        }, true);
    }
    
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new CookieBanner();
    new ScrollProgress();
    new NavbarScroll();
    new RevealAnimations();
    new BackToTop();
    new RippleEffect();
    new PageTransitions();
    new AccessibilityEnhancement();
    new PerformanceMonitor();
    
    console.log('huh(pact) website initialized successfully! 🚀');
});

// Global utility functions for testing/debugging
window.huhpactUtils = {
    resetCookies: () => {
        document.cookie = 'huhpact_cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        location.reload();
    },
    showCookieBanner: () => {
        const banner = document.getElementById('cookieBanner');
        const overlay = document.getElementById('cookieOverlay');
        overlay?.classList.add('show');
        banner?.classList.add('show');
    },
    testAnimations: () => {
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 100);
        });
    }
};