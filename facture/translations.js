const translations = {
    fr: {
        // Invoice content
        invoice: "FACTURE",
        invoiceNumber: "Facture N°",
        date: "Date",
        dueDate: "Échéance",
        serviceDate: "Période de service",
        reference: "Référence",
        
        // Company info
        seller: "Vendeur",
        buyer: "Client",
        
        // Table headers
        description: "Description",
        unitPrice: "Prix unitaire",
        quantity: "Quantité",
        discount: "Remise",
        total: "Total",
        
        // Totals
        subtotal: "Sous-total",
        vat: "TVA",
        grandTotal: "Total TTC",
        
        // Payment
        paymentInfo: "Informations de paiement",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        paypal: "PayPal",
        
        // Notes
        notes: "Notes",
        terms: "Conditions de paiement",
        
        // VAT exemption
        vatExemption: "Conformément à l'article 293B du CGI, TVA non applicable.",
        
        // Dates
        months: [
            "janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ]
    },
    
    de: {
        // Invoice content
        invoice: "RECHNUNG",
        invoiceNumber: "Rechnungs-Nr.",
        date: "Datum",
        dueDate: "Fälligkeitsdatum",
        serviceDate: "Leistungszeitraum",
        reference: "Referenz",
        
        // Company info
        seller: "Verkäufer",
        buyer: "Kunde",
        
        // Table headers
        description: "Beschreibung",
        unitPrice: "Einzelpreis",
        quantity: "Menge",
        discount: "Rabatt",
        total: "Gesamt",
        
        // Totals
        subtotal: "Zwischensumme",
        vat: "MwSt.",
        grandTotal: "Gesamtbetrag",
        
        // Payment
        paymentInfo: "Zahlungsinformationen",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        paypal: "PayPal",
        
        // Notes
        notes: "Anmerkungen",
        terms: "Zahlungsbedingungen",
        
        // VAT exemption
        vatExemption: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
        
        // Dates
        months: [
            "Januar", "Februar", "März", "April", "Mai", "Juni",
            "Juli", "August", "September", "Oktober", "November", "Dezember"
        ]
    },
    
    en: {
        // Invoice content
        invoice: "INVOICE",
        invoiceNumber: "Invoice No.",
        date: "Date",
        dueDate: "Due Date",
        serviceDate: "Service Period",
        reference: "Reference",
        
        // Company info
        seller: "Seller",
        buyer: "Customer",
        
        // Table headers
        description: "Description",
        unitPrice: "Unit Price",
        quantity: "Qty",
        discount: "Discount",
        total: "Total",
        
        // Totals
        subtotal: "Subtotal",
        vat: "VAT",
        grandTotal: "Grand Total",
        
        // Payment
        paymentInfo: "Payment Information",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        paypal: "PayPal",
        
        // Notes
        notes: "Notes",
        terms: "Payment Terms",
        
        // VAT exemption
        vatExemption: "No VAT is charged according to applicable law.",
        
        // Dates
        months: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    }
};

// Currency symbols and formatting
const currencyConfig = {
    EUR: { symbol: "€", position: "after", decimals: 2 },
    USD: { symbol: "$", position: "before", decimals: 2 },
    GBP: { symbol: "£", position: "before", decimals: 2 },
    CHF: { symbol: "CHF", position: "after", decimals: 2 }
};

// Date formatting by language
const dateFormats = {
    fr: (date) => {
        const d = new Date(date);
        return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
    },
    de: (date) => {
        const d = new Date(date);
        return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
    },
    en: (date) => {
        const d = new Date(date);
        const months = translations.en.months;
        return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
};

// Number formatting by language
const numberFormats = {
    fr: (number) => {
        return new Intl.NumberFormat('fr-FR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number);
    },
    de: (number) => {
        return new Intl.NumberFormat('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number);
    },
    en: (number) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number);
    }
};

// Format currency
function formatCurrency(amount, currency, language) {
    const config = currencyConfig[currency];
    const formattedNumber = numberFormats[language](amount);
    
    if (config.position === 'before') {
        return `${config.symbol}${formattedNumber}`;
    } else {
        return `${formattedNumber} ${config.symbol}`;
    }
}

// Get translation
function t(key, language = 'fr') {
    const lang = translations[language] || translations.fr;
    return lang[key] || key;
}

// Format date
function formatDate(date, language = 'fr') {
    if (!date) return '';
    const formatter = dateFormats[language] || dateFormats.fr;
    return formatter(date);
}