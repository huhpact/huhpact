// InvoiceApp Class
class InvoiceApp {
  constructor() {
    this.i18n = new I18n();
    this.state = new InvoiceState();
    this.formatters = new Formatters(this.i18n);
    this.storage = new Storage(this.state);
    this.ui = new UI(this.state, this.i18n, this.formatters);

    this.autoSaveInterval = null;
  }

  async init() {
    await this.i18n.loadTranslations('en');
    await this.i18n.loadTranslations('de');
    await this.i18n.loadTranslations('fr');

    this.i18n.setLanguage('en');

    this.storage.loadAutoSave();

    this.state.subscribe(() => {
      this.update();
    });

    this.bindEvents();
    this.ui.bindFormInputs();
    this.update();

    this.startAutoSave();
  }

  update() {
    this.ui.renderLineItems();
    this.ui.renderPreview();
    this.i18n.updateDOM();
  }

  bindEvents() {
    document.getElementById('languageSelect')?.addEventListener('change', async (e) => {
      await this.i18n.setLanguage(e.target.value);
      this.formatters = new Formatters(this.i18n);
      this.ui = new UI(this.state, this.i18n, this.formatters);
      this.ui.bindFormInputs();
      this.update();
    });

    document.getElementById('addItemBtn')?.addEventListener('click', () => {
      this.state.addLineItem();
    });

    document.getElementById('saveBtn')?.addEventListener('click', () => {
      if (this.storage.save()) {
        this.ui.showMessage(this.i18n.t('messages.saved'), 'success');
      }
    });

    document.getElementById('loadBtn')?.addEventListener('click', () => {
      if (this.storage.load()) {
        this.ui.bindFormInputs();
        this.update();
        this.ui.showMessage(this.i18n.t('messages.loaded'), 'success');
      } else {
        this.ui.showMessage(this.i18n.t('messages.noInvoiceToLoad'), 'info');
      }
    });

    document.getElementById('newBtn')?.addEventListener('click', () => {
      if (confirm(this.i18n.t('messages.confirmClear'))) {
        this.state.reset();
        this.ui.bindFormInputs();
        this.update();
      }
    });

    document.getElementById('exportBtn')?.addEventListener('click', () => {
      const menu = document.createElement('div');
      menu.style.cssText = `
        position: absolute;
        background: rgba(30, 41, 59, 0.95);
        border: 1px solid #334155;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.5);
        padding: 8px;
        z-index: 1000;
      `;

      menu.innerHTML = `
        <button id="exportJsonBtn" style="display: block; width: 100%; padding: 8px 16px; text-align: left; border: none; background: none; cursor: pointer; border-radius: 4px; color: #f1f5f9;">${this.i18n.t('actions.exportJson')}</button>
        <button id="exportCsvBtn" style="display: block; width: 100%; padding: 8px 16px; text-align: left; border: none; background: none; cursor: pointer; border-radius: 4px; color: #f1f5f9;">${this.i18n.t('actions.exportCsv')}</button>
      `;

      const exportBtn = document.getElementById('exportBtn');
      const rect = exportBtn.getBoundingClientRect();
      menu.style.top = `${rect.bottom + 5}px`;
      menu.style.left = `${rect.left}px`;

      document.body.appendChild(menu);

      const closeMenu = () => {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      };

      setTimeout(() => {
        document.addEventListener('click', closeMenu);
      }, 100);

      menu.querySelector('#exportJsonBtn').addEventListener('click', () => {
        this.storage.exportJSON();
        this.ui.showMessage(this.i18n.t('messages.exported'), 'success');
        closeMenu();
      });

      menu.querySelector('#exportCsvBtn').addEventListener('click', () => {
        this.storage.exportCSV();
        this.ui.showMessage(this.i18n.t('messages.exported'), 'success');
        closeMenu();
      });
    });

    document.getElementById('importBtn')?.addEventListener('click', () => {
      document.getElementById('importFileInput').click();
    });

    document.getElementById('importFileInput')?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          await this.storage.importJSON(file);
          this.ui.bindFormInputs();
          this.update();
          this.ui.showMessage(this.i18n.t('messages.imported'), 'success');
        } catch (error) {
          alert('Failed to import file: ' + error.message);
        }
      }
      e.target.value = '';
    });

    document.getElementById('generatePdfBtn')?.addEventListener('click', () => {
      this.generatePDF();
    });

    document.getElementById('printBtn')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('helpBtn')?.addEventListener('click', () => {
      const modal = document.getElementById('helpModal');
      modal.style.display = 'flex';
    });

    document.querySelector('.modal-close')?.addEventListener('click', () => {
      document.getElementById('helpModal').style.display = 'none';
    });

    document.getElementById('helpModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'helpModal') {
        e.target.style.display = 'none';
      }
    });
  }

  generatePDF() {
    const invoiceNumber = this.state.data.invoice.number;
    const originalTitle = document.title;
    document.title = `Invoice_${invoiceNumber}`;

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  }

  startAutoSave() {
    this.autoSaveInterval = setInterval(() => {
      this.storage.autoSave();
    }, 30000);
  }

  destroy() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
  }
}

// Initialize App
const app = new InvoiceApp();
app.init();

window.addEventListener('beforeunload', () => {
  app.destroy();
});
