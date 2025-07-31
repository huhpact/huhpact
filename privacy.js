

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

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

const translations = {
    fr: {
        'privacy.badge': '🛡️ Protection des données',
        'privacy.decl': 'Déclaration de',
        'privacy.conf': 'confidentialité',
        'privacy.subtitle': 'Protection de vos données personnelles selon le RGPD',
        'privacy.data1': 'Aperçu de la protection des données',
        'privacy.general': "Remarques générales",
        'privacy.general1': "Les remarques suivantes vous donnent un aperçu simple de ce qu'il advient de vos données personnelles lorsque vous visitez ce site web. Les données personnelles sont toutes les données permettant de vous identifier personnellement. Des informations détaillées sur la protection des données se trouvent dans la déclaration de confidentialité ci-dessous.",
        'privacy.collecte': 'Collecte des données sur ce site web',
        'privacy.collecte1': 'Qui est responsable de la collecte des données sur ce site web?',
        'privacy.collecte2': "Le traitement des données sur ce site est effectué par l'exploitant du site. Ses coordonnées sont indiquées dans la section « Informations sur le responsable » de cette déclaration.",
        'privacy.collecte3': 'Comment collectons-nous vos données?',
        'privacy.collecte4': "Vos données sont collectées d'une part en nous les communiquant, par exemple via un formulaire de contact. D'autres données sont automatiquement collectées ou avec votre consentement par nos systèmes informatiques lorsque vous visitez le site. Il s'agit principalement de données techniques (navigateur, système d'exploitation, heure de consultation, etc.).",
        'privacy.collecte5': "Pourquoi utilisons-nous vos données?",
        'privacy.collecte6': "Une partie des données est collectée pour garantir le bon fonctionnement du site. D'autres peuvent être utilisées pour analyser votre comportement d'utilisateur. Si des contrats sont conclus via le site, les données transmises peuvent également être utilisées à cette fin.",
        'privacy.collecte7': "Quels sont vos droits?",
        'privacy.collecte8': "Vous avez à tout moment le droit d'obtenir gratuitement des informations sur l'origine, les destinataires et la finalité de vos données personnelles enregistrées. Vous avez également un droit de rectification ou de suppression de ces données. Si vous avez donné votre consentement, vous pouvez le retirer à tout moment pour l'avenir. Vous avez aussi le droit de demander la limitation du traitement de vos données dans certains cas, ainsi qu'un droit de recours auprès de l'autorité de surveillance compétente.",
        'privacy.collecte9': "Outils d'analyse et outils de tiers",
        'privacy.collecte10': "Votre comportement de navigation peut être analysé à des fins statistiques lors de votre visite sur ce site, principalement via des programmes d'analyse. Les détails sont disponibles dans cette déclaration.",
        'privacy.info': "Informations générales et obligatoires",
        'privacy.prot': 'Protection des données',
        'privacy.prot1': "L'exploitant de ce site prend très au sérieux la protection de vos données personnelles. Vos données sont traitées de manière confidentielle, conformément aux dispositions légales en matière de protection des données et à cette déclaration.",
        'privacy.prot2': "Lorsque vous utilisez ce site, diverses données personnelles sont collectées. Cette déclaration explique quelles données nous collectons et comment nous les utilisons.",
        'privacy.prot3': 'Nous signalons que la transmission de données sur Internet (par exemple par e-mail) peut présenter des failles de sécurité.',
        'privacy.resp': 'Informations sur le responsable',
        'privacy.adresse': '14469 Potsdam, Allemagne',
		"privacy.resp1": "Le responsable est la personne physique ou morale qui décide seule ou conjointement des finalités et des moyens du traitement de données personnelles.",
        "privacy.conv": "Durée de conservation",
        "privacy.conv1": "Sauf mention contraire, vos données sont conservées jusqu'à ce que la finalité du traitement disparaisse. Si vous demandez la suppression ou retirez votre consentement, vos données sont supprimées sauf obligation légale contraire (ex. délais fiscaux ou commerciaux).",
        "privacy.bases": "Bases légales du traitement",
        "privacy.bases1": "Si vous avez consenti au traitement, celui-ci repose sur l'art. 6, al. 1, let. a RGPD ou l'art. 9, al. 2, let. a RGPD pour les catégories spéciales de données. Pour les transferts vers des pays tiers, c'est l'art. 49, al. 1, let. a RGPD. En cas d'utilisation de cookies ou d'outils similaires, le traitement repose aussi sur le § 25 al. 1 TDDDG. Si les données sont nécessaires à l'exécution d'un contrat, la base est l'art. 6, al. 1, let. b RGPD.",
        "privacy.site": "Collecte des données sur ce site",
        "privacy.cookies": "Ce site utilise des cookies (temporaires ou permanents). Certains sont essentiels pour le fonctionnement, d'autres servent à l'analyse ou à la publicité. Les cookies nécessaires sont enregistrés sur la base de l'art. 6, al. 1, let. f RGPD. Le traitement avec consentement repose sur l'art. 6, al. 1, let. a RGPD et le § 25 al. 1 TDDDG.",
        "privacy.form": "Formulaire de contact",
        "privacy.form1": "Si vous nous contactez via le formulaire, les données fournies sont enregistrées pour le traitement de votre demande. Ces données ne sont pas transmises sans votre consentement. La base légale est l'art. 6, al. 1, let. b RGPD ou, si applicable, votre consentement.",
        "privacy.cont": "Contact par e-mail, téléphone ou fax",
        "privacy.cont1": "Les données communiquées lors d'un contact sont enregistrées et traitées à des fins de réponse. Base légale : art. 6, al. 1, let. b ou f RGPD, ou votre consentement.",
        "privacy.utils": "Plugins et outils",
        "privacy.fonts": "Ce site utilise les polices Google Fonts. Lors du chargement d'une page, votre navigateur contacte les serveurs de Google (situés aux USA). La base légale est l'art. 6, al. 1, let. f RGPD, ou l'art. 6, al. 1, let. a RGPD + § 25 al. 1 TDDDG en cas de consentement. Si non pris en charge, une police standard est utilisée.",
        "privacy.awesome": "Ce site utilise les icônes de Font Awesome (USA). Lors du chargement, votre navigateur contacte leurs serveurs. La base légale est l'art. 6, al. 1, let. f RGPD ou, avec consentement, art. 6, al. 1, let. a RGPD + § 25 al. 1 TDDDG.",
        "footer.tagline": "Excellence en développement web",
        "footer.services.title": "Services",
        "footer.services.development": "Développement",
        "footer.services.design": "Design",
        "footer.services.hosting": "Hébergement",
        "footer.company.title": "Entreprise",
        "footer.company.about": "À propos",
        "footer.company.portfolio": "Portfolio",
        "footer.company.contact": "Confidentialité",
        "footer.company.imprint": "Mentions légales",
        "footer.copyright": "© 2025 huh(pact). Tous droits réservés."
    },
    en: {
        'privacy.badge': '🛡️ Data Protection',
        'privacy.decl': 'Privacy',
        'privacy.conf': 'Declaration',
        'privacy.subtitle': 'Protection of your personal data according to GDPR',
        'privacy.data1': 'Overview of data protection',
        'privacy.general': "General notes",
        'privacy.general1': "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can identify you personally.",
        'privacy.collecte': 'Collection of data on this website',
        'privacy.collecte1': 'Who is responsible for data collection on this website?',
        'privacy.collecte2': "The data processing on this website is carried out by the website operator. Their contact details can be found in the section 'Information on the responsible party' of this declaration.",
        'privacy.collecte3': 'How do we collect your data?',
        'privacy.collecte4': "Your data is collected either by providing it to us, for example through a contact form, or automatically by our IT systems when you visit the site. This mainly includes technical data (browser, operating system, time of visit, etc.).",
        'privacy.collecte5': "Why do we use your data?",
        'privacy.collecte6': "Some of the data is collected to ensure the proper functioning of the site. Others may be used to analyze your user behavior. If contracts are concluded via the site, the transmitted data may also be used for this purpose.",
        'privacy.collecte7': "What are your rights?",
        'privacy.collecte8': "You have the right to obtain free information at any time about the origin, recipients, and purpose of your stored personal data. You also have the right to request correction or deletion of this data. If you have given your consent, you can withdraw it at any time for the future. You also have the right to request the restriction of processing your data in certain cases, as well as the right to lodge a complaint with the competent supervisory authority.",
        'privacy.collecte9': "Analysis tools and third-party tools",
        'privacy.collecte10': "Your browsing behavior may be analyzed for statistical purposes when you visit this site, mainly through analysis programs. Details are available in this declaration.",
        'privacy.info': "General and mandatory information",
        'privacy.prot': 'Data protection',
        'privacy.prot1': "The operator of this site takes the protection of your personal data very seriously. Your data is treated confidentially, in accordance with the legal provisions on data protection and this declaration.",
        'privacy.prot2': "When you use this site, various personal data is collected. This declaration explains which data we collect and how we use it.",
        'privacy.prot3': 'We point out that the transmission of data over the Internet (e.g., via email) can have security vulnerabilities.',
        'privacy.resp': 'Information on the responsible party',
        'privacy.adresse': '14469 Potsdam, Germany',
        "privacy.resp1": "The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.",
        "privacy.conv": "Retention period",
        "privacy.conv1": "Unless otherwise stated, your data will be retained until the purpose of processing ceases. If you request deletion or withdraw your consent, your data will be deleted unless there are legal obligations to the contrary (e.g., tax or commercial retention periods).",
        "privacy.bases": "Legal bases for processing",
        "privacy.bases1": "If you have consented to the processing, it is based on Art. 6 (1) (a) GDPR or Art. 9 (2) (a) GDPR for special categories of data. For transfers to third countries, it is Art. 49 (1) (a) GDPR. In the case of cookies or similar technologies, the processing is also based on § 25 (1) TDDG. If the data is necessary for the performance of a contract, the legal basis is Art. 6 (1) (b) GDPR.",
        "privacy.site": "Collection of data on this site",
        "privacy.cookies": "This site uses cookies (temporary or permanent). Some are essential for the operation, others serve for analysis or advertising. Necessary cookies are stored based on Art. 6 (1) (f) GDPR. Processing with consent is based on Art. 6 (1) (a) GDPR and § 25 (1) TDDG.",
        "privacy.form": "Contact form",
        "privacy.form1": "If you contact us via the form, the data you provide will be stored for processing your request. This data will not be passed on without your consent. The legal basis is Art. 6 (1) (b) GDPR or, if applicable, your consent.",
        "privacy.cont": "Contact by email, phone, or fax",
        "privacy.cont1": "The data communicated during contact is stored and processed for the purpose of responding. Legal basis: Art. 6 (1) (b) or (f) GDPR, or your consent.",
        "privacy.utils": "Plugins and tools",
        "privacy.fonts": "This site uses Google Fonts. When a page is loaded, your browser connects to Google's servers (located in the USA). The legal basis is Art. 6 (1) (f) GDPR, or Art. 6 (1) (a) GDPR + § 25 (1) TDDG in case of consent. If not supported, a standard font is used.",
        "privacy.awesome": "This site uses Font Awesome icons (USA). When loaded, your browser connects to their servers. The legal basis is Art. 6 (1) (f) GDPR or, with consent, Art. 6 (1) (a) GDPR + § 25 (1) TDDG.",
        "footer.tagline": "Excellence in Web Development",
        "footer.services.title": "Services",
        "footer.services.development": "Development",
        "footer.services.design": "Design",
        "footer.services.hosting": "Hosting",
        "footer.company.title": "Company",
        "footer.company.about": "About Us",
        "footer.company.portfolio": "Portfolio",
        "footer.company.contact": "Privacy",
        "footer.company.imprint": "Imprint",
        "footer.copyright": "© 2025 huh(pact). All rights reserved."
    },
    de: {
        'privacy.badge': '🛡️ Datenschutz',
        'privacy.decl': 'Datenschutz',
        'privacy.conf': 'Erklärung',
        'privacy.subtitle': 'Schutz Ihrer personenbezogenen Daten gemäß DSGVO',
        'privacy.data1': 'Überblick über den Datenschutz',
        'privacy.general': "Allgemeine Hinweise",
        'privacy.general1': "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        'privacy.collecte': 'Erfassung von Daten auf dieser Website',
        'privacy.collecte1': 'Wer ist für die Datenerfassung auf dieser Website verantwortlich?',
        'privacy.collecte2': "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 'Informationen zum Verantwortlichen' dieser Erklärung entnehmen.",
        'privacy.collecte3': 'Wie erfassen wir Ihre Daten?',
        'privacy.collecte4': "Ihre Daten werden zum einen dadurch erfasst, dass Sie uns diese mitteilen, beispielsweise über ein Kontaktformular. Andere Daten werden automatisch oder mit Ihrer Einwilligung durch unsere IT-Systeme erfasst, wenn Sie die Website besuchen. Dabei handelt es sich hauptsächlich um technische Daten (Browser, Betriebssystem, Uhrzeit des Seitenaufrufs usw.).",
        'privacy.collecte5': "Warum verwenden wir Ihre Daten?",
        'privacy.collecte6': "Ein Teil der Daten wird erhoben, um die einwandfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Wenn über die Website Verträge abgeschlossen werden, können die übermittelten Daten auch zu diesem Zweck verwendet werden.",
        'privacy.collecte7': "Welche Rechte haben Sie?",
        'privacy.collecte8': "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben auch ein Recht auf Berichtigung oder Löschung dieser Daten. Wenn Sie Ihre Einwilligung gegeben haben, können Sie diese jederzeit für die Zukunft widerrufen. Sie haben auch das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer Daten zu verlangen, sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.",
        'privacy.collecte9': "Analyse-Tools und Drittanbieter-Tools",
        'privacy.collecte10': "Ihr Surfverhalten kann beim Besuch dieser Website zu statistischen Zwecken analysiert werden, hauptsächlich durch Analyseprogramme. Details sind in dieser Erklärung verfügbar.",
        'privacy.info': "Allgemeine und verpflichtende Informationen",
        'privacy.prot': 'Datenschutz',
        'privacy.prot1': "Der Betreiber dieser Website nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst. Ihre Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.",
        'privacy.prot2': "Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Diese Erklärung erläutert, welche Daten wir erheben und wie wir sie verwenden.",
        'privacy.prot3': 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.',
        'privacy.resp': 'Informationen zum Verantwortlichen',
        'privacy.adresse': '14469 Potsdam, Deutschland',
        "privacy.resp1": "Der Verantwortliche ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.",
        "privacy.conv": "Speicherdauer",
        "privacy.conv1": "Sofern nicht anders angegeben, werden Ihre Daten gespeichert, bis der Zweck der Verarbeitung entfällt. Wenn Sie die Löschung verlangen oder Ihre Einwilligung widerrufen, werden Ihre Daten gelöscht, es sei denn, es bestehen gesetzliche Aufbewahrungspflichten (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen).",
        "privacy.bases": "Rechtsgrundlagen der Verarbeitung",
        "privacy.bases1": "Wenn Sie in die Verarbeitung eingewilligt haben, ist dies gemäß Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO für besondere Kategorien von Daten. Für Übertragungen in Drittländer ist Art. 49 Abs. 1 lit. a DSGVO maßgeblich. Bei der Verwendung von Cookies oder ähnlichen Technologien ist die Verarbeitung auch gemäß § 25 Abs. 1 TDDG zulässig. Wenn die Daten für die Erfüllung eines Vertrags erforderlich sind, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.",
        "privacy.site": "Erfassung von Daten auf dieser Website",
        "privacy.cookies": "Diese Website verwendet Cookies (temporäre oder permanente). Einige sind für den Betrieb erforderlich, andere dienen der Analyse oder Werbung. Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Die Verarbeitung mit Einwilligung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDG.",
        "privacy.form": "Kontaktformular",
        "privacy.form1": "Wenn Sie uns über das Formular kontaktieren, werden die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder, falls zutreffend, Ihre Einwilligung.",
        "privacy.cont": "Kontakt per E-Mail, Telefon oder Fax",
        "privacy.cont1": "Die im Rahmen der Kontaktaufnahme übermittelten Daten werden gespeichert und verarbeitet, um Ihre Anfrage zu beantworten. Rechtsgrundlage: Art. 6 Abs. 1 lit. b oder f DSGVO oder Ihre Einwilligung.",
        "privacy.utils": "Plugins und Tools",
        "privacy.fonts": "Diese Website verwendet Google Fonts. Beim Laden einer Seite verbindet sich Ihr Browser mit den Servern von Google (in den USA). Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. a DSGVO + § 25 Abs. 1 TDDG im Falle einer Einwilligung. Wenn nicht unterstützt, wird eine Standardschriftart verwendet.",
        "privacy.awesome": "Diese Website verwendet Font Awesome Icons (USA). Beim Laden verbindet sich Ihr Browser mit deren Servern. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO oder, mit Einwilligung, Art. 6 Abs. 1 lit. a DSGVO + § 25 Abs. 1 TDDG.",
        "footer.tagline": "Exzellenz in der Webentwicklung",
        "footer.services.title": "Dienstleistungen",
        "footer.services.development": "Entwicklung",
        "footer.services.design": "Design",
        "footer.services.hosting": "Hosting",
        "footer.company.title": "Unternehmen",
        "footer.company.about": "Über uns",
        "footer.company.portfolio": "Portfolio",
        "footer.company.contact": "Datenschutz",
        "footer.company.imprint": "Impressum",
        "footer.copyright": "© 2025 huh(pact). Alle Rechte vorbehalten."
    }
};

let currentLanguage = 'fr';

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];

    if (langCode === 'de') {
        currentLanguage = 'de';
        document.documentElement.lang = 'de';
        document.getElementById('langToggle').querySelector('.lang-text').textContent = 'DE';
    } else if (langCode === 'en') {
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
    const supportedLanguages = ['fr', 'en', 'de'];
    const currentIndex = supportedLanguages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    currentLanguage = supportedLanguages[nextIndex];

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
    
    switch (currentLanguage) {
        case 'fr':
            document.title = 'huh(pact) - Déclaration de confidentialité';
            break;
        case 'en':
            document.title = 'huh(pact) - Privacy Declaration';
            break;
        case 'de':
            document.title = 'huh(pact) - Premium-Webentwicklung';
            break;
        default:
            document.title = 'huh(pact) - Déclaration de confidentialité';
    }
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

(function(){document.addEventListener("contextmenu",function(e){e.preventDefault();});document.addEventListener("keydown",function(e){const k=e.key.toLowerCase();const b=e.key==="F12"||(e.ctrlKey&&e.shiftKey&&["i","j","c","k"].includes(k))||(e.ctrlKey&&["u","s","p","a"].includes(k))||(e.metaKey&&["s","p","u","a"].includes(k));if(b){e.preventDefault();return false;}});setInterval(function(){console.clear();},500);(function(){let t=160;setInterval(()=>{if(window.outerWidth-window.innerWidth>t||window.outerHeight-window.innerHeight>t){document.body.innerHTML="<h1 style='color:red;text-align:center;margin-top:100px;'>Accès refusé : outils de développement détectés</h1>";}},1000);})();})();

