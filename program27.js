// program 1
// Write a JavaScript program to display the current day and time in the following format. 
let date = new Date;
console.log("current time :", date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[date.getDay()];
console.log("current day:", currentDay);

// program 2
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let side1 = 5;
let side2 = 6;
let side3 = 7;
let perimeter = (side1 + side2 + side3) / 2;
let area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
console.log(area);

// program 3 
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by 
// periodically removing one letter from the string end and attaching it to the front.
function rotateStringRight(str, rotations) {
  let arr = str.split('');
  let count = 0;

  function rotate() {
    if (count >= rotations) return;

    let lastChar = arr.pop();
    arr.unshift(lastChar);

    console.log(arr.join(''));

    count++;
    setTimeout(rotate, 1000);
  }

  rotate();
}

rotateStringRight('w3Shool', 7);

// program 4
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
function leapyear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
console.log(leapyear(2024));

// program 5
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
for (var year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0);
  if (d.getDay() === 0)
    console.log("1st January is being a Sunday  " + year);
}

