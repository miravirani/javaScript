// program 1
// Write a program to check whether a specified character exists between the 2nd and 4th positions
// in a given string.
function isCharInRange(str, char) {
    if (str.length < 4) {
        return false;
    }

    for (let i = 1; i <= 3; i++) {
        if (str[i] === char) {
            return true;
        }
    }

    return false;
}

const testString1 = "JavaScript";
const testChar1 = 'a';
const testString2 = "Hello";
const testChar2 = 'e';
const testString3 = "World";
const testChar3 = 'o';

console.log(`character "${testChar1}" exist between the 2nd positions "${testString1}"? ${isCharInRange(testString1, testChar1)}`);
console.log(`character "${testChar2}" exist between the 2nd positions"${testString2}"? ${isCharInRange(testString2, testChar2)}`);
console.log(`character "${testChar3}" exist between the 2nd positions"${testString3}"? ${isCharInRange(testString3, testChar3)}`);

// program 2 
// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

function csvToArray(csvString, delimiter = ',', skipHeader = false) {
    const rows = csvString.split(/\r?\n/);
    if (skipHeader) {
        rows.shift();
    }

    const array = rows.map(row => {
        return row.split(delimiter).map(value => value.trim());
    });

    return array;
}

console.log(csvToArray('a,b\nc,d'));
console.log(csvToArray('a;b\nc;d', ';'));
console.log(csvToArray('head1,head2\na,b\nc,d', ',', true));

// program 3
// Write a JavaScript program to convert a specified number into an array of digits.
function numberToDigitsArray(number) {

    return [...number.toString()].map(i => parseInt(i));
}


console.log(numberToDigitsArray(12345));  // Output: [1, 2, 3, 4, 5]
console.log(numberToDigitsArray(67890));  // Output: [6, 7, 8, 9, 0]
console.log(numberToDigitsArray(102030)); // Output: [1, 0, 2, 0, 3, 0]

// program 4
// Write a JavaScript program to extract values at specified indexes from a specified array.
function extractValuesAtIndexes(arr, indexes) {
    return indexes.map(value => arr[value]);
}

const array = ['a', 'b', 'c', 'd', 'e'];
const indexes = [1, 4];
const extractedValues = extractValuesAtIndexes(array, indexes);
console.log(extractedValues);

// program 5 
// Write a JavaScript program to generate a random hexadecimal color code.
const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString();
    return '#' + n.slice(0, 6);
  };
  
  console.log(randomHexColor())