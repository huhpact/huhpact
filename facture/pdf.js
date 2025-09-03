// PDF Generation using jsPDF and html2canvas
class PDFGenerator {
    constructor() {
        this.jsPDF = window.jspdf.jsPDF;
    }
    
    async generatePDF(data) {
        try {
            // Create a temporary container for the invoice with proper styling
            const tempContainer = document.createElement('div');
            tempContainer.style.cssText = `
                position: absolute;
                left: -9999px;
                top: 0;
                width: 800px;
                background: white;
                font-family: Arial, sans-serif;
                color: #000;
                padding: 0;
                margin: 0;
            `;
            
            // Create a style element for the PDF
            const styleElement = document.createElement('style');
            styleElement.textContent = this.getPDFStyles(data);
            tempContainer.appendChild(styleElement);
            
            // Generate invoice HTML with proper styling
            const invoiceHtml = window.invoiceGenerator.generateInvoiceHTML(data);
            const invoiceDiv = document.createElement('div');
            invoiceDiv.innerHTML = invoiceHtml;
            tempContainer.appendChild(invoiceDiv);
            
            // Add to document temporarily
            document.body.appendChild(tempContainer);
            
            // Wait for images and fonts to load
            await this.waitForImagesAndFonts(tempContainer);
            
            // Generate canvas from HTML with high quality
            const canvas = await html2canvas(tempContainer, {
                scale: 3, // Higher scale for better quality
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                width: 800,
                height: tempContainer.scrollHeight,
                logging: false,
                imageTimeout: 15000,
                removeContainer: false
            });
            
            // Remove temporary container
            document.body.removeChild(tempContainer);
            
            // Create PDF with proper dimensions
            const pdf = new this.jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
                compress: true
            });
            
            // Calculate dimensions for A4
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pdfWidth - 20; // 10mm margin on each side
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            let heightLeft = imgHeight;
            let position = 10; // 10mm top margin
            
            // Convert canvas to image data
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            
            // Add first page
            pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
            heightLeft -= (pdfHeight - 20); // Account for margins
            
            // Add additional pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight + 10;
                pdf.addPage();
                pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
                heightLeft -= (pdfHeight - 20);
            }
            
            // Add metadata
            pdf.setProperties({
                title: `Invoice ${data.invoiceNumber || 'INV'}`,
                subject: 'Invoice',
                author: data.vendorCompany || 'Invoice Generator',
                creator: 'Professional Invoice Generator'
            });
            
            // Generate filename
            const invoiceNumber = data.invoiceNumber || 'invoice';
            const filename = `${invoiceNumber.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
            
            // Save PDF
            pdf.save(filename);
            
            // Show success message
            this.showMessage('PDF generated successfully!', 'success');
            
        } catch (error) {
            console.error('Error generating PDF:', error);
            this.showMessage('Error generating PDF. Please try again.', 'error');
        }
    }
    
    getPDFStyles(data) {
        const primaryColor = data.primaryColor || '#3b82f6';
        const secondaryColor = data.secondaryColor || '#64748b';
        const fontFamily = data.fontFamily || 'Arial';
        const template = data.invoiceTemplate || 'modern';
        
        return `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .invoice-preview {
                background: white;
                color: #1f2937;
                font-family: ${fontFamily}, Arial, sans-serif;
                font-size: 14px;
                line-height: 1.5;
                max-width: 800px;
                margin: 0;
                padding: 0;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }
            
            .invoice-content {
                flex: 1;
            }
            
            .invoice-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                padding: 30px 40px 20px;
                ${template === 'minimal' ? 
                    `border-bottom: 1px solid #e5e7eb;` : 
                    `border-bottom: 2px solid ${primaryColor};`
                }
                ${template === 'corporate' ? 
                    `background: linear-gradient(135deg, ${primaryColor}15, ${primaryColor}08);` :
                    template === 'classic' ?
                    `background: #f9fafb;` :
                    `background: ${primaryColor}08;`
                }
            }
            
            .invoice-logo {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            
            .invoice-logo img {
                max-height: 60px;
                max-width: 200px;
                object-fit: contain;
            }
            
            .company-name {
                font-size: 24px;
                font-weight: bold;
                color: #1f2937;
                margin-bottom: 5px;
            }
            
            .contact-name {
                font-size: 16px;
                color: #6b7280;
            }
            
            .invoice-title h1 {
                font-size: ${template === 'minimal' ? '36px' : '42px'};
                font-weight: bold;
                color: ${template === 'minimal' ? '#374151' : primaryColor};
                margin: 0;
                text-align: right;
                ${template === 'classic' ? 'font-style: italic;' : ''}
            }
            
            .invoice-subtitle {
                font-size: 14px;
                color: ${template === 'minimal' ? '#9ca3af' : '#6b7280'};
                text-align: right;
                margin-top: 5px;
            }
            
            .invoice-details {
                display: flex;
                justify-content: space-between;
                padding: 30px 40px;
                background: ${template === 'minimal' ? 'white' : '#f9fafb'};
                ${template === 'minimal' ? 'border-bottom: 1px solid #e5e7eb;' : ''}
            }
            
            .invoice-info {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 8px 20px;
                align-items: baseline;
            }
            
            .invoice-info dt {
                font-weight: 600;
                color: #374151;
                font-size: 14px;
            }
            
            .invoice-info dd {
                color: #1f2937;
                margin: 0;
                font-size: 14px;
            }
            
            .invoice-parties {
                display: flex;
                justify-content: space-between;
                padding: 0 40px 30px;
                gap: 40px;
            }
            
            .party-section {
                flex: 1;
            }
            
            .party-section h3 {
                font-size: 16px;
                font-weight: 600;
                color: ${template === 'minimal' ? '#374151' : primaryColor};
                margin-bottom: 15px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                ${template === 'minimal' ? 
                    'border-bottom: 1px solid #e5e7eb;' : 
                    `border-bottom: 2px solid ${primaryColor};`
                }
                padding-bottom: 5px;
            }
            
            .party-info {
                line-height: 1.6;
                color: #374151;
                font-size: 14px;
            }
            
            .party-info .company-name {
                font-weight: 600;
                font-size: 18px;
                color: #1f2937;
                margin-bottom: 8px;
            }
            
            .invoice-items {
                margin: 0 40px 30px;
            }
            
            .items-table {
                width: 100%;
                border-collapse: collapse;
                background: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .items-table thead {
                background: ${template === 'minimal' ? '#f3f4f6' : primaryColor};
                color: white;
            }
            
            ${template === 'minimal' ? `
            .items-table thead {
                color: #374151;
            }
            ` : ''}
            
            .items-table th {
                padding: 15px 12px;
                text-align: left;
                font-weight: 600;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .items-table td {
                padding: 12px;
                font-size: 14px;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .items-table .text-right {
                text-align: right;
            }
            
            .items-table .text-center {
                text-align: center;
            }
            
            .items-table .item-description {
                font-weight: 500;
                color: #1f2937;
            }
            
            .items-table .item-amount {
                font-weight: 600;
                color: #059669;
            }
            
            .invoice-totals {
                margin: 0 40px 30px;
                display: flex;
                justify-content: flex-end;
            }
            
            .totals-table {
                min-width: 350px;
                background: #f9fafb;
                border-radius: 8px;
                padding: 20px;
            }
            
            .totals-table tr {
                border-bottom: 1px solid #e5e7eb;
            }
            
            .totals-table tr:last-child {
                border-bottom: ${template === 'minimal' ? '2px solid #374151' : `3px solid ${primaryColor}`};
                font-weight: 700;
                font-size: 18px;
            }
            
            .totals-table td {
                padding: 8px 0;
                font-size: 16px;
            }
            
            .totals-table td:first-child {
                padding-right: 30px;
                color: #374151;
                font-weight: 500;
            }
            
            .totals-table td:last-child {
                text-align: right;
                font-weight: 600;
            }
            
            .totals-table .total-amount {
                color: #059669;
                font-weight: 600;
            }
            
            .payment-info {
                background: #f0f9ff;
                border: 2px solid #bae6fd;
                border-radius: 8px;
                padding: 25px;
                margin: 0 40px 30px;
            }
            
            .payment-info h4 {
                color: #0369a1;
                font-weight: 600;
                margin-bottom: 15px;
                font-size: 16px;
            }
            
            .payment-details {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                font-size: 14px;
            }
            
            .payment-detail dt {
                font-weight: 600;
                color: #0369a1;
                margin-bottom: 5px;
            }
            
            .payment-detail dd {
                color: #1e40af;
                line-height: 1.4;
            }
            
            .invoice-notes {
                padding: 0 40px 30px;
            }
            
            .invoice-notes h4 {
                font-size: 16px;
                font-weight: 600;
                color: ${template === 'minimal' ? '#374151' : primaryColor};
                margin-bottom: 15px;
                ${template === 'minimal' ? 
                    'border-bottom: 1px solid #e5e7eb;' : 
                    `border-bottom: 2px solid ${primaryColor};`
                }
                padding-bottom: 5px;
            }
            
            .invoice-notes p {
                color: #374151;
                line-height: 1.6;
                font-size: 14px;
            }
            
            .invoice-terms {
                padding: 0 40px 30px;
                border-top: 1px solid #e5e7eb;
                margin-top: 30px;
            }
            
            .invoice-terms h4 {
                font-size: 16px;
                font-weight: 600;
                color: ${template === 'minimal' ? '#374151' : primaryColor};
                margin-bottom: 15px;
                margin-top: 20px;
            }
            
            .invoice-terms ul {
                color: #374151;
                line-height: 1.6;
                padding-left: 20px;
                font-size: 14px;
            }
            
            .invoice-terms li {
                margin-bottom: 8px;
            }
            
            .invoice-footer {
                background: ${template === 'minimal' ? '#f8fafc' : '#f9fafb'};
                padding: 25px 40px;
                text-align: center;
                color: #6b7280;
                font-size: 14px;
                border-top: 1px solid #e5e7eb;
                font-style: italic;
                margin-top: auto;
                position: relative;
            }
            
            .invoice-footer::after {
                content: "huh(pact)";
                position: absolute;
                bottom: 10px;
                right: 40px;
                font-size: 10px;
                color: #9ca3af;
                font-style: normal;
            }
        `;
    }
    
    async waitForImagesAndFonts(container) {
        // Wait for images
        const images = container.querySelectorAll('img');
        const imagePromises = Array.from(images).map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = resolve;
                    img.onerror = resolve;
                    setTimeout(resolve, 5000);
                }
            });
        });
        
        await Promise.all(imagePromises);
        
        // Wait for fonts to load
        if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
        }
        
        // Additional wait for rendering
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    showMessage(text, type = 'info') {
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            padding: 15px 20px;
            border-radius: 8px;
            max-width: 300px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            ${type === 'success' ? 'background: #10b981; color: white;' : ''}
            ${type === 'error' ? 'background: #ef4444; color: white;' : ''}
            ${type === 'info' ? 'background: #3b82f6; color: white;' : ''}
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 4000);
    }
}

// Initialize PDF generator
window.pdfGenerator = new PDFGenerator();