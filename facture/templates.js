// Template Management System
class TemplateManager {
    constructor() {
        this.storageKey = 'invoiceTemplates';
    }
    
    saveTemplate(templateData) {
        try {
            const templates = this.getTemplates();
            const templateId = this.generateId();
            
            const template = {
                id: templateId,
                ...templateData,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            templates[templateId] = template;
            localStorage.setItem(this.storageKey, JSON.stringify(templates));
            
            this.showMessage('Template saved successfully!', 'success');
            return templateId;
            
        } catch (error) {
            console.error('Error saving template:', error);
            this.showMessage('Error saving template. Please try again.', 'error');
            return null;
        }
    }
    
    getTemplates() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (error) {
            console.error('Error loading templates:', error);
            return {};
        }
    }
    
    getTemplate(templateId) {
        const templates = this.getTemplates();
        return templates[templateId] || null;
    }
    
    deleteTemplate(templateId) {
        try {
            const templates = this.getTemplates();
            delete templates[templateId];
            localStorage.setItem(this.storageKey, JSON.stringify(templates));
            
            this.showMessage('Template deleted successfully!', 'success');
            this.loadTemplatesList();
            
        } catch (error) {
            console.error('Error deleting template:', error);
            this.showMessage('Error deleting template. Please try again.', 'error');
        }
    }
    
    loadTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (template && template.data) {
            window.app.populateForm(template.data);
            window.app.hideModal('loadTemplateModal');
            this.showMessage('Template loaded successfully!', 'success');
        } else {
            this.showMessage('Error loading template.', 'error');
        }
    }
    
    loadTemplatesList() {
        const templates = this.getTemplates();
        const templatesList = document.getElementById('templatesList');
        
        if (Object.keys(templates).length === 0) {
            templatesList.innerHTML = `
                <div class="empty-templates">
                    <div class="icon">📄</div>
                    <p>No saved templates found.</p>
                    <p>Save your first template to get started!</p>
                </div>
            `;
            return;
        }
        
        const templatesArray = Object.values(templates).sort((a, b) => 
            new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        
        templatesList.innerHTML = templatesArray.map(template => `
            <div class="template-item" data-template-id="${template.id}">
                <div class="template-info">
                    <h4>${this.escapeHtml(template.name)}</h4>
                    <p>${this.escapeHtml(template.description || 'No description')}</p>
                    <div class="template-date">
                        Created: ${this.formatDate(template.createdAt)}
                    </div>
                </div>
                <div class="template-actions">
                    <button class="btn btn-primary btn-small" onclick="window.templateManager.loadTemplate('${template.id}')">
                        Load
                    </button>
                    <button class="btn btn-danger btn-small" onclick="window.templateManager.confirmDeleteTemplate('${template.id}')">
                        Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    confirmDeleteTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (template && confirm(`Are you sure you want to delete the template "${template.name}"?`)) {
            this.deleteTemplate(templateId);
        }
    }
    
    exportTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (template) {
            const dataStr = JSON.stringify(template, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `${template.name.replace(/[^a-zA-Z0-9]/g, '_')}_template.json`;
            link.click();
            
            URL.revokeObjectURL(link.href);
        }
    }
    
    importTemplate(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const template = JSON.parse(e.target.result);
                
                // Validate template structure
                if (!template.name || !template.data) {
                    throw new Error('Invalid template format');
                }
                
                // Generate new ID to avoid conflicts
                delete template.id;
                template.name = template.name + ' (Imported)';
                
                this.saveTemplate(template);
                this.loadTemplatesList();
                
            } catch (error) {
                console.error('Error importing template:', error);
                this.showMessage('Error importing template. Please check the file format.', 'error');
            }
        };
        
        reader.readAsText(file);
    }
    
    generateId() {
        return 'template_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    showMessage(text, type = 'info') {
        // Create message element
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.right = '20px';
        message.style.zIndex = '9999';
        message.style.padding = '1rem';
        message.style.borderRadius = '8px';
        message.style.maxWidth = '300px';
        
        // Add to document
        document.body.appendChild(message);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
    }
    
    // Bulk operations
    exportAllTemplates() {
        const templates = this.getTemplates();
        if (Object.keys(templates).length === 0) {
            this.showMessage('No templates to export.', 'info');
            return;
        }
        
        const dataStr = JSON.stringify(templates, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `invoice_templates_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(link.href);
    }
    
    clearAllTemplates() {
        if (confirm('Are you sure you want to delete ALL templates? This action cannot be undone.')) {
            localStorage.removeItem(this.storageKey);
            this.loadTemplatesList();
            this.showMessage('All templates deleted.', 'info');
        }
    }
}

// Initialize template manager
window.templateManager = new TemplateManager();