// program 1 
// Write a JavaScript function that takes an array of numbers and finds the second lowest and second 
// greatest numbers, respectively
function findSecondNumber(num) {
    num.sort((a, b) => a - b);
    let secondLowest = num[1];
    let secondGreatest = num[num.length - 2]

    return {secondGreatest, secondLowest}

}
let num = [10, 15, 8, 9, 3, 20, 22];
let result = findSecondNumber(num);
console.log("second Lowest :", result.secondLowest);
console.log("second greatest :", result.secondGreatest);

// program 2
// Write a JavaScript function that checks whether a number is perfect.
function isPerfectNumber(num) {

	if (num <= 0) {
		console.log("Please provide a valid positive integer.");
		return false;
	}

	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	
    {(sum === num) ? console.log(`${num} is a perfect number.`) : console.log(`${num} is not a perfect number.`)}
}   

console.log(isPerfectNumber(15));
console.log(isPerfectNumber(28));

// program 3
// Write a JavaScript function to compute the factors of a positive integer.

function findFactors(num) {
    if (num <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(findFactors(12));
console.log(findFactors(24)); 

// program 4 
// Write a JavaScript function to convert an amount into coins.
function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

console.log(amountToCoins(50, [20, 10, 5, 2, 1])); 

// program 5 
// Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. 
// Accept b and n from the user and display the results.
function exponent(b, n){
    let ans = 1;
    for(let i = 1; i <= n; i++){
        ans = b * ans
    }
    return ans;
}
console.log("b :", exponent(2, 4));