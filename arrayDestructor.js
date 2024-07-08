// array destructor

const [a, b, c, ...d] = [10, "sdfghjk", [10, 20, 30], "fdghj", 23, 56, 56];
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
console.log("d =", d);

// object destructor

const {fname, lname, age, std} = {
    fname : "Ekta",
    lname : "Dabhi",
    age : 25
};

console.log("fname =", fname);
console.log("lname =", lname);
console.log("age =", age);
console.log("std =", std);

// rest
const [aa, bb, ...cc] = [10, "sdfghjk", [10, 20, 30], "fdghj", 23, ];
console.log("a =", aa);
console.log("b =", bb);
console.log("c =", cc);
