// cpp program 71
// WAP for single inheritance number
// a , b
//  getdata
//  display
//  addition
//  sum( )
//  dispsum( )
class Single {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getData() {
        console.log("number a :", this.a);
        console.log("number b :", this.b);
    }

    display() {
        console.log("Numbers: " + this.a + ", " + this.b);
    }
}

class Sum extends Single {
    constructor(a, b) {
        super(a, b)
    }

    addition() {
        return this.a + this.b
    }

    sum() {
        return this.addition()
    }
}

let numbers = new Sum(5, 7)
numbers.getData()
numbers.display()
console.log("Addition : ", numbers.addition());
