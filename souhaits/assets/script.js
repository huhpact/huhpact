const wishlistItems = {
  tech: [
    {
      id: 1,
      title: "MacBook Pro 16\"",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      productUrl: "https://example.com/macbook",
      available: true
    },
    {
      id: 2,
      title: "Canon EOS R5",
      price: 3899.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      productUrl: "https://example.com/camera",
      available: true
    }
  ],
  gaming: [
    {
      id: 3,
      title: "Nintendo Switch 2",
      price: 400.00,
      image: "/assets/nintendo-switch-2.jpeg",
      productUrl: "https://www.nintendo.com/",
      available: false
    },
    {
      id: 4,
      title: "Gaming Monitor",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?w=500",
      productUrl: "https://example.com/monitor",
      available: true
    }
  ],
  lifestyle: [
    {
      id: 5,
      title: "Herman Miller Embody",
      price: 1695.00,
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
      productUrl: "https://example.com/chair",
      available: false
    },
    {
      id: 6,
      title: "Nike Air Max",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      productUrl: "https://example.com/nike",
      available: false
    }
  ]
};

function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

function createWishlistItem(item, index) {
  const element = document.createElement('div');
  element.className = 'wishlist-item';
  element.style.animationDelay = `${index * 150}ms`;
  
  element.innerHTML = `
    <div class="item-image-container">
      <img src="${item.image}" alt="${item.title}" class="item-image">
      <div class="price-tag">€ &nbsp;${formatPrice(item.price)}</div>
    </div>
    <h2 class="item-title">${item.title}</h2>
    <div class="item-status">
      <span class="status-indicator ${item.available ? 'status-available' : 'status-unavailable'}"></span>
      <span>${item.available ? 'Available' : 'Currently Unavailable'}</span>
    </div>
    <a href="${item.productUrl}" class="view-button" target="_blank">View Product</a>
  `;
  
  return element;
}

function calculateTotalPrice() {
  const total = Object.values(wishlistItems)
    .flat()
    .reduce((sum, item) => sum + item.price, 0);
  
  const totalElement = document.getElementById('total-price');
  const formattedTotal = formatPrice(total);

  const currentTotal = parseFloat(totalElement.textContent.replace(/,/g, ''));
  animateValue(totalElement, currentTotal, total, 1000);
}

function animateValue(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const animate = () => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      element.textContent = formatPrice(end);
    } else {
      element.textContent = formatPrice(current);
      requestAnimationFrame(animate);
    }
  };
  
  animate();
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

function renderWishlistSection(sectionId, items) {
  const container = document.getElementById(sectionId);
  items.forEach((item, index) => {
    container.appendChild(createWishlistItem(item, index));
  });
}

function initializeParallax() {
  const sectionObserver = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
  });
  
  document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.2 + (index * 0.1);
      const yPos = -(scrolled * speed);
      const scale = 1 + Math.sin(scrolled * 0.002 + index) * 0.2;
      element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${scrolled * 0.1}deg) scale(${scale})`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderWishlistSection('tech-items', wishlistItems.tech);
  renderWishlistSection('gaming-items', wishlistItems.gaming);
  renderWishlistSection('lifestyle-items', wishlistItems.lifestyle);
  calculateTotalPrice();
  initializeParallax();
});
