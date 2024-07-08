// c program 59
// WAP to read and print 2D array of 3X3 elements
// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log("2D array :", array);

// for(let i = 0; i < array.length; i++){
//     let line = ``;
//     for(let j = 0; j < array[i].length; j++){
//         line += array[i][j] + ` `;
//     }
//     console.log(line);
// }

// c program 60
// WAP to find maximum form given 2D array.
// const findMaxIn2DArray = (arr) => {
//     let max = arr[0][0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > max) {
//                 max = arr[i][j];
//             }
//         }
//     }
//     return max;
// }
// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log("2d array: ",array);
// const max = findMaxIn2DArray(array);
// console.log("Maximum value in the 2D array:", max);

// c program 61
// WAP to add two matrix having size 3X3.
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array1 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
const c = [];
for(let i = 0; i < 3; i++){
    c.push([]);
    for(let j = 0; j < 3; j++){
        c[i][j] = 0;
        for(let k = 0; k < 3; k++){
            c[i][j] += array[i][k] + array1[k][j]
        }
    }
}
console.log("Resultant Matrix:");
for (let i = 0; i < 3; i++) {
    let line = "";
    for (let j = 0; j < 3; j++) {
        line += c[i][j] + " ";
    }
    console.log(line);
}

// c program 62
// check given matrix is magic square or not

// const array = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// let n = array.length;
// let row = [], col = [], dia = [];
// let r = 0, c = 0, d1, d2;
// for (let i = 0; i < n; i++) {
    
//     for (let j = 0; j = n; j++) {
//         row[i] += array[i][j];
//         col[i] += array[j][i];
//         if (i == j) {
//             dia[0] += array[i][j];
//         }
//         if (i + j == n - 1) {
//             dia[1] += array[i][j];
//         }
//     }
// }
// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         r = row[i];
//         c = col[i];
//         d1 = dia[0];
//         d2 = dia[1];
//     }
// }
// if (r == c && r == d1 &&
//     r == d2 && c == d1 &&
//     c == d2 && d1 == d2) {
//     console.log("magic");
// }
// else {
//     console.log("not magic");
// }

