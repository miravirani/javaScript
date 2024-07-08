const prompt = require('prompt-sync')();

// c program 40
// Fibonacci Series.
// let a = 0, b = 1, c, i;
// let n = parseInt(prompt("Enter the value of number = "));
// for (i = 0; i < n; i++){
//     c = a + b;
//     console.log(a);
//     a = b;
//     b = c;
// }

//c program 41
// find Factorial of a given No.
// let i, fact = 1;
// let n = parseInt(prompt("Enetr the value of number n ="));
// for(i = 1; i <= n; i++){
//     fact = fact * i // fact *= i;
// }
// console.log("Factorial number = ", fact)

// c program 43
// Armstrong Series
let original, armstrong = 0, r;
let n = parseInt(prompt("Enter the value of number n ="));
original = n;
while (n > 0) {
    r = n % 10;
    armstrong += r * r * r;
    n = Math.floor(n / 10);
}
if (original === armstrong) {
    console.log("This number is armstrong number")
}
else {
    console.log("This number is not armstrong number")
}