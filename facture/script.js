class InvoiceGenerator {
    constructor() {
        this.items = [];
        this.logoData = null;
        this.autoSaveTimer = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadDefaults();
        this.startAutoSave();
        this.addInitialItem();
    }

    bindEvents() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', this.toggleTheme.bind(this));
        
        // Logo upload
        const logoUpload = document.getElementById('logoUpload');
        const logoInput = document.getElementById('logoInput');
        const removeLogo = document.getElementById('removeLogo');
        
        logoUpload.addEventListener('click', () => logoInput.click());
        logoUpload.addEventListener('dragover', this.handleDragOver.bind(this));
        logoUpload.addEventListener('drop', this.handleLogoDrop.bind(this));
        logoInput.addEventListener('change', this.handleLogoUpload.bind(this));
        removeLogo.addEventListener('click', this.removeLogo.bind(this));
        
        // Invoice number generation
        document.getElementById('generateInvoiceNumber').addEventListener('click', this.generateInvoiceNumber.bind(this));
        
        // Items management
        document.getElementById('addItem').addEventListener('click', this.addItem.bind(this));
        
        // VAT toggle
        document.getElementById('applyVat').addEventListener('change', this.updateTotals.bind(this));
        document.getElementById('vatRate').addEventListener('input', this.updateTotals.bind(this));
        
        // Currency change
        document.getElementById('currency').addEventListener('change', this.updateTotals.bind(this));
        
        // Form changes
        document.getElementById('invoiceForm').addEventListener('input', this.handleFormChange.bind(this));
        document.getElementById('invoiceForm').addEventListener('change', this.handleFormChange.bind(this));
        
        // Actions
        document.getElementById('previewBtn').addEventListener('click', this.showPreview.bind(this));
        document.getElementById('generatePdfBtn').addEventListener('click', this.generatePDF.bind(this));
        document.getElementById('saveDraft').addEventListener('click', this.saveDraft.bind(this));
        document.getElementById('loadDraft').addEventListener('click', this.showDraftsModal.bind(this));
        
        // Modal
        document.getElementById('closeDraftsModal').addEventListener('click', this.closeDraftsModal.bind(this));
        document.getElementById('closePreview').addEventListener('click', this.closePreview.bind(this));
        
        // Keyboard shortcuts
        document.addEventListener('keydown', this.handleKeyboardShortcuts.bind(this));
    }

    loadDefaults() {
        // Set current date
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('creationDate').value = today;
        
        // Set due date (30 days from today)
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        document.getElementById('dueDate').value = dueDate.toISOString().split('T')[0];
        
        // Generate initial invoice number
        this.generateInvoiceNumber();
        
        // Load saved seller info if available
        this.loadSellerProfile();
    }

    generateInvoiceNumber() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        const invoiceNumber = `${year}${month}-${random}`;
        document.getElementById('invoiceNumber').value = invoiceNumber;
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    handleLogoDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.processLogoFile(files[0]);
        }
    }

    handleLogoUpload(e) {
        const file = e.target.files[0];
        if (file) {
            this.processLogoFile(file);
        }
    }

    processLogoFile(file) {
        if (!file.type.match(/image\/(png|jpeg|jpg)/)) {
            alert('Veuillez sélectionner un fichier PNG ou JPG.');
            return;
        }
        
        if (file.size > 2 * 1024 * 1024) {
            alert('Le fichier est trop volumineux. Maximum 2MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            this.logoData = e.target.result;
            this.displayLogo();
        };
        reader.readAsDataURL(file);
    }

    displayLogo() {
        const preview = document.getElementById('logoPreview');
        const removeBtn = document.getElementById('removeLogo');
        
        preview.innerHTML = `<img src="${this.logoData}" alt="Logo">`;
        removeBtn.style.display = 'block';
    }

    removeLogo() {
        this.logoData = null;
        const preview = document.getElementById('logoPreview');
        const removeBtn = document.getElementById('removeLogo');
        
        preview.innerHTML = `
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Glissez votre logo ici ou cliquez pour sélectionner</p>
            <small>PNG, JPG - Max 2MB</small>
        `;
        removeBtn.style.display = 'none';
    }

    addItem() {
        const container = document.getElementById('itemsContainer');
        const itemIndex = this.items.length;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-row';
        itemDiv.innerHTML = `
            <input type="text" placeholder="Description" class="item-description" data-index="${itemIndex}">
            <input type="number" placeholder="0,00" step="0.01" min="0" class="item-price" data-index="${itemIndex}">
            <input type="number" placeholder="1" step="1" min="0" class="item-quantity" data-index="${itemIndex}" value="1">
            <div style="display: flex; gap: 0.25rem;">
                <input type="number" placeholder="0" step="0.01" min="0" class="item-discount" data-index="${itemIndex}" style="flex: 1;">
                <select class="item-discount-type" data-index="${itemIndex}" style="width: 60px;">
                    <option value="percentage">%</option>
                    <option value="fixed">€</option>
                </select>
            </div>
            <div class="item-total">0,00 €</div>
            <button type="button" class="remove-item" data-index="${itemIndex}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        container.appendChild(itemDiv);
        
        // Bind events for new item
        this.bindItemEvents(itemDiv, itemIndex);
        
        this.items.push({
            description: '',
            unitPrice: 0,
            quantity: 1,
            discount: 0,
            discountType: 'percentage',
            total: 0
        });
    }

    bindItemEvents(itemDiv, index) {
        const inputs = itemDiv.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.updateItem(index));
            input.addEventListener('change', () => this.updateItem(index));
        });
        
        const removeBtn = itemDiv.querySelector('.remove-item');
        removeBtn.addEventListener('click', () => this.removeItem(index));
    }

    addInitialItem() {
        this.addItem();
    }

    updateItem(index) {
        const itemRow = document.querySelectorAll('.item-row')[index];
        if (!itemRow) return;
        
        const description = itemRow.querySelector('.item-description').value;
        const unitPrice = parseFloat(itemRow.querySelector('.item-price').value) || 0;
        const quantity = parseFloat(itemRow.querySelector('.item-quantity').value) || 0;
        const discount = parseFloat(itemRow.querySelector('.item-discount').value) || 0;
        const discountType = itemRow.querySelector('.item-discount-type').value;
        
        let lineTotal = unitPrice * quantity;
        
        if (discount > 0) {
            if (discountType === 'percentage') {
                lineTotal = lineTotal * (1 - discount / 100);
            } else {
                lineTotal = lineTotal - discount;
            }
        }
        
        lineTotal = Math.max(0, lineTotal);
        
        this.items[index] = {
            description,
            unitPrice,
            quantity,
            discount,
            discountType,
            total: lineTotal
        };
        
        const currency = document.getElementById('currency').value;
        const language = document.getElementById('invoiceLanguage').value;
        itemRow.querySelector('.item-total').textContent = formatCurrency(lineTotal, currency, language);
        
        this.updateTotals();
    }

    removeItem(index) {
        const itemRows = document.querySelectorAll('.item-row');
        if (itemRows.length <= 1) {
            alert('Vous devez conserver au moins un article.');
            return;
        }
        
        itemRows[index].remove();
        this.items.splice(index, 1);
        
        // Update indices
        this.updateItemIndices();
        this.updateTotals();
    }

    updateItemIndices() {
        const itemRows = document.querySelectorAll('.item-row');
        itemRows.forEach((row, index) => {
            const inputs = row.querySelectorAll('input, select, button');
            inputs.forEach(input => {
                input.setAttribute('data-index', index);
            });
        });
    }

    updateTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.total || 0), 0);
        const applyVat = document.getElementById('applyVat').checked;
        const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;
        const vatAmount = applyVat ? subtotal * (vatRate / 100) : 0;
        const total = subtotal + vatAmount;
        
        const currency = document.getElementById('currency').value;
        const language = document.getElementById('invoiceLanguage').value;
        
        document.getElementById('subtotalDisplay').textContent = formatCurrency(subtotal, currency, language);
        document.getElementById('vatDisplay').textContent = formatCurrency(vatAmount, currency, language);
        document.getElementById('totalDisplay').textContent = formatCurrency(total, currency, language);
        
        // Update VAT exemption notice visibility
        const exemptionNotice = document.getElementById('vatExemptionNotice');
        exemptionNotice.style.display = applyVat ? 'none' : 'flex';
    }

    handleFormChange() {
        this.updateTotals();
        this.scheduleAutoSave();
    }

    toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    }

    startAutoSave() {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            document.getElementById('themeToggle').querySelector('i').className = 'fas fa-sun';
        }
    }

    scheduleAutoSave() {
        if (this.autoSaveTimer) {
            clearTimeout(this.autoSaveTimer);
        }
        
        this.autoSaveTimer = setTimeout(() => {
            this.autoSave();
        }, 3000);
    }

    autoSave() {
        const formData = this.getFormData();
        localStorage.setItem('invoice_autosave', JSON.stringify(formData));
        this.showAutoSaveIndicator();
    }

    showAutoSaveIndicator() {
        let indicator = document.getElementById('autoSaveIndicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'autoSaveIndicator';
            indicator.className = 'auto-save-indicator';
            indicator.innerHTML = '<i class="fas fa-check"></i> Sauvegardé automatiquement';
            document.body.appendChild(indicator);
        }
        
        indicator.classList.add('show');
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 2000);
    }

    getFormData() {
        const form = document.getElementById('invoiceForm');
        const formData = new FormData(form);
        const data = {};
        
        // Get all form values
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Get individual field values
        const fields = [
            'invoiceLanguage', 'currency', 'brandColor', 'invoiceNumber', 'creationDate', 
            'dueDate', 'serviceDate', 'reference', 'sellerCompany', 'sellerContact', 
            'sellerAddress', 'sellerEmail', 'sellerPhone', 'sellerVat', 'sellerReg',
            'buyerCompany', 'buyerContact', 'buyerAddress', 'buyerEmail', 'buyerTax',
            'applyVat', 'vatRate', 'paymentIban', 'paymentBic', 'paymentPaypal', 
            'includeQr', 'notes', 'terms'
        ];
        
        fields.forEach(field => {
            const element = document.getElementById(field);
            if (element) {
                if (element.type === 'checkbox') {
                    data[field] = element.checked;
                } else {
                    data[field] = element.value;
                }
            }
        });
        
        // Add items and logo
        data.items = this.items;
        data.logoData = this.logoData;
        
        return data;
    }

    loadFormData(data) {
        // Load basic fields
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
        
        // Load logo
        if (data.logoData) {
            this.logoData = data.logoData;
            this.displayLogo();
        }
        
        // Load items
        if (data.items && data.items.length > 0) {
            // Clear existing items
            document.getElementById('itemsContainer').innerHTML = '';
            this.items = [];
            
            // Add items
            data.items.forEach(item => {
                this.addItem();
                const index = this.items.length - 1;
                const itemRow = document.querySelectorAll('.item-row')[index];
                
                itemRow.querySelector('.item-description').value = item.description || '';
                itemRow.querySelector('.item-price').value = item.unitPrice || 0;
                itemRow.querySelector('.item-quantity').value = item.quantity || 1;
                itemRow.querySelector('.item-discount').value = item.discount || 0;
                itemRow.querySelector('.item-discount-type').value = item.discountType || 'percentage';
                
                this.updateItem(index);
            });
        }
        
        this.updateTotals();
    }

    saveDraft() {
        const formData = this.getFormData();
        const draftName = `Facture ${formData.invoiceNumber || 'Sans numéro'} - ${new Date().toLocaleDateString('fr-FR')}`;
        
        let drafts = JSON.parse(localStorage.getItem('invoice_drafts') || '[]');
        
        const existingIndex = drafts.findIndex(draft => draft.id === formData.invoiceNumber);
        
        const draftData = {
            id: formData.invoiceNumber || Date.now().toString(),
            name: draftName,
            date: new Date().toISOString(),
            data: formData
        };
        
        if (existingIndex >= 0) {
            drafts[existingIndex] = draftData;
        } else {
            drafts.unshift(draftData);
        }
        
        // Keep only last 10 drafts
        drafts = drafts.slice(0, 10);
        
        localStorage.setItem('invoice_drafts', JSON.stringify(drafts));
        this.showAutoSaveIndicator();
    }

    showDraftsModal() {
        const modal = document.getElementById('draftsModal');
        const modalBody = document.getElementById('draftsModalBody');
        
        const drafts = JSON.parse(localStorage.getItem('invoice_drafts') || '[]');
        
        if (drafts.length === 0) {
            modalBody.innerHTML = '<p>Aucun brouillon sauvegardé.</p>';
        } else {
            modalBody.innerHTML = drafts.map(draft => `
                <div class="draft-item" data-draft-id="${draft.id}">
                    <h4>${draft.name}</h4>
                    <p>Sauvegardé le ${new Date(draft.date).toLocaleDateString('fr-FR')} à ${new Date(draft.date).toLocaleTimeString('fr-FR')}</p>
                    <div class="draft-actions">
                        <button class="btn-primary load-draft" data-draft-id="${draft.id}">
                            <i class="fas fa-folder-open"></i> Charger
                        </button>
                        <button class="btn-danger delete-draft" data-draft-id="${draft.id}">
                            <i class="fas fa-trash"></i> Supprimer
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Bind events
            modalBody.querySelectorAll('.load-draft').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const draftId = e.target.closest('[data-draft-id]').getAttribute('data-draft-id');
                    this.loadDraft(draftId);
                    this.closeDraftsModal();
                });
            });
            
            modalBody.querySelectorAll('.delete-draft').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const draftId = e.target.closest('[data-draft-id]').getAttribute('data-draft-id');
                    this.deleteDraft(draftId);
                });
            });
        }
        
        modal.classList.add('active');
    }

    loadDraft(draftId) {
        const drafts = JSON.parse(localStorage.getItem('invoice_drafts') || '[]');
        const draft = drafts.find(d => d.id === draftId);
        
        if (draft) {
            this.loadFormData(draft.data);
        }
    }

    deleteDraft(draftId) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce brouillon ?')) {
            let drafts = JSON.parse(localStorage.getItem('invoice_drafts') || '[]');
            drafts = drafts.filter(d => d.id !== draftId);
            localStorage.setItem('invoice_drafts', JSON.stringify(drafts));
            this.showDraftsModal(); // Refresh the modal
        }
    }

    closeDraftsModal() {
        document.getElementById('draftsModal').classList.remove('active');
    }

    loadSellerProfile() {
        const profile = JSON.parse(localStorage.getItem('seller_profile') || '{}');
        
        Object.keys(profile).forEach(key => {
            const element = document.getElementById(key);
            if (element && profile[key]) {
                element.value = profile[key];
            }
        });
    }

    saveSellerProfile() {
        const profile = {};
        const sellerFields = [
            'sellerCompany', 'sellerContact', 'sellerAddress', 
            'sellerEmail', 'sellerPhone', 'sellerVat', 'sellerReg'
        ];
        
        sellerFields.forEach(field => {
            const element = document.getElementById(field);
            if (element && element.value) {
                profile[field] = element.value;
            }
        });
        
        localStorage.setItem('seller_profile', JSON.stringify(profile));
    }

    showPreview() {
        const previewSection = document.getElementById('previewSection');
        const previewContent = document.getElementById('previewContent');
        
        const formData = this.getFormData();
        this.generatePreviewHTML(formData, previewContent);
        
        previewSection.classList.add('active');
    }

    closePreview() {
        document.getElementById('previewSection').classList.remove('active');
    }

    generatePreviewHTML(data, container) {
        const language = data.invoiceLanguage || 'fr';
        const currency = data.currency || 'EUR';
        
        const subtotal = this.items.reduce((sum, item) => sum + (item.total || 0), 0);
        const vatAmount = data.applyVat ? subtotal * (parseFloat(data.vatRate) / 100) : 0;
        const total = subtotal + vatAmount;
        
        container.innerHTML = `
            <div style="font-family: 'Inter', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: white; color: black;">
                <!-- Header -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid ${data.brandColor};">
                    <div>
                        <h1 style="font-size: 32px; color: ${data.brandColor}; margin: 0;">${t('invoice', language)}</h1>
                    </div>
                    ${data.logoData ? `<img src="${data.logoData}" style="max-width: 150px; max-height: 80px;">` : ''}
                    <div style="text-align: right;">
                        <div><strong>${t('invoiceNumber', language)}:</strong> ${data.invoiceNumber}</div>
                        <div><strong>${t('date', language)}:</strong> ${formatDate(data.creationDate, language)}</div>
                        ${data.dueDate ? `<div><strong>${t('dueDate', language)}:</strong> ${formatDate(data.dueDate, language)}</div>` : ''}
                        ${data.serviceDate ? `<div><strong>${t('serviceDate', language)}:</strong> ${data.serviceDate}</div>` : ''}
                    </div>
                </div>
                
                <!-- Company Info -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                    <div>
                        <h3 style="color: ${data.brandColor}; margin-top: 0;">${t('buyer', language)}</h3>
                        ${data.buyerCompany ? `<div><strong>${data.buyerCompany}</strong></div>` : ''}
                        ${data.buyerContact ? `<div>${data.buyerContact}</div>` : ''}
                        ${data.buyerAddress ? `<div style="white-space: pre-line;">${data.buyerAddress}</div>` : ''}
                        ${data.buyerEmail ? `<div>${data.buyerEmail}</div>` : ''}
                        ${data.buyerTax ? `<div>Tax: ${data.buyerTax}</div>` : ''}
                    </div>
                    <div>
                        <h3 style="color: ${data.brandColor}; margin-top: 0;">${t('seller', language)}</h3>
                        <div><strong>${data.sellerCompany}</strong></div>
                        <div>${data.sellerContact}</div>
                        <div style="white-space: pre-line;">${data.sellerAddress}</div>
                        <div>${data.sellerEmail}</div>
                        <div>${data.sellerPhone}</div>
                        ${data.sellerVat ? `<div>VAT: ${data.sellerVat}</div>` : ''}
                        ${data.sellerReg ? `<div>Reg: ${data.sellerReg}</div>` : ''}
                    </div>
                </div>
                
                <!-- Items Table -->
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <thead>
                        <tr style="background: ${data.brandColor}; color: white;">
                            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">${t('description', language)}</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">${t('unitPrice', language)}</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">${t('quantity', language)}</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">${t('discount', language)}</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">${t('total', language)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.items.map((item, index) => `
                            <tr style="background: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
                                <td style="padding: 12px; border: 1px solid #ddd;">${item.description || ''}</td>
                                <td style="padding: 12px; text-align: right; border: 1px solid #ddd;">${formatCurrency(item.unitPrice || 0, currency, language)}</td>
                                <td style="padding: 12px; text-align: center; border: 1px solid #ddd;">${item.quantity || 0}</td>
                                <td style="padding: 12px; text-align: center; border: 1px solid #ddd;">
                                    ${item.discountType === 'percentage' ? `${item.discount || 0}%` : formatCurrency(item.discount || 0, currency, language)}
                                </td>
                                <td style="padding: 12px; text-align: right; border: 1px solid #ddd; font-weight: bold;">${formatCurrency(item.total || 0, currency, language)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <!-- Totals -->
                <div style="text-align: right; margin-bottom: 30px;">
                    <div style="display: inline-block; min-width: 300px;">
                        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
                            <span>${t('subtotal', language)}:</span>
                            <span>${formatCurrency(subtotal, currency, language)}</span>
                        </div>
                        ${data.applyVat && vatAmount > 0 ? `
                            <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
                                <span>${t('vat', language)} (${data.vatRate}%):</span>
                                <span>${formatCurrency(vatAmount, currency, language)}</span>
                            </div>
                        ` : ''}
                        <div style="display: flex; justify-content: space-between; padding: 12px 0; font-size: 18px; font-weight: bold; color: ${data.brandColor}; border-top: 2px solid ${data.brandColor};">
                            <span>${t('grandTotal', language)}:</span>
                            <span>${formatCurrency(total, currency, language)}</span>
                        </div>
                    </div>
                </div>
                
                ${!data.applyVat ? `
                    <div style="font-style: italic; color: #666; margin-bottom: 20px; text-align: center;">
                        ${t('vatExemption', language)}
                    </div>
                ` : ''}
                
                <!-- Notes and Terms -->
                ${data.notes ? `
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: ${data.brandColor};">${t('notes', language)}</h4>
                        <div style="white-space: pre-line;">${data.notes}</div>
                    </div>
                ` : ''}
                
                ${data.terms ? `
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: ${data.brandColor};">${t('terms', language)}</h4>
                        <div style="white-space: pre-line;">${data.terms}</div>
                    </div>
                ` : ''}
                
                <!-- Payment Info -->
                ${data.paymentIban || data.paymentBic || data.paymentPaypal ? `
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: ${data.brandColor};">${t('paymentInfo', language)}</h4>
                        ${data.paymentIban ? `<div><strong>${t('iban', language)}:</strong> ${data.paymentIban}</div>` : ''}
                        ${data.paymentBic ? `<div><strong>${t('bic', language)}:</strong> ${data.paymentBic}</div>` : ''}
                        ${data.paymentPaypal ? `<div><strong>${t('paypal', language)}:</strong> ${data.paymentPaypal}</div>` : ''}
                    </div>
                ` : ''}
                
                <!-- Footer -->
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; display: flex; justify-content: space-between; font-size: 12px; color: #666;">
                    ${data.reference ? `<div>${t('reference', language)}: ${data.reference}</div>` : '<div></div>'}
                    <div>${data.sellerEmail}</div>
                </div>
            </div>
        `;
    }

    async generatePDF() {
        const loading = document.getElementById('loading');
        loading.classList.add('active');
        
        try {
            // Save seller profile
            this.saveSellerProfile();
            
            const formData = this.getFormData();
            
            // Calculate totals for PDF
            const subtotal = this.items.reduce((sum, item) => sum + (item.total || 0), 0);
            const vatAmount = formData.applyVat ? subtotal * (parseFloat(formData.vatRate) / 100) : 0;
            const total = subtotal + vatAmount;
            
            const pdfData = {
                ...formData,
                invoiceLanguage: formData.invoiceLanguage,
                items: this.items,
                subtotal,
                vatAmount,
                total
            };
            
            await window.pdfGenerator.generatePDF(pdfData);
            
        } catch (error) {
            console.error('PDF generation error:', error);
            alert('Erreur lors de la génération du PDF: ' + error.message);
        } finally {
            loading.classList.remove('active');
        }
    }

    handleKeyboardShortcuts(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    this.generatePDF();
                    break;
                case 's':
                    e.preventDefault();
                    this.saveDraft();
                    break;
            }
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new InvoiceGenerator();
});