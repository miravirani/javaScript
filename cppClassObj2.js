// cpp program 45
// find out Celsiusto Fahrenheit using class & object
class Fahrenheit{
    constructor(f, c){
        this.c = c;
        this.f = f;
    }
  
    convert(){
        let cel = (this.f - 32) * 0.55;
        console.log("Fahrenheit to Celsius =",cel);

        let fah = (this.c * 0.55) + 32;
        console.log("Celsius to Fahrenheit = ",fah);
    }
}

let Celsius = new Fahrenheit(360, 32)
Celsius.convert();

// cpp program 46
// convert inch to feet and feet to inch using class &object
class feetInch{
    constructor(feet, inch){
        this.feet = feet;
        this.inch = inch;
    }
    convert(){
        let FEET = (this.inch / 12)
        console.log("inch to feet =", FEET);

        let INCH = (this.feet * 12)
        console.log("feet to inch =", INCH);
    }
}
let inchFeet = new feetInch(3, 144)
inchFeet.convert();

// cpp program 47
// Enter hours and find out minutes and seconds using class and object
class findMinSec{
    constructor(hours){
        this.hours = hours
    }
    convert(){
        let minutes = (this.hours * 60)
        console.log("hours to minutes = ", minutes);

        // let hou = (minutes / 60)
        // console.log("minutes to hours =", hou);

        let seconds = (this.hours * 3600)
        console.log("hours to seconds = ", seconds);
    }
}

let minuSec = new findMinSec(2.5)
minuSec.convert()

// cpp program 48
// create a class called "Hotal"
class hotal{
    constructor(roomNo, name, charge, days){
        this.roomNo = roomNo;
        this.name = name;
        this.charge = charge;
        this.days = days;
    }
    calculate(){
        console.log("roomNo = ", this.roomNo);
        console.log("name =", this.name);
        console.log("charge = ", this.days * this.charge);
        console.log("days = ", this.days);
    }
}
let Hotel = new hotal(108, "abc", 1500, 3)
Hotel.calculate();