// cpp program 76
// wAP for Hierarchical Inheritance
//                       Account
//                       a/c no
//                       name bal
// withdraw                                      deposite
// withdraw amount                               deposite amount

class Account{
    constructor(accountNumber, name, balance){
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance
    }
    displayData(){
        console.log("account Number = ", this.accountNumber);
        console.log("name = ", this.name);
        console.log("balance = ", this.balance);
    }
}
class Withdraw extends Account{
    constructor(accountNumber, name, balance, withdrawAmount){
        super(accountNumber, name, balance)
        this.withdrawAmount = withdrawAmount;
    }
    withdraw() {
        if (this.withdrawAmount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= this.withdrawAmount;
            console.log(`${this.withdrawAmount} has been withdrawn. New balance = ${this.balance}`);
        }
    }

    displayData() {
        super.displayData();
        console.log("Withdraw Amount = ", this.withdrawAmount);
    }
}
class Deposite extends Account{
    constructor(accountNumber, name, balance, depositeAmount){
        super(accountNumber, name, balance)
        this.depositeAmount = depositeAmount
    }
    deposite(){
        this.depositeAmount += this.balance;
        console.log(`${this.balance} has been deposite. New balance = ${this.depositeAmount}`);
    }
    displayData(){
        super.displayData();
        console.log("deposite amount = ", this.depositeAmount);
    }

}
let withdrawAccount = new Withdraw(678910, "het", 6000, 2000)
withdrawAccount.displayData();
withdrawAccount.withdraw();
console.log("\n");

let depositeAccount = new Deposite (12345, "het", 6000, 3000)
depositeAccount.displayData();
depositeAccount.deposite()