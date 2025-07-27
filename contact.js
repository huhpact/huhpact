// Mobile menu functionality
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
        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenuBtn.classList.contains('menu-active');
            
            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking on mobile nav links
        mobileMenuSidebar.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form functionality
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitLoader = document.getElementById('submitLoader');
    const successModal = document.getElementById('successModal');
    const successClose = document.getElementById('successClose');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const fileUploadArea = document.getElementById('fileUploadArea');
    const fileInput = document.getElementById('attachments');
    const uploadedFiles = document.getElementById('uploadedFiles');
    const liveChatBtn = document.getElementById('liveChatBtn');

    // Character counter for message textarea
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            if (count > 1000) {
                charCount.style.color = '#ef4444';
            } else if (count > 800) {
                charCount.style.color = '#f59e0b';
            } else {
                charCount.style.color = 'rgba(255, 255, 255, 0.5)';
            }
        });
    }

    // File upload functionality
    let uploadedFilesList = [];

    if (fileUploadArea && fileInput) {
        // Click to upload
        fileUploadArea.addEventListener('click', function() {
            fileInput.click();
        });

        // Drag and drop
        fileUploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });

        fileUploadArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
        });

        fileUploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            
            const files = Array.from(e.dataTransfer.files);
            handleFiles(files);
        });

        fileInput.addEventListener('change', function() {
            const files = Array.from(this.files);
            handleFiles(files);
        });

        function handleFiles(files) {
            files.forEach(file => {
                if (file.size > 10 * 1024 * 1024) { // 10MB limit
                    showError('File size must be less than 10MB');
                    return;
                }

                const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'image/jpg'];
                if (!allowedTypes.includes(file.type)) {
                    showError('File type not supported');
                    return;
                }

                uploadedFilesList.push(file);
                displayUploadedFile(file);
            });
        }

        function displayUploadedFile(file) {
            const fileElement = document.createElement('div');
            fileElement.className = 'uploaded-file';
            fileElement.innerHTML = `
                <span>${file.name} (${formatFileSize(file.size)})</span>
                <button type="button" class="file-remove" onclick="removeFile('${file.name}')">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            `;
            uploadedFiles.appendChild(fileElement);
        }

        window.removeFile = function(fileName) {
            uploadedFilesList = uploadedFilesList.filter(file => file.name !== fileName);
            const fileElements = uploadedFiles.querySelectorAll('.uploaded-file');
            fileElements.forEach(element => {
                if (element.textContent.includes(fileName)) {
                    element.remove();
                }
            });
        };

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
    }

    // Form validation
    function validateForm() {
        let isValid = true;
        const requiredFields = ['firstName', 'lastName', 'email', 'inquiryType', 'message'];
        
        requiredFields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            const errorElement = document.getElementById(fieldName + 'Error');
            
            if (!field.value.trim()) {
                showFieldError(errorElement, 'This field is required');
                isValid = false;
            } else {
                hideFieldError(errorElement);
            }
        });

        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.value && !emailRegex.test(email.value)) {
            showFieldError(emailError, 'Please enter a valid email address');
            isValid = false;
        }

        // Privacy policy validation
        const privacyCheckbox = document.querySelector('input[name="privacy"]');
        const privacyError = document.getElementById('privacyError');
        
        if (!privacyCheckbox.checked) {
            showFieldError(privacyError, 'You must agree to the Privacy Policy and Terms of Service');
            isValid = false;
        } else {
            hideFieldError(privacyError);
        }

        return isValid;
    }

    function showFieldError(errorElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    function hideFieldError(errorElement) {
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    function showError(message) {
        // Create a temporary error notification
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 3000;
            font-weight: 600;
            box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                return;
            }

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Hide loading state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;

                // Show success modal
                successModal.classList.add('show');

                // Reset form
                contactForm.reset();
                uploadedFilesList = [];
                uploadedFiles.innerHTML = '';
                charCount.textContent = '0';

                // Log form data (replace with actual submission)
                const formData = new FormData(contactForm);
                console.log('Form submitted with data:', Object.fromEntries(formData));
                console.log('Uploaded files:', uploadedFilesList);
            }, 2000);
        });
    }

    // Success modal close
    if (successClose) {
        successClose.addEventListener('click', function() {
            successModal.classList.remove('show');
        });
    }

    // Close modal when clicking outside
    if (successModal) {
        successModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    }

    // Live chat functionality
    if (liveChatBtn) {
        liveChatBtn.addEventListener('click', function() {
            // Simulate opening live chat
            console.log('Opening live chat...');
            
            // Add visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Chat Started!
            `;
            this.style.background = '#10b981';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
            }, 3000);
        });
    }

    // Animate elements on scroll
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
    
    // Observe elements for animation
    document.querySelectorAll('.hero-content > *, .contact-form-container, .contact-card, .faq-quick-links').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Button click animations
    document.querySelectorAll('.btn, .form-submit, .chat-button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.disabled) return;
            
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

    // FAQ link tracking
    document.querySelectorAll('.faq-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const question = this.querySelector('.faq-question').textContent;
            console.log(`FAQ clicked: ${question}`);
            
            // Add visual feedback
            this.style.transform = 'translateX(8px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Social link tracking
    document.querySelectorAll('.social-icons .social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('aria-label');
            console.log(`Social link clicked: ${platform}`);
        });
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn, .form-submit, .chat-button {
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