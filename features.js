document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuSidebar = document.getElementById('mobileMenuSidebar');
    const body = document.body;
    
    function openMobileMenu() {
        mobileMenuBtn.classList.add('menu-active');
        mobileMenuOverlay.classList.add('menu-active');
        mobileMenuSidebar.classList.add('menu-active');
        body.classList.add('menu-open');
    }
    
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('menu-active');
        mobileMenuOverlay.classList.remove('menu-active');
        mobileMenuSidebar.classList.remove('menu-active');
        body.classList.remove('menu-open');
    }
    
    if (mobileMenuBtn && mobileMenuOverlay && mobileMenuSidebar) {
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenuBtn.classList.contains('menu-active');
            
            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        
        mobileMenuSidebar.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.hero-content > *, .feature-text, .feature-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    document.querySelectorAll('.btn, .feature-cta').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    document.querySelectorAll('.feature-cta').forEach(button => {
        button.addEventListener('click', function() {
            const sectionTitle = this.closest('.feature-section').querySelector('.feature-title').textContent;
            console.log(`Feature CTA clicked: ${sectionTitle}`);
            
            const originalText = this.innerHTML;
            this.style.background = '#10b981';
            this.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Getting Started!
            `;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
            }, 2000);
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    .btn, .feature-cta {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .header.scrolled {
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(20px);
    }
`;
document.head.appendChild(style);

(function(){document.addEventListener("contextmenu",function(e){e.preventDefault();});document.addEventListener("keydown",function(e){const k=e.key.toLowerCase();const b=e.key==="F12"||(e.ctrlKey&&e.shiftKey&&["i","j","c","k"].includes(k))||(e.ctrlKey&&["u","s","p","a"].includes(k))||(e.metaKey&&["s","p","u","a"].includes(k));if(b){e.preventDefault();return false;}});setInterval(function(){console.clear();},500);(function(){let t=160;setInterval(()=>{if(window.outerWidth-window.innerWidth>t||window.outerHeight-window.innerHeight>t){document.body.innerHTML="<h1 style='color:red;text-align:center;margin-top:100px;'>Accès refusé : outils de développement détectés</h1>";}},1000);})();})();