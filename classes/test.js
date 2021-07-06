"use strict";

describe('Savings Account', function () {
    let account = new SavingsAccount(123, 5);
    account.deposit(10000);
    account.addInterest();

    it('adds interest to the balance ', function () {
        assert.equal(10500.0, account.getBalance());
    });
});

describe('Savings Account endOfMonth', function () {
    let account = new SavingsAccount(123, 5);
    account.deposit(10000);
    account.addInterest();

    it('endOfMonth: returns end of month statement ', function () {
        assert.equal('Interest added SavingsAccount ' + 123 + ': balance: '
            + 11025 + ' interest: ' + 5, account.endOfMonth());
    });
});

describe('Checking Account Withdraw', function () {
    let account = new CheckingAccount(123, 1000);
    account.deposit(120000);
    account.withdraw(120500);

    it('Withdraws amount and considers overdraft', function () {
        assert.equal(-500, account.getBalance());
    });
});

describe('Checking Account endOfMonth', function () {
    let account = new CheckingAccount(123, 1000);
    account.deposit(120000);
    account.withdraw(120500);

    it('endOfMonth: returns end of month statement ', function () {
        assert.equal('Warning, low balance CheckingAccount ' + 123 + ': balance: '
            + -500 + ' overdraft limit: ' + 1000, account.endOfMonth());
    });
});

describe('get balance', function () {
    let account = new Account(123);

    it('This creates a new account and returns the initial account balance', function () {
        assert.equal(0.0, account.getBalance());
    });
});

describe('Fetch account number', function () {
    let account = new Account(123);

    it('Returns account number for the created account', function () {
        assert.equal(123, account.getNumber());
    });
});

describe('deposit', function () {
    let account = new Account(123);
    account.deposit(120000);

    it('increments account balance with deposited amount', function () {
        assert.equal(120000.0, account.getBalance());
    });
});

describe("Bank", function () {
    it("add new bank account to accounts list", function () {
        let bank = new Bank();
        bank.addAccount();
        assert.equal(1, bank.accounts.length);
        assert.equal(1, bank.accounts[0].getNumber());

        bank.addSavingsAccount(25);
        assert.equal(2, bank.accounts.length);

        bank.addCheckingAccount(100);
        assert.equal(3, bank.accounts.length);
    });

    it("remove an account from account list", function () {
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();

        assert.equal(3, bank.accounts.length);
        bank.closeAccount(bank.accounts[0].getNumber());
        assert.equal(2, bank.accounts.length);
    });
});

describe('Withdraw amount', function () {
    let account = new Account(123);
    account.deposit(50000);
    account.withdraw(20000);

    it('New balance should be equal to old balance minus withdrawal amount ', function () {
        assert.equal(30000.0, account.getBalance());
    });
});



