// Available languages
const languages = {
  fr: 'Français',
  de: 'Deutsch'
};

// Current active language
let currentLanguage = 'fr';

// Translations
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.destinations': 'Destinations',
    
    // Hero
    'hero.title': 'Découvrez Votre Prochaine Aventure',
    'hero.subtitle': 'Explorez des destinations extraordinaires pour votre voyage de fin d\'études',
    'hero.cta': 'Voir les destinations',
    
    // Destinations
    'destinations.title': 'Destinations',
    'destinations.subtitle': 'Explorez ces lieux extraordinaires pour votre voyage',
    'destinations.searchPlaceholder': 'Rechercher une destination...',
    'destinations.filterBy': 'Filtrer par',
    'destinations.all': 'Tous',
    'destinations.europe': 'Europe',
    'destinations.asia': 'Asie',
    'destinations.americas': 'Amériques',
    'destinations.africa': 'Afrique',
    'destinations.oceania': 'Océanie',
    'View Details': 'Voir détails',
    
    // Map
    'map.title': 'Carte Interactive',
    'map.subtitle': 'Visualisez toutes les destinations sur la carte',

    // Destination Details
    'Language': 'Langue',
    'Currency': 'Devise',
    'Climate': 'Climat',
    'Best Time to Visit': 'Meilleure période',
    'Budget': 'Budget',
    'Recommended Duration': 'Durée',
    'Essential Information': 'Informations Essentielles',
    'Highlights': 'Points Forts',
    'Local Cuisine': 'Cuisine Locale',
    'Activities': 'Activités',
    'Accommodation Options': 'Options d\'Hébergement',
    'Add to Wishlist': 'Ajouter aux Favoris',
    'View on Map': 'Voir sur la Carte',
    'No destinations found matching your criteria.': 'Aucune destination ne correspond à vos critères.',
    
    // Regions
    'europe': 'Europe',
    'asia': 'Asie',
    'americas': 'Amériques',
    'africa': 'Afrique',
    'oceania': 'Océanie',
    
    // Countries
    'Japan': 'Japon',
    'Spain': 'Espagne',
    'USA': 'États-Unis',
    'Indonesia': 'Indonésie',
    'France': 'France',
    'Australia': 'Australie',
    'Morocco': 'Maroc',
    'Brazil': 'Brésil',
    'Czech Republic': 'République Tchèque',
    
    // Cities/Destinations
    'Kyoto': 'Kyoto',
    'Barcelona': 'Barcelone',
    'New York': 'New York',
    'Bali': 'Bali',
    'Paris': 'Paris',
    'Sydney': 'Sydney',
    'Marrakech': 'Marrakech',
    'Rio de Janeiro': 'Rio de Janeiro',
    'Prague': 'Prague',
    
    // Climate
    'Tempéré': 'Tempéré',
    'Méditerranéen': 'Méditerranéen',
    'Continental': 'Continental',
    'Tropical': 'Tropical',
    'Aride': 'Aride',
    
    // Languages
    'Japonais': 'Japonais',
    'Espagnol, Catalan': 'Espagnol, Catalan',
    'Anglais': 'Anglais',
    'Indonésien, Balinais': 'Indonésien, Balinais',
    'Français': 'Français',
    'Arabe, Français': 'Arabe, Français',
    'Portugais': 'Portugais',
    'Tchèque': 'Tchèque',
    
    // Budget
    'Bas-Moyen': 'Bas-Moyen',
    'Moyen': 'Moyen',
    'Moyen-Élevé': 'Moyen-Élevé',
    'Élevé': 'Élevé',
    
    // Best time to visit
    'Mar-Mai, Oct-Nov': 'Mar-Mai, Oct-Nov',
    'Avr-Juin, Sep-Oct': 'Avr-Juin, Sep-Oct',
    'Avr-Oct': 'Avr-Oct',
    'Mai-Oct': 'Mai-Oct',
    'Sep-Nov, Mar-Mai': 'Sep-Nov, Mar-Mai',
    
    // Descriptions
    'Ville dynamique au carrefour de la culture francophone et anglophone, connue pour son architecture historique et sa gastronomie.': 'Ville dynamique au carrefour de la culture francophone et anglophone, connue pour son architecture historique et sa gastronomie.',
    'Ville emblématique de la culture cinématographique, connue pour ses plages, ses collines et son ambiance décontractée.': 'Ville emblématique de la culture cinématographique, connue pour ses plages, ses collines et son ambiance décontractée.',
    'Ville moderne et dynamique, connue pour son innovation technologique, ses gratte-ciels et sa vie nocturne animée': 'Ville moderne et dynamique, connue pour son innovation technologique, ses gratte-ciels et sa vie nocturne animée.',
    'Ville dynamique connue pour sa cuisine de rue, ses gratte-ciels modernes et son ambiance animée.': 'Ville dynamique connue pour sa cuisine de rue, ses gratte-ciels modernes et son ambiance animée.',
    'Capitale historique et culturelle, connue pour ses monuments emblématiques, ses musées et sa diversité.': 'Capitale historique et culturelle, connue pour ses monuments emblématiques, ses musées et sa diversité.',
    'Capitale moderne avec ses tours emblématiques, ses marchés animés et sa culture multiculturelle.': 'Capitale moderne avec ses tours emblématiques, ses marchés animés et sa culture multiculturelle.',
    'Ville futuriste connue pour ses gratte-ciels, ses centres commerciaux luxueux et ses plages.': 'Ville futuriste connue pour ses gratte-ciels, ses centres commerciaux luxueux et ses plages.',
    'Capitale historique avec ses lacs, ses temples et sa cuisine de rue animée.': 'Capitale historique avec ses lacs, ses temples et sa cuisine de rue animée.',
    'Ville côtière connue pour son opéra emblématique, ses plages et son ambiance décontractée.': 'Ville côtière connue pour son opéra emblématique, ses plages et son ambiance décontractée.',
    'Capitale moderne avec ses gratte-ciels et ses traditions anciennes, connue pour sa culture dynamique et sa gastronomie.': 'Capitale moderne avec ses gratte-ciels et ses traditions anciennes, connue pour sa culture dynamique et sa gastronomie.',
    'Capitale historique avec ses temples anciens, ses marchés animés et sa culture riche.': 'Capitale historique avec ses temples anciens, ses marchés animés et sa culture riche.',
    'Ville moderne et cosmopolite, connue pour son architecture futuriste, ses jardins et sa gastronomie variée.': 'Ville moderne et cosmopolite, connue pour son architecture futuriste, ses jardins et sa gastronomie variée.',
    'Capitale historique avec ses pyramides emblématiques, ses musées et sa culture riche.': 'Capitale historique avec ses pyramides emblématiques, ses musées et sa culture riche.',
    'Ville emblématique connue pour ses gratte-ciels, sa culture diversifiée et son ambiance dynamique.': 'Ville emblématique connue pour ses gratte-ciels, sa culture diversifiée et son ambiance dynamique.',
    'Capitale moderne avec ses gratte-ciels, sa culture dynamique et sa gastronomie variée.': 'Capitale moderne avec ses gratte-ciels, sa culture dynamique et sa gastronomie variée.',
    'Capitale moderne avec ses gratte-ciels, sa culture dynamique et sa gastronomie variée.': 'Capitale moderne avec ses gratte-ciels, sa culture dynamique et sa gastronomie variée.',
      
    // Durations
    '3-5 jours': '3-5 jours',
    '4-5 jours': '4-5 jours',
    '4-6 jours': '4-6 jours',
    '5-7 jours': '5-7 jours',
    '7-10 jours': '7-10 jours'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.destinations': 'Reiseziele',
    
    // Hero
    'hero.title': 'Entdecke das nächstes Abenteuer',
    'hero.subtitle': 'Erkunde außergewöhnliche Reiseziele für Paulis Abschlussreise',
    'hero.cta': 'Reiseziele anzeigen',
    
    // Destinations
    'destinations.title': 'Reiseziele',
    'destinations.subtitle': 'Erkunde diese außergewöhnlichen Orte für die Reise',
    'destinations.searchPlaceholder': 'Reiseziel suchen...',
    'destinations.filterBy': 'Filtern nach',
    'destinations.all': 'Alle',
    'destinations.europe': 'Europa',
    'destinations.asia': 'Asien',
    'destinations.americas': 'Amerika',
    'destinations.africa': 'Afrika',
    'destinations.oceania': 'Ozeanien',
    'View Details': 'Details anzeigen',
    
    // Map
    'map.title': 'Interaktive Karte',
    'map.subtitle': 'Visualisier alle Reiseziele auf der Karte',
    
    // Destination Details
    'Language': 'Sprache',
    'Currency': 'Währung',
    'Climate': 'Klima',
    'Best Time to Visit': 'Beste Reisezeit',
    'Budget': 'Budget',
    'Recommended Duration': 'Dauer',
    'Essential Information': 'Wesentliche Informationen',
    'Highlights': 'Höhepunkte',
    'Local Cuisine': 'Lokale Küche',
    'Activities': 'Aktivitäten',
    'Accommodation Options': 'Unterkunftsmöglichkeiten',
    'Add to Wishlist': 'Zur Wunschliste hinzufügen',
    'View on Map': 'Auf Karte anzeigen',
    'No destinations found matching your criteria.': 'Keine Reiseziele gefunden, die Ihren Kriterien entsprechen.',
    
    // Regions
    'europe': 'Europa',
    'asia': 'Asien',
    'americas': 'Amerika',
    'africa': 'Afrika',
    'oceania': 'Ozeanien',
    
    // Countries
    'Japan': 'Japan',
    'Canada': 'Kanada',
    'USA': 'USA',
    'Malaysia': 'Malaysia',
    'France': 'Frankreich',
    'Australie': 'Australien',
    'Corée du Sud': 'Südkorea',
    'Cambodge': 'Kambodscha',
    'Singapour': 'Singapur',
    
    // Cities/Destinations
    'Kyoto': 'Kyoto',
    'Barcelona': 'Barcelona',
    'New York': 'New York',
    'Bali': 'Bali',
    'Paris': 'Paris',
    'Sydney': 'Sydney',
    'Marrakech': 'Marrakesch',
    'Rio de Janeiro': 'Rio de Janeiro',
    'Prague': 'Prag',
    'Montréal': 'Montreal',
    'Londres': 'London',
    'Dubaï': 'Dubai',
    'Hanoï': 'Hanoi',
    'Séoul': 'Seoul',
    'Le Caire': 'Kairo',
    
    // Climate
    'Tempéré': 'Gemäßigt',
    'Méditerranéen': 'Mediterran',
    'Continental': 'Kontinental',
    'Tropical': 'Tropisch',
    'Aride': 'Trocken',
    'Désertique': 'Wüstenklima',
    'Océanique': 'Ozeanisch',
    
    // Languages
    'Japonais': 'Japanisch',
    'Espagnol, Catalan': 'Spanisch, Katalanisch',
    'Anglais': 'Englisch',
    'Indonésien, Balinais': 'Indonesisch, Balinesisch',
    'Français': 'Französisch',
    'Arabe, Français': 'Arabisch, Französisch',
    'Portugais': 'Portugiesisch',
    'Tchèque': 'Tschechisch',
    'Chinois (Mandarin)': 'Chinesisch (Mandarin)',
    'Malais, Anglais, Chinois': 'Malaiisch, Englisch, Chinesisch',
    'Coréen': 'Koreanisch',
    'Khmer': 'Khmer',
    'Anglais, Malais': 'Englisch, Malaiisch',
    'Arabe, Anglais': 'Arabisch, Englisch',
    'Anglais, Français': 'Englisch, Französisch',
    'Vietnamien': 'Vietnamesisch',
    'Anglais, Malais, Mandarin, Tamoul': 'Englisch, Malaiisch, Mandarin, Tamil',
    'Arabe': 'Arabisch',
    
    // Budget
    'Bas-Moyen': 'Niedrig-Mittel',
    'Moyen': 'Mittel',
    'Moyen-Élevé': 'Mittel-Hoch',
    'Élevé': 'Hoch',
    
    // Best time to visit
    'Mar-Mai, Oct-Nov': 'Mär-Mai, Okt-Nov',
    'Avr-Juin, Sep-Oct': 'Apr-Jun, Sep-Okt',
    'Avr-Oct': 'Apr-Okt',
    'Mai-Oct': 'Mai-Okt',
    'Sep-Nov, Mar-Mai': 'Sep-Nov, Mär-Mai',
    
    // Descriptions
    'Ville dynamique au carrefour de la culture francophone et anglophone, connue pour son architecture historique et sa gastronomie.': 'Stadt am Schnittpunkt der französisch- und englischsprachigen Kultur, bekannt für ihre historische Architektur und Gastronomie.',
    'Ville emblématique de la culture cinématographique, connue pour ses plages, ses collines et son ambiance décontractée.': 'Stadt, die für ihre Filmkultur bekannt ist, berühmt für ihre Strände, Hügel und entspannte Atmosphäre.',
    'Ville moderne et dynamique, connue pour son innovation technologique, ses gratte-ciels et sa vie nocturne animée': 'Moderne und dynamische Stadt, bekannt für ihre technologische Innovation',
    'Ville dynamique connue pour sa cuisine de rue, ses gratte-ciels modernes et son ambiance animée.': 'Dynamische Stadt, bekannt für ihre Straßenküche, moderne Wolkenkratzer und lebhafte Atmosphäre.',
    'Capitale historique et culturelle, connue pour ses monuments emblématiques, ses musées et sa diversité.': 'Historische und kulturelle Hauptstadt, bekannt für ihre Wahrzeichen, Museen und Vielfalt.',
    'Capitale moderne avec ses tours emblématiques, ses marchés animés et sa culture multiculturelle.': 'Moderne Hauptstadt mit ihren Wahrzeichen, lebhaften Märkten und multikultureller Kultur.',
    'Ville futuriste connue pour ses gratte-ciels, ses centres commerciaux luxueux et ses plages.': 'Futuristische Stadt, bekannt für ihre Wolkenkratzer, luxuriösen Einkaufszentren und Strände.',
    'Capitale historique avec ses lacs, ses temples et sa cuisine de rue animée.': 'Historische Hauptstadt mit ihren Seen, Tempeln und lebhaften Straßenküchen.',
    'Ville côtière connue pour son opéra emblématique, ses plages et son ambiance décontractée.': 'Küstenstadt, bekannt für ihr ikonisches Opernhaus, Strände und entspannte Atmosphäre.',
    'Capitale moderne avec ses gratte-ciels et ses traditions anciennes, connue pour sa culture dynamique et sa gastronomie.': 'Moderne Hauptstadt mit ihren Wolkenkratzern und alten Traditionen, bekannt für ihre dynamische Kultur und Gastronomie.',
    'Capitale historique avec ses temples anciens, ses marchés animés et sa culture riche.': 'Historische Hauptstadt mit ihren alten Tempeln, lebhaften Märkten und reicher Kultur.',
    'Ville moderne et cosmopolite, connue pour son architecture futuriste, ses jardins et sa gastronomie variée.': 'Moderne und kosmopolitische Stadt, bekannt für ihre futuristische Architektur, Gärten und vielfältige Gastronomie.',
    'Capitale historique avec ses pyramides emblématiques, ses musées et sa culture riche.': 'Historische Hauptstadt mit ihren ikonischen Pyramiden, Museen und reicher Kultur.',
    'Ville emblématique connue pour ses gratte-ciels, sa culture diversifiée et son ambiance dynamique.': 'Ikonische Stadt, bekannt für ihre Wolkenkratzer, vielfältige Kultur und dynamische Atmosphäre.',
    'Capitale moderne avec ses gratte-ciels, sa culture dynamique et sa gastronomie variée.': 'Moderne Hauptstadt mit ihren Wolkenkratzern, dynamischer Kultur und vielfältiger Gastronomie.',
    
    // Durations
    '3-5 jours': '3-5 Tage',
    '4-5 jours': '4-5 Tage',
    '4-6 jours': '4-6 Tage',
    '5-7 jours': '5-7 Tage',
    '7-10 jours': '7-10 Tage'
  }
};

// Function to translate text
function translateText(text) {
  // If text is not in translations, return original text
  if (!translations[currentLanguage][text]) {
    return text;
  }
  
  return translations[currentLanguage][text];
}

// Function to update all translatable elements
function updatePageLanguage() {
  // Update text with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update placeholders with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLanguage][key]) {
      element.setAttribute('placeholder', translations[currentLanguage][key]);
    }
  });
  
  // Update current language indicator
  document.querySelectorAll('.current-lang').forEach(el => {
    el.textContent = currentLanguage.toUpperCase();
  });
  
  // Update active language in dropdowns
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.getAttribute('data-lang') === currentLanguage) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  
  // If destinations are loaded, reload them to update text
  if (window.loadDestinations) {
    window.loadDestinations(document.querySelector('.filter-options a.active')?.getAttribute('data-filter') || 'all');
  }
  
  // Update document title
  document.title = currentLanguage === 'fr' ? 'Destinations de Rêve | Voyage de Fin d\'Études' : 'Traumziele | Abschlussreise';
}

// Function to switch language
function switchLanguage(lang) {
  if (languages[lang]) {
    currentLanguage = lang;
    updatePageLanguage();
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
  }
}

// Initialize language settings
function initializeLanguage() {
  // Check if user has a saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && languages[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    // Default to French
    currentLanguage = 'fr';
  }
  
  // Set up language switchers
  document.querySelectorAll('[data-lang]').forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = element.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
  
  // Initial translation
  updatePageLanguage();
}

// Make functions globally available
window.translateText = translateText;
window.switchLanguage = switchLanguage;
window.initializeLanguage = initializeLanguage;