// ceil()
console.log("Math.ceil method =");
let ceilNumber ;
console.log(ceilNumber = Math.ceil(0.90)); // Output: 1
console.log(ceilNumber = Math.ceil(0.40)); // Output: 1
console.log(ceilNumber = Math.ceil(5.1)); // Output: 6
console.log(ceilNumber = Math.ceil(-5.1)); // Output: -5
console.log(ceilNumber = Math.ceil(-5.9)); // Output: -5

// floor()
console.log("math.floor method =");
let floorNumber ;
console.log(floorNumber = Math.floor(0.60)); // output 0
console.log(floorNumber = Math.floor(0.40)); // output 0
console.log(floorNumber = Math.floor(5.1)); // output 5
console.log(floorNumber = Math.floor(-6.3)); // output -7
console.log(floorNumber = Math.floor(-7.9)); // output -8

// round()
console.log("Math.round method =");
let roundNumber ;
console.log(roundNumber = Math.round(2.60)); // output 3
console.log(roundNumber = Math.round(2.40)); // output 2
console.log(roundNumber = Math.round(2.50)); // output 3
console.log(roundNumber = Math.round(-2.60)); // output -3
console.log(roundNumber = Math.round(-2.49)); // output -2

// trunc()
console.log("Math.trunc method");
let truncNuber ;
console.log(truncNuber = Math.trunc(8.76)); // output 8
console.log(truncNuber = Math.trunc(2.45)); // output 2
console.log(truncNuber = Math.trunc(0.34)); // output 0
console.log(truncNuber = Math.trunc(-5.60)); // output -5
console.log(truncNuber = Math.trunc(-2.34)); // output -2

// random()
console.log("Math.random method");
let randomNumber ;
randomNumber = Math.round(Math.random()*1000) + 100;
console.log(randomNumber);
