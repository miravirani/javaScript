// cpp program 50
// Get two value (Item no. and price) and display it using outside of class
class Item {
    constructor(itemNo, price) {
        this.itemNo = itemNo;
        this.price = price;
    }

    static getItemAndPrice(itemNo, price) {
        return [itemNo, price];
    }
}

const [itemNo, price] = Item.getItemAndPrice(32, 500);

console.log("Item number:", itemNo);
console.log("Price:", price);

// cpp program 51
// find factorial by defining function outside the class
class factorial{
    constructor(){

    }
    static findFactorialNumber(num){
        let fact = 1
        for(let i = 1; i <= num; i++){
            fact =fact * i;
        }
        return fact;
    }
}

const fact = factorial.findFactorialNumber(5)
console.log("Factorial Number : ", fact);

// cpp program 52
// reverse the number by defining function outside the class
class Reverse {
    constructor(){

    }
    static findReverse(num){
        let rev = 0;

        for(let i = 1; num > 0; i++){
            let a = num % 10;
            num = Math.floor(num / 10);
            rev = rev * 10 + a
        }
        return rev
    }
}
let rev = Reverse.findReverse(123)
console.log("reverse number :", rev);