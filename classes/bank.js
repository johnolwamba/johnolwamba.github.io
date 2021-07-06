"use strict";

class Bank {
    static nextNumber = 1;

    constructor() {
        this.accounts = [];
    }

    addAccount() {
        let account = new Account(Bank.nextNumber);
        Bank.nextNumber++;
        this.accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        let savingsAccount = new SavingsAccount(Bank.nextNumber, interest);
        Bank.nextNumber++;
        this.accounts.push(savingsAccount);
        return savingsAccount.getNumber();
    }

    addCheckingAccount(overdraft) {
        let checkingAccount = new CheckingAccount(Bank.nextNumber, overdraft);
        Bank.nextNumber++;
        this.accounts.push(checkingAccount);
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        this.accounts.forEach(account => {
            if (account instanceof Account) {
                if (account.getNumber() === number) {
                    this.accounts.splice(account, 1);
                }
            }
        });
    }

    accountReport() {
        return this.accounts.map(account => {
            return account.toString()
        }).reduce((prev, curr) => {
            return prev + curr + "\n";
        });
    }

    endOfMonth() {
        return this.accounts.map(account => {
            return account.endOfMonth()
        }).reduce((prev, curr) => {
            return prev + curr + "\n";
        });
    }
}