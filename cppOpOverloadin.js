// cpp program 80

// create TIME class that stores the hours, minute, and seconds overload the +operator so that the user
// can add two times. (binary operator)
 
// class Time {
//     constructor(hours, minute, second){
//         this.hours = hours;
//         this.minute = minute;
//         this.second = second;
//     }
//     getData(){
//         console.log("houre =", this.hours);
//         console.log("minute = ",this.minute);
//         console.log("second =", this.second);
//     }
//     Time operator + (Time mm){
//         Time kk;
//         kk.second = second+mm.second
//     }
// }

class Time {
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.normalizeTime();
    }

    // Normalize time to ensure minutes and seconds are within their respective bounds
    normalizeTime() {
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        // Adjust for any negative values
        if (this.seconds < 0) {
            this.minutes -= Math.ceil(Math.abs(this.seconds) / 60);
            this.seconds = (this.seconds % 60 + 60) % 60;
        }
        if (this.minutes < 0) {
            this.hours -= Math.ceil(Math.abs(this.minutes) / 60);
            this.minutes = (this.minutes % 60 + 60) % 60;
        }
    }

    // Method to add two Time objects
    add(otherTime) {
        let newHours = this.hours + otherTime.hours;
        let newMinutes = this.minutes + otherTime.minutes;
        let newSeconds = this.seconds + otherTime.seconds;
        return new Time(newHours, newMinutes, newSeconds);
    }

    // Method to display the time
    getData() {
        console.log("Hours =", this.hours);
        console.log("Minutes =", this.minutes);
        console.log("Seconds =", this.seconds);
    }
}

// Example usage
let time1 = new Time(1, 30, 45);
let time2 = new Time(2, 45, 30);

let time3 = time1.add(time2);
time3.getData(); // Outputs: Hours = 4, Minutes =
