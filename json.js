let firstJson = {
    ab : 34,
    cd : "hello"
}
let secondJson = JSON.parse(JSON.stringify(firstJson))

console.log("firstJson = ", firstJson);
console.log("secondJson = ", secondJson);

firstJson["ef"] = "hey"
firstJson.ab = 90

console.log("firstJson after chang = ", firstJson);
console.log("secondJson after chang = ", secondJson);

let a = 10
let b = a

console.log("a = ", a);
console.log("b = ", b);

a = 20

console.log("a after chang = ", a);
console.log("b after chang = ", b);