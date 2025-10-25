class BankAccount {
    accountNumber;
    ownerName;
    balance;
    bankName = "SmartBank";
    amountLow = false;
    amountGreater = false;

    constructor(bankDetails) {
        this.accountNumber = bankDetails.accountNumber;
        this.ownerName = bankDetails.ownerName;
        this.balance = bankDetails.balance;
    }

    deposit(amount) {
        if (amount >= 0) {
            this.balance += amount;
        } else {
            this.amountLow = true;
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            this.amountGreater = true;
        } else if (amount < 0) {
            this.amountLow = true;
        } else {
            this.balance -= amount;
        }
    }

    getAccountInfo() {
        console.log(`[${this.bankName}] Account ${this.accountNumber} (${this.ownerName})`);
        if (this.amountGreater) {
            console.log(`Balance: ₦${this.balance} | Insufficient Funds!`);
        } else if (this.amountLow) {
            console.log(`Balance: ₦${this.balance} | Amount can't be negative!`);
        } else {
            console.log(`Balance: ₦${this.balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    interestRate;

    constructor(bankDetails) {
        super(bankDetails);
        this.interestRate = bankDetails.interestRate;
    }

    addInterest() {
        let interest = (this.balance * this.interestRate / 100);
        return interest;
    }

    deposit(amount) {
        if (amount >= 0) {
            this.balance += (this.addInterest() + amount);
        } else {
            this.amountLow = true;
        }
    }

    getAccountInfo() {
        console.log(`[${this.bankName}] Account ${this.accountNumber} (${this.ownerName})`);
        if (this.amountGreater) {
            console.log(`Balance: ₦${this.balance} | Insufficient Funds!`);
        } else if (this.amountLow) {
            console.log(`Balance: ₦${this.balance} | Amount can't be negative!`);
        } else {
            console.log(`Balance: ₦${this.balance} | Interest Rate: ${this.interestRate}%`);
        }
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit;
    transactionLimitReached = false;

    constructor(bankDetails) {
        super(bankDetails);
        this.transactionLimit = bankDetails.transactionLimit;
    }

    withdraw(amount) {
        if (amount > this.transactionLimit && !this.amountGreater) {
            this.transactionLimitReached = true;
        } else if (amount > this.balance) {
            this.amountGreater = true;
        } else if (amount < 0) {
            this.amountLow = true;
        } else {
            this.balance -= amount;
        }
    }

    getAccountInfo() {
        console.log(`[${this.bankName}] Account ${this.accountNumber} (${this.ownerName})`);
        if (this.transactionLimitReached) {
            console.log(`Balance: ₦${this.balance} | Transaction Limit Exceeded!!`);
        } else if (this.amountGreater) {
            console.log(`Balance: ₦${this.balance} | Insufficient Funds!`);
        } else if (this.amountLow) {
            console.log(`Balance: ₦${this.balance} | Amount can't be negative!`);
        } else {
            console.log(`Balance: ₦${this.balance} | Transaction Limit: ₦${this.transactionLimit}`);
        }
    }
}

const bank = new BankAccount({ accountNumber: 1001, ownerName: "Ayomide", balance: 5000 });

bank.withdraw(700)
bank.getAccountInfo()

const savings = new SavingsAccount({ accountNumber: 1001, ownerName: "Ayomide", balance: 5000, interestRate: 5 });

savings.deposit(500000);

savings.getAccountInfo();

const current = new CurrentAccount({ accountNumber: 1001, ownerName: "Ayomide", balance: 5000, transactionLimit: 1000 });

current.withdraw(500);
current.getAccountInfo();