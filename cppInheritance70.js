// cpp program 70
// Define a class bank account with current and saving bank account as inherited
// classes. class bank account should have following data member: account number, 
// name, balance amount and member function; to initialize the value, to deposit and
// withdraw amount after checking the minimum balance.
// class bank
// {
//    int accountno;
//    char name[20];
//    int bal;
//    public: getdata( );
//    putdata( );
//    withdrow();
//    deposit( );
//    showbal( );
// };
class Bank {
    constructor(account_no, name, balance) {
        this.account_no = account_no;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} successfully.`);
    }
    withdrow(amount) {
        this.balance -= amount;
        console.log(`withdrow ${amount} successfully`);
    }
    //     withdraw(amount) {
    //         if (amount <= this.balance) {
    //             this.balance -= amount;
    //             console.log(`Withdrawn ${amount} successfully.`);
    //         } else {
    //             console.log("Insufficient balance.");
    //         }
    //     }
    showbalance() {
        console.log(`Account Number = ${this.account_no}`);
        console.log(`Name = ${this.name}`);
        console.log(`balance = ${this.balance}`);
    }
}
class CurrentAccount extends Bank {
    constructor(account_no, name, balance) {
        super(account_no, name, balance)
    }

    withdrow(amount) {
        super.withdrow(amount);
        if (this.balance < 1000) {
            console.log("Minimum balance limit reached. Service charge of 100 applied.");
            this.balance -= 100;
        }
    }
}

class SavingsAccount extends Bank {
    constructor(account_no, name, balance) {
        super(account_no, name, balance)
    }
    withdrow(amount) {
        super.withdrow(amount);
        if (this.balance < 500) {
            console.log("minimum balance limit reached. Service charge of 50 applied");
            this.balance -= 50;
        }
    }
}
let currentAccount = new CurrentAccount(123456789, "nayan", 1500);
currentAccount.deposit(500);
currentAccount.showbalance();
currentAccount.withdrow(1000);
currentAccount.showbalance();

let savingsAccount = new SavingsAccount(987654321, "manan", 2000);
console.log("savings Account:");
savingsAccount.deposit(900);
savingsAccount.showbalance();
savingsAccount.withdrow(600);
savingsAccount.showbalance();