

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
   
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            observer.observe(el);
        });
    }
}

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
    
            if (scrollTop > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
 
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

class PageTransitions {
    constructor() {
        this.init();
    }
    
    init() {
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                document.body.style.opacity = '1';
                document.body.style.transform = 'translateY(0)';
            }, 100);
        });

        document.querySelectorAll('a[href^="privacy.html"], a[href^="index.html"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');

                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    }
}

class AccessibilityEnhancement {
    constructor() {
        this.init();
    }
    
    init() {
        this.createSkipLink();

        this.enhanceFocusManagement();

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
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

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



document.addEventListener('DOMContentLoaded', () => {
    new ScrollProgress();
    new NavbarScroll();
    new RevealAnimations();
    new BackToTop();
    new RippleEffect();
    resetCookies: () => {
        document.cookie.split(";").forEach(cookie => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
            document.cookie = name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=" + window.location.pathname + ";";
        });
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        location.reload();
    },
    console.log('huh(pact) website initialized successfully! 🚀');
});
