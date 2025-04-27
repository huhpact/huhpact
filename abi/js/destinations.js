// Destination data with detailed information
const destinations = [
  {
    id: 1,
    name: "Montréal",
    region: "americas",
    country: "Canada",
    image: "/abi/images/montreal.jpg",
    description: "Ville dynamique au carrefour de la culture francophone et anglophone, connue pour son architecture historique et sa gastronomie.",
    language: "Anglais, Français",
    currency: "Dollar canadien (CAD)",
    climate: "Continental",
    bestTimeToVisit: "Mai-Oct",
    budget: "Moyen",
    duration: "10 jours",
    details: {
      highlights: ["Vieux-Montréal", "Mont Royal", "Basilique Notre-Dame", "Parc Jean-Drapeau"],
      food: ["Poutine", "Bagels", "Tarte au sucre", "Cuisine internationale"],
      activities: ["Festival de Jazz", "Visite des musées", "Balade à vélo", "Marché Jean-Talon"],
      accommodation: ["Hôtels de luxe", "Appartements", "Hôtels"]
    },
    gallery: [
      "https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx",
      "https://static.wixstatic.com/media/a3c131_52dca347af7f430d81acbdb3b027b9d5~mv2.jpg/v1/fill/w_624,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a3c131_52dca347af7f430d81acbdb3b027b9d5~mv2.jpg",
      "https://content.carnetsvanille.com/wp-content/uploads/2021/07/plage-montreal.jpg"
    ],
    coordinates: [45.5017, -73.5673]
  },
  {
    id: 2,
    name: "Los Angeles",
    region: "americas",
    country: "USA",
    image: "/abi/images/LA.webp",
    description: "Ville emblématique de la culture cinématographique, connue pour ses plages, ses collines et son ambiance décontractée.",
    language: "Anglais",
    currency: "Dollar ($)",
    climate: "Méditerranéen",
    bestTimeToVisit: "Avr-Oct",
    budget: "Moyen-Élevé",
    duration: "10 jours",
    details: {
      highlights: ["Hollywood", "Santa Monica Pier", "Griffith Observatory", "Venice Beach"],
      food: ["Tacos", "Burgers", "Sushi", "Cuisine fusion"],
      activities: ["Visite des studios de cinéma", "Randonnée à Runyon Canyon", "Shopping à Rodeo Drive"],
      accommodation: ["Hôtels de luxe", "Appartements", "Airbnb"]
    },
    gallery: [
      "https://res.cloudinary.com/dtljonz0f/image/upload/f_auto/q_auto/v1/gc-v1/los-angeles/la-shutterstock_765382675.jpg",
      "https://cdn.hometogo.net/assets/media/pics/1920_600/611bd8dc03098.jpg",
      "https://digital.ihg.com/is/image/ihg/intercontinental-los-angeles-10316691062-2x1"
    ],
    coordinates: [34.0522, -118.2437]
  },
  {
    id: 3,
    name: "Shenzhen",
    region: "asia",
    country: "China",
    image: "/abi/images/shenzhen.jpg",
    description: "Ville moderne et dynamique, connue pour son innovation technologique, ses gratte-ciels et sa vie nocturne animée",
    language: "Chinois (Mandarin)",
    currency: "Yuan (CNY)",
    climate: "Subtropical",
    bestTimeToVisit: "Oct-Mai",
    budget: "Moyen-Élevé",
    duration: "10 jours",
    details: {
      highlights: ["Shenzhen Bay", "Window of the World", "Dafen Oil Painting Village", "OCT Loft"],
      food: ["Dim Sum", "Canard laqué", "Nouilles", "Fruits de mer"],
      activities: ["Visite de parcs d'attractions", "Shopping à Luohu", "Randonnée dans les montagnes"],
      accommodation: ["Hôtels de luxe", "Appartements", "Hôtels"]
    },
    gallery: [
      "https://www.reuters.com/resizer/v2/U2XPGYJB4FLDFLGCQ2GGRAGBYU.jpg?auth=2dcbc80463658ffd738c0ee2a75d6ac2ec3ac3ba7c2bccbfc54ce86de42045bb&width=4500&quality=80",
      "https://www.cielchine.com/wp-content/uploads/2022/07/Shenzhen-Window-of-the-World.jpg",
      "https://www.agoda.com/wp-content/uploads/2024/02/Shenzhen-Futian-night-view.jpg"
    ],
    coordinates: [22.5431, 114.0579]
  },
  {
    id: 4,
    name: "Osaka",
    region: "asia",
    country: "Japan",
    image: "/abi/images/osaka.jpg",
    description: "Ville dynamique connue pour sa cuisine de rue, ses gratte-ciels modernes et son ambiance animée.",
    language: "Japonais",
    currency: "Yen (¥)",
    climate: "Tempéré",
    bestTimeToVisit: "Mar-Mai, Sep-Nov",
    budget: "Moyen-Élevé",
    duration: "10 jours",
    details: {
      highlights: ["Château d'Osaka", "Dotonbori", "Universal Studios Japan", "Kuromon Ichiba Market"],
      food: ["Okonomiyaki", "Takoyaki", "Sushi", "Ramen"],
      activities: ["Visite de temples", "Shopping à Shinsaibashi", "Excursion à Kyoto"],
      accommodation: ["Hôtels de luxe", "Appartements", "Hôtels"]
    },
    gallery: [
      "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/OSA/OSA.jpg",
      "https://www.sueddeutsche.de/projekte/artikel/reise/stadt-japan-osaka-expo-2025-e173503/a7a76afc2aacbeb16f98a5dc994b1b207a071af4a679ef86ed6d517fc4e97841_w2880_h1800_r170,0,8142,5089_q70.jpg",
      "https://www.isi-education.com/wp-content/uploads/2023/08/osaka-01.jpg"
    ],
    coordinates: [34.6937, 135.5023]
  },
  {
    id: 5,
    name: "Londres",
    region: "europe",
    country: "UK",
    image: "/abi/images/londres.jpg",
    description: "Capitale historique et culturelle, connue pour ses monuments emblématiques, ses musées et sa diversité.",
    language: "Anglais",
    currency: "Livre Sterling (£)",
    climate: "Océanique",
    bestTimeToVisit: "Avr-Juin, Sep-Oct",
    budget: "Moyen-Élevé",
    duration: "10 jours",
    details: {
      highlights: ["Big Ben", "Tower Bridge", "British Museum", "Buckingham Palace"],
      food: ["Fish and Chips", "Sunday Roast", "Afternoon Tea", "Curry"],
      activities: ["Visite de musées", "Shopping à Oxford Street", "Spectacles dans le West End"],
      accommodation: ["Hôtels de luxe", "Appartements", "Hôtels"]
    },
    gallery: [
      "https://www.sncf-connect.com/assets/styles/ratio_2_1_max_width_961/public/media/2021-08/buckingham-palace-londres.jpg?h=8d8fd87c&itok=mjAKyV4i",
      "https://img.nh-hotels.net/8yYbq/Y7nAz/original/United_Kingdom_London_Tower_Bridge-1404x936.jpg?output-quality=70&resize=*:*&background-color=white",
      "https://www.ou-et-quand.net/partir/images/illustration/londres_830.jpg"
    ],
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 6,
    name: "Kuala Lumpur",
    region: "asia",
    country: "Malaysia",
    image: "/abi/images/kualalumpur.jpg",
    description: "Capitale moderne avec ses tours emblématiques, ses marchés animés et sa culture multiculturelle.",
    language: "Malais, Anglais, Chinois",
    currency: "Ringgit (MYR)",
    climate: "Tropical",
    bestTimeToVisit: "Déc-Mai",
    budget: "Bas-Moyen",
    duration: "10 jours",
    details: {
      highlights: ["Petronas Towers", "Batu Caves", "Merdeka Square", "Bukit Bintang"],
      food: ["Nasi Lemak", "Satay", "Roti Canai", "Laksa"],
      activities: ["Visite de marchés", "Shopping à Bukit Bintang", "Excursion à Genting Highlands"],
      accommodation: ["Hôtels de luxe", "Appartements", "Hôtels"]
    },
    gallery: [
      "https://lp-cms-production.imgix.net/2022-11/Malaysia-iStock-1344146598-RFE_1.jpeg?w=1095&fit=crop&crop=faces%2Cedges&auto=format&q=75",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/473000/473015-Kuala-Lumpur.jpg",
      "https://travelaroundtheclock.de/wp-content/uploads/2024/11/IMG_0122.jpg"
    ],
    coordinates: [3.139, 101.6869]
  },
  {
    id: 7,
    name: "Dubaï",
    region: "asia",
    country: "UAE",
    image: "/abi/images/dubaï.jpg",
    description: "Ville futuriste connue pour ses gratte-ciels, ses centres commerciaux luxueux et ses plages.",
    language: "Arabe, Anglais",
    currency: "Dirham (AED)",
    climate: "Désertique",
    bestTimeToVisit: "Nov-Mar",
    budget: "Élevé",
    duration: "10 jours",
    details: {
      highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall", "Desert Safari"],
      food: ["Shawarma", "Hummus", "Kebabs", "Baklava"],
      activities: ["Visite de parcs d'attractions", "Shopping dans les souks", "Plongée sous-marine"],
      accommodation: ["Airbnbs", "Hôtels de luxe", "Hôtels"]
    },
    gallery: [
      "https://www.hilton.com/im/en/NoHotel/19861560/shutterstock-1291548640.jpg?impolicy=crop&cw=4000&ch=2666&gravity=NorthWest&xposition=0&yposition=1&rw=1280&rh=856",
      "https://smilingway.cz/wp-content/uploads/2023/01/Dubaj-46.jpg",
      "https://www.opodo.de/blog/wp-content/uploads/sites/11/2024/10/dubai_city-1.jpg.webp"
    ],
    coordinates: [25.276987, 55.296249]
  },
  {
    id: 8,
    name: "Hanoï",
    region: "asia",
    country: "Vietnam",
    image: "/abi/images/hanoï.jpg",
    description: "Capitale historique avec ses lacs, ses temples et sa cuisine de rue animée.",
    language: "Vietnamien",
    currency: "Dong (VND)",
    climate: "Tropical",
    bestTimeToVisit: "Oct-Avr",
    budget: "Bas",
    duration: "10 jours",
    details: {
      highlights: ["Vieux Quartier", "Lac Hoan Kiem", "Temple de la littérature", "Musée d'Ethnologie"],
      food: ["Pho", "Banh Mi", "Nem", "Café Egg"],
      activities: ["Visite de musées", "Balade à vélo", "Croisière dans la baie d'Halong"],
      accommodation: ["Hôtels front de mer", "Appartements", "Hôtels"]
    },
    gallery: [
      "https://pa-11264.kxcdn.com/wp-content/uploads/2022/12/AW9A1120.jpg",
      "https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,g_face/enchanting-web/2023/09/Tran-Quoc-pagoda-the-oldest-temple-in-Hanoi-Vietnam-1.jpg",
      "https://www.diamir.de/image/46436/in-der-halongbucht/1200"
    ],
    coordinates: [21.0285, 105.8542]
  },
  {
    id: 9,
    name: "Sydney",
    region: "oceania",
    country: "Australie",
    image: "/abi/images/sydney.jpg",
    description: "Ville côtière connue pour son opéra emblématique, ses plages et son ambiance décontractée.",
    language: "Anglais",
    currency: "Dollar australien (AUD)",
    climate: "Tempéré",
    bestTimeToVisit: "Sep-Nov, Mar-Mai",
    budget: "Moyen-Élevé",
    duration: "1O jours",
    details: {
      highlights: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Royal Botanic Garden"],
      food: ["Fish and Chips", "Meat Pie", "Lamington", "Barbecue"],
      activities: ["Visite de musées", "Randonnée à Blue Mountains", "Plongée à Manly Beach"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://images.ctfassets.net/rc3dlxapnu6k/5gsM3W9hvZm2sNri8QUniL/a71673119fbd413f9509b35390adae86/Australien__Sydney_Harbor_Bridge.jpg?w=1400&q=60&fm=webp",
      "https://www.msccruises.de/-/media/global-contents/destinations/ports/australia/sydney/cruise-to-sydney-australia.jpg?bc=transparent&as=1&mh=1395&mw=2460&hash=32BDC945B90E9B207C798159B20412B6",
      "https://content.r9cdn.net/rimg/dimg/53/fc/45315ebb-city-2258-15c4046e1fd.jpg?width=1366&height=768&xhint=1659&yhint=1703&crop=true"
    ],
    coordinates: [-33.8688, 151.2093]
  },
  {
    id: 10,
    name: "Séoul",
    region: "asia",
    country: "Corée du Sud",
    image: "/abi/images/seuol.jpg",
    description: "Capitale moderne avec ses gratte-ciels et ses traditions anciennes, connue pour sa culture dynamique et sa gastronomie.",
    language: "Coréen",
    currency: "Won sud-coréen (KRW)",
    climate: "Continental",
    bestTimeToVisit: "Avr-Jui, Sep-Nov",
    budget: "Moyen",
    duration: "1O jours",
    details: {
      highlights: ["Palais Gyeongbokgung", "Namsan Tower", "Bukchon Hanok Village"],
      food: ["Kimchi", "Bibimbap", "Bulgogi", "Tteokbokki"],
      activities: ["Visite de temples", "Shopping à Myeondong", "Randonnée à Bukhansan"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://img.lonelyplanet.fr/s3fs-public/styles/wide/public/2024-01/seoul.jpg.webp?itok=H5dK-x6x",
      "https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Han-River-at-night-in-Seoul-South-Korea-1244x700.jpg",
      "https://media.cntraveller.com/photos/6401da3fc650bff59aa53ef8/16:9/w_2560%2Cc_limit/GettyImages-902452584%2520(1).jpg"
    ],
    coordinates: [37.5665, 126.978]
  },
  {
    id: 11,
    name: "Phnom Penh",
    region: "asia",
    country: "Cambodge",
    image: "/abi/images/phnompenh.jpg",
    description: "Capitale historique avec ses temples anciens, ses marchés animés et sa culture riche.",
    language: "Khmer",
    currency: "Riel (KHR)",
    climate: "Tropical",
    bestTimeToVisit: "Nov-Mar",
    budget: "Bas",
    duration: "1O jours",
    details: {
      highlights: ["Palais Royal", "Wat Phnom", "Marché Central"],
      food: ["Amok", "Banh Chao", "Lok Lak", "Nems"],
      activities: ["Visite de musées", "Balade en bateau sur le Mékong", "Shopping au marché"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://www.pacifichotel.asia/wp-content/uploads/2023/11/11b4988c-106d-4717-86b2-4ed6c1e85363.jpg",
      "https://privateangkorwattour.com/wp-content/uploads/phnom-penh.jpg",
      "https://www.agoda.com/wp-content/uploads/2024/05/phnom-penh.jpg"
    ],
    coordinates: [11.5564, 104.9282]
  },
  {
    id: 12,
    name: "Singapour",
    region: "asia",
    country: "Singapour",
    image: "/abi/images/singapour.webp",
    description: "Ville moderne et cosmopolite, connue pour son architecture futuriste, ses jardins et sa gastronomie variée.",
    language: "Anglais, Malais, Mandarin, Tamoul",
    currency: "Dollar de Singapour (SGD)",
    climate: "Tropical",
    bestTimeToVisit: "Nov-Avr",
    budget: "Moyen-Élevé",
    duration: "1O jours",
    details: {
      highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
      food: ["Chili Crab", "Hainanese Chicken Rice", "Laksa", "Satay"],
      activities: ["Visite de parcs d'attractions", "Shopping à Orchard Road", "Balade à Clarke Quay"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://images.ctfassets.net/rc3dlxapnu6k/1zHG66Vf0JEBNa6EFQ0nIi/b5dcd73f89b4d5b97eb4f704ab5ca495/Singapur-Stadt.jpg?w=3840&q=50&fm=webp",
      "https://www.moimessouliers.org/wp-content/uploads/2014/10/La-vue-de-la-terrasse-dobservation-du-Marina-Bay-Sands-Singapour.jpg",
      "https://soffrirlemonde.com/wp-content/uploads/2023/03/profil-1200-1.jpg"
    ],
    coordinates: [1.3521, 103.8198]
  },
  {
    id: 13,
    name: "Le Caire",
    region: "africa",
    country: "Egypte",
    image: "/abi/images/caire.jpg",
    description: "Capitale historique avec ses pyramides emblématiques, ses musées et sa culture riche.",
    language: "Arabe",
    currency: "Livre égyptienne (EGP)",
    climate: "Désertique",
    bestTimeToVisit: "Oct-Mai",
    budget: "Bas-Moyen",
    duration: "1O jours",
    details: {
      highlights: ["Pyramides de Gizeh", "Musée égyptien", "Mosquée Mohammed Ali"],
      food: ["Koshari", "Falafel", "Baklava", "Foul Medames"],
      activities: ["Visite de musées", "Balade sur le Nil", "Shopping au souk"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://www.petitfute.com/medias/mag/22494/835/33941-que-faire-au-caire-en-egypte.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=1100&h=1100&s=1",
      "https://monsieurmadameexplore.com/wp-content/uploads/2022/06/cairo_panorama_citadel.jpg"
    ],
    coordinates: [30.0444, 31.2357]
  },
  {
    id: 14,
    name: "New York",
    region: "americas",
    country: "USA",
    image: "/abi/images/newyork.webp",
    description: "Ville emblématique connue pour ses gratte-ciels, sa culture diversifiée et son ambiance dynamique.",
    language: "Anglais",
    currency: "Dollar ($)",
    climate: "Tempéré",
    bestTimeToVisit: "Avr-Juin, Sep-Nov",
    budget: "Moyen-Élevé",
    duration: "1O jours",
    details: {
      highlights: ["Statue de la Liberté", "Central Park", "Times Square", "Empire State Building"],
      food: ["Pizza", "Bagels", "Cheesecake", "Street Food"],
      activities: ["Visite de musées", "Spectacles à Broadway", "Shopping à Fifth Avenue"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://www.travelguide.de/media/new-york.jpeg",
      "https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_2560%2Cc_limit/hp-gq-6dec18_istock_.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg"
    ],
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 15,
    name: "Tokyo",
    region: "asia",
    country: "Japan",
    image: "/abi/images/tokyo.jpg",
    description: "Capitale moderne avec ses gratte-ciels, sa culture dynamique et sa gastronomie variée.",
    language: "Japonais",
    currency: "Yen (¥)",
    climate: "Tempéré",
    bestTimeToVisit: "Mar-Mai, Sep-Nov",
    budget: "Moyen-Élevé",
    duration: "1O jours",
    details: {
      highlights: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple", "Akihabara"],
      food: ["Sushi", "Ramen", "Tempura", "Okonomiyaki"],
      activities: ["Visite de temples", "Shopping à Shibuya", "Excursion à Nikko"],
      accommodation: ["Hôtels", "Appartements", "Hôtels de luxe"]
    },
    gallery: [
      "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kggi0qxhFn79lgP8ZbjelIXbf6nouHaakQjd7bIgZw&s&ec=72940542",
      "https://images.goway.com/production/styles/wide/s3/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg?VersionId=9pSa2V.5jpbT8fiM9TMCEVSIVSNw27f9&itok=jR2sf-q1"
    ],
    coordinates: [35.682839, 139.759455]
  }
];

// Function to create destination cards
function createDestinationCard(destination) {
  const card = document.createElement('div');
  card.className = 'destination-card';
  card.setAttribute('data-region', destination.region);
  
  // Convert destination info based on active language
  const name = translateText(destination.name);
  const country = translateText(destination.country);
  const description = translateText(destination.description);
  const language = translateText('Language') + ': ' + translateText(destination.language);
  const currency = translateText('Currency') + ': ' + destination.currency;
  const climate = translateText('Climate') + ': ' + translateText(destination.climate);
  const bestTime = translateText('Best time to visit') + ': ' + translateText(destination.bestTimeToVisit);
  
  card.innerHTML = `
    <div class="destination-img">
      <img src="${destination.image}" alt="${name}">
    </div>
    <div class="destination-content">
      <span class="destination-region">${translateText(destination.region)}</span>
      <h3 class="destination-title">${name}</h3>
      <div class="destination-details">
        <div class="detail-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>${country}</span>
        </div>
        <div class="detail-item">
          <i class="fas fa-language"></i>
          <span>${translateText(destination.language)}</span>
        </div>
        <div class="detail-item">
          <i class="fas fa-money-bill-wave"></i>
          <span>${destination.currency}</span>
        </div>
        <div class="detail-item">
          <i class="fas fa-sun"></i>
          <span>${translateText(destination.climate)}</span>
        </div>
      </div>
      <p class="destination-description">${description}</p>
      <div class="card-actions">
        <button class="btn primary view-details" data-id="${destination.id}">${translateText('View Details')}</button>
        <button class="favorite"><i class="far fa-heart"></i></button>
      </div>
    </div>
  `;
  
  // Add event listener to the details button
  card.querySelector('.view-details').addEventListener('click', () => {
    openDestinationModal(destination);
  });
  
  // Add event listener to the favorite button
  card.querySelector('.favorite').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    const icon = e.currentTarget.querySelector('i');
    if (icon.classList.contains('far')) {
      icon.classList.replace('far', 'fas');
    } else {
      icon.classList.replace('fas', 'far');
    }
  });
  
  return card;
}

// Function to load destinations
function loadDestinations(filter = 'all') {
  const container = document.getElementById('destinations-container');
  container.innerHTML = '';
  
  let filteredDestinations = destinations;
  
  // Apply filter
  if (filter !== 'all') {
    filteredDestinations = destinations.filter(dest => dest.region === filter);
  }
  
  // Apply search if exists
  const searchTerm = document.getElementById('destination-search').value.toLowerCase();
  if (searchTerm) {
    filteredDestinations = filteredDestinations.filter(dest => 
      translateText(dest.name).toLowerCase().includes(searchTerm) || 
      translateText(dest.country).toLowerCase().includes(searchTerm) ||
      translateText(dest.description).toLowerCase().includes(searchTerm)
    );
  }
  
  if (filteredDestinations.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = translateText('No destinations found matching your criteria.');
    container.appendChild(noResults);
    return;
  }
  
  // Create and append cards with staggered animation
  filteredDestinations.forEach((destination, index) => {
    const card = createDestinationCard(destination);
    container.appendChild(card);
    
    // Add staggered animation with slight delay
    setTimeout(() => {
      card.classList.add('animated');
    }, 100 * index);
  });
}

// Function to open destination modal
function openDestinationModal(destination) {
  const modal = document.getElementById('destination-modal');
  const modalBody = modal.querySelector('.modal-body');
  
  // Translate content
  const name = translateText(destination.name);
  const country = translateText(destination.country);
  const description = translateText(destination.description);
  
  // Create modal content
  modalBody.innerHTML = `
    <div class="modal-header">
      <h2>${name}</h2>
      <span class="modal-subtitle">${country}</span>
    </div>
    
    <div class="modal-gallery">
      ${destination.gallery.map(img => `<img src="${img}" alt="${name}">`).join('')}
    </div>
    
    <div class="modal-description">
      <p>${description}</p>
    </div>
    
    <div class="modal-details">
      <div class="modal-detail-col">
        <h3>${translateText('Essential Information')}</h3>
        <ul>
          <li><strong>${translateText('Language')}:</strong> ${translateText(destination.language)}</li>
          <li><strong>${translateText('Currency')}:</strong> ${destination.currency}</li>
          <li><strong>${translateText('Climate')}:</strong> ${translateText(destination.climate)}</li>
          <li><strong>${translateText('Best Time to Visit')}:</strong> ${translateText(destination.bestTimeToVisit)}</li>
          <li><strong>${translateText('Budget')}:</strong> ${translateText(destination.budget)}</li>
          <li><strong>${translateText('Recommended Duration')}:</strong> ${translateText(destination.duration)}</li>
        </ul>
      </div>
      
      <div class="modal-detail-col">
        <h3>${translateText('Highlights')}</h3>
        <ul>
          ${destination.details.highlights.map(item => `<li>${translateText(item)}</li>`).join('')}
        </ul>
        
        <h3>${translateText('Local Cuisine')}</h3>
        <ul>
          ${destination.details.food.map(item => `<li>${translateText(item)}</li>`).join('')}
        </ul>
      </div>
      
      <div class="modal-detail-col">
        <h3>${translateText('Activities')}</h3>
        <ul>
          ${destination.details.activities.map(item => `<li>${translateText(item)}</li>`).join('')}
        </ul>
        
        <h3>${translateText('Accommodation Options')}</h3>
        <ul>
          ${destination.details.accommodation.map(item => `<li>${translateText(item)}</li>`).join('')}
        </ul>
      </div>
    </div>
    
    <div class="modal-actions">
      <button class="btn primary">${translateText('Add to Wishlist')}</button>
      <button class="btn secondary" data-map-focus="${destination.id}">${translateText('View on Map')}</button>
    </div>
  `;
  
  // Add styles for the modal
  const style = document.createElement('style');
  style.textContent = `
    .modal-header {
      margin-bottom: var(--spacing-6);
      border-bottom: 1px solid var(--color-border);
      padding-bottom: var(--spacing-4);
    }
    
    .modal-header h2 {
      font-size: 2rem;
      color: var(--color-primary-600);
      margin-bottom: var(--spacing-2);
    }
    
    .modal-subtitle {
      font-size: 1.2rem;
      color: var(--color-muted);
    }
    
    .modal-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-6);
    }
    
    .modal-gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius-md);
      transition: transform var(--transition-normal);
    }
    
    .modal-gallery img:hover {
      transform: scale(1.05);
    }
    
    .modal-description {
      margin-bottom: var(--spacing-6);
      line-height: 1.6;
      color: var(--color-foreground);
    }
    
    .modal-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-6);
      margin-bottom: var(--spacing-6);
    }
    
    .modal-detail-col h3 {
      font-size: 1.2rem;
      color: var(--color-primary-600);
      margin-bottom: var(--spacing-3);
      margin-top: var(--spacing-4);
    }
    
    .modal-detail-col h3:first-child {
      margin-top: 0;
    }
    
    .modal-detail-col ul {
      list-style: disc;
      padding-left: var(--spacing-4);
    }
    
    .modal-detail-col li {
      margin-bottom: var(--spacing-2);
      color: var(--color-muted);
    }
    
    .modal-actions {
      display: flex;
      gap: var(--spacing-4);
      justify-content: flex-end;
      margin-top: var(--spacing-6);
      border-top: 1px solid var(--color-border);
      padding-top: var(--spacing-4);
    }
    
    @media (max-width: 768px) {
      .modal-gallery {
        grid-template-columns: 1fr;
      }
      
      .modal-details {
        grid-template-columns: 1fr;
        gap: var(--spacing-4);
      }
    }
  `;
  
  document.head.appendChild(style);
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Add event listener to map button
  const mapButton = modalBody.querySelector('[data-map-focus]');
  if (mapButton) {
    mapButton.addEventListener('click', () => {
      const destId = mapButton.getAttribute('data-map-focus');
      focusMapOnDestination(parseInt(destId));
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Scroll to map
      document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Close modal when clicking on close button or outside the modal
function setupModalClose() {
  const modal = document.getElementById('destination-modal');
  const closeBtn = modal.querySelector('.close-modal');
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Function to set up filter listeners
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-options a');
  const filterBtn = document.querySelector('.filter-btn');
  const filterOptions = document.querySelector('.filter-options');
  
  // Toggle filter dropdown
  filterBtn.addEventListener('click', () => {
    filterOptions.classList.toggle('show');
  });
  
  // Close filter dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-dropdown')) {
      filterOptions.classList.remove('show');
    }
  });
  
  // Filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update filter button text
      filterBtn.textContent = translateText(button.textContent);
      
      // Apply filter
      const filter = button.getAttribute('data-filter');
      loadDestinations(filter);
      
      // Close dropdown
      filterOptions.classList.remove('show');
    });
  });
  
  // Search functionality
  const searchInput = document.getElementById('destination-search');
  searchInput.addEventListener('input', debounce(() => {
    // Get active filter
    const activeFilter = document.querySelector('.filter-options a.active');
    const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
    
    // Load destinations with filter and search term
    loadDestinations(filter);
  }, 300));
}

// Update the openDestinationModal function
function openDestinationModal(destination) {
  const modal = document.getElementById('destination-modal');
  const modalContent = modal.querySelector('.modal-content');
  
  modalContent.innerHTML = `
    <div class="modal-header" style="background-image: url('${destination.image}')">
      <div class="modal-header-content">
        <h2>${translateText(destination.name)}</h2>
        <div class="modal-subtitle">${translateText(destination.country)}</div>
      </div>
      <button class="close-modal">&times;</button>
    </div>
    
    <div class="modal-quick-info">
      <div class="quick-info-item">
        <i class="fas fa-language"></i>
        <div class="quick-info-content">
          <span class="quick-info-label">${translateText('Language')}</span>
          <span class="quick-info-value">${translateText(destination.language)}</span>
        </div>
      </div>
      <div class="quick-info-item">
        <i class="fas fa-money-bill-wave"></i>
        <div class="quick-info-content">
          <span class="quick-info-label">${translateText('Currency')}</span>
          <span class="quick-info-value">${destination.currency}</span>
        </div>
      </div>
      <div class="quick-info-item">
        <i class="fas fa-clock"></i>
        <div class="quick-info-content">
          <span class="quick-info-label">${translateText('Best Time to Visit')}</span>
          <span class="quick-info-value">${translateText(destination.bestTimeToVisit)}</span>
        </div>
      </div>
      <div class="quick-info-item">
        <i class="fas fa-wallet"></i>
        <div class="quick-info-content">
          <span class="quick-info-label">${translateText('Budget')}</span>
          <span class="quick-info-value">${translateText(destination.budget)}</span>
        </div>
      </div>
    </div>
    
    <div class="modal-body">
      <div class="modal-main">
        <div class="modal-description">
          ${translateText(destination.description)}
        </div>
        <div class="modal-gallery">
          ${destination.gallery.map(img => `
            <img src="${img}" alt="${translateText(destination.name)}" />
          `).join('')}
        </div>
      </div>
      
      <div class="modal-sidebar">
        <div class="info-section">
          <h3>${translateText('Highlights')}</h3>
          <ul>
            ${destination.details.highlights.map(item => `
              <li><i class="fas fa-star"></i>${translateText(item)}</li>
            `).join('')}
          </ul>
        </div>
        
        <div class="info-section">
          <h3>${translateText('Local Cuisine')}</h3>
          <ul>
            ${destination.details.food.map(item => `
              <li><i class="fas fa-utensils"></i>${translateText(item)}</li>
            `).join('')}
          </ul>
        </div>
        
        <div class="info-section">
          <h3>${translateText('Activities')}</h3>
          <ul>
            ${destination.details.activities.map(item => `
              <li><i class="fas fa-hiking"></i>${translateText(item)}</li>
            `).join('')}
          </ul>
        </div>
        
        <div class="info-section">
          <h3>${translateText('Accommodation')}</h3>
          <ul>
            ${destination.details.accommodation.map(item => `
              <li><i class="fas fa-bed"></i>${translateText(item)}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    <div class="modal-actions">
      <button class="btn secondary" data-map-focus="${destination.id}">
        <i class="fas fa-map-marker-alt"></i>
        ${translateText('View on Map')}
      </button>
      <button class="btn primary">
        <i class="fas fa-heart"></i>
        ${translateText('Add to Wishlist')}
      </button>
    </div>
  `;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Add event listener to close button
  const closeBtn = modalContent.querySelector('.close-modal');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Add event listener to map button
  const mapButton = modalContent.querySelector('[data-map-focus]');
  if (mapButton) {
    mapButton.addEventListener('click', () => {
      const destId = mapButton.getAttribute('data-map-focus');
      focusMapOnDestination(parseInt(destId));
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Scroll to map
      document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Helper function to debounce search input
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// Function to get a destination by ID
function getDestinationById(id) {
  return destinations.find(dest => dest.id === id);
}

// Initialize destinations on load
function initializeDestinations() {
  loadDestinations();
  setupFilters();
  setupModalClose();
}

// Export functions
window.loadDestinations = loadDestinations;
window.getDestinationById = getDestinationById;
window.focusMapOnDestination = function(id) {}; // Will be implemented in map.js