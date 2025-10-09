// Formatters Class
class Formatters {
  constructor(i18n) {
    this.i18n = i18n;
  }

  formatCurrency(amount) {
    const locale = this.i18n.getLocale();
    const currency = this.i18n.currentLang === 'en' ? 'USD' : 'EUR';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }

  formatNumber(number, decimals = 2) {
    const locale = this.i18n.getLocale();

    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(number);
  }

  formatDate(date) {
    if (!date) return '';

    const locale = this.i18n.getLocale();
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(dateObj);
  }

  formatPercent(number) {
    const locale = this.i18n.getLocale();

    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(number / 100);
  }

  parseNumber(str) {
    if (!str) return 0;
    const cleaned = str.toString().replace(/[^\d,.-]/g, '');
    const normalized = cleaned.replace(',', '.');
    return parseFloat(normalized) || 0;
  }
}
