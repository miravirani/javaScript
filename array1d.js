// const prompt = require('prompt-sync')();

// c program 53
// print sum of any 10 numbers using 1D array.
// const findSumelement = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [12, 34, 45, 5, 6, 87, 13, 15, 30, 10];
// let result = findSumelement(arr);
// console.log("array =", arr);
// console.log("sum of 10 numbers =", result);

// c program 54
//  add corresponding elements of two 1D array and store in to third 1D array.
// const addArrays = (arr1, arr2) => {
//     let resultArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         resultArray[i] = (arr1[i] + arr2[i]);
//     }

//     return resultArray;
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// let resultArray = addArrays(array1, array2);

// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Result Array:", resultArray);

// c program 55
// multiply corresponding elements of two 1D array and store in to third 1D array.
// const mulArray = (arr1,arr2) =>{
//     let resultArray = [];
//     for(let i = 0; i < arr1.length; i++){
//         resultArray[i] = arr1[i] * arr2[i];
//     }
//     return resultArray;
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// let resultArray = mulArray(array1, array2);
// console.log ("Array1 = ", array1)
// console.log("Array2 = ", array2);
// console.log(" multiply corresponding = ", resultArray);

// c program 56
// check given element is exist or not from 1D array of size 10
// let array = [2, 3, 4, 5, 6, 7];
// let n = parseInt(prompt("Enter the value of number ="));
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === n){
//         count = 1;
//         break;
//     }
// }
// if (count === 1) {
//     console.log(`The element ${n} exist in the array.`);
// }
// else {
//     console.log(`The element ${n} does not exist in the array.`);
// }
// console.log("Array =", array);

// let count =  0;
// const existValue = (axit) => {
//     let n = parseInt(prompt("Enter the value of number ="));
//     for(let i = 0; i < axit.length; i++){
//         if( array[i] == n)
//         count = 1;
//     }
//     if(count == 1){
//         console.log("number is exit");
//     }
//     else{
//         console.log("number is not exit");
//     }
// }
// let array = [2, 3, 4, 5, 6, 7];
// let results = existValue(array);
// console.log("Array =", array);

// c program 57
//  delete a given element from 1D array of size 10.
// const deleteElementFromArray = (array, element) => {
//     return array.filter(item => item !== element);
// }

// const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const index = parseInt(prompt("Enter the value of number ="));
// const newArray = deleteElementFromArray(array, index);

// console.log("Array before:", array);
// console.log("New array after:", newArray);

// c program 58
// insert an elements in 1D array at specified location
const array = [ 2, 3, 4, 5, 6, 7, 8];
console.log("Array before insertion:", array);
array.splice(2, 0, 1);
console.log("Array after insertion:", array);


