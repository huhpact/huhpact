const translations = {
    en: {
        invoice: "INVOICE",
        invoiceNumber: "Invoice #:",
        date: "Date:",
        dueDate: "Due Date:",
        billTo: "Bill To:",
        description: "Description",
        quantity: "Qty",
        unitPrice: "Unit Price",
        amount: "Amount",
        addItem: "Add Item",
        subtotal: "Subtotal:",
        tax: "Tax",
        total: "Total:",
        notes: "Notes:",
        generatePDF: "Generate PDF"
    },
    fr: {
        invoice: "FACTURE",
        invoiceNumber: "Facture n° :",
        date: "Date :",
        dueDate: "Date d'échéance :",
        billTo: "Facturer à :",
        description: "Description",
        quantity: "Qté",
        unitPrice: "Prix unitaire",
        amount: "Montant",
        addItem: "Ajouter un article",
        subtotal: "Sous-total :",
        tax: "Taxe",
        total: "Total :",
        notes: "Notes :",
        generatePDF: "Générer PDF"
    },
    de: {
        invoice: "RECHNUNG",
        invoiceNumber: "Rechnung Nr.:",
        date: "Datum:",
        dueDate: "Fälligkeitsdatum:",
        billTo: "Rechnung an:",
        description: "Beschreibung",
        quantity: "Menge",
        unitPrice: "Einzelpreis",
        amount: "Betrag",
        addItem: "Artikel hinzufügen",
        subtotal: "Zwischensumme:",
        tax: "Steuer",
        total: "Gesamt:",
        notes: "Notizen:",
        generatePDF: "PDF generieren"
    }
};

let currentLanguage = 'en';
let currencySymbol = '$';

function setCurrentDate() {
    const today = new Date().toISOString().split('T')[0];
    const invoiceDateInput = document.getElementById('invoiceDate');
    const dueDateInput = document.getElementById('dueDate');

    if (invoiceDateInput && !invoiceDateInput.value) {
        invoiceDateInput.value = today;
    }

    if (dueDateInput && !dueDateInput.value) {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        dueDateInput.value = dueDate.toISOString().split('T')[0];
    }
}

function translatePage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function calculateRowAmount(row) {
    const quantityCell = row.querySelector('.quantity-cell');
    const priceCell = row.querySelector('.price-cell');
    const amountCell = row.querySelector('.amount-cell');

    const quantity = parseFloat(quantityCell.textContent) || 0;
    const price = parseFloat(priceCell.textContent) || 0;
    const amount = quantity * price;

    amountCell.textContent = formatCurrency(amount);
    return amount;
}

function calculateTotals() {
    const rows = document.querySelectorAll('.item-row');
    let subtotal = 0;

    rows.forEach(row => {
        subtotal += calculateRowAmount(row);
    });

    const taxRate = parseFloat(document.getElementById('taxRate').textContent) || 0;
    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    document.getElementById('subtotalValue').textContent = formatCurrency(subtotal);
    document.getElementById('taxValue').textContent = formatCurrency(tax);
    document.getElementById('totalValue').textContent = formatCurrency(total);
}

function addNewItem() {
    const tbody = document.getElementById('itemsTableBody');
    const newRow = document.createElement('tr');
    newRow.className = 'item-row';

    newRow.innerHTML = `
        <td contenteditable="true" class="editable" data-placeholder="Item description">New Item</td>
        <td contenteditable="true" class="editable quantity-cell" data-placeholder="1">1</td>
        <td contenteditable="true" class="editable price-cell" data-placeholder="0.00">0.00</td>
        <td class="amount-cell">${formatCurrency(0)}</td>
        <td class="action-col">
            <button class="btn-icon delete-row" title="Delete row">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
            </button>
        </td>
    `;

    tbody.appendChild(newRow);
    attachRowListeners(newRow);
    calculateTotals();
}

function deleteRow(button) {
    const row = button.closest('.item-row');
    const tbody = document.getElementById('itemsTableBody');

    if (tbody.querySelectorAll('.item-row').length > 1) {
        row.remove();
        calculateTotals();
    } else {
        alert('At least one item is required.');
    }
}

function attachRowListeners(row) {
    const quantityCell = row.querySelector('.quantity-cell');
    const priceCell = row.querySelector('.price-cell');
    const deleteButton = row.querySelector('.delete-row');

    quantityCell.addEventListener('input', calculateTotals);
    priceCell.addEventListener('input', calculateTotals);
    deleteButton.addEventListener('click', () => deleteRow(deleteButton));
}

async function generatePDF() {
    const button = document.getElementById('generatePdfBtn');
    const originalText = button.innerHTML;

    button.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Generating...</span>
    `;
    button.disabled = true;

    const element = document.getElementById('invoiceContent');
    const deleteButtons = element.querySelectorAll('.delete-row');
    const addButton = document.getElementById('addItemBtn');
    const invoicePaper = element.querySelector('.invoice-paper');

    deleteButtons.forEach(btn => btn.style.display = 'none');
    if (addButton) addButton.style.display = 'none';

    invoicePaper.classList.add('pdf-mode');

    const dateInputs = element.querySelectorAll('.date-input');
    dateInputs.forEach(input => {
        const span = document.createElement('span');
        span.className = 'date-display meta-value';
        span.textContent = input.value || '';
        span.style.fontWeight = '600';
        span.style.color = 'var(--text-dark)';
        input.style.display = 'none';
        input.parentNode.insertBefore(span, input.nextSibling);
    });

    const opt = {
        margin: [12, 12, 12, 12],
        filename: `invoice-${Date.now()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 3,
            useCORS: true,
            letterRendering: true,
            logging: false,
            backgroundColor: '#ffffff'
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
            compress: true
        }
    };

    try {
        await html2pdf().set(opt).from(element).save();
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error generating PDF. Please try again.');
    }

    deleteButtons.forEach(btn => btn.style.display = '');
    if (addButton) addButton.style.display = '';
    invoicePaper.classList.remove('pdf-mode');

    dateInputs.forEach(input => {
        const span = input.parentNode.querySelector('.date-display');
        if (span) span.remove();
        input.style.display = '';
    });

    button.innerHTML = originalText;
    button.disabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentDate();

    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (e) => {
        translatePage(e.target.value);
    });

    const addItemBtn = document.getElementById('addItemBtn');
    addItemBtn.addEventListener('click', addNewItem);

    const generatePdfBtn = document.getElementById('generatePdfBtn');
    generatePdfBtn.addEventListener('click', generatePDF);

    const taxRateElement = document.getElementById('taxRate');
    taxRateElement.addEventListener('input', calculateTotals);

    const existingRows = document.querySelectorAll('.item-row');
    existingRows.forEach(row => attachRowListeners(row));

    calculateTotals();

    document.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity-cell') ||
            e.target.classList.contains('price-cell')) {
            calculateTotals();
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);