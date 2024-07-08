let aa = "3030.1234567890";
console.log("val = ", aa, "type of =", typeof(aa));

// charAt()
let text = "weetech";
console.log(text.charAt(0)); // output w

// charCodeAt()
let a = "hello world";
console.log(a.charCodeAt(2)); // output 108

// codePointAt()
let b = "hello world";
console.log(b.codePointAt(1)); // output 101

// concat()
let text1 = "hello";
let text2 = "world";
console.log(text1.concat(text2)); // output hello world

// endswith()
let c = "hello world";
console.log(c.endsWith("ld")); // output true
console.log(c.endsWith("lda")); // output false

// startswith()
let d = "hello world";
console.log(d.startsWith("he")); // output true
console.log(d.startsWith("lda")); // output false

// includes()
let e = "hello, welcome to the world";
console.log(e.includes("welcome")); // output true
console.log(e.includes("Welcome")); // output false

// indexof()
let f = "hello world";
console.log(f.indexOf("world")); // output 6

//lastindexof()
let ff = "Hello planet earth, you are a great planet.";
console.log(ff.lastIndexOf("planet")); // output 36

// length()
let len = "Hello planet earth, you are a great planet.";
console.log(len.length); // output 43

// match()
let g = "hello welcome to the world";
console.log(g.match("the"));

//repeat()
let result = "hello welcome to the world";
console.log(result.repeat(2)); // output hello welcome to the worldhello welcome to the world

//replace()
let h = "visit microsoft, visit microsoft";
console.log(h.replace("microsoft", "w3school")) // output visit w3school

//replaceall()
let hh = "visit microsoft, visit microsoft";
console.log(hh.replaceAll("microsoft", "w3school")) // output visit w3school, visit w3school

// search()
let searchs = "mr. Blue has a blue";
console.log(searchs.search("Blue")); // output 4

// slice()
let i = "hello welcome to the world";
console.log(i.slice(7, 14)); // output elcome

// split()
let mk = "hello world";
console.log(mk.split(" ")); // output [ 'hello', 'world' ]

//substring()
let strString = "hello world";
console.log(strString.substring()); // output hello world
console.log(strString.substring(4, 10)); // output o worl

//substr()
let str = "hello world";
console.log(str.substr(4, 6)); // output o worl

// toLowerCase()
let lower = "HELLO WORLD";
console.log(lower.toLowerCase()); // output hello world

// toUpperCase()
let upper = "hello world";
console.log(upper.toUpperCase()); // output HELLO WORLD

// toString()
let strings = "hello world";
console.log(strings.toString()); // output hello world

//trim()
let tr = "        hello world       ";
console.log(tr.trim());

// valueOf()
let text3 = new String("Hello World!");
let results = text.valueOf("one")
console.log(results);

//toPrecision()
var num = 5.123456;
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'
console.log((1234.5).toPrecision(2)); // '1.2e+3'

//toFixed()
num = 5.59789;
console.log(num.toFixed()); // output 6
console.log(num.toFixed(2)); // output 5.60
console.log(num.toFixed(3)); // output 5.598
console.log(num.toFixed(1)); // output 5.6