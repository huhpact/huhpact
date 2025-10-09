// Storage Class
class Storage {
  constructor(state) {
    this.state = state;
    this.STORAGE_KEY = 'invoice_data';
    this.AUTO_SAVE_KEY = 'invoice_auto_save';
  }

  save() {
    try {
      const json = this.state.toJSON();
      localStorage.setItem(this.STORAGE_KEY, json);
      return true;
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      return false;
    }
  }

  load() {
    try {
      const json = localStorage.getItem(this.STORAGE_KEY);
      if (json) {
        return this.state.fromJSON(json);
      }
      return false;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return false;
    }
  }

  autoSave() {
    try {
      const json = this.state.toJSON();
      localStorage.setItem(this.AUTO_SAVE_KEY, json);
    } catch (error) {
      console.error('Auto-save failed:', error);
    }
  }

  loadAutoSave() {
    try {
      const json = localStorage.getItem(this.AUTO_SAVE_KEY);
      if (json) {
        return this.state.fromJSON(json);
      }
      return false;
    } catch (error) {
      console.error('Failed to load auto-save:', error);
      return false;
    }
  }

  clear() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.AUTO_SAVE_KEY);
      return true;
    } catch (error) {
      console.error('Failed to clear storage:', error);
      return false;
    }
  }

  exportJSON() {
    const json = this.state.toJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice_${this.state.data.invoice.number}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  exportCSV() {
    const items = this.state.data.items;
    const headers = ['Description', 'Quantity', 'Unit Price', 'Tax Rate %', 'Net', 'Tax', 'Gross'];

    const rows = items.map(item => {
      const totals = this.state.calculateLineTotal(item);
      return [
        item.description,
        item.quantity,
        item.unitPrice,
        item.taxRate,
        totals.net,
        totals.tax,
        totals.gross
      ].map(val => `"${val}"`).join(',');
    });

    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice_${this.state.data.invoice.number}_items.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  importJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const success = this.state.fromJSON(e.target.result);
          if (success) {
            resolve(true);
          } else {
            reject(new Error('Invalid JSON format'));
          }
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }
}
