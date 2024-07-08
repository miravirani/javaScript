// cpp program 61
// Create a class Time that display time in hour and minute form. create a method total time () which
// take time object as an argument and return a new object of time display total of both time object
class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }
        getTime(){
            return this.hour + ` hour ` + this.minute + ` minute `;
        }
    static totalTime(time1, time2) {
        let totalMinute = time1.hour * 60 + time1.minute + time2.hour * 60 + time2.minute;
        let totalHour = Math.floor(totalMinute / 60);
        let remainingMinute = totalMinute % 60;
        return new Time(totalHour, remainingMinute);
    }
}
let time1 = new Time(2, 30);
let time2 = new Time(1, 45);

console.log("Time 1:", time1.getTime());
console.log("Time 2:", time2.getTime()); 

let totalTime = Time.totalTime(time1, time2);
console.log("Total Time:", totalTime.getTime());

// cpp program 62
// find minimum from two values by passing object as argument. Passing input from
// keyboard. consider Name of class is Temp.
// Data member - int x;
// member function- Get(int n)
// Max Temp( )
class Temp {
    constructor(x) {
        this.x = x;
    }

    static MaxTemp(temp1, temp2) {
        return temp1.x < temp2.x ? temp1 : temp2;
    }
}

let temp1 = new Temp(5);
let temp2 = new Temp(8);

let maxTempObject = Temp.MaxTemp(temp1, temp2);
console.log("Max Temp Object:", maxTempObject);

// cpp program 63
// create a class Distance having data member feet and inches. Write a program to add to distance
// using object asfunction argument
class Distance {
    constructor(feet, inches) {
        this.feet = feet;
        this.inches = inches;
    }

    add(otherDistance) {
        let sumFeet = this.feet + otherDistance.feet;
        let sumInches = this.inches + otherDistance.inches;

        if (sumInches >= 12) {
            sumFeet++;
            sumInches -= 12;
        }

        return new Distance(sumFeet, sumInches);
    }
}

function displayDistance(distance) {
    console.log(`Distance: ${distance.feet} feet ${distance.inches} inches`);
}

let distance1 = new Distance(5, 8);
let distance2 = new Distance(3, 10);

let sumDistance = distance1.add(distance2);
displayDistance(sumDistance);