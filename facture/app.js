// Main Application Controller
class InvoiceApp {
    constructor() {
        this.currentTab = 'basic';
        this.items = [];
        this.itemCounter = 0;
        this.zoomLevel = 100;
        this.logoData = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupDateDefaults();
        this.addInitialItem();
        this.updateTotals();
    }
    
    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });
        
        // Form inputs
        document.addEventListener('input', (e) => {
            if (e.target.matches('input, textarea, select')) {
                this.handleFormInput(e);
            }
        });
        
        // Item management
        document.getElementById('addItemBtn').addEventListener('click', () => {
            this.addItem();
        });
        
        // Totals checkboxes
        document.getElementById('applyDiscount').addEventListener('change', (e) => {
            this.toggleDiscountSection(e.target.checked);
        });
        
        document.getElementById('applyVat').addEventListener('change', (e) => {
            this.toggleVatSection(e.target.checked);
        });
        
        // Logo upload
        document.getElementById('logoUpload').addEventListener('change', (e) => {
            this.handleLogoUpload(e);
        });
        
        document.getElementById('removeLogo').addEventListener('click', () => {
            this.removeLogo();
        });
        
        // Action buttons
        document.getElementById('previewBtn').addEventListener('click', () => {
            this.showPreview();
        });
        
        document.getElementById('generatePdfBtn').addEventListener('click', () => {
            this.generatePDF();
        });
        
        document.getElementById('printInvoiceBtn').addEventListener('click', () => {
            this.printInvoice();
        });
        
        document.getElementById('saveTemplateBtn').addEventListener('click', () => {
            this.showSaveTemplateModal();
        });
        
        document.getElementById('loadTemplateBtn').addEventListener('click', () => {
            this.showLoadTemplateModal();
        });
        
        document.getElementById('importDataBtn').addEventListener('click', () => {
            this.importData();
        });
        
        // Modal controls
        this.setupModalControls();
        
        // Preview zoom controls
        document.getElementById('zoomInBtn').addEventListener('click', () => {
            this.adjustZoom(25);
        });
        
        document.getElementById('zoomOutBtn').addEventListener('click', () => {
            this.adjustZoom(-25);
        });
    }
    
    setupModalControls() {
        // Preview modal
        document.getElementById('closePreviewBtn').addEventListener('click', () => {
            this.hideModal('previewModal');
        });
        
        // Save template modal
        document.getElementById('closeSaveTemplateBtn').addEventListener('click', () => {
            this.hideModal('saveTemplateModal');
        });
        
        document.getElementById('cancelSaveTemplateBtn').addEventListener('click', () => {
            this.hideModal('saveTemplateModal');
        });
        
        document.getElementById('confirmSaveTemplateBtn').addEventListener('click', () => {
            this.saveTemplate();
        });
        
        // Load template modal
        document.getElementById('closeLoadTemplateBtn').addEventListener('click', () => {
            this.hideModal('loadTemplateModal');
        });
        
        document.getElementById('cancelLoadTemplateBtn').addEventListener('click', () => {
            this.hideModal('loadTemplateModal');
        });
        
        // Close modals on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideModal(modal.id);
                }
            });
        });
    }
    
    setupDateDefaults() {
        const today = new Date().toISOString().split('T')[0];
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        
        document.getElementById('invoiceDate').value = today;
        document.getElementById('dueDate').value = dueDate.toISOString().split('T')[0];
        
        // Generate invoice number
        const invoiceNumber = 'INV-' + new Date().getFullYear() + '-' + 
                             String(Date.now()).slice(-6);
        document.getElementById('invoiceNumber').value = invoiceNumber;
    }
    
    switchTab(tabName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
        
        this.currentTab = tabName;
    }
    
    handleFormInput(e) {
        const { id, value } = e.target;
        
        // Handle item inputs
        if (id.startsWith('item-')) {
            this.updateItemCalculations(e.target);
        }
        
        // Handle global discount and VAT
        if (['globalDiscount', 'discountType', 'vatRate'].includes(id)) {
            this.updateTotals();
        }
        
        // Handle color changes
        if (['primaryColor', 'secondaryColor'].includes(id)) {
            this.updatePreviewColors();
        }
        
        // Handle language changes
        if (id === 'language') {
            this.updateLanguage(value);
        }
        
        // Auto-save form data
        this.saveFormData();
    }
    
    addItem() {
        this.itemCounter++;
        const itemId = `item-${this.itemCounter}`;
        
        const itemRow = document.createElement('div');
        itemRow.className = 'item-row';
        itemRow.dataset.itemId = itemId;
        
        itemRow.innerHTML = `
            <input type="text" id="${itemId}-description" placeholder="Item description" class="item-description">
            <input type="number" id="${itemId}-quantity" value="1" min="0" step="0.01" class="item-quantity">
            <input type="number" id="${itemId}-price" value="0" min="0" step="0.01" class="item-price">
            <input type="number" id="${itemId}-discount" value="0" min="0" max="100" step="0.01" class="item-discount">
            <select id="${itemId}-tax" class="item-tax">
                <option value="0">No Tax</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
            </select>
            <span class="item-total">$0.00</span>
            <button type="button" class="btn btn-danger btn-small" onclick="app.removeItem('${itemId}')">
                🗑️
            </button>
        `;
        
        document.getElementById('itemsList').appendChild(itemRow);
        
        // Add event listeners for calculations
        itemRow.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('input', () => {
                this.updateItemCalculations(input);
            });
        });
        
        this.items.push({
            id: itemId,
            description: '',
            quantity: 1,
            price: 0,
            discount: 0,
            tax: 0,
            total: 0
        });
    }
    
    addInitialItem() {
        this.addItem();
    }
    
    removeItem(itemId) {
        const itemRow = document.querySelector(`[data-item-id="${itemId}"]`);
        if (itemRow) {
            itemRow.remove();
        }
        
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateTotals();
    }
    
    updateItemCalculations(input) {
        const itemRow = input.closest('.item-row');
        const itemId = itemRow.dataset.itemId;
        
        const quantity = parseFloat(itemRow.querySelector('.item-quantity').value) || 0;
        const price = parseFloat(itemRow.querySelector('.item-price').value) || 0;
        const discount = parseFloat(itemRow.querySelector('.item-discount').value) || 0;
        const tax = parseFloat(itemRow.querySelector('.item-tax').value) || 0;
        
        const subtotal = quantity * price;
        const discountAmount = subtotal * (discount / 100);
        const afterDiscount = subtotal - discountAmount;
        const taxAmount = afterDiscount * (tax / 100);
        const total = afterDiscount + taxAmount;
        
        // Update display
        const totalSpan = itemRow.querySelector('.item-total');
        totalSpan.textContent = this.formatCurrency(total);
        
        // Update item data
        const itemIndex = this.items.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            this.items[itemIndex] = {
                id: itemId,
                description: itemRow.querySelector('.item-description').value,
                quantity,
                price,
                discount,
                tax,
                total
            };
        }
        
        this.updateTotals();
    }
    
    updateTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.total || 0), 0);
        
        let discountAmount = 0;
        if (document.getElementById('applyDiscount').checked) {
            const globalDiscount = parseFloat(document.getElementById('globalDiscount').value) || 0;
            const discountType = document.getElementById('discountType').value;
            
            if (discountType === 'percentage') {
                discountAmount = subtotal * (globalDiscount / 100);
            } else {
                discountAmount = globalDiscount;
            }
        }
        
        const afterDiscount = subtotal - discountAmount;
        
        let vatAmount = 0;
        if (document.getElementById('applyVat').checked) {
            const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;
            vatAmount = afterDiscount * (vatRate / 100);
        }
        
        const total = afterDiscount + vatAmount;
        
        // Update displays
        document.getElementById('subtotalDisplay').textContent = this.formatCurrency(subtotal);
        document.getElementById('discountDisplay').textContent = '-' + this.formatCurrency(discountAmount);
        document.getElementById('vatDisplay').textContent = this.formatCurrency(vatAmount);
        document.getElementById('totalDisplay').textContent = this.formatCurrency(total);
    }
    
    toggleDiscountSection(show) {
        const section = document.getElementById('discountSection');
        const line = document.querySelector('.discount-line');
        
        if (show) {
            section.classList.remove('hidden');
            line.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
            line.classList.add('hidden');
        }
        
        this.updateTotals();
    }
    
    toggleVatSection(show) {
        const section = document.getElementById('vatSection');
        const line = document.querySelector('.vat-line');
        
        if (show) {
            section.classList.remove('hidden');
            line.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
            line.classList.add('hidden');
        }
        
        this.updateTotals();
    }
    
    handleLogoUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            this.logoData = e.target.result;
            
            const preview = document.getElementById('logoPreview');
            const img = document.getElementById('logoImage');
            
            img.src = this.logoData;
            preview.classList.remove('hidden');
        };
        
        reader.readAsDataURL(file);
    }
    
    removeLogo() {
        this.logoData = null;
        document.getElementById('logoPreview').classList.add('hidden');
        document.getElementById('logoUpload').value = '';
    }
    
    formatCurrency(amount) {
        const currency = document.getElementById('currency').value || 'USD';
        const currencySymbols = {
            'USD': '$',
            'EUR': '€',
            'GBP': '£',
            'JPY': '¥',
            'CAD': 'C$',
            'AUD': 'A$'
        };
        
        const symbol = currencySymbols[currency] || '$';
        return symbol + amount.toFixed(2);
    }
    
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    adjustZoom(delta) {
        this.zoomLevel = Math.max(25, Math.min(200, this.zoomLevel + delta));
        document.getElementById('zoomLevel').textContent = this.zoomLevel + '%';
        
        const preview = document.getElementById('invoicePreview');
        preview.className = preview.className.replace(/zoom-\d+/, '');
        preview.classList.add(`zoom-${this.zoomLevel}`);
    }
    
    updatePreviewColors() {
        const primaryColor = document.getElementById('primaryColor').value;
        const secondaryColor = document.getElementById('secondaryColor').value;
        
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    }
    
    updateLanguage(language) {
        // Update any UI elements that need language changes
        // This could include form labels, buttons, etc.
        console.log('Language changed to:', language);
    }
    
    saveFormData() {
        // Auto-save form data to localStorage
        const formData = this.getFormData();
        localStorage.setItem('invoiceFormData', JSON.stringify(formData));
    }
    
    loadFormData() {
        const saved = localStorage.getItem('invoiceFormData');
        if (saved) {
            const data = JSON.parse(saved);
            this.populateForm(data);
        }
    }
    
    getFormData() {
        const data = {};
        
        // Get all form inputs
        document.querySelectorAll('input, textarea, select').forEach(input => {
            if (input.id && !input.id.startsWith('item-')) {
                if (input.type === 'checkbox') {
                    data[input.id] = input.checked;
                } else {
                    data[input.id] = input.value;
                }
            }
        });
        
        // Add items data
        data.items = this.items;
        data.logoData = this.logoData;
        
        return data;
    }
    
    populateForm(data) {
        // Populate form inputs
        Object.keys(data).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                if (input.type === 'checkbox') {
                    input.checked = data[key];
                } else {
                    input.value = data[key];
                }
            }
        });
        
        // Handle logo
        if (data.logoData) {
            this.logoData = data.logoData;
            const preview = document.getElementById('logoPreview');
            const img = document.getElementById('logoImage');
            img.src = this.logoData;
            preview.classList.remove('hidden');
        }
        
        // Rebuild items
        if (data.items && data.items.length > 0) {
            // Clear existing items
            document.getElementById('itemsList').innerHTML = '';
            this.items = [];
            this.itemCounter = 0;
            
            // Add saved items
            data.items.forEach(itemData => {
                this.addItem();
                const itemRow = document.querySelector(`[data-item-id="item-${this.itemCounter}"]`);
                
                itemRow.querySelector('.item-description').value = itemData.description || '';
                itemRow.querySelector('.item-quantity').value = itemData.quantity || 1;
                itemRow.querySelector('.item-price').value = itemData.price || 0;
                itemRow.querySelector('.item-discount').value = itemData.discount || 0;
                itemRow.querySelector('.item-tax').value = itemData.tax || 0;
                
                this.updateItemCalculations(itemRow.querySelector('.item-quantity'));
            });
        }
        
        // Update totals and UI
        this.updateTotals();
        this.updatePreviewColors();
    }
    
    showPreview() {
        const invoiceHtml = window.invoiceGenerator.generateInvoiceHTML(this.getFormData());
        document.getElementById('invoicePreview').innerHTML = invoiceHtml;
        this.showModal('previewModal');
    }
    
    generatePDF() {
        const btn = document.getElementById('generatePdfBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="loading">Generating PDF...</span>';
        btn.disabled = true;
        
        setTimeout(() => {
            window.pdfGenerator.generatePDF(this.getFormData());
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 500);
    }
    
    printInvoice() {
        const invoiceHtml = window.invoiceGenerator.generateInvoiceHTML(this.getFormData());
        const printWindow = window.open('', '_blank');
        
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Invoice</title>
                <link rel="stylesheet" href="css/invoice.css">
                <style>
                    body { margin: 0; padding: 20px; background: white; }
                    .invoice-preview { box-shadow: none; transform: none !important; }
                </style>
            </head>
            <body>
                ${invoiceHtml}
            </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
    }
    
    showSaveTemplateModal() {
        this.showModal('saveTemplateModal');
    }
    
    showLoadTemplateModal() {
        window.templateManager.loadTemplatesList();
        this.showModal('loadTemplateModal');
    }
    
    saveTemplate() {
        const name = document.getElementById('templateName').value.trim();
        const description = document.getElementById('templateDescription').value.trim();
        
        if (!name) {
            alert('Please enter a template name.');
            return;
        }
        
        const templateData = {
            name,
            description,
            data: this.getFormData(),
            createdAt: new Date().toISOString()
        };
        
        window.templateManager.saveTemplate(templateData);
        this.hideModal('saveTemplateModal');
        
        // Clear form
        document.getElementById('templateName').value = '';
        document.getElementById('templateDescription').value = '';
    }
    
    importData() {
        document.getElementById('importFileInput').click();
        
        document.getElementById('importFileInput').onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    this.populateForm(data);
                    alert('Data imported successfully!');
                } catch (error) {
                    alert('Error importing data. Please check the file format.');
                }
            };
            reader.readAsText(file);
        };
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new InvoiceApp();
});