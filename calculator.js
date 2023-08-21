class Calculator {
    constructor() {
        this.doAllClear();
    }

    setEntry(entry) {
        if(this.equal) {
            this.doAllClear();
        }

        if(this.entry == '' && entry == '.') {
            entry = '0.';
        }

        this.entry = this.entry == '0' ? '' : this.entry;
        this.entry += entry.toString();
    }

    setAction(action) {
        this.calculate();

        if(this.equal) {
            let total = this.total;
            this.doAllClear();
            
            this.entry = total;
            this.calculate();
        }

        this.action = action;
    }

    doAllClear() {
        this.total = 0;
        this.text = '';
        this.entry = '';
        this.action = '';
        this.equal = false;
        this.data = [];
    }

    doClearEntry() {
        if(this.equal) {
            this.doAllClear();
        }else{
            if(this.entry != ''){
                this.entry = this.entry.slice(0,-1);
            }
        }
    }

    doEqual() {
        this.calculate();
        this.equal = true;
    }

    calculate() {
        if (this.entry != '') {
            this.do(this.entry, this.action);
        }
    }

    do(number = 0, action = '') {
        number = parseFloat(number);

        // Do Action
        switch(action) {
            case '+':
                this.total += number; 
                break;
            case '-':
                this.total -= number; 
                break;
            case '*':
                this.total *= number; 
                break;
            case '/':
                this.total /= number; 
                break;
            default:
                this.total = number;
        }

        // Typing Text
        if(this.text != '') {
            this.text += action;
        }
        this.text += number;

        // Entry History
        this.data.push({
            number: number,
            action: action,
            total: this.total,
        })
        
        // Remove Temporary Data
        this.entry = '';
        this.action = '';
    }

    getText() {
        let result = this.text;

        if (this.equal) {
            if (this.data.length > 1) {
                result += '=' + this.total;
            }
        }else{
            result += this.action + this.entry;
        }

        return result == '' ? '0' : result;
    }
}