const prompt = require('prompt-sync')();

let a = [1, 2, 3];
let b = [10, 20, 30];
const pushInArray = (element, array) => {
    array[array.length] = element;
}

console.log(a);
pushInArray(4, a);
console.log(a);

console.log(b);
pushInArray(40, b);
console.log(b);