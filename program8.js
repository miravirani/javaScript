// program 1
// Write a JavaScript program to pass a 'JavaScript function' as a parameter.
function greet(name) {
    return "Hello, " + name;
}

function saySomething(func, name) {
    return func(name);
}

console.log(saySomething(greet, "world")); 

// program 2
// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers 
// using recursion.
function gcd(a, b) {
    
    if (b === 0) {
        return a;
    } else {
        
        return gcd(b, a % b);
    }
}
const num1 = 48;
const num2 = 18;
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);

// program 3 
// Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y) {
    if(x > y){
        return []
    }
    else{
        return [x + 1, ...range(x + 1, y)]
    }
}
const results = range(1, 9)
console.log("Integers in the range (1, 9):", results);

// program 4
// Write a JavaScript program to compute the sum of an array of integers.
// Example : let array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumArray(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum
}

const array = [1, 2, 3, 4, 5, 6]
const resul = sumArray(array)
console.log("Sum of the array:", resul);

// program 5
// Write a JavaScript program to compute the exponent of a number.
// 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function computeExponent(base, exponent){
    let res = 1
    for(let i = 0; i < exponent; i++){
        res *= base
    }
    return res
}

const base = 8
const exponent = 2
const res = computeExponent(base, exponent)
console.log(`${base} raised to the power of ${res}`)