// const prompt = require('prompt-sync')();

// c program 44
// insert values in array and display values of array.
// let myFristArray = [];
// myFristArray = [12, 23, 34];
// for(let i = 0; i < myFristArray.length; i++){
//     myFristArray[i];
// }
// console.log("myFristArray = ", myFristArray);


// c program 45
// find sum all the elements of array.
const sumArrayElements = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
const result = sumArrayElements(arr);
console.log(arr);
console.log("Sum of array elements:", result);

// c program 46
// find minimum and maximum element from the array.

// const findMinMax = (arr) => {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return { min, max };
// }

// const Array = [3, 7, 2, 9, 5, 1, 8];
// console.log("array = ", Array);
// const { min, max } = findMinMax(Array);
// console.log("Minimum element:", min);
// console.log("Maximum element:", max);

// c pogram 47
// merge two arrays in third one

// let firstArray = [10, 20, 30];
// let secondArray = [40, 50, 60];
// let thirdArray = firstArray.concat(secondArray);
// console.log("first array = ", firstArray)
// console.log("second array = ", secondArray)
// console.log("merge two arrays in third one = ", thirdArray);

// c program 48
// reverse the element of the array

// const originalArray = [1, 2, 3, 4, 5];
// console.log("originalarray = ", originalArray)
// let reverseArray = originalArray.reverse();
// console.log("reversarray = ", reverseArray)

// c program 49
// find out how many of them are positive and negative
// const array = [1, 4, 5, -1, -10, 0, -4, 6, 10, 12];
// let pos = 0, neg = 0;
// let odd = 0, even = 0;
// console.log("array =", array);
// for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//         pos++;
//     } else {
//         neg++;
//     }
//     if(array[i] % 2 == 0){
//         even++;
//     }
//     else{
//         odd++;
//     }
// }
// console.log("positive value = ", pos);
// console.log("negative value = ", neg);
// console.log("odd value = ", odd);
// console.log("even value = ", even);

// c program 50
// let i, ans = 0;
// let n = parseInt(prompt("Enter the value of number = "));
// for(i = 1; i <= n; i++){
//     if(i % 2 == 0){
//         ans -= i * i;
//     }
//     else{
//         ans += i * i;
//     }
// }
// console.log(ans);

// c program 51
//  sort array of 10 elements in ascending order.
// let i, j, temp;
// const array = [6, 8, 3, -1, 0, 4, 9, -4, 5, 7]
// console.log("original array = ", array)
// for (i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log("ascending order. =", array);

// c program 52
// finds maximum out of 10 numbers and also finds the number of times maximum is repeated.
let i, j, max = 0, count = 0;
const array = [1, 2, 3, 15, 16, 1, 5, 16, 15, 9, 16]
console.log("original array =", array);
for(i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
}
console.log("maximum value =", max);
for(i = 0; i < array.length; i++){
    if(array[i] == max){
        count++;
    }
}
console.log("maximum value count =", count);