const fibonacci = (n) => {
    const series = [0, 1];
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        series.push(c);
        a = b;
        b = c;
    }
    return series;
}

const isArmstrong = (num) => {
    let original = num;
    let armstrong = 0;
    let digits = num.toString().length;

    while (num > 0) {
        let r = num % 10;
        armstrong += Math.pow(r, digits);
        num = Math.floor(num / 10);
    }

    return original === armstrong;
}


const n = 26;
const fibSeries = fibonacci(n);
console.log("Fibonacci Series:", fibSeries);

// for (let i = 0; i < fibSeries.length; i++) {
//     let num = fibSeries[i];
//     if (isArmstrong(num)) {
//         console.log(num, "is an Armstrong number");
//     }
// }

const armstrongSeries = fibSeries.filter(isArmstrong);
console.log("Armstrong Number = ", armstrongSeries);

