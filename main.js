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
    
    document.querySelectorAll('.hero-content > *').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    document.querySelectorAll('.btn').forEach(button => {
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
});

const style = document.createElement('style');
style.textContent = `
    .btn {
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
    
    @media (max-width: 768px) {
        .nav.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(26, 18, 66, 0.98);
            flex-direction: column;
            padding: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            gap: 20px;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.testimonial-card');
    const slider = document.querySelector('.testimonials-slider');
    
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    
    const cardWidth = 380;
    const totalCards = cards.length;
    
    currentIndex = 1;
    
    function updateSlider() {
        let actualIndex = currentIndex;
        if (currentIndex < 0) {
            actualIndex = totalCards - 1;
            currentIndex = totalCards - 1;
        } else if (currentIndex >= totalCards) {
            actualIndex = 0;
            currentIndex = 0;
        }
        
        const translateX = -actualIndex * cardWidth + (slider.offsetWidth / 2) - (cardWidth / 2);
        track.style.transform = `translateX(${translateX}px)`;
        
        cards.forEach((card, index) => {
            const distance = Math.abs(index - actualIndex);
            if (distance === 0) {
                card.classList.remove('faded');
            } else if (distance === 1) {
                card.classList.add('faded');
            } else {
                card.classList.add('faded');
            }
        });
        
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
    });
    
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        prevTranslate = currentTranslate;
        slider.style.cursor = 'grabbing';
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
        
        track.style.transform = `translateX(${-currentIndex * cardWidth + diff}px)`;
    });
    
    slider.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        slider.style.cursor = 'grab';
        
        const diff = e.clientX - startX;
        const threshold = cardWidth / 3;
        
        if (diff > threshold) {
            currentIndex--;
        } else if (diff < -threshold) {
            currentIndex++;
        }
        
        updateSlider();
    });
    
    slider.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            slider.style.cursor = 'grab';
            updateSlider();
        }
    });
    
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        prevTranslate = currentTranslate;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
        
        track.style.transform = `translateX(${-currentIndex * cardWidth + diff}px)`;
    });
    
    slider.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        
        const diff = e.changedTouches[0].clientX - startX;
        const threshold = cardWidth / 3;
        
        if (diff > threshold) {
            currentIndex--;
        } else if (diff < -threshold) {
            currentIndex++;
        }
        
        updateSlider();
    });
    
    updateSlider();

    const expertsRight = document.querySelector('.experts-right');
    
    const expertsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    if (expertsRight) {
        expertsObserver.observe(expertsRight);
    }
});
