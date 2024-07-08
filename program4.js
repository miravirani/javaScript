// program 1
// Write a JavaScript function to extract unique characters from a string.
function uniquecharacters(str) {
    unique = ''
    for (let char of str) {
        if (unique.indexOf(char) === -1) {
            unique += char;
        }
    }
    return unique;
}
console.log("unique characters : ", uniquecharacters("thequickbrownfoxjumpsoverthelazydog"));

// program 2
// Write a JavaScript function to get the number of occurrences of each letter in a specified string.
function countOccurrences(str) {
    let counts = [];
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

let str = "Hello, World!";
let occurrences = countOccurrences(str);
console.log(occurrences);

// second

function countOccu(str) {
    let count = {}

    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    return count
}
let str1 = "Hello World";
let occurrence = countOccu(str1);
console.log(occurrence);

// program 3
// Write a function for searching JavaScript arrays with binary searches.
function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (target === array[mid]) {
            return mid
        }
        else if (array[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;

}
let array = [2, 4, 7, 9, 10, 15, 20, 22, 30]
const target = 15;
console.log("binart search : ", binarySearch(array, target));

// program 4
// Write a JavaScript function that returns array elements larger than a number.
const number = [11, 45, 4, 31, 64, 10]
let bignum = 31;

function biggerElement(num) {
    return num >= bignum
}
const results = number.filter(biggerElement)

console.log(results);

// program 5 
// Write a JavaScript function that generates a string ID (specified length) of random characters.
function generateRandom(length) {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += char[Math.floor(Math.random() * char.length)];
    }
    return result;
}
const length = 8;
const randomString = generateRandom(length);
console.log(randomString);
