// program 1
// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations
// in an array.
function combinations(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[i], arr[j]])
        }
    }
    return result
}
const arr = [1, 2, 3, 4]
const subsetLength = 2
console.log(combinations(arr, subsetLength));

// program 2
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count
// the number of occurrences of the specified letter within the string.
function charCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++;
        }
    }
    return count
}
const str = 'hello world'
const letter = 'l'
console.log("char count :", charCount(str, letter));

// program 3
// Write a JavaScript function to find the first not repeated character.
function findfirstRepeated(str) {
    let array = str.split('');
    let results = '';

    for (let i = 0; i < array.length; i++) {
        let ctr = 0;

        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                ctr += 1

            }
        }

        if (ctr < 2) {
            results = array[i]
            break
        }
    }
    return results
}
console.log(findfirstRepeated('abacddbec'));

// program 4
// Write a JavaScript function to apply the Bubble Sort algorithm.
function bubbleSort(num) {
    
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length - 1; j++) {
            
            if (num[j] > num[j + 1]) {
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    return num; 
}

let numbers = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
let sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);

// program 5
// Write a JavaScript function that accepts a list of country names as input and returns the longest 
// country name as output.
function longestCountryName(countryName){
    let longestName = '';
    for(let i = 0; i < countryName.length; i++){
        if(countryName[i].length > longestName.length){
            longestName = countryName[i]
        }
    }
    return longestName
}
let longestNames = ["Australia", "Germany", "America"]
console.log("longest country name :", longestCountryName(longestNames));


