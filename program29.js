// program 1
//  Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
//  Return true if either of them falls within the range. 
function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));

// program 2 
//  Write a JavaScript program to find the largest of three given integers.
function maxThreeInt(x, y, z) {
    let maxValue = 0;
    if (x > y) {
        maxValue = x;
    }
    else {
        maxValue = y;
    }
    if (z > maxValue) {
        maxValue = z
    }
    return maxValue
}
console.log("largest of three given integers : ", maxThreeInt(23, 45, 12));

// program 3
// Write a JavaScript program to find the closest value to 100 from two numerical values.  
function closestTo100(value1, value2) {
    const target = 100;

    const diff1 = Math.abs(target - value1);
    const diff2 = Math.abs(target - value2);

    if (diff1 < diff2) {
        return value1;
    } else if (diff2 < diff1) {
        return value2;
    } else {
        return "Both values are equally close to 100";
    }
}

console.log("The closest value to 100 between : ", closestTo100(90, 105));

// program 4
// Write a JavaScript program to create the dot products of two given 3D vectors.
function dot_product(vector1, vector2) {
    var result = 0;
    for (var i = 0; i < 3; i++) {
        result += vector1[i] * vector2[i];
    }
    return result;
}
console.log(dot_product([1, 2, 3], [1, 2, 3]))
console.log(dot_product([2, 4, 6], [2, 4, 6]))
// console.log(dot_product([1, 1, 1], [0, 1, -1]))

// program 5
// Write a JavaScript program to find the number of times to replace a given number with the sum of its 
// digits. This is until it converts to a single-digit number.
function checkAndRemoveScript(str) {
    const target = "Script";

    if (str.indexOf(target, 4) === 4) {
      return str.slice(0, 4) + str.slice(10);
    }
    
    return str;
  }
  
  const testStr1 = "JavaScript is fun";
  const testStr2 = "JavaScriptScript";
  const testStr3 = "I love JavaScript";
  
  console.log(checkAndRemoveScript(testStr1)); // Output: "Java is fun"
  console.log(checkAndRemoveScript(testStr2)); // Output: "JavaScript"
  console.log(checkAndRemoveScript(testStr3)); // Output: "I love JavaScript"
  
