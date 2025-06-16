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
