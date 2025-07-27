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
    
    const monthlyLabel = document.querySelector('.monthly-label');
    const annuallyLabel = document.querySelector('.annually-label');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    
    let isAnnual = false;
    
    function updatePricing() {
        if (isAnnual) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            annualPrices.forEach(price => price.style.display = 'inline');
            
            monthlyLabel.classList.remove('active');
            annuallyLabel.classList.add('active');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'inline');
            annualPrices.forEach(price => price.style.display = 'none');
            
            monthlyLabel.classList.add('active');
            annuallyLabel.classList.remove('active');
        }
    }
    
    monthlyLabel.classList.add('active');
    
    monthlyLabel.addEventListener('click', function() {
        if (isAnnual) {
            isAnnual = false;
            updatePricing();
        }
    });
    
    annuallyLabel.addEventListener('click', function() {
        if (!isAnnual) {
            isAnnual = true;
            updatePricing();
        }
    });
    
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
    
    document.querySelectorAll('.hero-content > *, .pricing-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    document.querySelectorAll('.btn, .plan-button').forEach(button => {
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

    document.querySelectorAll('.plan-button').forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.closest('.pricing-card').querySelector('.plan-name').textContent;
            console.log(`Selected plan: ${planName}`);
            
            const originalText = this.innerHTML;
            this.style.background = '#10b981';
            this.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Selected!
            `;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
            }, 2000);
        });
    });

    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.borderColor = 'rgba(103, 51, 238, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
    });

    const expandButton = document.getElementById('expandButton');
    const expandableSection = document.getElementById('expandableFeatures');
    const tableFadeOverlay = document.getElementById('tableFadeOverlay');
    const expandText = expandButton.querySelector('.expand-text');
    
    let isExpanded = false;
    
    expandButton.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            expandableSection.classList.add('expanded');
            expandButton.classList.add('expanded');
            tableFadeOverlay.classList.add('hidden');
            expandText.textContent = 'View fewer features';
        } else {
            expandableSection.classList.remove('expanded');
            expandButton.classList.remove('expanded');
            tableFadeOverlay.classList.remove('hidden');
            expandText.textContent = 'View all features';
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .btn, .plan-button {
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
        background: rgba(26, 18, 66, 0.95);
        backdrop-filter: blur(20px);
    }
`;
document.head.appendChild(style);