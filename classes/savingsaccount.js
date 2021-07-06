"use strict";

class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(value) {
        this._interest = value;
    }

    addInterest() {
        this._balance = ((this.getBalance() * this._interest) / 100) + this.getBalance();
    }

    toString() {
        return `SavingsAccount: Number: ${this.getNumber()}, Interest: ${this.getInterest()}`;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest()}`;
    }
}

