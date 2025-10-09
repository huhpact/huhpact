// UI Class
class UI {
  constructor(state, i18n, formatters) {
    this.state = state;
    this.i18n = i18n;
    this.formatters = formatters;
  }

  renderLineItems() {
    const container = document.getElementById('lineItemsContainer');
    container.innerHTML = '';

    this.state.data.items.forEach((item, index) => {
      const itemEl = this.createLineItemElement(item, index);
      container.appendChild(itemEl);
    });
  }

  createLineItemElement(item, index) {
    const div = document.createElement('div');
    div.className = 'line-item';
    div.dataset.itemId = item.id;

    const totals = this.state.calculateLineTotal(item);

    div.innerHTML = `
      <div class="line-item-header">
        <strong>Item ${index + 1}</strong>
        <div class="line-item-actions">
          ${index > 0 ? `<button class="btn btn-small btn-secondary move-up">↑</button>` : ''}
          ${index < this.state.data.items.length - 1 ? `<button class="btn btn-small btn-secondary move-down">↓</button>` : ''}
          <button class="btn btn-small btn-secondary duplicate">${this.i18n.t('actions.duplicateItem')}</button>
          <button class="btn btn-small btn-danger remove">${this.i18n.t('actions.removeItem')}</button>
        </div>
      </div>
      <div class="line-item-row">
        <label>
          <span data-i18n="invoice.description">${this.i18n.t('invoice.description')}</span>
          <textarea class="form-textarea item-description" rows="2">${item.description}</textarea>
        </label>
      </div>
      <div class="line-item-row-4">
        <label>
          <span data-i18n="invoice.quantity">${this.i18n.t('invoice.quantity')}</span>
          <input type="number" class="form-input item-quantity" value="${item.quantity}" min="0" step="1" />
        </label>
        <label>
          <span data-i18n="invoice.unitPrice">${this.i18n.t('invoice.unitPrice')}</span>
          <input type="number" class="form-input item-unitPrice" value="${item.unitPrice}" min="0" step="0.01" />
        </label>
        <label>
          <span data-i18n="invoice.taxRate">${this.i18n.t('invoice.taxRate')} (%)</span>
          <input type="number" class="form-input item-taxRate" value="${item.taxRate}" min="0" max="100" step="0.1" ${this.state.data.kleinunternehmer ? 'disabled' : ''} />
        </label>
        <label>
          <span data-i18n="invoice.gross">${this.i18n.t('invoice.total')}</span>
          <input type="text" class="form-input" value="${this.formatters.formatCurrency(totals.gross)}" disabled />
        </label>
      </div>
    `;

    this.attachLineItemListeners(div, item.id);
    return div;
  }

  attachLineItemListeners(element, itemId) {
    element.querySelector('.item-description')?.addEventListener('input', (e) => {
      this.state.updateLineItem(itemId, 'description', e.target.value);
    });

    element.querySelector('.item-quantity')?.addEventListener('input', (e) => {
      this.state.updateLineItem(itemId, 'quantity', parseFloat(e.target.value) || 0);
    });

    element.querySelector('.item-unitPrice')?.addEventListener('input', (e) => {
      this.state.updateLineItem(itemId, 'unitPrice', parseFloat(e.target.value) || 0);
    });

    element.querySelector('.item-taxRate')?.addEventListener('input', (e) => {
      this.state.updateLineItem(itemId, 'taxRate', parseFloat(e.target.value) || 0);
    });

    element.querySelector('.remove')?.addEventListener('click', () => {
      if (this.state.data.items.length > 1) {
        this.state.removeLineItem(itemId);
      } else {
        alert('At least one item is required');
      }
    });

    element.querySelector('.duplicate')?.addEventListener('click', () => {
      this.state.duplicateLineItem(itemId);
    });

    element.querySelector('.move-up')?.addEventListener('click', () => {
      this.state.moveLineItem(itemId, 'up');
    });

    element.querySelector('.move-down')?.addEventListener('click', () => {
      this.state.moveLineItem(itemId, 'down');
    });
  }

  renderPreview() {
    const preview = document.getElementById('invoicePreview');
    const data = this.state.data;
    const totals = this.state.calculateTotals();

    let logoHTML = '';
    if (data.logo.data) {
      logoHTML = `<img src="${data.logo.data}" class="invoice-logo ${data.logo.position}" alt="Logo" />`;
    }

    let kleinunternehmerHTML = '';
    if (data.kleinunternehmer) {
      kleinunternehmerHTML = `
        <div class="kleinunternehmer-note">
          ${this.i18n.t('german.kleinunternehmerNote')}
        </div>
      `;
    }

    let taxBreakdownHTML = '';
    if (!data.kleinunternehmer && Object.keys(totals.taxBreakdown).length > 0) {
      const breakdownItems = Object.entries(totals.taxBreakdown)
        .map(([rate, values]) => `
          <div class="tax-breakdown-item">
            <span>${this.i18n.t('invoice.tax')} ${this.formatters.formatPercent(parseFloat(rate))}</span>
            <span>${this.formatters.formatCurrency(values.tax)}</span>
          </div>
        `).join('');

      taxBreakdownHTML = `
        <div class="tax-breakdown">
          <h4 data-i18n="invoice.taxBreakdown">${this.i18n.t('invoice.taxBreakdown')}</h4>
          ${breakdownItems}
        </div>
      `;
    }

    const itemsHTML = data.items.map((item, index) => {
      const itemTotals = this.state.calculateLineTotal(item);
      return `
        <tr>
          <td style="width: 60%;">${item.description || '-'}</td>
          <td class="align-center" style="width: 10%;">${this.formatters.formatNumber(item.quantity, 0)}</td>
          <td class="align-right" style="width: 15%;">${this.formatters.formatCurrency(item.unitPrice)}</td>
          <td class="align-right" style="width: 15%;"><strong>${this.formatters.formatCurrency(itemTotals.gross)}</strong></td>
        </tr>
      `;
    }).join('');

    preview.innerHTML = `
      <div class="invoice-header">
        ${logoHTML}
        <div class="invoice-title-block">
          <h1 class="invoice-title-main" data-i18n="invoice.title">${this.i18n.t('invoice.title')}</h1>
          <p class="invoice-number">${this.i18n.t('invoice.number')}: ${data.invoice.number}</p>
        </div>
      </div>

      <div class="invoice-parties">
        <div class="party-block">
          <h3 data-i18n="invoice.seller">${this.i18n.t('invoice.seller')}</h3>
          <div class="party-info">
            ${data.seller.company ? `<div class="party-company">${data.seller.company}</div>` : ''}
            ${data.seller.contact ? `<div>${data.seller.contact}</div>` : ''}
            ${data.seller.street ? `<div>${data.seller.street}</div>` : ''}
            ${data.seller.postalCode || data.seller.city ? `<div>${data.seller.postalCode} ${data.seller.city}</div>` : ''}
            ${data.seller.country ? `<div>${data.seller.country}</div>` : ''}
            ${data.seller.email ? `<div>${data.seller.email}</div>` : ''}
            ${data.seller.phone ? `<div>${data.seller.phone}</div>` : ''}
            ${data.seller.taxNumber ? `<div>${this.i18n.t('fields.taxNumber')}: ${data.seller.taxNumber}</div>` : ''}
            ${data.seller.vatId ? `<div>${this.i18n.t('fields.vatId')}: ${data.seller.vatId}</div>` : ''}
          </div>
        </div>

        <div class="party-block">
          <h3 data-i18n="invoice.buyer">${this.i18n.t('invoice.buyer')}</h3>
          <div class="party-info">
            ${data.buyer.company ? `<div class="party-company">${data.buyer.company}</div>` : ''}
            ${data.buyer.contact ? `<div>${data.buyer.contact}</div>` : ''}
            ${data.buyer.street ? `<div>${data.buyer.street}</div>` : ''}
            ${data.buyer.postalCode || data.buyer.city ? `<div>${data.buyer.postalCode} ${data.buyer.city}</div>` : ''}
            ${data.buyer.country ? `<div>${data.buyer.country}</div>` : ''}
            ${data.buyer.email ? `<div>${data.buyer.email}</div>` : ''}
            ${data.buyer.phone ? `<div>${data.buyer.phone}</div>` : ''}
            ${data.buyer.taxNumber ? `<div>${this.i18n.t('fields.taxNumber')}: ${data.buyer.taxNumber}</div>` : ''}
            ${data.buyer.vatId ? `<div>${this.i18n.t('fields.vatId')}: ${data.buyer.vatId}</div>` : ''}
          </div>
        </div>
      </div>

      <div class="invoice-meta">
        <div class="meta-item">
          <span class="meta-label" data-i18n="invoice.date">${this.i18n.t('invoice.date')}</span>
          <span class="meta-value">${this.formatters.formatDate(data.invoice.date)}</span>
        </div>
        ${data.invoice.dueDate ? `
        <div class="meta-item">
          <span class="meta-label" data-i18n="invoice.dueDate">${this.i18n.t('invoice.dueDate')}</span>
          <span class="meta-value">${this.formatters.formatDate(data.invoice.dueDate)}</span>
        </div>
        ` : ''}
        ${data.invoice.deliveryDate ? `
        <div class="meta-item">
          <span class="meta-label" data-i18n="invoice.deliveryDate">${this.i18n.t('invoice.deliveryDate')}</span>
          <span class="meta-value">${this.formatters.formatDate(data.invoice.deliveryDate)}</span>
        </div>
        ` : ''}
      </div>

      ${kleinunternehmerHTML}

      <table class="invoice-table">
        <thead>
          <tr>
            <th data-i18n="invoice.description">${this.i18n.t('invoice.description')}</th>
            <th class="align-center" data-i18n="invoice.quantity">${this.i18n.t('invoice.quantity')}</th>
            <th class="align-right" data-i18n="invoice.unitPrice">${this.i18n.t('invoice.unitPrice')}</th>
            <th class="align-right" data-i18n="invoice.total">${this.i18n.t('invoice.total')}</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHTML}
        </tbody>
      </table>

      ${taxBreakdownHTML}

      <div class="invoice-totals">
        <div class="totals-table">
          <div class="totals-row subtotal">
            <span class="totals-label" data-i18n="invoice.totalNet">${this.i18n.t('invoice.totalNet')}</span>
            <span class="totals-value">${this.formatters.formatCurrency(totals.totalNet)}</span>
          </div>
          ${!data.kleinunternehmer ? `
          <div class="totals-row">
            <span class="totals-label" data-i18n="invoice.totalTax">${this.i18n.t('invoice.totalTax')}</span>
            <span class="totals-value">${this.formatters.formatCurrency(totals.totalTax)}</span>
          </div>
          ` : ''}
          <div class="totals-row total">
            <span class="totals-label" data-i18n="invoice.totalGross">${this.i18n.t('invoice.totalGross')}</span>
            <span class="totals-value">${this.formatters.formatCurrency(totals.totalGross)}</span>
          </div>
        </div>
      </div>

      ${data.notes ? `
      <div class="invoice-notes">
        <h4 data-i18n="invoice.notes">${this.i18n.t('invoice.notes')}</h4>
        <p>${data.notes}</p>
      </div>
      ` : ''}

      ${data.paymentTerms ? `
      <div class="invoice-payment-terms">
        <h4 data-i18n="invoice.paymentTerms">${this.i18n.t('invoice.paymentTerms')}</h4>
        <p>${data.paymentTerms}</p>
      </div>
      ` : ''}
    `;
  }

  bindFormInputs() {
    const bindInput = (id, path) => {
      const input = document.getElementById(id);
      if (input) {
        input.value = this.state.getData(path) || '';
        input.addEventListener('input', (e) => {
          this.state.updateData(path, e.target.value);
        });
      }
    };

    bindInput('sellerCompany', 'seller.company');
    bindInput('sellerContact', 'seller.contact');
    bindInput('sellerStreet', 'seller.street');
    bindInput('sellerPostalCode', 'seller.postalCode');
    bindInput('sellerCity', 'seller.city');
    bindInput('sellerCountry', 'seller.country');
    bindInput('sellerEmail', 'seller.email');
    bindInput('sellerPhone', 'seller.phone');
    bindInput('sellerTaxNumber', 'seller.taxNumber');
    bindInput('sellerVatId', 'seller.vatId');

    bindInput('buyerCompany', 'buyer.company');
    bindInput('buyerContact', 'buyer.contact');
    bindInput('buyerStreet', 'buyer.street');
    bindInput('buyerPostalCode', 'buyer.postalCode');
    bindInput('buyerCity', 'buyer.city');
    bindInput('buyerCountry', 'buyer.country');
    bindInput('buyerEmail', 'buyer.email');
    bindInput('buyerPhone', 'buyer.phone');
    bindInput('buyerTaxNumber', 'buyer.taxNumber');
    bindInput('buyerVatId', 'buyer.vatId');

    bindInput('invoiceNumber', 'invoice.number');
    bindInput('invoiceDate', 'invoice.date');
    bindInput('invoiceDueDate', 'invoice.dueDate');
    bindInput('invoiceDeliveryDate', 'invoice.deliveryDate');

    bindInput('notes', 'notes');
    bindInput('paymentTerms', 'paymentTerms');

    const kleinunternehmerCheckbox = document.getElementById('kleinunternehmer');
    if (kleinunternehmerCheckbox) {
      kleinunternehmerCheckbox.checked = this.state.data.kleinunternehmer;
      kleinunternehmerCheckbox.addEventListener('change', (e) => {
        this.state.updateData('kleinunternehmer', e.target.checked);
      });
    }

    const logoUpload = document.getElementById('logoUpload');
    if (logoUpload) {
      logoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.state.updateData('logo.data', event.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }

    const logoPosition = document.getElementById('logoPosition');
    if (logoPosition) {
      logoPosition.value = this.state.data.logo.position;
      logoPosition.addEventListener('change', (e) => {
        this.state.updateData('logo.position', e.target.value);
      });
    }
  }

  showMessage(message, type = 'info') {
    console.log(`[${type}] ${message}`);
  }
}
