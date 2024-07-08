// program 1
// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number 
// is not an integer.
function validateInteger(number) {
    try {
        if (!Number.isInteger(number)) {
            throw new Error('Invalid number, Please input an integer.');
        }
        console.log('Number is valid:', number);
    } catch (error) {
        console.log('Error:', error.message);
    }

}
validateInteger(12);
validateInteger(3.43);

// program 2
// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the 

let a = 10;

try {
    console.log("first try catch");
    console.log(a / 0);
    throw ("Division by zero is not allowed");
}
catch (error) {
    console.log("Error :", error);
}
console.log("aftor");

// program 3
// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the
// number is negative.
function positiveNumber(n) {
    try {
        if (n < 0) {
            throw new Error('Error: Negative numbers are not allowed.');
        }
        return n;
    } catch (error) {
        console.log(error);
    }

}
console.log(positiveNumber(3));
console.log(positiveNumber(-5));

// program 4
// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing 
// an array with an invalid index.
function accessArrayElement(arr, index) {
    try {
        if (index < 0 || index >= arr.length) {
            console.error(`RangeError: Invalid index ${index}. Please provide an index between 0 and ${arr.length - 1}.`);
            return;
        }

        console.log(`Element at index ${index}: ${arr[index]}`);
    } catch (error) {
        console.log("error==", error);
    }
}

const array = [10, 20, 30, 40, 50];

accessArrayElement(array, 2);
accessArrayElement(array, 5);
accessArrayElement(array, 0);

// program 5
// Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when 
// accessing an undefined variable.
function access_Variable() {
    try {
        console.log(undefinedVariable);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('ReferenceError:', error.message);
        } else {
            console.log('Error:', error.message);
        }
    }
}
access_Variable();

function accessUndefinedVariable() {
    try {
        console.log(nonExistentVariable); // This will throw a ReferenceError
    } catch (error) {
        console.error("ReferenceError:", error.message);
    }
}

accessUndefinedVariable();

// program 6
// Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and
// handle an error, and then execute some cleanup code in the 'finally' block.
function divideNumbers(a, b) {
    try {
      if (b === 0) {
        
        throw('Division by zero is not allowed');
      }
  
    
      return a / b;
    } catch (error) {
    
      console.error('Error:');
    } finally {
     
      console.log('Cleanup: Resetting variables...');
     
    }
  }
  
  console.log(divideNumbers(10, 2)); 
  console.log(divideNumbers(10, 0)); 
  console.log(divideNumbers(10, 'abc'));