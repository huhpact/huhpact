// Professional Invoice Generator - Complete Application Logic
// All functionality in one comprehensive file with proper error handling

class InvoiceGenerator {
    constructor() {
        this.currentZoom = 1;
        this.items = [];
        this.translations = {
            en: {
                invoice: 'INVOICE',
                invoiceNumber: 'Invoice Number',
                issueDate: 'Issue Date',
                dueDate: 'Due Date',
                servicePeriod: 'Service Period',
                reference: 'Reference',
                billTo: 'Bill To',
                description: 'Description',
                unitPrice: 'Unit Price',
                quantity: 'Qty',
                discount: 'Discount',
                total: 'Total',
                subtotal: 'Subtotal',
                vatAmount: 'VAT',
                grandTotal: 'Grand Total',
                paymentInfo: 'Payment Information',
                iban: 'IBAN',
                swift: 'SWIFT/BIC',
                remarks: 'Remarks',
                paymentConditions: 'Payment Conditions',
                vatNotApplicable: 'VAT not applicable - Article 293 B of CGI'
            },
            de: {
                invoice: 'RECHNUNG',
                invoiceNumber: 'Rechnungsnummer',
                issueDate: 'Rechnungsdatum',
                dueDate: 'Fälligkeitsdatum',
                servicePeriod: 'Leistungszeitraum',
                reference: 'Referenz',
                billTo: 'Rechnung an',
                description: 'Beschreibung',
                unitPrice: 'Einzelpreis',
                quantity: 'Menge',
                discount: 'Rabatt',
                total: 'Gesamt',
                subtotal: 'Zwischensumme',
                vatAmount: 'MwSt',
                grandTotal: 'Gesamtbetrag',
                paymentInfo: 'Zahlungsinformationen',
                iban: 'IBAN',
                swift: 'SWIFT/BIC',
                remarks: 'Bemerkungen',
                paymentConditions: 'Zahlungsbedingungen',
                vatNotApplicable: 'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet'
            },
            fr: {
                invoice: 'FACTURE',
                invoiceNumber: 'Numéro de facture',
                issueDate: 'Date d\'émission',
                dueDate: 'Date d\'échéance',
                servicePeriod: 'Période de service',
                reference: 'Référence',
                billTo: 'Facturer à',
                description: 'Description',
                unitPrice: 'Prix unitaire',
                quantity: 'Qté',
                discount: 'Remise',
                total: 'Total',
                subtotal: 'Sous-total',
                vatAmount: 'TVA',
                grandTotal: 'Total général',
                paymentInfo: 'Informations de paiement',
                iban: 'IBAN',
                swift: 'SWIFT/BIC',
                remarks: 'Remarques',
                paymentConditions: 'Conditions de paiement',
                vatNotApplicable: 'TVA non applicable - article 293 B du CGI'
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadFromStorage();
        this.addInitialItem();
        this.updatePreview();
        this.setDefaultDates();
    }

    setupEventListeners() {
        // Theme color picker
        document.getElementById('themeColor').addEventListener('change', (e) => {
            document.documentElement.style.setProperty('--theme-color', e.target.value);
            this.updatePreview();
        });

        // Reset button
        document.getElementById('resetBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all data?')) {
                this.resetForm();
            }
        });

        // Company/Individual toggle
        document.getElementById('buyerIsCompany').addEventListener('change', (e) => {
            this.toggleBuyerType(e.target.checked);
        });

        // VAT toggle
        document.getElementById('applyVat').addEventListener('change', (e) => {
            this.toggleVat(e.target.checked);
        });

        // Add item button
        document.getElementById('addItemBtn').addEventListener('click', () => {
            this.addItem();
        });

        // Form inputs that trigger preview update
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                this.saveToStorage();
                this.updatePreview();
            });
        });

        // Zoom controls
        document.getElementById('zoomIn').addEventListener('click', () => this.zoom(1.25));
        document.getElementById('zoomOut').addEventListener('click', () => this.zoom(0.8));

        // PDF generation
        document.getElementById('generatePdfBtn').addEventListener('click', () => this.generatePDF());
        document.getElementById('printBtn').addEventListener('click', () => this.printPreview());

        // Template management
        document.getElementById('loadDemoBtn').addEventListener('click', () => this.loadDemoData());
        document.getElementById('saveTemplateBtn').addEventListener('click', () => this.showSaveTemplateModal());
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());
        document.getElementById('importDataBtn').addEventListener('click', () => document.getElementById('importFile').click());
        document.getElementById('importFile').addEventListener('change', (e) => this.importData(e));

        // Modal handlers
        document.getElementById('cancelSaveTemplate').addEventListener('click', () => this.hideSaveTemplateModal());
        document.getElementById('confirmSaveTemplate').addEventListener('click', () => this.saveTemplate());
        document.getElementById('cancelLoadTemplate').addEventListener('click', () => this.hideLoadTemplateModal());

        // Logo upload
        document.getElementById('logoUpload').addEventListener('change', (e) => this.handleLogoUpload(e));
    }

    setDefaultDates() {
        const today = dayjs().format('YYYY-MM-DD');
        const dueDate = dayjs().add(30, 'day').format('YYYY-MM-DD');
        
        document.getElementById('issueDate').value = today;
        document.getElementById('dueDate').value = dueDate;
    }

    toggleBuyerType(isCompany) {
        const contactDiv = document.getElementById('buyerContactDiv');
        const nameLabel = document.getElementById('buyerNameLabel');
        const taxDiv = document.getElementById('buyerTaxDiv');
        const taxLabel = document.getElementById('buyerTaxLabel');
        const individualLabel = document.getElementById('individualLabel');
        const companyLabel = document.getElementById('companyLabel');

        if (isCompany) {
            contactDiv.classList.remove('hidden');
            nameLabel.textContent = 'Company Name *';
            taxLabel.textContent = 'VAT Number';
            individualLabel.classList.remove('label-active');
            individualLabel.classList.add('label-inactive');
            companyLabel.classList.remove('label-inactive');
            companyLabel.classList.add('label-active');
        } else {
            contactDiv.classList.add('hidden');
            nameLabel.textContent = 'Name *';
            taxLabel.textContent = 'Tax ID';
            individualLabel.classList.remove('label-inactive');
            individualLabel.classList.add('label-active');
            companyLabel.classList.remove('label-active');
            companyLabel.classList.add('label-inactive');
        }
        this.updatePreview();
    }

    toggleVat(applyVat) {
        const vatRateDiv = document.getElementById('vatRateDiv');
        const vatSection = document.getElementById('vatSection');
        
        if (applyVat) {
            vatRateDiv.classList.remove('hidden');
            vatSection.classList.remove('hidden');
        } else {
            vatRateDiv.classList.add('hidden');
            vatSection.classList.add('hidden');
        }
        this.updateTotals();
        this.updatePreview();
    }

    addItem() {
        const item = {
            id: Date.now(),
            description: '',
            unitPrice: 0,
            quantity: 1,
            discountType: 'percentage',
            discountValue: 0
        };
        
        this.items.push(item);
        this.renderItems();
        this.updateTotals();
        this.updatePreview();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.renderItems();
        this.updateTotals();
        this.updatePreview();
    }

    renderItems() {
        const tbody = document.getElementById('itemsTableBody');
        tbody.innerHTML = '';

        this.items.forEach((item, index) => {
            const row = document.createElement('tr');
            row.className = 'border-b border-gray-700';
            row.innerHTML = `
                <td class="py-2 px-1">
                    <input type="text" value="${item.description}" 
                           onchange="invoiceApp.updateItem(${item.id}, 'description', this.value)"
                           class="w-full bg-transparent border-none text-sm focus:outline-none focus:bg-gray-700 rounded px-2 py-1"
                           placeholder="Item description">
                </td>
                <td class="py-2 px-1">
                    <input type="number" value="${item.unitPrice}" step="0.01" min="0"
                           onchange="invoiceApp.updateItem(${item.id}, 'unitPrice', parseFloat(this.value) || 0)"
                           class="w-full bg-transparent border-none text-right text-sm focus:outline-none focus:bg-gray-700 rounded px-2 py-1">
                </td>
                <td class="py-2 px-1">
                    <input type="number" value="${item.quantity}" step="1" min="1"
                           onchange="invoiceApp.updateItem(${item.id}, 'quantity', parseInt(this.value) || 1)"
                           class="w-full bg-transparent border-none text-right text-sm focus:outline-none focus:bg-gray-700 rounded px-2 py-1">
                </td>
                <td class="py-2 px-1">
                    <div class="flex items-center space-x-1">
                        <input type="number" value="${item.discountValue}" step="0.01" min="0"
                               onchange="invoiceApp.updateItem(${item.id}, 'discountValue', parseFloat(this.value) || 0)"
                               class="w-16 bg-transparent border-none text-right text-sm focus:outline-none focus:bg-gray-700 rounded px-1 py-1">
                        <select onchange="invoiceApp.updateItem(${item.id}, 'discountType', this.value)"
                                class="bg-gray-700 border-none text-xs rounded px-1 py-1">
                            <option value="percentage" ${item.discountType === 'percentage' ? 'selected' : ''}>%</option>
                            <option value="fixed" ${item.discountType === 'fixed' ? 'selected' : ''}>€</option>
                        </select>
                    </div>
                </td>
                <td class="py-2 px-1 text-right text-sm font-medium">
                    ${this.formatCurrency(this.calculateLineTotal(item))}
                </td>
                <td class="py-2 px-1 text-center">
                    <button onclick="invoiceApp.removeItem(${item.id})" 
                            class="p-1 text-red-400 hover:text-red-300 transition-colors">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Re-initialize Lucide icons for new elements
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    updateItem(id, field, value) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item[field] = value;
            this.renderItems();
            this.updateTotals();
            this.updatePreview();
            this.saveToStorage();
        }
    }

    calculateLineTotal(item) {
        const subtotal = item.unitPrice * item.quantity;
        let discount = 0;
        
        if (item.discountType === 'percentage') {
            discount = subtotal * (item.discountValue / 100);
        } else {
            discount = item.discountValue;
        }
        
        return Math.max(0, subtotal - discount);
    }

    updateTotals() {
        const currency = document.getElementById('currency').value;
        const applyVat = document.getElementById('applyVat').checked;
        const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;

        let subtotal = 0;
        let totalDiscount = 0;

        this.items.forEach(item => {
            const lineSubtotal = item.unitPrice * item.quantity;
            subtotal += lineSubtotal;
            
            if (item.discountType === 'percentage') {
                totalDiscount += lineSubtotal * (item.discountValue / 100);
            } else {
                totalDiscount += item.discountValue;
            }
        });

        const discountedSubtotal = subtotal - totalDiscount;
        const vatAmount = applyVat ? discountedSubtotal * (vatRate / 100) : 0;
        const grandTotal = discountedSubtotal + vatAmount;

        // Update display
        document.getElementById('subtotalDisplay').textContent = this.formatCurrency(subtotal, currency);
        document.getElementById('discountDisplay').textContent = `-${this.formatCurrency(totalDiscount, currency)}`;
        document.getElementById('vatDisplay').textContent = this.formatCurrency(vatAmount, currency);
        document.getElementById('totalDisplay').textContent = this.formatCurrency(grandTotal, currency);

        // Show/hide sections
        document.getElementById('discountSection').classList.toggle('hidden', totalDiscount === 0);
        document.getElementById('vatSection').classList.toggle('hidden', !applyVat);
    }

    formatCurrency(amount, currency = 'EUR') {
        const symbols = { EUR: '€', USD: '$', GBP: '£', CHF: 'CHF', JPY: '¥' };
        const symbol = symbols[currency] || currency;
        
        if (currency === 'JPY') {
            return `${symbol}${Math.round(amount).toLocaleString()}`;
        }
        
        return `${symbol}${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }

    zoom(factor) {
        this.currentZoom *= factor;
        this.currentZoom = Math.max(0.5, Math.min(2, this.currentZoom));
        
        const preview = document.getElementById('pdfPreview');
        preview.style.transform = `scale(${this.currentZoom})`;
        preview.style.transformOrigin = 'top left';
        
        document.getElementById('zoomLevel').textContent = `${Math.round(this.currentZoom * 100)}%`;
    }

    async updatePreview() {
        const previewDiv = document.getElementById('pdfPreview');
        const language = document.getElementById('language').value;
        const t = this.translations[language];
        const themeColor = document.getElementById('themeColor').value;

        // Get form data
        const data = this.getFormData();
        
        // Create HTML preview that matches PDF layout
        const previewHTML = `
            <div style="
                background: white; 
                color: #1f2937; 
                padding: 40px; 
                font-family: 'Helvetica', sans-serif; 
                line-height: 1.5;
                border-radius: 16px;
                box-shadow: 
                    0 25px 50px rgba(0, 0, 0, 0.25),
                    0 12px 24px rgba(0, 0, 0, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
                min-height: 800px;
                position: relative;
            ">
                <!-- Header -->
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid ${themeColor};">
                    <div>
                        ${data.vendorCompany ? `<h1 style="font-size: 24px; font-weight: bold; color: ${themeColor}; margin: 0 0 8px 0;">${data.vendorCompany}</h1>` : ''}
                        ${data.vendorAddress ? `<div style="color: #6b7280; white-space: pre-line; font-size: 14px;">${data.vendorAddress}</div>` : ''}
                        ${data.vendorEmail || data.vendorPhone ? `<div style="margin-top: 8px; font-size: 14px; color: #6b7280;">
                            ${data.vendorEmail ? `<div>Email: ${data.vendorEmail}</div>` : ''}
                            ${data.vendorPhone ? `<div>Phone: ${data.vendorPhone}</div>` : ''}
                        </div>` : ''}
                    </div>
                    <div style="text-align: right;">
                        <h2 style="font-size: 32px; font-weight: bold; color: ${themeColor}; margin: 0 0 16px 0;">${t.invoice}</h2>
                        <div style="background: #f9fafb; padding: 16px; border-radius: 12px; border-left: 4px solid ${themeColor};">
                            ${data.invoiceNumber ? `<div style="margin-bottom: 8px;"><strong>${t.invoiceNumber}:</strong> ${data.invoiceNumber}</div>` : ''}
                            ${data.issueDate ? `<div style="margin-bottom: 8px;"><strong>${t.issueDate}:</strong> ${dayjs(data.issueDate).format('DD/MM/YYYY')}</div>` : ''}
                            ${data.dueDate ? `<div style="margin-bottom: 8px;"><strong>${t.dueDate}:</strong> ${dayjs(data.dueDate).format('DD/MM/YYYY')}</div>` : ''}
                            ${data.servicePeriod ? `<div style="margin-bottom: 8px;"><strong>${t.servicePeriod}:</strong> ${data.servicePeriod}</div>` : ''}
                            ${data.reference ? `<div><strong>${t.reference}:</strong> ${data.reference}</div>` : ''}
                        </div>
                    </div>
                </div>

                <!-- Buyer Information -->
                ${data.buyerName ? `
                <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 18px; font-weight: bold; color: ${themeColor}; margin-bottom: 12px;">${t.billTo}</h3>
                    <div style="background: #f9fafb; padding: 16px; border-radius: 12px;">
                        <div style="font-weight: bold; margin-bottom: 4px;">${data.buyerName}</div>
                        ${data.buyerContact ? `<div style="margin-bottom: 4px;">${data.buyerContact}</div>` : ''}
                        ${data.buyerAddress ? `<div style="color: #6b7280; white-space: pre-line; margin-bottom: 8px;">${data.buyerAddress}</div>` : ''}
                        ${data.buyerEmail || data.buyerPhone ? `<div style="font-size: 14px; color: #6b7280;">
                            ${data.buyerEmail ? `<div>Email: ${data.buyerEmail}</div>` : ''}
                            ${data.buyerPhone ? `<div>Phone: ${data.buyerPhone}</div>` : ''}
                        </div>` : ''}
                    </div>
                </div>` : ''}

                <!-- Items Table -->
                <div style="margin-bottom: 32px;">
                    <table style="width: 100%; border-collapse: separate; border-spacing: 0; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                        <thead>
                            <tr style="background: ${themeColor}; color: white;">
                                <th style="padding: 16px; text-align: left; font-weight: 600;">${t.description}</th>
                                <th style="padding: 16px; text-align: right; font-weight: 600;">${t.unitPrice}</th>
                                <th style="padding: 16px; text-align: right; font-weight: 600;">${t.quantity}</th>
                                <th style="padding: 16px; text-align: right; font-weight: 600;">${t.discount}</th>
                                <th style="padding: 16px; text-align: right; font-weight: 600;">${t.total}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.items.map((item, index) => `
                                <tr style="background: ${index % 2 === 0 ? '#ffffff' : '#f9fafb'};">
                                    <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">${item.description || '-'}</td>
                                    <td style="padding: 12px 16px; text-align: right; border-bottom: 1px solid #e5e7eb;">${this.formatCurrency(item.unitPrice, data.currency)}</td>
                                    <td style="padding: 12px 16px; text-align: right; border-bottom: 1px solid #e5e7eb;">${item.quantity}</td>
                                    <td style="padding: 12px 16px; text-align: right; border-bottom: 1px solid #e5e7eb;">
                                        ${item.discountValue > 0 ? (item.discountType === 'percentage' ? `${item.discountValue}%` : this.formatCurrency(item.discountValue, data.currency)) : '-'}
                                    </td>
                                    <td style="padding: 12px 16px; text-align: right; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${this.formatCurrency(this.calculateLineTotal(item), data.currency)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Totals -->
                <div style="display: flex; justify-content: flex-end; margin-bottom: 32px;">
                    <div style="background: #f9fafb; padding: 20px; border-radius: 12px; min-width: 300px;">
                        ${this.generateTotalsHTML(data, t, themeColor)}
                    </div>
                </div>

                <!-- Payment Information -->
                ${data.iban || data.swift || data.paymentLink ? `
                <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 18px; font-weight: bold; color: ${themeColor}; margin-bottom: 12px;">${t.paymentInfo}</h3>
                    <div style="background: #f9fafb; padding: 16px; border-radius: 12px;">
                        ${data.iban ? `<div style="margin-bottom: 8px;"><strong>IBAN:</strong> ${data.iban}</div>` : ''}
                        ${data.swift ? `<div style="margin-bottom: 8px;"><strong>SWIFT/BIC:</strong> ${data.swift}</div>` : ''}
                        ${data.paymentLink ? `<div><strong>Payment Link:</strong> <a href="${data.paymentLink}" style="color: ${themeColor};">${data.paymentLink}</a></div>` : ''}
                    </div>
                </div>` : ''}

                <!-- Additional Information -->
                ${data.remarks || data.paymentConditions ? `
                <div style="margin-bottom: 40px;">
                    ${data.remarks ? `<div style="margin-bottom: 16px;">
                        <h4 style="font-weight: bold; margin-bottom: 8px; color: ${themeColor};">${t.remarks}</h4>
                        <div style="color: #6b7280; white-space: pre-line;">${data.remarks}</div>
                    </div>` : ''}
                    ${data.paymentConditions ? `<div>
                        <h4 style="font-weight: bold; margin-bottom: 8px; color: ${themeColor};">${t.paymentConditions}</h4>
                        <div style="color: #6b7280; white-space: pre-line;">${data.paymentConditions}</div>
                    </div>` : ''}
                </div>` : ''}

                <!-- Footer -->
                <div style="
                    position: absolute; 
                    bottom: 20px; 
                    left: 40px; 
                    right: 40px; 
                    text-align: center; 
                    font-size: 12px; 
                    color: #9ca3af; 
                    border-top: 1px solid #e5e7eb; 
                    padding-top: 16px;
                ">
                    © 2025 huh(pact) - Professional Invoice Generator
                </div>
            </div>
        `;

        previewDiv.innerHTML = previewHTML;
    }

    generateTotalsHTML(data, t, themeColor) {
        const currency = data.currency;
        const applyVat = data.applyVat;
        const vatRate = data.vatRate;

        let subtotal = 0;
        let totalDiscount = 0;

        this.items.forEach(item => {
            const lineSubtotal = item.unitPrice * item.quantity;
            subtotal += lineSubtotal;
            
            if (item.discountType === 'percentage') {
                totalDiscount += lineSubtotal * (item.discountValue / 100);
            } else {
                totalDiscount += item.discountValue;
            }
        });

        const discountedSubtotal = subtotal - totalDiscount;
        const vatAmount = applyVat ? discountedSubtotal * (vatRate / 100) : 0;
        const grandTotal = discountedSubtotal + vatAmount;

        let html = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>${t.subtotal}:</span>
                <span>${this.formatCurrency(subtotal, currency)}</span>
            </div>
        `;

        if (totalDiscount > 0) {
            html += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #dc2626;">
                    <span>${t.discount}:</span>
                    <span>-${this.formatCurrency(totalDiscount, currency)}</span>
                </div>
            `;
        }

        if (applyVat && vatAmount > 0) {
            html += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>${t.vatAmount} (${vatRate}%):</span>
                    <span>${this.formatCurrency(vatAmount, currency)}</span>
                </div>
            `;
        }

        html += `
            <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 2px solid ${themeColor}; font-weight: bold; font-size: 18px; color: ${themeColor};">
                <span>${t.grandTotal}:</span>
                <span>${this.formatCurrency(grandTotal, currency)}</span>
            </div>
        `;

        if (!applyVat) {
            html += `
                <div style="margin-top: 12px; font-size: 12px; color: #6b7280; font-style: italic;">
                    ${t.vatNotApplicable}
                </div>
            `;
        }

        return html;
    }

    getFormData() {
        return {
            language: document.getElementById('language').value,
            currency: document.getElementById('currency').value,
            invoiceNumber: document.getElementById('invoiceNumber').value,
            issueDate: document.getElementById('issueDate').value,
            dueDate: document.getElementById('dueDate').value,
            servicePeriod: document.getElementById('servicePeriod').value,
            reference: document.getElementById('reference').value,
            vendorCompany: document.getElementById('vendorCompany').value,
            vendorContact: document.getElementById('vendorContact').value,
            vendorAddress: document.getElementById('vendorAddress').value,
            vendorEmail: document.getElementById('vendorEmail').value,
            vendorPhone: document.getElementById('vendorPhone').value,
            vendorVat: document.getElementById('vendorVat').value,
            buyerName: document.getElementById('buyerName').value,
            buyerContact: document.getElementById('buyerContact').value,
            buyerAddress: document.getElementById('buyerAddress').value,
            buyerEmail: document.getElementById('buyerEmail').value,
            buyerPhone: document.getElementById('buyerPhone').value,
            buyerTaxId: document.getElementById('buyerTaxId').value,
            buyerIsCompany: document.getElementById('buyerIsCompany').checked,
            applyVat: document.getElementById('applyVat').checked,
            vatRate: parseFloat(document.getElementById('vatRate').value) || 0,
            iban: document.getElementById('iban').value,
            swift: document.getElementById('swift').value,
            paymentLink: document.getElementById('paymentLink').value,
            remarks: document.getElementById('remarks').value,
            paymentConditions: document.getElementById('paymentConditions').value
        };
    }

    async generatePDF() {
        const data = this.getFormData();
        const language = data.language;
        const t = this.translations[language];
        const themeColor = document.getElementById('themeColor').value;

        // Calculate totals
        let subtotal = 0;
        let totalDiscount = 0;

        this.items.forEach(item => {
            const lineSubtotal = item.unitPrice * item.quantity;
            subtotal += lineSubtotal;
            
            if (item.discountType === 'percentage') {
                totalDiscount += lineSubtotal * (item.discountValue / 100);
            } else {
                totalDiscount += item.discountValue;
            }
        });

        const discountedSubtotal = subtotal - totalDiscount;
        const vatAmount = data.applyVat ? discountedSubtotal * (data.vatRate / 100) : 0;
        const grandTotal = discountedSubtotal + vatAmount;

        // Create PDF document definition
        const docDefinition = {
            pageSize: 'A4',
            pageMargins: [40, 60, 40, 80],
            background: {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 595.28,
                        h: 841.89,
                        color: '#ffffff'
                    }
                ]
            },
            content: [
                // Header
                {
                    columns: [
                        {
                            width: '*',
                            stack: [
                                data.vendorCompany ? { text: data.vendorCompany, style: 'companyName' } : {},
                                data.vendorAddress ? { text: data.vendorAddress, style: 'address' } : {},
                                data.vendorEmail || data.vendorPhone ? {
                                    stack: [
                                        data.vendorEmail ? { text: `Email: ${data.vendorEmail}`, style: 'contact' } : {},
                                        data.vendorPhone ? { text: `Phone: ${data.vendorPhone}`, style: 'contact' } : {}
                                    ],
                                    margin: [0, 8, 0, 0]
                                } : {}
                            ]
                        },
                        {
                            width: 200,
                            stack: [
                                { text: t.invoice, style: 'invoiceTitle' },
                                {
                                    table: {
                                        body: [
                                            data.invoiceNumber ? [{ text: `${t.invoiceNumber}:`, style: 'labelBold' }, { text: data.invoiceNumber, style: 'value' }] : [],
                                            data.issueDate ? [{ text: `${t.issueDate}:`, style: 'labelBold' }, { text: dayjs(data.issueDate).format('DD/MM/YYYY'), style: 'value' }] : [],
                                            data.dueDate ? [{ text: `${t.dueDate}:`, style: 'labelBold' }, { text: dayjs(data.dueDate).format('DD/MM/YYYY'), style: 'value' }] : [],
                                            data.servicePeriod ? [{ text: `${t.servicePeriod}:`, style: 'labelBold' }, { text: data.servicePeriod, style: 'value' }] : [],
                                            data.reference ? [{ text: `${t.reference}:`, style: 'labelBold' }, { text: data.reference, style: 'value' }] : []
                                        ].filter(row => row.length > 0)
                                    },
                                    layout: 'noBorders',
                                    margin: [0, 16, 0, 0]
                                }
                            ]
                        }
                    ],
                    margin: [0, 0, 0, 32]
                },

                // Buyer Information
                data.buyerName ? {
                    stack: [
                        { text: t.billTo, style: 'sectionHeader' },
                        {
                            table: {
                                body: [[{
                                    stack: [
                                        { text: data.buyerName, style: 'buyerName' },
                                        data.buyerContact ? { text: data.buyerContact, style: 'buyerContact' } : {},
                                        data.buyerAddress ? { text: data.buyerAddress, style: 'address' } : {},
                                        data.buyerEmail || data.buyerPhone ? {
                                            stack: [
                                                data.buyerEmail ? { text: `Email: ${data.buyerEmail}`, style: 'contact' } : {},
                                                data.buyerPhone ? { text: `Phone: ${data.buyerPhone}`, style: 'contact' } : {}
                                            ],
                                            margin: [0, 4, 0, 0]
                                        } : {}
                                    ]
                                }]]
                            },
                            layout: {
                                fillColor: '#f9fafb',
                                hLineWidth: () => 0,
                                vLineWidth: () => 0
                            }
                        }
                    ],
                    margin: [0, 0, 0, 24]
                } : {},

                // Items Table
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', 80, 60, 80, 80],
                        body: [
                            [
                                { text: t.description, style: 'tableHeader' },
                                { text: t.unitPrice, style: 'tableHeader', alignment: 'right' },
                                { text: t.quantity, style: 'tableHeader', alignment: 'right' },
                                { text: t.discount, style: 'tableHeader', alignment: 'right' },
                                { text: t.total, style: 'tableHeader', alignment: 'right' }
                            ],
                            ...this.items.map(item => [
                                { text: item.description || '-', style: 'tableCell', margin: [0, 8, 0, 8] },
                                { text: this.formatCurrency(item.unitPrice, data.currency), style: 'tableCell', alignment: 'right' },
                                { text: item.quantity.toString(), style: 'tableCell', alignment: 'right' },
                                { 
                                    text: item.discountValue > 0 ? 
                                        (item.discountType === 'percentage' ? `${item.discountValue}%` : this.formatCurrency(item.discountValue, data.currency)) : 
                                        '-', 
                                    style: 'tableCell', 
                                    alignment: 'right' 
                                },
                                { text: this.formatCurrency(this.calculateLineTotal(item), data.currency), style: 'tableCellBold', alignment: 'right' }
                            ])
                        ]
                    },
                    layout: {
                        fillColor: function (rowIndex) {
                            return (rowIndex === 0) ? '#f8fafc' : (rowIndex % 2 === 0) ? '#ffffff' : '#f8fafc';
                        },
                        paddingTop: () => 12, paddingBottom: () => 12,
                        hLineWidth: function (i, node) {
                            return i === 0 || i === 1 || i === node.table.body.length ? 2 : 1;
                        },
                        vLineWidth: () => 0,
                        hLineColor: function (i) {
                            return i === 0 || i === 1 ? themeColor : '#e5e7eb';
                        }
                    },
                    margin: [0, 20, 0, 20]
                },

                // Totals
                {
                    columns: [
                        { width: '*', text: '' },
                        {
                            width: 200,
                            table: {
                                body: [
                                    [{ text: t.subtotal, style: 'totalLabel' }, { text: this.formatCurrency(subtotal, data.currency), style: 'totalValue' }],
                                    ...(totalDiscount > 0 ? [[{ text: t.discount, style: 'totalLabel' }, { text: `-${this.formatCurrency(totalDiscount, data.currency)}`, style: 'totalValue', color: '#dc2626' }]] : []),
                                    ...(data.applyVat && vatAmount > 0 ? [[{ text: `${t.vatAmount} (${data.vatRate}%)`, style: 'totalLabel' }, { text: this.formatCurrency(vatAmount, data.currency), style: 'totalValue' }]] : []),
                                    [{ text: t.grandTotal, style: 'grandTotalLabel' }, { text: this.formatCurrency(grandTotal, data.currency), style: 'grandTotalValue' }],
                                    ...(!data.applyVat ? [[{ text: t.vatNotApplicable, style: 'vatNote', colSpan: 2, alignment: 'center' }]] : [])
                                ]
                            },
                            layout: {
                                hLineWidth: (i, node) => i === 0 ? 1 : 0,
                                vLineWidth: () => 0
                            }
                        }
                    ],
                    margin: [0, 0, 0, 24]
                },

                // Payment Information
                ...(data.iban || data.swift || data.paymentLink ? [{
                    stack: [
                        { text: t.paymentInfo, style: 'sectionHeader' },
                        {
                            table: {
                                body: [[{
                                    stack: [
                                        data.iban ? { text: `IBAN: ${data.iban}`, style: 'paymentDetail' } : {},
                                        data.swift ? { text: `SWIFT/BIC: ${data.swift}`, style: 'paymentDetail' } : {},
                                        data.paymentLink ? { text: `Payment Link: ${data.paymentLink}`, style: 'paymentDetail', color: themeColor } : {}
                                    ]
                                }]]
                            },
                            layout: {
                                fillColor: '#f9fafb',
                                hLineWidth: () => 0,
                                vLineWidth: () => 0
                            }
                        }
                    ],
                    margin: [0, 0, 0, 16]
                }] : []),

                // Additional Information
                ...(data.remarks || data.paymentConditions ? [{
                    stack: [
                        data.remarks ? {
                            stack: [
                                { text: t.remarks, style: 'sectionHeader' },
                                { text: data.remarks, style: 'remarks' }
                            ],
                            margin: [0, 0, 0, 12]
                        } : {},
                        data.paymentConditions ? {
                            stack: [
                                { text: t.paymentConditions, style: 'sectionHeader' },
                                { text: data.paymentConditions, style: 'remarks' }
                            ]
                        } : {}
                    ],
                    margin: [0, 20, 0, 0]
                }] : [])
            ],
            footer: function(currentPage, pageCount) {
                return {
                    text: '© 2025 huh(pact) - Professional Invoice Generator',
                    alignment: 'center', 
                    fontSize: 8,
                    color: '#666666',
                    margin: [0, 0, 0, 20]
                };
            },
            styles: {
                companyName: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 5]
                },
                companyDetails: {
                    fontSize: 9,
                    color: '#666666',
                    lineHeight: 1.3
                },
                invoiceTitle: {
                    fontSize: 24,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                invoiceDetails: {
                    fontSize: 9,
                    margin: [0, 0, 0, 2]
                },
                sectionTitle: {
                    fontSize: 11,
                    bold: true,
                    margin: [0, 15, 0, 5]
                },
                clientInfo: {
                    fontSize: 9,
                    lineHeight: 1.3
                },
                tableHeader: {
                    fontSize: 10,
                    bold: true,
                    color: '#374151',
                    margin: [0, 5, 0, 5]
                },
                tableCell: {
                    fontSize: 9,
                    margin: [0, 3, 0, 3]
                },
                totalLabel: {
                    fontSize: 11,
                    bold: true,
                    margin: [0, 3, 0, 3]
                },
                totalAmount: {
                    fontSize: 11,
                    bold: true,
                    margin: [0, 3, 0, 3]
                },
                address: { fontSize: 11, color: '#6b7280', margin: [0, 4, 0, 0] },
                contact: { fontSize: 10, color: '#6b7280' },
                labelBold: { fontSize: 10, bold: true },
                value: { fontSize: 10 },
                sectionHeader: { fontSize: 14, bold: true, color: themeColor, margin: [0, 0, 0, 8] },
                buyerName: { fontSize: 12, bold: true },
                buyerContact: { fontSize: 11, color: '#6b7280' },
                tableCellBold: { fontSize: 10, bold: true, margin: [8, 6, 8, 6] },
                totalValue: { fontSize: 11, alignment: 'right' },
                grandTotalLabel: { fontSize: 13, bold: true, color: themeColor },
                grandTotalValue: { fontSize: 13, bold: true, color: themeColor, alignment: 'right' },
                vatNote: { fontSize: 9, italics: true, color: '#6b7280', margin: [0, 8, 0, 0] },
                paymentDetail: { fontSize: 10, margin: [0, 2, 0, 0] },
                remarks: { fontSize: 10, color: '#6b7280', margin: [0, 4, 0, 0] }
            }
        };

        // Generate and download PDF
        const filename = `Invoice_${data.invoiceNumber || 'Draft'}.pdf`;
        pdfMake.createPdf(docDefinition).download(filename);
    }

    printPreview() {
        const printWindow = window.open('', '_blank');
        const previewContent = document.getElementById('pdfPreview').innerHTML;
        
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Invoice Preview</title>
                <style>
                    body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                ${previewContent}
            </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
    }

    loadDemoData() {
        // Set demo data
        document.getElementById('language').value = 'en';
        document.getElementById('currency').value = 'EUR';
        document.getElementById('invoiceNumber').value = 'INV-2025-001';
        document.getElementById('issueDate').value = dayjs().format('YYYY-MM-DD');
        document.getElementById('dueDate').value = dayjs().add(30, 'day').format('YYYY-MM-DD');
        document.getElementById('servicePeriod').value = 'January 2025';
        document.getElementById('reference').value = 'PO-12345';
        
        document.getElementById('vendorCompany').value = 'huh(pact) Solutions Ltd.';
        document.getElementById('vendorContact').value = 'John Smith';
        document.getElementById('vendorAddress').value = '123 Business Street\nSuite 100\nLondon, UK SW1A 1AA';
        document.getElementById('vendorEmail').value = 'hello@huhpact.com';
        document.getElementById('vendorPhone').value = '+44 20 7123 4567';
        document.getElementById('vendorVat').value = 'GB123456789';
        
        document.getElementById('buyerName').value = 'Acme Corporation';
        document.getElementById('buyerContact').value = 'Jane Doe';
        document.getElementById('buyerAddress').value = '456 Client Avenue\nFloor 5\nNew York, NY 10001';
        document.getElementById('buyerEmail').value = 'jane@acme.com';
        document.getElementById('buyerPhone').value = '+1 555 123 4567';
        document.getElementById('buyerTaxId').value = 'US987654321';
        document.getElementById('buyerIsCompany').checked = true;
        this.toggleBuyerType(true);
        
        document.getElementById('applyVat').checked = true;
        document.getElementById('vatRate').value = '20';
        this.toggleVat(true);
        
        document.getElementById('iban').value = 'GB29 NWBK 6016 1331 9268 19';
        document.getElementById('swift').value = 'NWBKGB2L';
        document.getElementById('paymentLink').value = 'https://pay.huhpact.com/inv-001';
        
        document.getElementById('remarks').value = 'Thank you for your business!';
        document.getElementById('paymentConditions').value = 'Net 30 days. Late payment fee: 1.5% per month.';

        // Add demo items
        this.items = [
            {
                id: 1,
                description: 'Web Development Services',
                unitPrice: 150,
                quantity: 40,
                discountType: 'percentage',
                discountValue: 10
            },
            {
                id: 2,
                description: 'UI/UX Design Consultation',
                unitPrice: 120,
                quantity: 20,
                discountType: 'fixed',
                discountValue: 200
            },
            {
                id: 3,
                description: 'Project Management',
                unitPrice: 100,
                quantity: 15,
                discountType: 'percentage',
                discountValue: 0
            }
        ];

        this.renderItems();
        this.updateTotals();
        this.updatePreview();
        this.saveToStorage();
    }

    showSaveTemplateModal() {
        document.getElementById('saveTemplateModal').classList.remove('hidden');
    }

    hideSaveTemplateModal() {
        document.getElementById('saveTemplateModal').classList.add('hidden');
        document.getElementById('templateName').value = '';
    }

    saveTemplate() {
        const name = document.getElementById('templateName').value.trim();
        if (!name) {
            alert('Please enter a template name');
            return;
        }

        const data = {
            ...this.getFormData(),
            items: this.items
        };

        const templates = JSON.parse(localStorage.getItem('invoiceTemplates') || '{}');
        templates[name] = data;
        localStorage.setItem('invoiceTemplates', JSON.stringify(templates));

        this.hideSaveTemplateModal();
        alert('Template saved successfully!');
    }

    exportData() {
        const data = {
            ...this.getFormData(),
            items: this.items
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice_${data.invoiceNumber || 'data'}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.loadData(data);
                alert('Data imported successfully!');
            } catch (error) {
                alert('Error importing data. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }

    loadData(data) {
        // Load form data
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = data[key];
                } else {
                    element.value = data[key] || '';
                }
            }
        });

        // Load items
        if (data.items) {
            this.items = data.items;
            this.renderItems();
        }

        // Update UI states
        this.toggleBuyerType(data.buyerIsCompany);
        this.toggleVat(data.applyVat);
        this.updateTotals();
        this.updatePreview();
        this.saveToStorage();
    }

    handleLogoUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            this.logoDataUrl = e.target.result;
            this.updatePreview();
        };
        reader.readAsDataURL(file);
    }

    saveToStorage() {
        const data = {
            ...this.getFormData(),
            items: this.items
        };
        localStorage.setItem('invoiceData', JSON.stringify(data));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('invoiceData');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.loadData(data);
            } catch (error) {
                console.error('Error loading saved data:', error);
            }
        }
    }

    resetForm() {
        localStorage.removeItem('invoiceData');
        document.querySelectorAll('input, textarea, select').forEach(input => {
            if (input.type === 'checkbox') {
                input.checked = false;
            } else if (input.type === 'color') {
                input.value = '#3b82f6';
            } else {
                input.value = '';
            }
        });
        
        this.items = [];
        this.toggleBuyerType(false);
        this.toggleVat(false);
        this.setDefaultDates();
        this.addInitialItem();
        this.updateTotals();
        this.updatePreview();
    }

    addInitialItem() {
        if (this.items.length === 0) {
            this.addItem();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Create global instance
    window.invoiceApp = new InvoiceGenerator();
});