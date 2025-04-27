// Initialize the map with destinations
function initializeMap() {
  // Create the map
  const map = L.map('destinations-map').setView([20, 0], 2);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  
  // Custom icon for markers
  const customIcon = L.divIcon({
    className: 'custom-map-marker',
    html: '<i class="fas fa-map-marker-alt map-marker"></i>',
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });
  
  // Add style for custom marker
  const style = document.createElement('style');
  style.textContent = `
    .custom-map-marker {
      color: var(--color-primary-600);
      font-size: 30px;
      width: 30px !important;
      height: 42px !important;
      margin-left: -15px !important;
      margin-top: -42px !important;
      text-align: center;
      pointer-events: none;
    }
    
    .map-marker {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
      transition: transform 0.3s ease, filter 0.3s ease;
    }
    
    .leaflet-marker-icon {
      transition: transform 0.3s ease;
    }
    
    .leaflet-marker-icon:hover {
      transform: scale(1.2) translateY(-5px);
      z-index: 1000 !important;
    }
    
    .leaflet-popup-content-wrapper {
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      overflow: hidden;
      padding: 0;
    }
    
    .leaflet-popup-content {
      margin: 0;
      width: 250px !important;
    }
    
    .map-popup {
      width: 100%;
    }
    
    .map-popup-img {
      width: 100%;
      height: 120px;
      overflow: hidden;
    }
    
    .map-popup-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .map-popup-content {
      padding: 12px;
    }
    
    .map-popup-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 4px;
      color: var(--color-primary-600);
    }
    
    .map-popup-country {
      font-size: 14px;
      color: var(--color-muted);
      margin-bottom: 8px;
    }
    
    .map-popup-description {
      font-size: 12px;
      line-height: 1.4;
      margin-bottom: 8px;
      color: var(--color-foreground);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .map-popup-link {
      display: block;
      text-align: right;
      font-size: 12px;
      font-weight: 600;
      color: var(--color-primary-600);
      text-decoration: none;
    }
    
    .map-popup-link:hover {
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);
  
  // Create markers for each destination
  const markers = [];
  destinations.forEach(destination => {
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'map-popup';
    popupContent.innerHTML = `
      <div class="map-popup-img">
        <img src="${destination.image}" alt="${destination.name}">
      </div>
      <div class="map-popup-content">
        <h3 class="map-popup-title">${translateText(destination.name)}</h3>
        <div class="map-popup-country">${translateText(destination.country)}</div>
        <p class="map-popup-description">${translateText(destination.description)}</p>
        <a href="#" class="map-popup-link" data-id="${destination.id}">${translateText('View Details')}</a>
      </div>
    `;
    
    // Create marker and add to map
    const marker = L.marker(destination.coordinates, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent);
    
    // Store marker for later reference
    markers.push({ id: destination.id, marker });
    
    // Add event listener to popup link
    marker.getPopup().on('add', () => {
      const link = document.querySelector(`.map-popup-link[data-id="${destination.id}"]`);
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          openDestinationModal(destination);
        });
      }
    });
  });
  
  // Function to focus on a specific destination
  window.focusMapOnDestination = function(id) {
    const marker = markers.find(m => m.id === id);
    if (marker) {
      map.setView(marker.marker.getLatLng(), 7, {
        animate: true,
        duration: 1
      });
      setTimeout(() => {
        marker.marker.openPopup();
      }, 1000);
    }
  };
  
  // Handle theme changes for map
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-theme') {
        map.invalidateSize();
      }
    });
  });
  
  observer.observe(document.documentElement, { attributes: true });
  
  // Ensure map renders correctly when tab becomes visible
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      map.invalidateSize();
    }
  });
  
  // Ensure map renders correctly when it becomes visible in viewport
  const mapContainer = document.getElementById('destinations-map');
  if (mapContainer && 'IntersectionObserver' in window) {
    const mapObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            map.invalidateSize();
          }, 100);
        }
      });
    });
    
    mapObserver.observe(mapContainer);
  }
  
  return map;
}

// Initialize map when the DOM is loaded
function initializeMapSection() {
  // Wait for destinations data to be available
  if (typeof destinations !== 'undefined') {
    initializeMap();
  } else {
    // Retry after a short delay
    setTimeout(initializeMapSection, 100);
  }
}

// Make functions globally available
window.initializeMapSection = initializeMapSection;