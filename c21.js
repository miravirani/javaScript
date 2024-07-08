const prompt = require('prompt-sync')();

// c program 21
// let n = parseInt(prompt("Enter the value of number ="));
// let i = 1;
// for(i = 1; i <= n; i++){
//     console.log(i);
// }
// let j = n; 
// for(j = n; j >= 1; j--){
//     console.log(j)
// }

// c program 22
// Bitwise AND (&) operation
// function bitwiseAnd(a, b) {4
//     return a & b;
// }

// // Bitwise OR (|) operation
// function bitwiseOr(a, b) {
//     return a | b;
// }

// // Bitwise XOR (^) operation
// function bitwiseXor(a, b) {
//     return a ^ b;
// }

// // Bitwise NOT (~) operation
// function bitwiseNot(b) {
//     return ~b;
// }

// // Bitwise left shift (<<) operation
// function bitwiseLeftShift(a, shift) {
//     return a << shift;
// }

// // Bitwise right shift (>>) operation
// function bitwiseRightShift(a, shift) {
//     return a >> shift;
// }

// // Bitwise zero-fill right shift (>>>) operation
// function bitwiseZeroFillRightShift(a, shift) {
//     return a >>> shift;
// }

// // Example usage:
// var num1 = 5; // Binary representation: 101
// var num2 = 3; // Binary representation: 011

// console.log("Bitwise AND:", bitwiseAnd(num1, num2)); //(Binary: 001)
// console.log("Bitwise OR:", bitwiseOr(num1, num2)); //(Binary : 111)
// console.log("Bitwise XOR:", bitwiseXor(num1, num2)); //(Binary : 110)
// console.log("Bitwise NOT:", bitwiseNot(num2));
// console.log("Bitwise left shift:", bitwiseLeftShift(num1, 1)); //(Binary: 1010)
// console.log("Bitwise right shift:", bitwiseRightShift(num1, 1)); //(Binary: 10)
// console.log("Bitwise zero-fill right shift:", bitwiseZeroFillRightShift(-5, 1)); //(Binary: 01111111111111111111111111111101)

// c program 23
// let num = parseInt(prompt("Enter the value of number ="));
//     if (num > 100) {
//         console.log("The number is greater than 100.");
//     }
//     else {
//         console.log("The number is not greater than 100.");
//     }

//     // odd or even number
//     if (num % 2 == 0){
//         console.log("The number is even.")
//     }
//     else {
//         console.log("The number is odd.")
//     }

// // c program 24
// function printTables(nn) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(nn + "*" + i + "=" + (nn * i));
//     }
// }
// let nn = parseInt(prompt("Enter the value of table nn: "));
// printTables(nn);

// c program 25
// function reverseNumber(number) {    
//     let reversed = 0;

//     while (number > 0) {
//         let lastDgit = number % 10;
//         reversed = reversed * 10 + lastDgit;
//         number = Math.floor(number / 10);
//     }
//     return reversed;
// }
// let number = parseInt(prompt("enter digit of reverse number = "));
// let reversedNum = reverseNumber(number);
// console.log("Reversed number: " + reversedNum);

// c program 26
// let days = parseInt(prompt("Enter the value of days = "));
// let year = days / 365;
// let week = days / 7;
// let day = days / 1;
// console.log("year = ", year);
// console.log("week = ", week);
// console.log("day = ", day);

// c program 27
// function findMaxMin(num1, num2) {
//     let max, min;

//     if (num1 > num2) {
//         max = num1;
//         min = num2;
//     } else {
//         max = num2;
//         min = num1;
//     }

//     return { max: max, min: min };
// }

// let userInput1 = parseInt(prompt("Enter the first number: "));
// let userInput2 = parseInt(prompt("Enter the second number: "));

// let result = findMaxMin(userInput1, userInput2);
// console.log("Maximum number is: " + result.max);
// console.log("Minimum number is: " + result.min);

//c program 28
// function findMaxMin(num1, num2, num3) {
//     let max = num1;
//     let min = num1;

//     if (num2 > max) {
//         max = num2;
//     }
//     if (num3 > max) {
//         max = num3;
//     }
//     if (num2 < min) {
//         min = num2;
//     }
//     if (num3 < min) {
//         min = num3;
//     }
//     return { max: max, min: min };
// }

// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));
// let num3 = parseInt(prompt("Enter the third number: "));

// let results = findMaxMin(num1, num2, num3);
// console.log("Maximum number is: " + results.max);
// console.log("Minimum number is: " + results.min);

// c program 29
// function calculateDivision(sub1, sub2, sub3, sub4, sub5) {
//     let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
//     let percentage = (totalMarks / 500) * 100;
//     console.log("totalMraks = ", totalMarks);
//     console.log("percentage = ", percentage);

//     if (percentage >= 70) {
//         return "Distinction";
//     } else if (percentage >= 60 && percentage < 70) {
//         return "First class"
//     } else if (percentage >= 50 && percentage < 60) {
//         return "Second class"
//     } else if (percentage >= 40 && percentage < 50) {
//         return "Third class"
//     } else {
//         return "Fail"
//     }

// }
// let sub1 = parseInt(prompt("Enter the value of subject1 = "));
// let sub2 = parseInt(prompt("Enter the value of subject2 = "));
// let sub3 = parseInt(prompt("Enter the value of subject3 = "));
// let sub4 = parseInt(prompt("Enter the value of subject4 = "));
// let sub5 = parseInt(prompt("Enter the value of subject5 = "));

// let division = calculateDivision(sub1, sub2, sub3, sub4, sub5);
// console.log("Division: " + division);

// c program 30
function chackPrimeNumber(n) {
    let f = 0, i;

    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            f++;
            break;
        }
    }
    if (f == 0 && n > 1) {
        console.log(n + " is a prime number");
    }
    else {
        console.log(n + " is a not prime number");
    }
}
let n = parseInt(prompt("Enter the prime number = "));
chackPrimeNumber(n);