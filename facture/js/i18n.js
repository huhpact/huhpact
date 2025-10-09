// I18n Class
class I18n {
  constructor() {
    this.currentLang = 'en';
    this.translations = {};
    this.fallbackLang = 'en';
  }

  async loadTranslations(lang) {
    if (this.translations[lang]) {
      return;
    }

    try {
      const response = await fetch(`/facture/i18n/${lang}.json`);
      this.translations[lang] = await response.json();
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    }
  }

  async setLanguage(lang) {
    await this.loadTranslations(lang);
    this.currentLang = lang;
    this.updateDOM();
    document.documentElement.lang = lang;
  }

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    if (value === undefined && this.currentLang !== this.fallbackLang) {
      let fallbackValue = this.translations[this.fallbackLang];
      for (const k of keys) {
        if (fallbackValue && typeof fallbackValue === 'object') {
          fallbackValue = fallbackValue[k];
        } else {
          break;
        }
      }
      value = fallbackValue;
    }

    return value || key;
  }

  updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
  }

  getLocale() {
    const localeMap = {
      'en': 'en-US',
      'de': 'de-DE',
      'fr': 'fr-FR'
    };
    return localeMap[this.currentLang] || 'en-US';
  }

  getCurrencySymbol() {
    const currencyMap = {
      'en': '$',
      'de': '€',
      'fr': '€'
    };
    return currencyMap[this.currentLang] || '$';
  }
}
