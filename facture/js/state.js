// InvoiceState Class
class InvoiceState {
  constructor() {
    this.data = this.getDefaultInvoice();
    this.listeners = [];
    this.history = [];
    this.historyIndex = -1;
  }

  getDefaultInvoice() {
    return {
      seller: {
        company: '',
        contact: '',
        street: '',
        postalCode: '',
        city: '',
        country: '',
        email: '',
        phone: '',
        taxNumber: '',
        vatId: ''
      },
      buyer: {
        company: '',
        contact: '',
        street: '',
        postalCode: '',
        city: '',
        country: '',
        email: '',
        phone: '',
        taxNumber: '',
        vatId: ''
      },
      invoice: {
        number: this.generateInvoiceNumber(),
        date: new Date().toISOString().split('T')[0],
        dueDate: this.getDefaultDueDate(),
        deliveryDate: ''
      },
      logo: {
        data: null,
        position: 'left'
      },
      kleinunternehmer: false,
      items: [this.createLineItem()],
      notes: '',
      paymentTerms: '',
      metadata: {
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString()
      }
    };
  }

  generateInvoiceNumber() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const sequence = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
    return `${year}${month}${day}-${sequence}`;
  }

  getDefaultDueDate() {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split('T')[0];
  }

  createLineItem() {
    return {
      id: Date.now() + Math.random(),
      description: '',
      quantity: 1,
      unitPrice: 0,
      taxRate: 19
    };
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.data));
  }

  updateData(path, value, skipHistory = false) {
    if (!skipHistory) {
      this.saveHistory();
    }

    const keys = path.split('.');
    let obj = this.data;

    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }

    obj[keys[keys.length - 1]] = value;
    this.data.metadata.modifiedAt = new Date().toISOString();
    this.notify();
  }

  getData(path) {
    const keys = path.split('.');
    let value = this.data;

    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return undefined;
      }
    }

    return value;
  }

  addLineItem() {
    this.saveHistory();
    this.data.items.push(this.createLineItem());
    this.notify();
  }

  removeLineItem(id) {
    this.saveHistory();
    this.data.items = this.data.items.filter(item => item.id !== id);
    this.notify();
  }

  duplicateLineItem(id) {
    this.saveHistory();
    const item = this.data.items.find(item => item.id === id);
    if (item) {
      const newItem = { ...item, id: Date.now() + Math.random() };
      const index = this.data.items.findIndex(item => item.id === id);
      this.data.items.splice(index + 1, 0, newItem);
      this.notify();
    }
  }

  moveLineItem(id, direction) {
    this.saveHistory();
    const index = this.data.items.findIndex(item => item.id === id);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= this.data.items.length) return;

    [this.data.items[index], this.data.items[newIndex]] =
      [this.data.items[newIndex], this.data.items[index]];

    this.notify();
  }

  updateLineItem(id, field, value) {
    const item = this.data.items.find(item => item.id === id);
    if (item) {
      item[field] = value;
      this.notify();
    }
  }

  calculateLineTotal(item) {
    const subtotal = item.quantity * item.unitPrice;
    const net = subtotal;
    const tax = this.data.kleinunternehmer ? 0 : (net * item.taxRate / 100);
    const gross = net + tax;

    return { net, tax, gross };
  }

  calculateTotals() {
    let totalNet = 0;
    let totalTax = 0;
    let totalGross = 0;
    const taxBreakdown = {};

    this.data.items.forEach(item => {
      const { net, tax } = this.calculateLineTotal(item);
      totalNet += net;
      totalTax += tax;
      totalGross += net + tax;

      if (!this.data.kleinunternehmer) {
        const rate = item.taxRate;
        if (!taxBreakdown[rate]) {
          taxBreakdown[rate] = { net: 0, tax: 0 };
        }
        taxBreakdown[rate].net += net;
        taxBreakdown[rate].tax += tax;
      }
    });

    return {
      totalNet,
      totalTax,
      totalGross,
      taxBreakdown
    };
  }

  setData(data) {
    this.saveHistory();
    this.data = data;
    this.notify();
  }

  reset() {
    this.saveHistory();
    this.data = this.getDefaultInvoice();
    this.notify();
  }

  saveHistory() {
    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    this.history.push(JSON.stringify(this.data));
    this.historyIndex++;

    if (this.history.length > 50) {
      this.history.shift();
      this.historyIndex--;
    }
  }

  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.data = JSON.parse(this.history[this.historyIndex]);
      this.notify();
    }
  }

  redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      this.data = JSON.parse(this.history[this.historyIndex]);
      this.notify();
    }
  }

  toJSON() {
    return JSON.stringify(this.data, null, 2);
  }

  fromJSON(json) {
    try {
      const data = JSON.parse(json);
      this.setData(data);
      return true;
    } catch (error) {
      console.error('Failed to parse JSON:', error);
      return false;
    }
  }
}
