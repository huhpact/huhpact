document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="business-card">
      <!-- Badge -->
      
      <!-- Profile Image Section -->
      <div class="image-section">
        <img src="/visitenkarte/main.jpeg" alt="Profilbild" class="profile-image" />
        <!-- Logo Overlay in Wave Area -->
        <div class="logo-overlay">
          <img src="/images/logo.png" alt="Logo" class="logo" />
        </div>
        <!-- Wave Separator -->
        <div class="wave-separator">
          <svg viewBox="0 0 400 80" preserveAspectRatio="none">
            <path d="M0,80 C100,20 200,60 400,40 L400,80 Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      <!-- Content Section -->
      <div class="content-section">
        <!-- Main Info with Logo -->
        <div class="main-info">
          <div class="info-left">
            <h1 class="name">Paul Chappuzeau</h1>
            <h2 class="position">Design & Webdevelopment</h2>
            <h3 class="company">huh(pact)</h3>
          </div>
          <div class="vertical-line"></div>
        </div>
        
        <!-- Contact Info -->
        <div class="contact-info">
          <div class="contact-item">
            <div class="icon-bubble">
              <i class="fas fa-envelope"></i>
            </div>
            <a href="mailto:paulchappuzeau@icloud.com" class="contact-link">
             paulchappuzeau@icloud.com
            </a>
          </div>
          
          <div class="contact-item">
            <div class="icon-bubble">
              <i class="fas fa-phone"></i>
            </div>
           <a href="tel:015152850484" class="contact-link">
             0151 52850484
            </a>
          </div>
          
          <div class="contact-item">
            <div class="icon-bubble">
              <i class="fas fa-globe"></i>
            </div>
            <a href="https://huhpact.dev" target="_blank" class="contact-link">
              huhpact.dev
            </a>
          </div>
          
          <!-- Quote -->
          <div class="quote">
            <p>"Ihre Vision - perfekt ins Netz gebracht"</p>
          </div>
          
          <div class="contact-item">
            <div class="icon-bubble">
              <i class="fab fa-linkedin"></i>
            </div>
            <a href="https://www.linkedin.com/in/paulchappuzeau" target="_blank" class="contact-link">
              LinkedIn Profil
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Add Contact Button -->
    <button class="add-contact-btn" onclick="addContact()">
      <i class="fas fa-user-plus"></i>
      Kontakt hinzufügen
    </button>
  </div>
`

// Add to contacts functionality
window.addContact = function() {
  // Create vCard format
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Paul Chappuzeau
ORG:huh(pact)
TEL;TYPE=CELL:+49 151 52850484
TITLE:CEO & Founder
EMAIL:paulchappuzeau@icloud.com
TEL:+49 151 52850484
URL:https://huhpact.dev
END:VCARD`;

  // Create blob and download
  const blob = new Blob([vCard], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Max_Mustermann.vcf';
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
  
  // Show success message
  const button = document.querySelector('.add-contact-btn');
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-check"></i> Kontakt hinzugefügt!';
  button.style.background = '#10b981';
  
  setTimeout(() => {
    button.innerHTML = originalText;
    button.style.background = '#8b5cf6';
  }, 2000);
}