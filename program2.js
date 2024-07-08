// program 1
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function findLongestWord(str) {

    let words = str.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

var exampleString = 'Web Development Tutorial';
console.log(findLongestWord(exampleString));

// program 2
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels 
// within the string.
function countVowels(str) {

    let voweleList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (voweleList.includes(str[i])) {
            count++;
        }
    }
    return count;
}
let str = "The quick brown fox";
console.log("vowels :", countVowels(str));

// program 3
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not 
// using recursion.
function isPrime(n) {
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}


isPrime(11) ? console.log(`prime number`) : console.log("not prime number");
isPrime(12) ? console.log("prime number") : console.log("not a prime number");

// program 4
//Write a JavaScript function that accepts an argument and returns the type.
//There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
let obj = {
    name: "manan",
    std: 12
}
let boolean = false;
let num = 12;
let string = 'hello';
let unde;


console.log(typeof obj);
console.log(typeof boolean);
console.log(typeof num);
console.log(typeof string);
console.log(typeof unde);

// program 5
// Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
    let matrix = []
    for (let i = 0; i < n; i++) {
        let row = []

        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0)
        }

        matrix.push(row)
        
    }
    return matrix
}
const n = 3;
console.log(identityMatrix(n));

