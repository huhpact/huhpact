class PDFGenerator {
    constructor() {
        this.doc = null;
        this.currentY = 0;
        this.pageHeight = 297; // A4 height in mm
        this.margin = 20;
        this.brandColor = '#3B82F6';
        this.language = 'fr';
        this.currency = 'EUR';
        this.logoData = null;
    }

    async generatePDF(invoiceData) {
        const { jsPDF } = window.jspdf;
        this.doc = new jsPDF('p', 'mm', 'a4');
        
        this.brandColor = invoiceData.brandColor || '#3B82F6';
        this.language = invoiceData.invoiceLanguage || 'fr';
        this.currency = invoiceData.currency || 'EUR';
        this.logoData = invoiceData.logoData;
        
        this.currentY = this.margin;
        
        try {
            // Add content
            await this.addHeader(invoiceData);
            this.addCompanyInfo(invoiceData);
            this.addInvoiceTable(invoiceData);
            this.addTotals(invoiceData);
            this.addNotesAndTerms(invoiceData);
            this.addFooter(invoiceData);
            
            // Save the PDF
            const filename = `${t('invoice', this.language)}_${invoiceData.invoiceNumber}.pdf`;
            this.doc.save(filename);
            
            return true;
        } catch (error) {
            console.error('PDF generation error:', error);
            throw new Error('Erreur lors de la génération du PDF');
        }
    }

    async addHeader(data) {
        // Header background
        this.doc.setFillColor(...this.hexToRgb(this.brandColor));
        this.doc.rect(0, 0, 210, 40, 'F');
        
        // Invoice title
        this.doc.setTextColor(255, 255, 255);
        this.doc.setFontSize(24);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(t('invoice', this.language), this.margin, 25);
        
        // Logo
        if (this.logoData) {
            try {
                this.doc.addImage(this.logoData, 'JPEG', 105 - 25, 10, 50, 20);
            } catch (error) {
                console.warn('Could not add logo to PDF:', error);
            }
        }
        
        // Invoice number and dates (right aligned)
        this.doc.setFontSize(12);
        this.doc.setFont('helvetica', 'normal');
        const rightX = 190;
        
        this.doc.text(`${t('invoiceNumber', this.language)}: ${data.invoiceNumber}`, rightX, 15, { align: 'right' });
        this.doc.text(`${t('date', this.language)}: ${formatDate(data.creationDate, this.language)}`, rightX, 22, { align: 'right' });
        if (data.dueDate) {
            this.doc.text(`${t('dueDate', this.language)}: ${formatDate(data.dueDate, this.language)}`, rightX, 29, { align: 'right' });
        }
        if (data.serviceDate) {
            this.doc.text(`${t('serviceDate', this.language)}: ${data.serviceDate}`, rightX, 36, { align: 'right' });
        }
        
        this.currentY = 50;
    }

    addCompanyInfo(data) {
        // Reset text color
        this.doc.setTextColor(0, 0, 0);
        
        // Company info box
        this.doc.setDrawColor(200, 200, 200);
        this.doc.setFillColor(248, 250, 252);
        this.doc.roundedRect(this.margin, this.currentY, 170, 50, 3, 3, 'FD');
        
        const leftX = this.margin + 5;
        const rightX = 110;
        let leftY = this.currentY + 10;
        let rightY = this.currentY + 10;
        
        // Buyer info (left)
        this.doc.setFontSize(12);
        this.doc.setFont('helvetica', 'bold');
        this.doc.setTextColor(...this.hexToRgb(this.brandColor));
        this.doc.text(t('buyer', this.language), leftX, leftY);
        
        this.doc.setFont('helvetica', 'normal');
        this.doc.setTextColor(0, 0, 0);
        this.doc.setFontSize(10);
        leftY += 6;
        
        if (data.buyerCompany) {
            this.doc.text(data.buyerCompany, leftX, leftY);
            leftY += 4;
        }
        if (data.buyerContact) {
            this.doc.text(data.buyerContact, leftX, leftY);
            leftY += 4;
        }
        if (data.buyerAddress) {
            const addressLines = data.buyerAddress.split('\n');
            addressLines.forEach(line => {
                this.doc.text(line, leftX, leftY);
                leftY += 4;
            });
        }
        if (data.buyerEmail) {
            this.doc.text(data.buyerEmail, leftX, leftY);
            leftY += 4;
        }
        if (data.buyerTax) {
            this.doc.text(`Tax: ${data.buyerTax}`, leftX, leftY);
        }
        
        // Seller info (right)
        this.doc.setFontSize(12);
        this.doc.setFont('helvetica', 'bold');
        this.doc.setTextColor(...this.hexToRgb(this.brandColor));
        this.doc.text(t('seller', this.language), rightX, rightY);
        
        this.doc.setFont('helvetica', 'normal');
        this.doc.setTextColor(0, 0, 0);
        this.doc.setFontSize(10);
        rightY += 6;
        
        this.doc.text(data.sellerCompany, rightX, rightY);
        rightY += 4;
        this.doc.text(data.sellerContact, rightX, rightY);
        rightY += 4;
        
        const sellerAddressLines = data.sellerAddress.split('\n');
        sellerAddressLines.forEach(line => {
            this.doc.text(line, rightX, rightY);
            rightY += 4;
        });
        
        this.doc.text(data.sellerEmail, rightX, rightY);
        rightY += 4;
        this.doc.text(data.sellerPhone, rightX, rightY);
        rightY += 4;
        
        if (data.sellerVat) {
            this.doc.text(`VAT: ${data.sellerVat}`, rightX, rightY);
            rightY += 4;
        }
        if (data.sellerReg) {
            this.doc.text(`Reg: ${data.sellerReg}`, rightX, rightY);
        }
        
        this.currentY += 60;
    }

    addInvoiceTable(data) {
        if (!data.items || data.items.length === 0) return;
        
        const tableStartY = this.currentY;
        const colWidths = [80, 25, 20, 25, 25]; // Description, Unit Price, Qty, Discount, Total
        const colX = [this.margin, this.margin + 80, this.margin + 105, this.margin + 125, this.margin + 150];
        
        // Table header
        this.doc.setFillColor(...this.hexToRgb(this.brandColor));
        this.doc.rect(this.margin, this.currentY, 170, 8, 'F');
        
        this.doc.setTextColor(255, 255, 255);
        this.doc.setFontSize(10);
        this.doc.setFont('helvetica', 'bold');
        
        this.doc.text(t('description', this.language), colX[0] + 2, this.currentY + 5);
        this.doc.text(t('unitPrice', this.language), colX[1] + 2, this.currentY + 5);
        this.doc.text(t('quantity', this.language), colX[2] + 2, this.currentY + 5);
        this.doc.text(t('discount', this.language), colX[3] + 2, this.currentY + 5);
        this.doc.text(t('total', this.language), colX[4] + 2, this.currentY + 5);
        
        this.currentY += 8;
        
        // Table rows
        this.doc.setTextColor(0, 0, 0);
        this.doc.setFont('helvetica', 'normal');
        
        data.items.forEach((item, index) => {
            if (this.currentY > this.pageHeight - 50) {
                this.doc.addPage();
                this.currentY = this.margin;
            }
            
            const rowY = this.currentY;
            const rowHeight = 8;
            
            // Alternating row colors
            if (index % 2 === 0) {
                this.doc.setFillColor(248, 250, 252);
                this.doc.rect(this.margin, rowY, 170, rowHeight, 'F');
            }
            
            // Draw borders
            this.doc.setDrawColor(200, 200, 200);
            colX.forEach((x, i) => {
                if (i > 0) {
                    this.doc.line(x, rowY, x, rowY + rowHeight);
                }
            });
            
            // Add text
            this.doc.text(item.description || '', colX[0] + 2, rowY + 5);
            this.doc.text(formatCurrency(item.unitPrice || 0, this.currency, this.language), colX[1] + 2, rowY + 5);
            this.doc.text((item.quantity || 0).toString(), colX[2] + 2, rowY + 5);
            
            let discountText = '';
            if (item.discountType === 'percentage') {
                discountText = `${item.discount || 0}%`;
            } else {
                discountText = formatCurrency(item.discount || 0, this.currency, this.language);
            }
            this.doc.text(discountText, colX[3] + 2, rowY + 5);
            
            this.doc.text(formatCurrency(item.total || 0, this.currency, this.language), colX[4] + 2, rowY + 5);
            
            this.currentY += rowHeight;
        });
        
        // Table border
        this.doc.setDrawColor(200, 200, 200);
        this.doc.rect(this.margin, tableStartY, 170, this.currentY - tableStartY);
        
        this.currentY += 10;
    }

    addTotals(data) {
        const totalsX = 140;
        
        // Subtotal
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.text(`${t('subtotal', this.language)}:`, totalsX, this.currentY);
        this.doc.text(formatCurrency(data.subtotal || 0, this.currency, this.language), 185, this.currentY, { align: 'right' });
        this.currentY += 6;
        
        // VAT
        if (data.applyVat && data.vatAmount > 0) {
            this.doc.text(`${t('vat', this.language)} (${data.vatRate}%):`, totalsX, this.currentY);
            this.doc.text(formatCurrency(data.vatAmount || 0, this.currency, this.language), 185, this.currentY, { align: 'right' });
            this.currentY += 6;
        }
        
        // Total
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(12);
        this.doc.setTextColor(...this.hexToRgb(this.brandColor));
        
        this.doc.line(totalsX, this.currentY, 185, this.currentY);
        this.currentY += 4;
        
        this.doc.text(`${t('grandTotal', this.language)}:`, totalsX, this.currentY);
        this.doc.text(formatCurrency(data.total || 0, this.currency, this.language), 185, this.currentY, { align: 'right' });
        
        // VAT exemption notice
        if (!data.applyVat) {
            this.currentY += 10;
            this.doc.setFont('helvetica', 'italic');
            this.doc.setFontSize(9);
            this.doc.setTextColor(100, 100, 100);
            this.doc.text(t('vatExemption', this.language), this.margin, this.currentY);
        }
        
        this.currentY += 15;
        this.doc.setTextColor(0, 0, 0);
    }

    addNotesAndTerms(data) {
        if (this.currentY > this.pageHeight - 80) {
            this.doc.addPage();
            this.currentY = this.margin;
        }
        
        // Notes
        if (data.notes) {
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(12);
            this.doc.setTextColor(...this.hexToRgb(this.brandColor));
            this.doc.text(t('notes', this.language), this.margin, this.currentY);
            
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);
            this.doc.setTextColor(0, 0, 0);
            this.currentY += 6;
            
            const notesLines = data.notes.split('\n');
            notesLines.forEach(line => {
                this.doc.text(line, this.margin, this.currentY);
                this.currentY += 4;
            });
            
            this.currentY += 6;
        }
        
        // Payment Terms
        if (data.terms) {
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(12);
            this.doc.setTextColor(...this.hexToRgb(this.brandColor));
            this.doc.text(t('terms', this.language), this.margin, this.currentY);
            
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);
            this.doc.setTextColor(0, 0, 0);
            this.currentY += 6;
            
            const termsLines = data.terms.split('\n');
            termsLines.forEach(line => {
                this.doc.text(line, this.margin, this.currentY);
                this.currentY += 4;
            });
            
            this.currentY += 6;
        }
        
        // Payment Information
        if (data.paymentIban || data.paymentBic || data.paymentPaypal) {
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(12);
            this.doc.setTextColor(...this.hexToRgb(this.brandColor));
            this.doc.text(t('paymentInfo', this.language), this.margin, this.currentY);
            
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);
            this.doc.setTextColor(0, 0, 0);
            this.currentY += 6;
            
            if (data.paymentIban) {
                this.doc.text(`${t('iban', this.language)}: ${data.paymentIban}`, this.margin, this.currentY);
                this.currentY += 4;
            }
            if (data.paymentBic) {
                this.doc.text(`${t('bic', this.language)}: ${data.paymentBic}`, this.margin, this.currentY);
                this.currentY += 4;
            }
            if (data.paymentPaypal) {
                this.doc.text(`${t('paypal', this.language)}: ${data.paymentPaypal}`, this.margin, this.currentY);
                this.currentY += 4;
            }
        }
    }

    addFooter(data) {
        const footerY = this.pageHeight - 20;
        
        this.doc.setDrawColor(200, 200, 200);
        this.doc.line(this.margin, footerY - 5, 190, footerY - 5);
        
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(8);
        this.doc.setTextColor(100, 100, 100);
        
        // Reference on the left
        if (data.reference) {
            this.doc.text(`${t('reference', this.language)}: ${data.reference}`, this.margin, footerY);
        }
        
        // Email on the right
        this.doc.text(data.sellerEmail || '', 190, footerY, { align: 'right' });
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : [59, 130, 246]; // Default blue
    }
}

// Create global instance
window.pdfGenerator = new PDFGenerator();