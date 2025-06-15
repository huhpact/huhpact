// Internationalization
const translations = {
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.services": "Services",
        "nav.pricing": "Tarifs",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "hero.badge": "Solutions Web Premium",
        "hero.title.line1": "Développement Web",
        "hero.title.line2": "Nouvelle Génération",
        "hero.subtitle": "Transformez vos idées en expériences digitales exceptionnelles avec notre expertise technique avancée",
        "hero.stats.projects": "Projets",
        "hero.stats.satisfaction": "% Satisfaction",
        "hero.stats.years": "Ans d'Expertise",
        "hero.cta.primary": "Démarrer un Projet",
        "hero.cta.secondary": "Explorer nos Services",
        "hero.scroll": "Découvrir",
        "about.badge": "Qui sommes nous",
        "about.title": "Excellence & Innovation",
        "about.subtitle": "Une approche moderne du développement web avec une expertise technique approfondie",
        "about.performance.title": "Performance Ultime",
        "about.performance.description": "Applications web ultra-rapides optimisées pour tous les appareils avec des temps de chargement exceptionnels",
        "about.innovation.title": "Innovation Continue",
        "about.innovation.description": "Utilisation des dernières technologies et frameworks pour créer des expériences utilisateur révolutionnaires",
        "about.security.title": "Sécurité Avancée",
        "about.security.description": "Protection renforcée avec les meilleures pratiques de sécurité et conformité aux standards internationaux",
        "about.skills.title": "Technologies Maîtrisées",
        "services.badge": "Nos Services",
        "services.title": "Solutions Complètes",
        "services.subtitle": "De l'idée à la réalisation, nous couvrons tous les aspects de votre présence digitale",
        "services.development.title": "Développement Web",
        "services.development.description": "Applications web modernes et performantes utilisant React, Vue.js, Node.js et les dernières technologies",
        "services.design.title": "Design & UX",
        "services.design.description": "Interfaces intuitives et expériences utilisateur exceptionnelles",
        "services.hosting.title": "Hébergement",
        "services.hosting.description": "Solutions cloud sécurisées et haute performance",
        "services.maintenance.title": "Maintenance",
        "services.maintenance.description": "Support technique 24/7 et mises à jour continues",
        "services.marketing.title": "Marketing Digital",
        "services.marketing.description": "Stratégies SEO et marketing pour maximiser votre visibilité",
        "pricing.badge": "Nos Tarifs",
        "pricing.title": "Formules Transparentes",
        "pricing.subtitle": "Des solutions adaptées à tous les budgets avec un rapport qualité-prix exceptionnel",
        "pricing.period": "/ projet",
        "pricing.popular": "Plus Populaire",
        "pricing.starter.title": "Starter",
        "pricing.starter.description": "Parfait pour démarrer votre présence en ligne",
        "pricing.starter.feature1": "Site responsive moderne",
        "pricing.starter.feature2": "Optimisation SEO",
        "pricing.starter.feature3": "Hébergement 1 an",
        "pricing.starter.feature4": "Support email",
        "pricing.pro.title": "Professional",
        "pricing.pro.description": "Solution complète pour entreprises ambitieuses",
        "pricing.pro.feature1": "Application web avancée",
        "pricing.pro.feature2": "Design sur mesure",
        "pricing.pro.feature3": "Intégrations API",
        "pricing.pro.feature4": "Support prioritaire",
        "pricing.pro.feature5": "Analytics avancés",
        "pricing.enterprise.title": "Enterprise",
        "pricing.enterprise.description": "Plateforme enterprise sur mesure",
        "pricing.enterprise.feature1": "Architecture scalable",
        "pricing.enterprise.feature2": "Sécurité renforcée",
        "pricing.enterprise.feature3": "API personnalisées",
        "pricing.enterprise.feature4": "Support 24/7",
        "pricing.enterprise.feature5": "Formation équipe",
        "pricing.cta": "Choisir",
        "portfolio.badge": "Nos Réalisations",
        "portfolio.title": "Portfolio Créatif",
        "portfolio.subtitle": "Découvrez quelques-unes de nos créations les plus remarquables",
        "portfolio.project1.title": "Plateforme E-commerce",
        "portfolio.project1.description": "Solution complète avec paiements sécurisés et gestion avancée",
        "portfolio.project2.title": "Dashboard SaaS",
        "portfolio.project2.description": "Interface de gestion avec analytics en temps réel",
        "portfolio.project3.title": "Site Corporate",
        "portfolio.project3.description": "Présentation élégante avec animations fluides",
        "portfolio.view": "Voir le projet",
        "contact.badge": "Contact",
        "contact.title": "Démarrons Ensemble",
        "contact.subtitle": "Prêt à transformer vos idées en réalité digitale ? Contactez-nous dès maintenant",
        "contact.email.title": "Email",
        "contact.phone.title": "Téléphone",
        "contact.location.title": "Localisation",
        "contact.location.address": "Paris, France",
        "contact.cta.title": "Prêt à commencer ?",
        "contact.cta.description": "Transformons ensemble vos idées en réalité digitale. Contactez-nous pour discuter de votre projet.",
        "contact.cta.email": "Envoyer un email",
        "contact.cta.call": "Appeler maintenant",
        "footer.tagline": "Excellence en développement web",
        "footer.services.title": "Services",
        "footer.services.development": "Développement",
        "footer.services.design": "Design",
        "footer.services.hosting": "Hébergement",
        "footer.company.title": "Entreprise",
        "footer.company.about": "À propos",
        "footer.company.portfolio": "Portfolio",
        "footer.company.contact": "Contact",
        "footer.copyright": "© 2024 huh(pact). Tous droits réservés."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.pricing": "Pricing",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "hero.badge": "Premium Web Solutions",
        "hero.title.line1": "Next Generation",
        "hero.title.line2": "Web Development",
        "hero.subtitle": "Transform your ideas into exceptional digital experiences with our advanced technical expertise",
        "hero.stats.projects": "Projects",
        "hero.stats.satisfaction": "% Satisfaction",
        "hero.stats.years": "Years Experience",
        "hero.cta.primary": "Start a Project",
        "hero.cta.secondary": "Explore Services",
        "hero.scroll": "Discover",
        "about.badge": "About Us",
        "about.title": "Excellence & Innovation",
        "about.subtitle": "A modern approach to web development with deep technical expertise",
        "about.performance.title": "Ultimate Performance",
        "about.performance.description": "Ultra-fast web applications optimized for all devices with exceptional loading times",
        "about.innovation.title": "Continuous Innovation",
        "about.innovation.description": "Using the latest technologies and frameworks to create revolutionary user experiences",
        "about.security.title": "Advanced Security",
        "about.security.description": "Enhanced protection with security best practices and compliance with international standards",
        "about.skills.title": "Mastered Technologies",
        "services.badge": "Our Services",
        "services.title": "Complete Solutions",
        "services.subtitle": "From idea to implementation, we cover all aspects of your digital presence",
        "services.development.title": "Web Development",
        "services.development.description": "Modern and performant web applications using React, Vue.js, Node.js and latest technologies",
        "services.design.title": "Design & UX",
        "services.design.description": "Intuitive interfaces and exceptional user experiences",
        "services.hosting.title": "Hosting",
        "services.hosting.description": "Secure and high-performance cloud solutions",
        "services.maintenance.title": "Maintenance",
        "services.maintenance.description": "24/7 technical support and continuous updates",
        "services.marketing.title": "Digital Marketing",
        "services.marketing.description": "SEO and marketing strategies to maximize your visibility",
        "pricing.badge": "Our Pricing",
        "pricing.title": "Transparent Pricing",
        "pricing.subtitle": "Solutions adapted to all budgets with exceptional value for money",
        "pricing.period": "/ project",
        "pricing.popular": "Most Popular",
        "pricing.starter.title": "Starter",
        "pricing.starter.description": "Perfect to start your online presence",
        "pricing.starter.feature1": "Modern responsive site",
        "pricing.starter.feature2": "SEO optimization",
        "pricing.starter.feature3": "1 year hosting",
        "pricing.starter.feature4": "Email support",
        "pricing.pro.title": "Professional",
        "pricing.pro.description": "Complete solution for ambitious companies",
        "pricing.pro.feature1": "Advanced web application",
        "pricing.pro.feature2": "Custom design",
        "pricing.pro.feature3": "API integrations",
        "pricing.pro.feature4": "Priority support",
        "pricing.pro.feature5": "Advanced analytics",
        "pricing.enterprise.title": "Enterprise",
        "pricing.enterprise.description": "Custom enterprise platform",
        "pricing.enterprise.feature1": "Scalable architecture",
        "pricing.enterprise.feature2": "Enhanced security",
        "pricing.enterprise.feature3": "Custom APIs",
        "pricing.enterprise.feature4": "24/7 support",
        "pricing.enterprise.feature5": "Team training",
        "pricing.cta": "Choose",
        "portfolio.badge": "Our Work",
        "portfolio.title": "Creative Portfolio",
        "portfolio.subtitle": "Discover some of our most remarkable creations",
        "portfolio.project1.title": "E-commerce Platform",
        "portfolio.project1.description": "Complete solution with secure payments and advanced management",
        "portfolio.project2.title": "SaaS Dashboard",
        "portfolio.project2.description": "Management interface with real-time analytics",
        "portfolio.project3.title": "Corporate Website",
        "portfolio.project3.description": "Elegant presentation with smooth animations",
        "portfolio.view": "View project",
        "contact.badge": "Contact",
        "contact.title": "Let's Start Together",
        "contact.subtitle": "Ready to transform your ideas into digital reality? Contact us now",
        "contact.email.title": "Email",
        "contact.phone.title": "Phone",
        "contact.location.title": "Location",
        "contact.location.address": "Paris, France",
        "contact.cta.title": "Ready to start?",
        "contact.cta.description": "Let's transform your ideas into digital reality together. Contact us to discuss your project.",
        "contact.cta.email": "Send email",
        "contact.cta.call": "Call now",
        "footer.tagline": "Excellence in web development",
        "footer.services.title": "Services",
        "footer.services.development": "Development",
        "footer.services.design": "Design",
        "footer.services.hosting": "Hosting",
        "footer.company.title": "Company",
        "footer.company.about": "About",
        "footer.company.portfolio": "Portfolio",
        "footer.company.contact": "Contact",
        "footer.copyright": "© 2024 huh(pact). All rights reserved."
    }
};

// Global variables
let currentLanguage = 'fr';
let cursorX = 0;
let cursorY = 0;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    detectLanguage();
    initializeCursor();
    initializeNavigation();
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeCounters();
    initializeBackToTop();
    initializeSkillProgress();
    translatePage();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const elementPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.getElementById('mobileMenuOverlay').classList.remove('active');
            }
        });
    });
});

// Custom Cursor System
function initializeCursor() {
    const cursor = document.querySelector('.cursor-dot');
    if (!cursor) return;
    
    // Hide cursor on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    });
    
    // Magnetic effect for hover elements
    document.querySelectorAll('.magnetic-hover').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('magnetic');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('magnetic');
            element.style.transform = '';
        });
        
        
    });
}

// Language Detection and Management
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    if (langCode === 'en') {
        currentLanguage = 'en';
        document.documentElement.lang = 'en';
        document.getElementById('langToggle').querySelector('.lang-text').textContent = 'EN';
    } else {
        currentLanguage = 'fr';
        document.documentElement.lang = 'fr';
        document.getElementById('langToggle').querySelector('.lang-text').textContent = 'FR';
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    document.documentElement.lang = currentLanguage;
    document.getElementById('langToggle').querySelector('.lang-text').textContent = currentLanguage.toUpperCase();
    translatePage();
}

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    document.title = currentLanguage === 'fr' 
        ? 'huh(pact) - Développement Web Premium'
        : 'huh(pact) - Premium Web Development';
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// Navigation System
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const progressBar = document.getElementById('navProgressBar');
    
    window.addEventListener('scroll', () => {
        // Navigation background
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Mobile Menu System
function initializeMobileMenu() {
    const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    mobileMenuTrigger.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    mobileMenuClose.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu on navigation
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Scroll Animations System
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 1000);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.shape').forEach(shape => {
            const speed = shape.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Counter Animation System
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observerOptions = {
        threshold: 0.7
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, 33);
                
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Skill Progress Animation
function initializeSkillProgress() {
    const skillItems = document.querySelectorAll('.skill-item');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progressBar = skillItem.querySelector('.skill-progress');
                const progress = progressBar.getAttribute('data-progress');
                
                setTimeout(() => {
                    progressBar.style.setProperty('--progress', progress + '%');
                    progressBar.querySelector('::after') && (progressBar.querySelector('::after').style.width = progress + '%');
                    
                    // Alternative method using CSS custom property
                    progressBar.style.background = `linear-gradient(to right, var(--gradient-primary) ${progress}%, rgba(255,255,255,0.1) ${progress}%)`;
                }, 200);
                
                observer.unobserve(skillItem);
            }
        });
    }, observerOptions);
    
    skillItems.forEach(item => observer.observe(item));
}

// Back to Top System
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    const progressCircle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 22; // radius = 22
    
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Show/hide button
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Update progress circle
        const offset = circumference - (scrollPercent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Modal System
function openPricingModal(plan) {
    const modalData = {
        starter: {
            title: currentLanguage === 'fr' ? 'Formule Starter' : 'Starter Plan',
            price: '€1,299',
            description: currentLanguage === 'fr' 
                ? 'La formule parfaite pour démarrer votre présence en ligne avec un site web professionnel et moderne.'
                : 'The perfect plan to start your online presence with a professional and modern website.',
            features: currentLanguage === 'fr' 
                ? [
                    'Site web responsive et moderne',
                    'Optimisation SEO de base',
                    'Hébergement sécurisé 1 an',
                    'Support technique par email',
                    'Certificat SSL inclus',
                    'Intégration Google Analytics',
                    'Formation à la gestion de contenu'
                ]
                : [
                    'Modern responsive website',
                    'Basic SEO optimization',
                    'Secure hosting for 1 year',
                    'Email technical support',
                    'SSL certificate included',
                    'Google Analytics integration',
                    'Content management training'
                ],
            paymentLink: 'https://buy.stripe.com/test_starter_plan'
        },
        pro: {
            title: currentLanguage === 'fr' ? 'Formule Professional' : 'Professional Plan',
            price: '€2,899',
            description: currentLanguage === 'fr' 
                ? 'Solution complète pour les entreprises ambitieuses qui veulent se démarquer avec une application web avancée.'
                : 'Complete solution for ambitious companies that want to stand out with an advanced web application.',
            features: currentLanguage === 'fr' 
                ? [
                    'Application web complète et avancée',
                    'Design personnalisé et unique',
                    'Intégrations API tierces',
                    'Support prioritaire par téléphone',
                    'Analytics et reporting avancés',
                    'Optimisation SEO avancée',
                    'Maintenance incluse 6 mois',
                    'Formation complète de l\'équipe'
                ]
                : [
                    'Complete and advanced web application',
                    'Custom and unique design',
                    'Third-party API integrations',
                    'Priority phone support',
                    'Advanced analytics and reporting',
                    'Advanced SEO optimization',
                    'Maintenance included 6 months',
                    'Complete team training'
                ],
            paymentLink: 'https://buy.stripe.com/test_pro_plan'
        },
        enterprise: {
            title: currentLanguage === 'fr' ? 'Formule Enterprise' : 'Enterprise Plan',
            price: '€5,999',
            description: currentLanguage === 'fr' 
                ? 'Plateforme enterprise sur mesure avec architecture scalable et sécurité renforcée pour les grandes entreprises.'
                : 'Custom enterprise platform with scalable architecture and enhanced security for large companies.',
            features: currentLanguage === 'fr' 
                ? [
                    'Plateforme entièrement personnalisée',
                    'Architecture scalable et haute performance',
                    'Sécurité renforcée et conformité RGPD',
                    'API personnalisées et intégrations complexes',
                    'Support technique 24/7',
                    'Consultation stratégique incluse',
                    'Maintenance premium 12 mois',
                    'Formation et accompagnement équipe',
                    'Tests de charge et optimisation'
                ]
                : [
                    'Fully customized platform',
                    'Scalable and high-performance architecture',
                    'Enhanced security and GDPR compliance',
                    'Custom APIs and complex integrations',
                    '24/7 technical support',
                    'Strategic consultation included',
                    'Premium maintenance 12 months',
                    'Team training and support',
                    'Load testing and optimization'
                ],
            paymentLink: 'https://buy.stripe.com/test_enterprise_plan'
        }
    };
    
    const data = modalData[plan];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <div style="text-align: center; margin: 2rem 0;">
            <div style="font-size: 3rem; font-weight: 700; color: var(--primary); margin-bottom: 1rem;">${data.price}</div>
            <p style="font-size: 1.1rem; color: var(--text-secondary);">${data.description}</p>
        </div>
        
        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-primary);">
            ${currentLanguage === 'fr' ? 'Inclus dans cette formule :' : 'Included in this plan:'}
        </h3>
        <ul style="margin-bottom: 3rem;">
            ${data.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <div class="modal-buttons">
            <a href="${data.paymentLink}" target="_blank" class="btn btn-primary magnetic-hover ripple-effect">
                <span>${currentLanguage === 'fr' ? 'Commander maintenant' : 'Order now'}</span>
                <div class="btn-bg"></div>
            </a>
            <button class="btn btn-secondary magnetic-hover" onclick="closeModal()">
                <span>${currentLanguage === 'fr' ? 'Fermer' : 'Close'}</span>
            </button>
        </div>
    `;
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openPortfolioModal(project) {
    const portfolioData = {
        ecommerce: {
            title: currentLanguage === 'fr' ? 'Plateforme E-commerce' : 'E-commerce Platform',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
            description: currentLanguage === 'fr' 
                ? 'Une plateforme e-commerce moderne et performante développée pour une boutique de mode. Intégration complète avec les systèmes de paiement, gestion des stocks en temps réel, et interface administrative avancée.'
                : 'A modern and high-performance e-commerce platform developed for a fashion store. Complete integration with payment systems, real-time inventory management, and advanced administrative interface.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            features: currentLanguage === 'fr' 
                ? ['Paiement sécurisé Stripe', 'Gestion des stocks en temps réel', 'Interface admin complète', 'SEO optimisé', 'Responsive design']
                : ['Secure Stripe payment', 'Real-time inventory management', 'Complete admin interface', 'SEO optimized', 'Responsive design'],
            liveUrl: 'https://demo-ecommerce.huhpact.com',
            githubUrl: 'https://github.com/huhpact/ecommerce-demo'
        },
        saas: {
            title: currentLanguage === 'fr' ? 'Dashboard SaaS' : 'SaaS Dashboard',
            image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
            description: currentLanguage === 'fr' 
                ? 'Outil de gestion d\'entreprise complet avec tableau de bord analytique, gestion des équipes, et système de facturation automatisé. Interface intuitive et fonctionnalités avancées.'
                : 'Complete business management tool with analytical dashboard, team management, and automated billing system. Intuitive interface and advanced features.',
            technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
            features: currentLanguage === 'fr' 
                ? ['Dashboard analytique en temps réel', 'Gestion des équipes', 'Facturation automatisée', 'API REST complète', 'Notifications push']
                : ['Real-time analytics dashboard', 'Team management', 'Automated billing', 'Complete REST API', 'Push notifications'],
            liveUrl: 'https://demo-saas.huhpact.com',
            githubUrl: 'https://github.com/huhpact/saas-demo'
        },
        corporate: {
            title: currentLanguage === 'fr' ? 'Site Corporate' : 'Corporate Website',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
            description: currentLanguage === 'fr' 
                ? 'Site web corporate élégant pour une entreprise de conseil. Design moderne, animations fluides, et optimisation SEO avancée pour une visibilité maximale.'
                : 'Elegant corporate website for a consulting company. Modern design, smooth animations, and advanced SEO optimization for maximum visibility.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
            features: currentLanguage === 'fr' 
                ? ['Design responsive premium', 'Animations Framer Motion', 'SEO avancé', 'Performance optimisée', 'CMS intégré']
                : ['Premium responsive design', 'Framer Motion animations', 'Advanced SEO', 'Optimized performance', 'Integrated CMS'],
            liveUrl: 'https://demo-corporate.huhpact.com',
            githubUrl: 'https://github.com/huhpact/corporate-demo'
        }
    };
    
    const data = portfolioData[project];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 15px; margin-bottom: 2rem;">
        
        <h2>${data.title}</h2>
        <p style="margin-bottom: 2rem; line-height: 1.7;">${data.description}</p>
        
        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-primary);">
            ${currentLanguage ===  'fr' ? 'Fonctionnalités clés :' : 'Key features:'}
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            ${data.features.map(feature => `
                <div style="background: var(--glass-bg); padding: 1rem; border-radius: 15px; text-align: center; border: 1px solid var(--glass-border);">
                    <span style="color: var(--text-primary); font-weight: 500;">${feature}</span>
                </div>
            `).join('')}
        </div>
        
        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-primary);">
            ${currentLanguage === 'fr' ? 'Technologies utilisées :' : 'Technologies used:'}
        </h3>
        <div style="display: flex; gap: 0.8rem; margin-bottom: 3rem; flex-wrap: wrap;">
            ${data.technologies.map(tech => `
                <span style="background: rgba(79, 70, 229, 0.3); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 500; color: var(--primary);">${tech}</span>
            `).join('')}
        </div>
        
        <div class="modal-buttons">
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic-hover ripple-effect">
                <span>${currentLanguage === 'fr' ? 'Voir le site' : 'View live site'}</span>
                <div class="btn-bg"></div>
            </a>
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic-hover">
                <span>${currentLanguage === 'fr' ? 'Code source' : 'Source code'}</span>
            </a>
            <button class="btn btn-outline magnetic-hover" onclick="closeModal()">
                <span>${currentLanguage === 'fr' ? 'Fermer' : 'Close'}</span>
            </button>
        </div>
    `;
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal close events
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
});

// Performance monitoring
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart);
        }
    }
});

observer.observe({ entryTypes: ['navigation'] });

// Cleanup
window.addEventListener('beforeunload', function() {
    // Cleanup any intervals or timeouts if needed
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu and modal
        document.getElementById('mobileMenuOverlay').classList.remove('active');
        closeModal();
        document.body.style.overflow = 'auto';
    }
});

// Prevent right-click on images (optional)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// Initialize animations on page load
window.addEventListener('load', () => {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal-up').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200);
        });
    }, 500);
});