const prompt = require('prompt-sync')();

// program 1
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is 
// then prompted to input a guess number. The program displays a message "Good Work" if the input matches the 
// guess number otherwise "Not matched".

let guessNum = parseInt(prompt("Enter your guess Number 1 to 10 ="));
let num = Math.round(Math.random() * 10);
console.log("random number = ", num);
if (num == guessNum) {
    console.log("Good Work");
}
else {
    console.log("Not matched");
}

// program 2
// Write a JavaScript program to calculate the days left before Christmas. 
function daysChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25);

    if (today > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }

    const diffTime = christmasDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

console.log(`${daysChristmas()} days left until Christmas.`);

// program 3
//Write a JavaScript program to calculate multiplication and division of two numbers
let firstNumber = 10;
let secondNumber = 12;

console.log("multiplication == ", firstNumber * secondNumber);
console.log("division == ", firstNumber / secondNumber);

// program 4
//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));

// program 5
// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 
// characters and adding them at both the front and back. The string length must be 3 or more.
function front_back3(str)
 {
  if (str.length>=3)
   {
   str_len = 3;
 
  back = str.substring(str.length-3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));
