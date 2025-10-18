// ===== WISHLIST ITEMS - EDIT THIS ARRAY TO MODIFY THE WISHLIST =====
const wishlistItems = [
    {
        id: 1,
        titre: "Tom Ford Tobacco Vanille",
        prix: 273,
        lien: "https://www.douglas.de/de/p/3000073072?variant=997498",
        image: "/souhaits/assets/tf.avif",
        description: "Un parfum luxueux et chaleureux avec des notes de tabac, vanille et épices.",
        categorie: "Beauté & Soins",
        priorite: "Moyenne",
        disponibilite: "Disponible"
    },
    {
        id: 2,
        titre: "Ferragamo Porte-cartes Monogram",
        prix: 195,
        lien: "https://www.ferragamo.com/shop/eu/de/men/man-wallets-small-leather-goods/card-case-key-holders/monogram-780321--24",
        image: "/souhaits/assets/ferragamo.webp",
        description: "Porte-cartes en cuir de veau avec le motif Monogram emblématique de Ferragamo.",
        categorie: "Mode",
        priorite: "Haute",
        disponibilite: "Disponible"
    },
    {
        id: 3,
        titre: "Coque couleur Argent pour iPhone 17 Pro Max",
        prix: 165,
        lien: "https://www.rimowa.com/de/de/accessories/lifestyle/iphone-cases/huelle-silber-fuer-iphone-17-pro-max/95190005.html#start=1",
        image: "/souhaits/assets/rimowa.avif",
        description: "Coque de protection élégante en aluminium pour iPhone 17 Pro Max, couleur Argent.",
        categorie: "Électronique",
        priorite: "Haute",
        disponibilite: "Rupture de stock"
    },
    {
        id: 4,
        titre: "USA Sweater Ralph Lauren",
        prix: 495,
        lien: "https://www.ralphlauren.de/de/der-klassische-flaggenpullover-3616854058028.html",
        image: "/souhaits/assets/rl-us.webp",
        description: "Pull en laine mérinos avec le drapeau américain brodé, style classique Ralph Lauren.",
        categorie: "Mode",
        priorite: "Moyenne",
        disponibilite: "Disponible"
    },
    {
        id: 5,
        titre: "D'argent",
        prix: 5000,
        lien: "https://www.berliner-sparkasse.de/de/home.html",
        image: "/souhaits/assets/cash.jpg",
        description: "Un montant en espèces pour diverses utilisations personnelles ou investissements.",
        categorie: "Sport & Loisirs",
        priorite: "Haute",
        disponibilite: "Disponible"
    },
    {
        id: 6,
        titre: "Tricot torsad - 1/4 zip Polo Ralph Lauren",
        prix: 200,
        lien: "https://www.amazon.de/Polo-Ralph-Lauren-Zopfmuster-4-Rei%C3%9Fverschluss/dp/B01MUGD92J",
        image: "/souhaits/assets/rl-zip.jpg",
        description: "Pull en laine avec col zippé, parfait pour un style décontracté et élégant.",
        categorie: "Mode",
        priorite: "Moyenne",
        disponibilite: "Rupture de stock"
    }
];

// ===== APPLICATION STATE =====
let filteredItems = [...wishlistItems];
let currentFilter = '';
let currentSort = 'default';

// ===== DOM ELEMENTS =====
const wishlistGrid = document.getElementById('wishlistGrid');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const totalItems = document.getElementById('totalItems');
const totalValue = document.getElementById('totalValue');
const emptyState = document.getElementById('emptyState');
const itemModal = document.getElementById('itemModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalClose = document.getElementById('modalClose');

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

function getPriorityClass(priority) {
    switch(priority) {
        case 'Haute': return 'priority-haute';
        case 'Moyenne': return 'priority-moyenne';
        case 'Basse': return 'priority-basse';
        default: return 'priority-moyenne';
    }
}

function getAvailabilityClass(availability) {
    switch(availability) {
        case 'Disponible': return 'status-disponible';
        case 'Rupture de stock': return 'status-rupture';
        case 'Précommande': return 'status-precommande';
        default: return 'status-disponible';
    }
}

function getPriorityIcon(priority) {
    switch(priority) {
        case 'Haute': return 'fas fa-exclamation-circle';
        case 'Moyenne': return 'fas fa-minus-circle';
        case 'Basse': return 'fas fa-circle';
        default: return 'fas fa-circle';
    }
}

// ===== RENDER FUNCTIONS =====
function createItemCard(item) {
    return `
        <div class="wishlist-card glass-card rounded-2xl overflow-hidden cursor-pointer" data-id="${item.id}">
            <div class="relative overflow-hidden h-48">
                <img src="${item.image}" 
                     alt="${item.titre}" 
                     class="card-image w-full h-full object-cover"
                     onerror="this.src='https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=500'">
                
                <div class="absolute top-3 right-3 flex gap-2">
                    <span class="px-2 py-1 rounded-full text-xs font-medium text-white ${getPriorityClass(item.priorite)}">
                        <i class="${getPriorityIcon(item.priorite)} mr-1"></i>
                        ${item.priorite}
                    </span>
                </div>

                <div class="absolute bottom-3 left-3">
                    <span class="px-2 py-1 rounded-full text-xs font-medium text-white ${getAvailabilityClass(item.disponibilite)}">
                        ${item.disponibilite}
                    </span>
                </div>
            </div>

            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-white font-semibold text-lg leading-tight pr-2">${item.titre}</h3>
                </div>

                <p class="text-white/80 text-sm mb-4 line-clamp-2">${item.description}</p>

                <div class="flex justify-between items-center mb-4">
                    <span class="price-highlight text-2xl font-bold">${formatPrice(item.prix)}</span>
                    <span class="text-white/60 text-xs px-2 py-1 bg-white/10 rounded-full">
                        ${item.categorie}
                    </span>
                </div>

                <button class="glass-button w-full py-3 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300">
                    <i class="fas fa-eye mr-2"></i>
                    Voir les détails
                </button>
            </div>
        </div>
    `;
}

function renderItems() {
    wishlistGrid.innerHTML = '';
    
    if (filteredItems.length === 0) {
        emptyState.classList.remove('hidden');
        wishlistGrid.classList.add('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    wishlistGrid.classList.remove('hidden');
    
    // Create loading placeholders first
    for (let i = 0; i < filteredItems.length; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'loading-shimmer glass-card rounded-2xl h-96';
        wishlistGrid.appendChild(placeholder);
    }
    
    // Animate items in with stagger
    setTimeout(() => {
        wishlistGrid.innerHTML = filteredItems.map(item => createItemCard(item)).join('');
        
        // GSAP entrance animation
        gsap.fromTo('.wishlist-card', {
            opacity: 0,
            y: 50,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
        
        // Add click listeners
        document.querySelectorAll('.wishlist-card').forEach(card => {
            card.addEventListener('click', () => {
                const itemId = parseInt(card.dataset.id);
                showItemModal(itemId);
            });
        });
    }, 300);
}

function updateStats() {
    const count = filteredItems.length;
    const total = filteredItems.reduce((sum, item) => sum + item.prix, 0);
    
    totalItems.textContent = `${count} article${count > 1 ? 's' : ''}`;
    totalValue.textContent = formatPrice(total);
}

function showItemModal(itemId) {
    const item = wishlistItems.find(i => i.id === itemId);
    if (!item) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalLink = document.getElementById('modalLink');
    
    modalTitle.textContent = item.titre;
    modalLink.href = item.lien;
    
    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
                <img src="${item.image}" 
                     alt="${item.titre}" 
                     class="w-full h-64 object-cover rounded-lg">
                
                <div class="flex gap-2 flex-wrap">
                    <span class="px-3 py-1 rounded-full text-sm font-medium text-white ${getPriorityClass(item.priorite)}">
                        <i class="${getPriorityIcon(item.priorite)} mr-1"></i>
                        ${item.priorite}
                    </span>
                    <span class="px-3 py-1 rounded-full text-sm font-medium text-white ${getAvailabilityClass(item.disponibilite)}">
                        ${item.disponibilite}
                    </span>
                </div>
            </div>
            
            <div class="space-y-4">
                <div>
                    <h4 class="text-white/80 text-sm font-medium mb-2">Prix</h4>
                    <p class="price-highlight text-3xl font-bold">${formatPrice(item.prix)}</p>
                </div>
                
                <div>
                    <h4 class="text-white/80 text-sm font-medium mb-2">Catégorie</h4>
                    <p class="text-white">${item.categorie}</p>
                </div>
                
                <div>
                    <h4 class="text-white/80 text-sm font-medium mb-2">Description</h4>
                    <p class="text-white/90 leading-relaxed">${item.description}</p>
                </div>
            </div>
        </div>
    `;
    
    // Show modal with animation
    itemModal.classList.remove('hidden');
    itemModal.classList.add('flex');
    
    gsap.fromTo(itemModal.querySelector('.glass-card'), {
        opacity: 0,
        scale: 0.9,
        y: 50
    }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)"
    });
}

function closeItemModal() {
    gsap.to(itemModal.querySelector('.glass-card'), {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
            itemModal.classList.add('hidden');
            itemModal.classList.remove('flex');
        }
    });
}

// ===== FILTERING & SORTING =====
function filterItems() {
    filteredItems = wishlistItems.filter(item => {
        if (currentFilter && item.categorie !== currentFilter) {
            return false;
        }
        return true;
    });
    
    sortItems();
    renderItems();
    updateStats();
}

function sortItems() {
    switch(currentSort) {
        case 'priceAsc':
            filteredItems.sort((a, b) => a.prix - b.prix);
            break;
        case 'priceDesc':
            filteredItems.sort((a, b) => b.prix - a.prix);
            break;
        case 'priority':
            const priorityOrder = { 'Haute': 3, 'Moyenne': 2, 'Basse': 1 };
            filteredItems.sort((a, b) => priorityOrder[b.priorite] - priorityOrder[a.priorite]);
            break;
        case 'name':
            filteredItems.sort((a, b) => a.titre.localeCompare(b.titre, 'fr'));
            break;
        default:
            // Keep original order
            break;
    }
}

// ===== EVENT LISTENERS =====
categoryFilter.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    filterItems();
});

sortFilter.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterItems();
});

// Modal event listeners
closeModal.addEventListener('click', closeItemModal);
modalClose.addEventListener('click', closeItemModal);
modalOverlay.addEventListener('click', closeItemModal);

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !itemModal.classList.contains('hidden')) {
        closeItemModal();
    }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initial render
    filterItems();
    
    // Animate header
    gsap.fromTo('#mainTitle', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)"
    });
    
    gsap.fromTo('#subtitle', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)"
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for search (if added later)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images (if needed)
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

console.log('🎉 Ma Liste de Souhaits initialisée avec', wishlistItems.length, 'articles');