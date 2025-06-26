// Day 12 - Project 2: Bank Account Handler System

class BankUsers {
  constructor(owner, balance = 0) {
    (this.owner = owner), (this.balance = balance);
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (this.balance >= amount) this.balance -= amount;
    else
      console.log(`User ${this.owner} has Insufficent Balance ${this.balance}`);
  }

  printOutput() {
    // console.log(`${this.owner} Credit: ${this.credit()}`);
    console.log(`Hello ${this.owner} your remaining balance: ${this.balance}`);
  }
}

const yash = new BankUsers("Yash", 26000);
yash.credit(2000);
yash.debit(4000);
yash.printOutput();
const aditya = new BankUsers("Aditya", 4000);
aditya.credit(6000);
aditya.debit(12000);
// aditya.printOutput();
