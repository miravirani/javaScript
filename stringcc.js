// c program 71
// compare a two string to check whether they are equal or not?
function compareStrings(str1, str2) {
    if (str1 == str2) {
        return true;
    }
}

let string1 = "hello";
let string2 = "hello";
console.log("compare a two string =", compareStrings(string1, string2));

// c program 72
// copy one string in to another string using string handling function and without it
const copyString = (str) => {
    let copiedStr = "";
    for (let i = 0; i < str.length; i++) {
        copiedStr += str[i];
    }
    return copiedStr;
}
let originalString = "Hello, world!";
console.log("original string =", originalString);
let copiedStr = copyString(originalString);
console.log("copy string =", copiedStr);

// c program 73
// find cube root of number
function cubeRoot(number) {
    return Math.pow(number, 1 / 3);
}

console.log("cubeRoot = ", cubeRoot(27));
console.log("cubeRoot = ", cubeRoot(125));

// find square root of a number
function squareRoot(num) {
    return Math.sqrt(num)
}

console.log("squareRoot = ", squareRoot(16));
console.log("squareRoot = ", squareRoot(25));

// c program 74
// swap two numbers without using third variable
let a = 10;
let b = 20;
console.log("a =", a);
console.log("b =", b);
a = a + b;
b = a - b;
a = a - b;
console.log("a =", a);
console.log("b =", b);

// c prograam 75
// to Handle Divide By Zero
let z = 10;

try {
    console.log("first try catch");
    console.log(z / 0);
}
catch (error) {
    console.log("this is catch :", error);
}
console.log("aftor");

// c program 76
// create a function for adding of two numbers
const addingNumber = (x, y) => {
    return (x + y);
}
let x = 45;
let y = 34;
console.log("x =", x);
console.log("y =", y);
const add = addingNumber(x, y);
console.log("adding of two numbers =", add);

// c program 77
//  create a function to print Fibonacci series.
const fiboSeries = (n) => {
    let cc ;
    let aa = 0, bb = 1;
    let fibonacciSeries = [aa, bb];

    for (let i = 2; i <= n; i++) {
        cc = aa + bb;
        fibonacciSeries.push(cc);
        aa = bb;
        bb = cc;
    }
    return fibonacciSeries;
}
const series = fiboSeries(10);
console.log("fibonacci series =", series);

// c program 78
// find factorial of given number using recursion.
const factNumber = (n) => {
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact
}
const factorial = factNumber(5);
console.log("factorial number =", factorial);

// c program 79
const compare = (a, b) => {
    return a - b
}
let num = [551, 3, 5, 6, 14, 229, 9, 34, 65]
num.sort(compare)
console.log(num);

// c program 80
class EMP {
    constructor(emp_no, salary, name, department) {
        this.emp_no = emp_no;
        this.salary = salary;
        this.name = name;
        this.department = department;
    }
    get() {
        console.log("emp_no = ", this.emp_no);
        console.log("salary = ", this.salary);
        console.log("name = ", this.name);
        console.log("department= ", this.department);
    }
}
let emp1 = new EMP(2, 10000, "manan", "it")
emp1.get()