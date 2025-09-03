// Invoice HTML Generator with Language Support
class InvoiceGenerator {
    constructor() {
        this.templates = {
            modern: this.generateModernTemplate,
            classic: this.generateClassicTemplate,
            minimal: this.generateMinimalTemplate,
            corporate: this.generateCorporateTemplate
        };
        
        this.translations = {
            en: {
                invoice: 'INVOICE',
                invoiceNumber: 'Invoice Number',
                issueDate: 'Issue Date',
                dueDate: 'Due Date',
                paymentTerms: 'Payment Terms',
                vatId: 'VAT ID',
                email: 'Email',
                phone: 'Phone',
                from: 'From',
                to: 'To',
                description: 'Description',
                qty: 'Qty',
                unitPrice: 'Unit Price',
                discount: 'Discount',
                tax: 'Tax',
                total: 'Total',
                subtotal: 'Subtotal',
                vatTax: 'VAT/Tax',
                grandTotal: 'Grand Total',
                paymentInformation: 'Payment Information',
                bankDetails: 'Bank Details',
                notes: 'Notes',
                termsConditions: 'Terms & Conditions',
                thankYou: 'Thank you for your business!',
                standardInvoice: 'Standard Invoice',
                proformaInvoice: 'Pro Forma Invoice',
                creditNote: 'Credit Note',
                debitNote: 'Debit Note'
            },
            es: {
                invoice: 'FACTURA',
                invoiceNumber: 'Número de Factura',
                issueDate: 'Fecha de Emisión',
                dueDate: 'Fecha de Vencimiento',
                paymentTerms: 'Términos de Pago',
                vatId: 'ID de IVA',
                email: 'Correo',
                phone: 'Teléfono',
                from: 'De',
                to: 'Para',
                description: 'Descripción',
                qty: 'Cant.',
                unitPrice: 'Precio Unitario',
                discount: 'Descuento',
                tax: 'Impuesto',
                total: 'Total',
                subtotal: 'Subtotal',
                vatTax: 'IVA/Impuesto',
                grandTotal: 'Total General',
                paymentInformation: 'Información de Pago',
                bankDetails: 'Detalles Bancarios',
                notes: 'Notas',
                termsConditions: 'Términos y Condiciones',
                thankYou: '¡Gracias por su negocio!',
                standardInvoice: 'Factura Estándar',
                proformaInvoice: 'Factura Pro Forma',
                creditNote: 'Nota de Crédito',
                debitNote: 'Nota de Débito'
            },
            fr: {
                invoice: 'FACTURE',
                invoiceNumber: 'Numéro de Facture',
                issueDate: 'Date d\'Émission',
                dueDate: 'Date d\'Échéance',
                paymentTerms: 'Conditions de Paiement',
                vatId: 'ID TVA',
                email: 'E-mail',
                phone: 'Téléphone',
                from: 'De',
                to: 'À',
                description: 'Description',
                qty: 'Qté',
                unitPrice: 'Prix Unitaire',
                discount: 'Remise',
                tax: 'Taxe',
                total: 'Total',
                subtotal: 'Sous-total',
                vatTax: 'TVA/Taxe',
                grandTotal: 'Total Général',
                paymentInformation: 'Informations de Paiement',
                bankDetails: 'Détails Bancaires',
                notes: 'Notes',
                termsConditions: 'Termes et Conditions',
                thankYou: 'Merci pour votre entreprise!',
                standardInvoice: 'Facture Standard',
                proformaInvoice: 'Facture Pro Forma',
                creditNote: 'Note de Crédit',
                debitNote: 'Note de Débit'
            },
            de: {
                invoice: 'RECHNUNG',
                invoiceNumber: 'Rechnungsnummer',
                issueDate: 'Ausstellungsdatum',
                dueDate: 'Fälligkeitsdatum',
                paymentTerms: 'Zahlungsbedingungen',
                vatId: 'USt-IdNr.',
                email: 'E-Mail',
                phone: 'Telefon',
                from: 'Von',
                to: 'An',
                description: 'Beschreibung',
                qty: 'Menge',
                unitPrice: 'Einzelpreis',
                discount: 'Rabatt',
                tax: 'Steuer',
                total: 'Gesamt',
                subtotal: 'Zwischensumme',
                vatTax: 'MwSt./Steuer',
                grandTotal: 'Gesamtsumme',
                paymentInformation: 'Zahlungsinformationen',
                bankDetails: 'Bankverbindung',
                notes: 'Notizen',
                termsConditions: 'Geschäftsbedingungen',
                thankYou: 'Vielen Dank für Ihr Geschäft!',
                standardInvoice: 'Standard Rechnung',
                proformaInvoice: 'Pro Forma Rechnung',
                creditNote: 'Gutschrift',
                debitNote: 'Lastschrift'
            },
            it: {
                invoice: 'FATTURA',
                invoiceNumber: 'Numero Fattura',
                issueDate: 'Data di Emissione',
                dueDate: 'Data di Scadenza',
                paymentTerms: 'Termini di Pagamento',
                vatId: 'Partita IVA',
                email: 'Email',
                phone: 'Telefono',
                from: 'Da',
                to: 'A',
                description: 'Descrizione',
                qty: 'Qtà',
                unitPrice: 'Prezzo Unitario',
                discount: 'Sconto',
                tax: 'Tassa',
                total: 'Totale',
                subtotal: 'Subtotale',
                vatTax: 'IVA/Tassa',
                grandTotal: 'Totale Generale',
                paymentInformation: 'Informazioni di Pagamento',
                bankDetails: 'Dettagli Bancari',
                notes: 'Note',
                termsConditions: 'Termini e Condizioni',
                thankYou: 'Grazie per il vostro business!',
                standardInvoice: 'Fattura Standard',
                proformaInvoice: 'Fattura Pro Forma',
                creditNote: 'Nota di Credito',
                debitNote: 'Nota di Debito'
            }
        };
    }
    
    getTranslation(key, language = 'en') {
        return this.translations[language]?.[key] || this.translations.en[key] || key;
    }
    
    generateInvoiceHTML(data) {
        const template = data.invoiceTemplate || 'modern';
        const generator = this.templates[template] || this.templates.modern;
        
        return generator.call(this, data);
    }
    
    generateModernTemplate(data) {
        const {
            invoiceNumber = '',
            invoiceDate = '',
            dueDate = '',
            currency = 'USD',
            language = 'en',
            vendorCompany = '',
            vendorContact = '',
            vendorAddress = '',
            vendorEmail = '',
            vendorPhone = '',
            vendorVat = '',
            buyerName = '',
            buyerContact = '',
            buyerAddress = '',
            buyerEmail = '',
            buyerPhone = '',
            items = [],
            invoiceNotes = '',
            termsConditions = '',
            footerText = '',
            bankDetails = '',
            paymentTerms = '',
            logoData = null,
            primaryColor = '#3b82f6',
            secondaryColor = '#64748b',
            invoiceType = 'standard'
        } = data;
        
        const t = (key) => this.getTranslation(key, language);
        
        const subtotal = items.reduce((sum, item) => sum + (item.total || 0), 0);
        let discountAmount = 0;
        let vatAmount = 0;
        
        if (data.applyDiscount) {
            const globalDiscount = parseFloat(data.globalDiscount) || 0;
            if (data.discountType === 'percentage') {
                discountAmount = subtotal * (globalDiscount / 100);
            } else {
                discountAmount = globalDiscount;
            }
        }
        
        const afterDiscount = subtotal - discountAmount;
        
        if (data.applyVat) {
            const vatRate = parseFloat(data.vatRate) || 0;
            vatAmount = afterDiscount * (vatRate / 100);
        }
        
        const total = afterDiscount + vatAmount;
        
        return `
            <div class="invoice-preview template-modern" style="--primary-color: ${primaryColor}; --secondary-color: ${secondaryColor};">
                <div class="invoice-content">
                <div class="invoice-header">
                    <div class="invoice-logo">
                        ${logoData ? `<img src="${logoData}" alt="Company Logo">` : ''}
                        <div>
                            <div class="company-name">${vendorCompany}</div>
                            ${vendorContact ? `<div class="contact-name">${vendorContact}</div>` : ''}
                        </div>
                    </div>
                    <div class="invoice-title">
                        <h1>${t('invoice')}</h1>
                        <div class="invoice-subtitle">${t(invoiceType + 'Invoice')}</div>
                    </div>
                </div>
                
                <div class="invoice-details">
                    <div>
                        <dl class="invoice-info">
                            <dt>${t('invoiceNumber')}:</dt>
                            <dd><strong>${invoiceNumber}</strong></dd>
                            <dt>${t('issueDate')}:</dt>
                            <dd>${this.formatDate(invoiceDate, language)}</dd>
                            ${dueDate ? `<dt>${t('dueDate')}:</dt><dd>${this.formatDate(dueDate, language)}</dd>` : ''}
                            ${paymentTerms ? `<dt>${t('paymentTerms')}:</dt><dd>${this.getPaymentTermsText(paymentTerms, language)}</dd>` : ''}
                        </dl>
                    </div>
                    <div>
                        ${vendorVat ? `<div><strong>${t('vatId')}:</strong> ${vendorVat}</div>` : ''}
                        ${vendorEmail ? `<div><strong>${t('email')}:</strong> ${vendorEmail}</div>` : ''}
                        ${vendorPhone ? `<div><strong>${t('phone')}:</strong> ${vendorPhone}</div>` : ''}
                    </div>
                </div>
                
                <div class="invoice-parties">
                    <div class="party-section">
                        <h3>${t('from')}</h3>
                        <div class="party-info">
                            <div class="company-name">${vendorCompany}</div>
                            ${vendorContact ? `<div>${vendorContact}</div>` : ''}
                            ${vendorAddress ? `<div>${vendorAddress.replace(/\n/g, '<br>')}</div>` : ''}
                            ${vendorEmail ? `<div>${vendorEmail}</div>` : ''}
                            ${vendorPhone ? `<div>${vendorPhone}</div>` : ''}
                        </div>
                    </div>
                    <div class="party-section">
                        <h3>${t('to')}</h3>
                        <div class="party-info">
                            <div class="company-name">${buyerName}</div>
                            ${buyerContact ? `<div>${buyerContact}</div>` : ''}
                            ${buyerAddress ? `<div>${buyerAddress.replace(/\n/g, '<br>')}</div>` : ''}
                            ${buyerEmail ? `<div>${buyerEmail}</div>` : ''}
                            ${buyerPhone ? `<div>${buyerPhone}</div>` : ''}
                        </div>
                    </div>
                </div>
                
                <div class="invoice-items">
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th>${t('description')}</th>
                                <th class="text-center">${t('qty')}</th>
                                <th class="text-right">${t('unitPrice')}</th>
                                <th class="text-right">${t('discount')}</th>
                                <th class="text-right">${t('tax')}</th>
                                <th class="text-right">${t('total')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${items.map(item => `
                                <tr>
                                    <td class="item-description">${item.description || 'Item'}</td>
                                    <td class="text-center">${this.formatNumber(item.quantity || 0, language)}</td>
                                    <td class="text-right">${this.formatCurrency(item.price || 0, currency, language)}</td>
                                    <td class="text-right">${this.formatNumber(item.discount || 0, language)}%</td>
                                    <td class="text-right">${this.formatNumber(item.tax || 0, language)}%</td>
                                    <td class="text-right item-amount">${this.formatCurrency(item.total || 0, currency, language)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div class="invoice-totals">
                    <table class="totals-table">
                        <tr>
                            <td>${t('subtotal')}:</td>
                            <td class="total-amount">${this.formatCurrency(subtotal, currency, language)}</td>
                        </tr>
                        ${discountAmount > 0 ? `
                            <tr>
                                <td>${t('discount')}:</td>
                                <td class="total-amount">-${this.formatCurrency(discountAmount, currency, language)}</td>
                            </tr>
                        ` : ''}
                        ${vatAmount > 0 ? `
                            <tr>
                                <td>${t('vatTax')}:</td>
                                <td class="total-amount">${this.formatCurrency(vatAmount, currency, language)}</td>
                            </tr>
                        ` : ''}
                        <tr>
                            <td><strong>${t('grandTotal')}:</strong></td>
                            <td class="total-amount"><strong>${this.formatCurrency(total, currency, language)}</strong></td>
                        </tr>
                    </table>
                </div>
                
                ${bankDetails ? `
                    <div class="payment-info">
                        <h4>${t('paymentInformation')}</h4>
                        <div class="payment-details">
                            <div class="payment-detail">
                                <dt>${t('bankDetails')}:</dt>
                                <dd>${bankDetails.replace(/\n/g, '<br>')}</dd>
                            </div>
                        </div>
                    </div>
                ` : ''}
                
                ${invoiceNotes ? `
                    <div class="invoice-notes">
                        <h4>${t('notes')}</h4>
                        <p>${invoiceNotes.replace(/\n/g, '<br>')}</p>
                    </div>
                ` : ''}
                
                ${termsConditions ? `
                    <div class="invoice-terms">
                        <h4>${t('termsConditions')}</h4>
                        <ul>
                            ${termsConditions.split('\n').filter(line => line.trim()).map(line => 
                                `<li>${line.replace(/^\d+\.\s*/, '')}</li>`
                            ).join('')}
                        </ul>
                    </div>
                ` : ''}
                </div>
                
                <div class="invoice-footer">
                    ${footerText || t('thankYou')}
                </div>
            </div>
        `;
    }
    
    generateClassicTemplate(data) {
        return this.generateModernTemplate(data).replace('template-modern', 'template-classic');
    }
    
    generateMinimalTemplate(data) {
        return this.generateModernTemplate(data).replace('template-modern', 'template-minimal');
    }
    
    generateCorporateTemplate(data) {
        return this.generateModernTemplate(data).replace('template-modern', 'template-corporate');
    }
    
    formatDate(dateString, language = 'en') {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        const locales = {
            en: 'en-US',
            es: 'es-ES',
            fr: 'fr-FR',
            de: 'de-DE',
            it: 'it-IT'
        };
        
        return date.toLocaleDateString(locales[language] || 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    formatNumber(number, language = 'en') {
        const locales = {
            en: 'en-US',
            es: 'es-ES',
            fr: 'fr-FR',
            de: 'de-DE',
            it: 'it-IT'
        };
        
        return new Intl.NumberFormat(locales[language] || 'en-US').format(number);
    }
    
    formatCurrency(amount, currency = 'USD', language = 'en') {
        const locales = {
            en: 'en-US',
            es: 'es-ES',
            fr: 'fr-FR',
            de: 'de-DE',
            it: 'it-IT'
        };
        
        try {
            return new Intl.NumberFormat(locales[language] || 'en-US', {
                style: 'currency',
                currency: currency
            }).format(amount);
        } catch (error) {
            // Fallback for unsupported currencies
            const currencySymbols = {
                'USD': '$',
                'EUR': '€',
                'GBP': '£',
                'JPY': '¥',
                'CAD': 'C$',
                'AUD': 'A$'
            };
            
            const symbol = currencySymbols[currency] || currency;
            return symbol + Number(amount).toFixed(2);
        }
    }
    
    getPaymentTermsText(terms, language = 'en') {
        const termTexts = {
            en: {
                'net30': 'Net 30 days',
                'net15': 'Net 15 days',
                'net7': 'Net 7 days',
                'due_on_receipt': 'Due on receipt',
                'custom': 'Custom terms'
            },
            es: {
                'net30': 'Neto 30 días',
                'net15': 'Neto 15 días',
                'net7': 'Neto 7 días',
                'due_on_receipt': 'Vencimiento al recibo',
                'custom': 'Términos personalizados'
            },
            fr: {
                'net30': 'Net 30 jours',
                'net15': 'Net 15 jours',
                'net7': 'Net 7 jours',
                'due_on_receipt': 'Dû à réception',
                'custom': 'Conditions personnalisées'
            },
            de: {
                'net30': 'Netto 30 Tage',
                'net15': 'Netto 15 Tage',
                'net7': 'Netto 7 Tage',
                'due_on_receipt': 'Fällig bei Erhalt',
                'custom': 'Individuelle Bedingungen'
            },
            it: {
                'net30': 'Netto 30 giorni',
                'net15': 'Netto 15 giorni',
                'net7': 'Netto 7 giorni',
                'due_on_receipt': 'Dovuto alla ricezione',
                'custom': 'Termini personalizzati'
            }
        };
        
        return termTexts[language]?.[terms] || termTexts.en[terms] || terms;
    }
}

// Initialize invoice generator
window.invoiceGenerator = new InvoiceGenerator();