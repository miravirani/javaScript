// at()
// const fruits = [`banana`, `orange`, `apple`];
// console.log(fruits.at(2)); // output apple

// concat()
// const arr1 = [`ecilie`, `lone`];
// const arr2 = [`email`, `tobias`];
// const arr3 = [`robin`];
// let result = arr1.concat(arr2, arr3);
// console.log(result); // output [ 'ecilie', 'lone', 'email', 'tobias', 'robin' ]

// find()
// const ages = [3, 10, 18, 20];
// let agess = ages.find(checkAge);

// function checkAge(age){
//     return age > 18;
// }
// console.log(agess);

// includes()
// const fruits1 = [`banana`, `orange`, `apple`];
// console.log(fruits1.includes(`orange`)); // output true

// indexof()
// const index = [`banana`, `orange`, `apple`];
// console.log(index.indexOf(`apple`)); // output 2

// join()
// const joins = [`banana`, `orange`, `apple`];
// console.log(joins.join(` end `)); // output banana end orange end apple

// //pop()
// const first = [`banana`, `orange`, `apple`];
// first.pop();
// console.log(first); // output [ 'banana', 'orange' ]

// // push()
// const second = [`banana`, `orange`, `apple`];
// second.push(`kiwi`);
// console.log(second) // output [ 'banana', 'orange', 'apple', 'kiwi' ]

// // shift()
// const sh = [`banana`, `orange`, `apple`];
// sh.shift();
// console.log(sh); // output [ 'orange', 'apple' ]

// // unshift()
// const un = [`banana`, `orange`, `apple`];
// un.unshift(`kiwi`, `mengo`);
// console.log(un); // output [ 'kiwi', 'mengo', 'banana', 'orange', 'apple' ]

//split()
const sp = [`banana`, `orange`, `apple`];
sp.splice(2, 1, `kiwi`);
console.log(sp);

//foreach()
// const fruit = [`banana`, `apple`, `cherry`, `kiwi`];
// let text = ``;
// fruit.forEach(myfunction);

// function myfunction(v, i){
//     text += i + `:` + v + ` `;
// }
// console.log(text);

// const number = [65, 44, 12, 4];
// number.forEach(myFunctionNumber);

// function myFunctionNumber(value, index, array){
//     array[index] = value * 10;
// }
// console.log(number);

// // // map()
// const numbers = [65, 44, 12, 4];
// const num = numbers.map(checkMapMethod);
// console.log(num);

// function checkMapMethod(num1){
//     return num1 * 10;
// }

// const ages = [32, 33, 16, 8, 40];
// const results = ages.map(cheackAges);

// function cheackAges(age) {
//     return age  >= 18;
// }
// console.log(results);

//filter()
// const ages = [32, 33, 16, 8, 40];
// const results = ages.filter(checkAges);

// function checkAges(age){
//     return age >= 18;
// }
// console.log(results);