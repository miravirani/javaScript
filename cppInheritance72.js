// cpp program 72
// WAP for single inheritance
// Data
//    p,r,n
//    getdata
//    display
// simple interest
//    calculateinterest()
//    display
// interest()
class Data{
    constructor(p, r, n){
        this.p = p;
        this.r = r;
        this.n = n;
    }
    getData(){
        console.log("number p :", this.p);
        console.log("number r :", this.r);
        console.log("number n :", this.n);
    }
    display(){
        console.log("Numbers: " + this.p + ", " + this.r + ", " + this.n);
    }
}

class simpleInterest extends Data{
    constructor(p, r, n){
        super(p, r, n)
    }

    calculateinterest(){
        return (this.p * this.r * this.n) / 100;
    }

    displayData(){
        return this.calculateinterest()
    }
}

let interest = new simpleInterest(500, 2, 12)
interest.getData()
interest.display()
console.log("simpleInterest :", interest.displayData());