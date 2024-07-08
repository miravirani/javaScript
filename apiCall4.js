console.log("before");

let myPromise = new Promise((resolve, reject) => {
    let x = 0;
    setTimeout(() => {
        (x === 0) ? reject("Rejected!") : resolve("Resolved!");
    }, 3000);
});

console.log("after");

myPromise.then((x) => {
    console.log("Successful:", x);
}).catch((y) => {
    console.log("Not successful:", y);
});