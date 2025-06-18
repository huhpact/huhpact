const wishlistItems = [
  {
    id: 1,
    title: "Tom Ford Tobacco Vanille",
    price: "273,00 EUR",
    description: "Ein luxuriöser Duft von Tom Ford, der die Sinne mit Noten von Tabak und Vanille verführt.",
    image: "/souhaits/assets/tf-tv.avif",
    tags: ["Parfum", "Tom Ford", "Vanille"],
    priority: "gering",
    productUrl: "https://www.douglas.de/de/p/3000073072?variant=997498",
    dateAdded: "17.06.2025"
  },
  {
    id: 2,
    title: "Nintendo Switch 2",
    price: "450,00 EUR",
    description: "Die nächste Generation der Nintendo Switch mit verbesserten Grafiken, Leistung und Spielen.",
    image: "/souhaits/assets/nintendo-switch-2.jpeg",
    tags: ["Konsole", "Gaming", "Nintendo"],
    priority: "hoch",
    productUrl: "https://www.nintendo.com/successor/de-de/index.html",
    dateAdded: "03.03.2025"
  },
  {
    id: 3,
    title: "Baumwollpullover Ralph Lauren (Cream)",
    price: "229,00 EUR",
    description: "Ein klassischer Baumwollpullover von Ralph Lauren in Creme. Perfekt für den Alltag.",
    image: "/souhaits/assets/cream-rl.avif",
    tags: ["Ralph Lauren", "Pullover", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.ralphlauren.de/de/baumwollpullover-mit-reissverschluss-607264.html?dwvar_607264_colorname=Andover%20Cream",
    dateAdded: "03.03.2025"
  },
  {
    id: 4,
    title: "Baumwollpullover Ralph Lauren (Navy)",
    price: "229,00 EUR",
    description: "Ein klassischer Baumwollpullover von Ralph Lauren in Navy. Perfekt für den Alltag.",
    image: "/souhaits/assets/baumwollpullover-rl-navy.avif",
    tags: ["Ralph Lauren", "Pullover", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.ralphlauren.de/de/baumwollpullover-mit-reissverschluss-607264.html?dwvar_607264_mens_polo_purplelabel_rrl_apparel_primarysize=L&dwvar_607264_colorname=Hunter%20Navy",
    dateAdded: "03.03.2025"
  },
  {
    id: 5,
    title: "Baumwollpullover Ralph Lauren (Hunter Navy)",
    price: "199,00 EUR",
    description: "Ein klassischer Baumwollpullover von Ralph Lauren in Hunter Navy. Perfekt für den Alltag.",
    image: "/souhaits/assets/v2-rl.avif",
    tags: ["Ralph Lauren", "Pullover", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.ralphlauren.de/de/baumwollpullover-mit-zopfmuster-515061.html?dwvar_515061_colorname=Hunter%20Navy",
    dateAdded: "03.03.2025"
  },
  {
    id: 6,
    title: "Poloshirt Ralph Lauren (Schwarz)",
    price: "125,00 EUR",
    description: "Ein klassisches Poloshirt von Ralph Lauren in Schwarz. Perfekt für den Alltag.",
    image: "/souhaits/assets/polo-rl.avif",
    tags: ["Ralph Lauren", "Poloshirt", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.ralphlauren.de/de/das-legendare-pique-poloshirt-401481.html",
    dateAdded: "03.03.2025"
  },
  {
    id: 7,
    title: "Bundfaltenhose Ralph Lauren (Weiß)",
    price: "249,00 EUR",
    description: "Eine elegante Bundfaltenhose von Ralph Lauren in Weiß. Perfekt für den Alltag.",
    image: "/souhaits/assets/hose-rl.avif",
    tags: ["Ralph Lauren", "Hose", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.ralphlauren.de/de/slim-tapered-fit-twill-bundfaltenhose-656793.html?dwvar656793_colorname=Deckwash%20White#prefn1=CategoryCode&prefv1=Hosen&allRefinementsRemoved=true&start=1",
    dateAdded: "03.03.2025"
  },
  {
    id: 8,
    title: "Dark Raw Stone Island",
    price: "295,00 EUR",
    description: "Ein leichter Pullover von Stone Island in Raw. Perfekt für den Alltag.",
    image: "/souhaits/assets/stone-island-pulli.avif",
    tags: ["Stone Island", "Pullover", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.stoneisland.com/de-de/collection/strickwaren/pullover-mit-rundhalsausschnitt-und-gerippten-details-5100042-raw-hand-organic-cotton-K1S155100042S00D3V0029.html",
    dateAdded: "03.03.2025"
  },
  {
    id: 9,
    title: "Light Raw Stone Island",
    price: "295,00 EUR",
    description: "Ein leichter Pullover von Stone Island in Raw. Perfekt für den Alltag.",
    image: "/souhaits/assets/stone-island-pulli2.avif",
    tags: ["Stone Island", "Pullover", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.stoneisland.com/de-de/collection/strickwaren/pullover-mit-rundhalsausschnitt-und-gerippten-details-5100042-raw-hand-organic-cotton-K1S155100042S00D3V0093.html",
    dateAdded: "03.03.2025"
  },
  {
    id: 10,
    title: "Leichte Weste",
    price: "29,95 EUR",
    description: "Eine leichte Weste von Zara in Grau/Beige. Perfekt für den Alltag.",
    image: "/souhaits/assets/weste.jpg",
    tags: ["Zara", "Weste", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.zara.com/de/de/leichte-steppweste-p04302536.html?v1=410570119&v2=2443335",
    dateAdded: "03.03.2025"
  },
  {
    id: 11,
    title: "Half-Zip Massimo Dutti",
    price: "59,95 EUR",
    description: "Ein Half-Zip Pullover von Massimo Dutti in Schwarz. Perfekt für den Alltag.",
    image: "/souhaits/assets/half-zip.jpg",
    tags: ["Massimo Dutti", "Half-Zip", "Kleidung"],
    priority: "mittel",
    productUrl: "https://www.zara.com/de/de/leichte-steppweste-p04302536.html?v1=410570119&v2=2443335",
    dateAdded: "03.03.2025"
  },
  {
   id: 12,
  title: "Banente",
  price: "18,99 EUR",
  description: "Geisteskrank coole Bananen-Ente",
  image: "https://i.otto.de/i/otto/69e6233b-d114-4fd1-af50-6d19545fbc61?h=1040&w=1102&qlt=40&unsharp=0,1,0.6,7&sm=clamp&upscale=true&fmt=auto",
  tags: ["Otto", "Ente", "Banane"],
  priority: "mittel",
  productUrl: "https://www.otto.de/p/nuodwell-babykissen-banana-duck-quirky-pluesch-kissen-kissen-spielzeug-S0Y7U00C/#ech=29067528&variationId=S0Y7U00CIYGW",
  dateAdded: "07.04.2025"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderApp();
  setupEventListeners();
  createParticles();
  animateItems();
  checkScrollPosition();
}

function renderApp() {
  const appContainer = document.querySelector('#app');
  
  appContainer.innerHTML = `
    <div class="particles"></div>
    
    <header class="header">
      <h1>Wunschliste</h1>
      <p>Eine Sammlung meiner Wünsche, um up-to-date zu bleiben. Alles kann angeklickt werden, für mehr Informationen.</p>
    </header>
    
    <div class="search-container glass-card">
      <i class="fas fa-search search-icon"></i>
      <input type="text" class="search-input" placeholder="Wunschliste durchsuchen...">
    </div>
    
    <div class="filter-section">
      <button class="filter-button active" data-filter="all">Alle Wünsche</button>
      <button class="filter-button" data-filter="hoch">Hohe Priorität</button>
      <button class="filter-button" data-filter="mittel">Mittlere Priorität</button>
      <button class="filter-button" data-filter="gering">Geringe Priorität</button>
    </div>
    
    <div class="wishlist-container">
      ${renderWishlistItems(wishlistItems)}
    </div>
    
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <img src="" alt="" class="modal-image">
          <button class="modal-close"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
          <h2 class="modal-title"></h2>
          <div class="modal-price"></div>
          <p class="modal-description"></p>
          <div class="modal-tags"></div>
          <div class="modal-footer">
            <a href="#" class="buy-button" target="_blank">
              <i class="fas fa-shopping-cart"></i>
              Produkt anzeigen
            </a>
            <div class="added-date">Hinzugefügt: <span></span></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="theme-toggle">
      <i class="fas fa-moon"></i>
    </div>
    
    <div class="scroll-top">
      <i class="fas fa-arrow-up"></i>
    </div>
  `;
}

function renderWishlistItems(items) {
  if (items.length === 0) {
    return `
      <div class="empty-state">
        <i class="fas fa-heart-broken"></i>
        <h3>Keine Wünsche gefunden.</h3>
        <p>Versuch nen anderes Keyword.</p>
      </div>
    `;
  }
  
  return items.map((item, index) => `
    <div class="wishlist-item" data-id="${item.id}" style="animation-delay: ${index * 0.1}s">
      <div class="priority ${item.priority}">${item.priority}</div>
      <img src="${item.image}" alt="${item.title}" class="item-image">
      <div class="item-content">
        <h3 class="item-title">${item.title}</h3>
        <div class="item-price">${item.price}</div>
        <p class="item-description">${item.description}</p>
        <div class="item-footer">
          <div class="item-tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function setupEventListeners() {
  const wishlistItems = document.querySelectorAll('.wishlist-item');
  wishlistItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = parseInt(item.dataset.id);
      openItemModal(itemId);
    });
  });
  
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      filterItems(filter);
    });
  });

  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    searchItems(searchTerm);
  });

  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);

  const scrollTopButton = document.querySelector('.scroll-top');
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', checkScrollPosition);

  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.addEventListener('mouseenter', (e) => {
      e.target.style.transform = 'translateY(-5px)';
    });
    tag.addEventListener('mouseleave', (e) => {
      e.target.style.transform = 'translateY(0)';
    });
  });
}

function openItemModal(itemId) {
  const item = wishlistItems.find(item => item.id === itemId);
  if (!item) return;
  
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');

  modal.querySelector('.modal-image').src = item.image;
  modal.querySelector('.modal-image').alt = item.title;
  modal.querySelector('.modal-title').textContent = item.title;
  modal.querySelector('.modal-price').textContent = item.price;
  modal.querySelector('.modal-description').textContent = item.description;

  modal.querySelector('.modal-tags').innerHTML = item.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');

  modal.querySelector('.buy-button').href = item.productUrl;

  modal.querySelector('.added-date span').textContent = item.dateAdded;

  modalOverlay.classList.add('active');

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.classList.remove('active');
  
  document.body.style.overflow = '';
}

function filterItems(filter) {
  const container = document.querySelector('.wishlist-container');
  const searchTerm = document.querySelector('.search-input').value.toLowerCase().trim();
  
  let filteredItems;
  
  if (filter === 'all') {
    filteredItems = wishlistItems;
  } else {
    filteredItems = wishlistItems.filter(item => item.priority === filter);
  }

  if (searchTerm) {
    filteredItems = filteredItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm) || 
      item.description.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  container.innerHTML = renderWishlistItems(filteredItems);

  setupEventListeners();
  animateItems();
}

function searchItems(searchTerm) {
  const activeFilter = document.querySelector('.filter-button.active').dataset.filter;
  
  let filteredItems;
  
  if (activeFilter === 'all') {
    filteredItems = wishlistItems;
  } else {
    filteredItems = wishlistItems.filter(item => item.priority === activeFilter);
  }
  
  if (searchTerm) {
    filteredItems = filteredItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm) || 
      item.description.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  const container = document.querySelector('.wishlist-container');
  container.innerHTML = renderWishlistItems(filteredItems);

  setupEventListeners();
  animateItems();
}

function animateItems() {
  const items = document.querySelectorAll('.wishlist-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

function toggleTheme() {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle i');
  
  if (themeToggle.classList.contains('fa-moon')) {
    root.style.setProperty('--bg-dark', '#f5f5f5');
    root.style.setProperty('--bg-card', '#ffffff');
    root.style.setProperty('--text-primary', '#333333');
    root.style.setProperty('--text-secondary', '#666666');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
  } else {
    root.style.setProperty('--bg-dark', '#0f0a1e');
    root.style.setProperty('--bg-card', '#1a1625');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#b3b3b3');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
  }
}

function checkScrollPosition() {
  const scrollTopButton = document.querySelector('.scroll-top');
  
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('visible');
  } else {
    scrollTopButton.classList.remove('visible');
  }
}

function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 10 + 5;
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    const delay = Math.random() * 10;

    const opacity = Math.random() * 0.3 + 0.1;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = opacity;

    const colors = [
      'var(--primary-light)',
      'var(--accent)',
      'var(--accent-secondary)',
      'var(--primary-dark)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = randomColor;
    
    particlesContainer.appendChild(particle);
  }
}
