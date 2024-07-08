
let a = 5;
let b = 15;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

[a, b] = [b, a];

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

var { x, y } = {
    x: 10,
    y: 20
}

console.log("before swapping");
console.log("x = ", x);
console.log("y = ", y);

var { x, y } = {
    x: y,
    y: x
}


console.log("after swapping");
console.log("x = ", x);
console.log("y = ", y);
