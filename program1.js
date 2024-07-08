// program 1 
// Write a JavaS that reverses a number.
function reverseNumber(n){

    return n.toString().split("").reverse().join("");
}
let reverse = reverseNumber(1234);
console.log("revers number : ", reverse);

// program 2
// Write a JavaScript function that checks whether a passed string is a palindrome or not?

function palindrome(str) {

    // str = str.toLowerCase()
    let reversedStr = str.toString().split("").reverse().join("");

    if (str === reversedStr) {
        return `is a palindrome.`
    }
    else {
        return `is a not palindrome.`
    }
}
console.log(palindrome("A man"));
console.log(palindrome("nayan"));
console.log(palindrome("madam"));  

// program 3
// Write a JavaScript function that returns a string that has letters in alphabetical order.
function alphabetical(str){
    
    return str.split("").sort().join("");
}
let alpha = alphabetical("webmaster");
console.log("alphabeteical : ", alpha);

// program 4
// Write a JavaScript function that generates all combinations of a string.

function generateCombinations(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

console.log(generateCombinations("dog"));

// program 5
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
// word into upper case.
function firstLetterUpper(str) {

    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(firstLetterUpper("the quick brown fox"));

