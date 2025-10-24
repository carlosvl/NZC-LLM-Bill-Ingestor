import { LightningElement, api } from 'lwc';

export default class EnergyRecordDetail extends LightningElement {
    @api recordData;
    @api showComponent = false;
    
    /**
     * Helper getter to prepare detail fields for display
     */
    get detailFields() {
        if (!this.recordData) return [];
        
        const fields = [];
        Object.keys(this.recordData).forEach(key => {
            if (key !== 'Id' && key !== 'rowIndex') {
                const label = key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
                const fieldType = this.getFieldType(key, label);
                
                fields.push({
                    key: key,
                    label: label,
                    value: this.recordData[key] || 'N/A',
                    type: fieldType
                });
            }
        });
        
        return fields;
    }
    
    /**
     * Determine field type for styling
     */
    getFieldType(key, label) {
        const keyLower = key.toLowerCase();
        const labelLower = label.toLowerCase();
        
        // Check for account-related fields
        if (keyLower.includes('account') || labelLower.includes('account')) {
            return 'account';
        }
        
        // Check for date-related fields
        if (keyLower.includes('date') || labelLower.includes('date') || keyLower.includes('due')) {
            return 'date';
        }
        
        // Check for amount/money fields
        if (keyLower.includes('amount') || keyLower.includes('total') || 
            keyLower.includes('cost') || keyLower.includes('price') ||
            keyLower.includes('kilowatt') || keyLower.includes('kwh')) {
            return 'amount';
        }
        
        return 'default';
    }
    
    /**
     * Get record title for display
     */
    get recordTitle() {
        if (!this.recordData) return 'Record Details';
        
        // Try to find a meaningful title from common fields
        const titleFields = ['account_number', 'account', 'name', 'title'];
        for (let field of titleFields) {
            if (this.recordData[field]) {
                return `Details for ${this.recordData[field]}`;
            }
        }
        
        return `Record #${this.recordData.rowIndex || 'Unknown'}`;
    }
    
    /**
     * Close the detail view
     */
    handleClose() {
        // Dispatch custom event to parent component
        const closeEvent = new CustomEvent('closedetail', {
            detail: {
                message: 'Detail view closed'
            }
        });
        this.dispatchEvent(closeEvent);
    }
}