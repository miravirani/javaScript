// program 1
// Write a JavaScript program to calculate the factorial of a number.
function factorial(x) {

    if (x === 0) {
        return 1
    }
    return x * factorial(x - 1)

}
console.log(factorial(5))

// program 2
// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers 
// using recursion.

var a = 6; //First number
var b = 12;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = b;
console.log("gcd number =", gcd);

// program 3
// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print 
// "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both 
// three and five print "FizzBuzz"

for(let i = 1; i <= 30; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);
    }
    else if(i % 3 === 0){
        console.log(`Fizz`);
    }
    else if(i % 5 === 0){
        console.log(`Buzz`);
    }
    else{
        console.log(i);
    }
}

// program 4
// Write a JavaScript program to find and print the first 5 happy numbers.

function sumOfSquaresOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isHappyNumber(num) {
    let sequence = [];
    while (num !== 1 && !sequence.includes(num)) {
        sequence.push(num);
        num = sumOfSquaresOfDigits(num);
    }
    return num === 1;
}

function findHappyNumbers(count) {
    let happyNumbers = [];
    let num = 1;

    while (happyNumbers.length < count) {
        if (isHappyNumber(num)) {
            happyNumbers.push(num);
        }
        num++;
    }

    return happyNumbers;
}

let firstFiveHappyNumbers = findHappyNumbers(5);
console.log('The first 5 happy numbers are:', firstFiveHappyNumbers);

// program 5 
// Write a JavaScript program to sum 3 and 5 multiples under 1000.
let sum = 0;

for (let i = 0; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}

console.log(sum); 
