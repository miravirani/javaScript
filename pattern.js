const prompt = require('prompt-sync')();

// c program 35
// Pattern
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let i, j, n ;
// n = parseInt(prompt("Enter the value of number = "));
// for(i = 0; i <= n; i++){
//     let line = "";
//     for(j = 0; j <= n; j++){
//         line += "* "
//     }
//     console.log(line)
// }

// 1
// 0 1
// 1 0 1
// 0 1 0 1

// let i, j;
// let n = parseInt(prompt("Enter the value of number = "));
// for (i = 0; i < n; i++) {
//     let line = "";
//     for (j = 0; j < i; j++) {

//         line += (i + j) % 2 + " ";
//     }
//     console.log(line)
// }

//    1
//   2 2
//  3 3 3
// 4 4 4 4
//5 5 5 5 5

// let n = parseInt(prompt("Enter the value of number ="));
// for (let i = 0; i <= n; i++) {
//     let line = "";

//     for (let j = n-i; j > 0; j--) {
//         line += " ";
//     }

//     for (let k = 0; k <= i*1-1; k++) {
//         line += " " + i + " ";
//     }

//     console.log(line);
// }

// 1  
// 2 3  
// 4 5 6 
// 7 8 9 10

// let i, j;
// let k = 1;
// let n = parseInt(prompt("Enter the value of number n = "));
// for(i = 0; i < n; i++){
//     let line = "";

//     for(j = 0; j < i; j++){
//         line += " " + k++;
//     }
//     console.log(line)
// }

//     1
//   3   5
//  7  9  11
// 13 15 17 19

// let i, j, k;
// let a = -1;
// let n = parseInt(prompt("Enter the value of number n ="));
// for(i = 1; i <= n; i++){
//     let line = "";

//     for(j = n-i; j > 0; j--){
//         line += " ";
//     }

//     for(k = 1; k <= i; k++){
//         line += " " + (a = a + 2) + " ";
//     }
//     console.log(line);
// }

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3 
// 5 4 
// 5 

// let i, j;
// let n = parseInt(prompt("Enter the value of number n ="))
// for(i = 1; i <= n; i++){
//     let line = "";

//     for(j = n; j >= i; j--){
//         line += " " + j;
//     }
//     console.log(line);
// }

// 1
// 3 5
// 7 9 11
// 13 15 17 19

// let i, j;
// let k = -1;
// let n = parseInt(prompt("Enter the value of number n ="))
// for(i = 1; i <= n; i++){
//     let line = "";

//     for(j = 1; j <= i; j++){
//         line += " " + (k = k + 2);
//     }
//     console.log(line)
// }

// 2
// 4 6
// 8 10 12
// 14 16 18 20
// let i, j;
// let k = 0;
// let n = parseInt(prompt("Enter the value of number n ="))
// for(i = 0; i < n; i++){
//     let line = "";

//     for(j = 0; j < i; j ++){
//         line += " " + (k = k + 2);
//     }
//     console.log(line);
// }

// *       *
//  *     *
//   *   *
//    * *
//     *
// let i, j;
// let n = parseInt(prompt("Enter the value of number ="))
// for (i = 1; i <= 5; i++) {
//     let line = "";

//     for (j = 1; j < n*2; j++) {
//         // if(i == j || j + i == n * 2){

//         if (i == 1 && (j == 1 || j == 9) || i == 2 && (j == 2 || j == 8) || i == 3 &&
//         (j == 3 || j == 7) || i == 4 && (j ==4 || j == 6) || i == 5 && ( j== 6)) {

//             line += "*  "
//         }else{
//             line += " "
//         }
//     }
//     console.log(line);
// }

// let i, j;
// let n = parseInt(prompt("Enter the value of number ="))
// for (i = 1; i <= n; i++) {
//     let line = "";

//     for (j = 1; j <= n * 2; j++) {
//         if (i == j || j + i == n * 2) {
//             line += "*";
//         }
//         else{
//             line += " ";
//         }
//     }
//     console.log(line);
// } 

//     *
//    * *
//   *   *
//  *     *
// *       *    
// let i, j;
// let n = parseInt(prompt("Enter the value of number ="));
// for (i = 1; i <= 5; i++) {
//     let line = "";

//     for (j = 1; j <= n * 2 - 1; j++) {
//         if (i + j == n + 1 || i + n - 1 == j) {
//             line += "*"
//         }
//         else {
//             line += " ";
//         }
//     }
//     console.log(line);
// }

// *   *   *
//  * * * *
//    * * 
//  * * * *
// *   *   *
// let i, j;
// let n = parseInt(prompt("Enter the value of number = "))
// for (i = 1; i <= n; i++) {
//     let line = "";
//     for (j = 1; j <= n * 2; j++) {
//         if (i + j == n + 1 || i + n - 1 == j || i == j || j + i == n * 2){
//             line += "*"
//         }
//         else {
//             line += " ";
//         }
//     }
//     console.log(line);
// }

// 1  2  3  4  5 
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

// a
// b c
// d e f
// g h i j 
// k l m n o
// let i, j, k = 65;
// let n = parseInt(prompt("Enter the value of number ="))
// for(i = 1; i < n; i++){
//     let line = ``;

//     for(j = 1; j <= i; j++){
//         line += String.fromCharCode(k++) + " ";
//     }
//     console.log(line)
// }

// a
// b b
// c c c 
// d d d d
// e e e e e
// let i, j, k = 65;
// let n = parseInt(prompt("Enter the value of number ="))
// for(i = 65; i < 65 + n; i++){
//     let line = ``;

//     for(j = 65; j <= i; j++){
//         line += String.fromCharCode(k) + ` `;
//     }
//     console.log(line);
//     k++;
// }

// a
// a b
// a b c 
// a b c d
// a b c d e
// let i, j;
// let n = parseInt(prompt("Enter the value of number n ="));
// for(i = 65; i < 65 + n; i++){
//     let line = ``;

//     for(j = 65; j <= i; j++){
//         line += String.fromCharCode(j) + ` `;
//     }
//     console.log(line);
// }

// * * * * *
// *     *
// * * * * *
// * * * * * 
// * * * * *
// *     *
// * * * * * 
// let i, j;
// let n = parseInt(prompt("Enter the value of number n ="));
// for(i = 1; i <= n + 2; i++){
//     let line = ``;

//     for(j = 1; j <= n; j++){
//         if(i == 1 || j == 1 || i == n/2 + 1 || j == n/2 + 2 || i == n/2 + 2 ||
//         i == n/2 + 3 || i == n/2 + 5){
//             line += "* "
//         }
//         else{
//             line += ` `
//         }
//     }
//     console.log(line);
// }

//      # 
//     # #
//    # # #
//   # # # #
//  # # # # #
// # # # # # #
// let i, j, k;
// let n = parseInt(prompt("Enter the value of number n ="));
// for(i = 1; i <= n; i++){
//     let line = ``;

//     for(k = n - 1; k >= i; k--){
//         line += ` `;
//     }
//     for(j = 1; j <= i; j++){
//         line += "# "
//     }
//     console.log(line);
// }

//     *
//    * *
//   * * *
//  * * * *
//   * * *
//    * *
//     *
// let n = parseInt(prompt("Enter the number of rows: "));
// let i, j;
// for(i = 1; i <= n; i++){
//     let line = ``;

//     for(let k = 1; k <= n - i; k++){
//         line += ` `;
//     }

//     for(j = 1; j <= i; j++){
//         line += '* ';
//     }
//     console.log(line);
// }

// for(i = n - 1; i >= 1; i--){
//     let line = ``;
   
//     for(let k = 1; k <= n - i; k++){
//         line += ` `;
//     }

//     for(j = 1; j <= i; j++){
//         line += '* ';
//     }
//     console.log(line);
// }
