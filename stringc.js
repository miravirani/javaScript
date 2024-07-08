// c program 63
// read and print two different string
let str = "hello";
let str1 = "weetech";
console.log("First string = ", str);
console.log("second string =", str1);

// c program 64
// find length of string using string handling function and without it
let i, l = 0;
let strlen = "virani meera";
for(i = 0; strlen[i] != undefined; i++){
    l++;
}
console.log("string =",strlen);
console.log("string length without function = ", l);
console.log("string length with function", strlen.length);

// c program 65
// read a string and count total number of words in as string.
let strlen1 = "hellow hey everyone";
let count = 1;
for(i = 0; strlen1[i] != undefined; i++){
    if(strlen1[i] == ` `){
        count++;
    }
}
console.log("string =",strlen1);
console.log("string words count = ", count);

// c program 66
// read a string and count total number of Vowels in as string
let vowels = 0;
let string = "surat city";
for(i = 0; string[i] != undefined; i++){
    if(string[i] == 'a' || string[i] == 'A' ||
       string[i] == 'e' || string[i] == 'E' ||
       string[i] == 'i' || string[i] == 'I' ||
       string[i] == 'o' || string[i] == 'O' ||
       string[i] == 'u' || string[i] == 'U')
       {
        vowels++;
       }
}
console.log("string =", string);
console.log("count total number of Vowels = ", vowels);

// c program 67
// read a string and replace a given character from string.
let replaceStr = "hello weetech";
console.log("string = ", replaceStr);
console.log("replace string = ", replaceStr.replace("weetech", "w3school"));

// c program 68
// read a string and print reverse of given string.
let reverseStr = "hello"
console.log("string =",reverseStr);
let reversedString = reverseStr.split("").reverse().join("");
console.log("reverse string = ", reversedString);

// c program 69
// check given string is palindrome or not?

let a = "nayan";
console.log("string =", a);
let strrev = a.split("").reverse().join("");

if(a === strrev){
    console.log("The string is a palindrome.");
}
else{
    console.log("The string is not a palindrome.");
}

// c program 70
//  append two strings in to one string using string handling function and without it.
let firstString = "hello";
let secondString = "world";
let concatString = firstString.concat(" ",secondString);
console.log("Appended string using function =", concatString);
console.log("Appended string without using function =", firstString + " " + secondString);