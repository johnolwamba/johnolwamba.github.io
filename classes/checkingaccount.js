"use strict";

class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(value) {
        this._overdraftLimit = value;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }

        if (amount > (this.getOverdraftLimit() + this.getBalance())) {
            throw Error("Insufficient funds");
        }

        this._balance -= amount;
    }

    toString() {
        return `CheckingAccount: Number: ${this.getNumber()}, overdraftLimit: ${this.getOverdraftLimit()}`;
    }

    endOfMonth() {
        return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.getOverdraftLimit()}`;
    }
}