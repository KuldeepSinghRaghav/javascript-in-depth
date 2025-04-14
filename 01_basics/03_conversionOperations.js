let score = "33"; // string that looks like a number
let scoreWithString = "33abc"; // string with non-numeric characters
let isLoggedIn = 1; // number 1 is often treated as "true" when converted to boolean

// Check the type and value of 'score' using console.table for a neat tabular format
console.table([typeof score, score]);
// Output: 'string', '33'

// Type Conversion Examples:

let valueInNumber = Number(score); // Converts the string "33" to the number 33
// Result: 33 (number)

let valueInNumberWithString = Number(scoreWithString);
// Attempts to convert "33abc" to a number, fails => Result: NaN (Not a Number)

let convertBoolean = Boolean(isLoggedIn);
// Converts 1 to true (since 1 is truthy in JS)

let convertString = String(isLoggedIn);
// Converts 1 to "1" (string form of the number)

// Show results in table format for better clarity
console.table([
  valueInNumber, // number: 33
  typeof valueInNumber, // "number"
  scoreWithString, // "33abc"
  valueInNumberWithString, // NaN
  convertBoolean, // true
  convertString, // "1"
]);

// Notes:
// Number("33")         => 33 (valid conversion)
// Number("33abc")      => NaN (invalid number format)
// Boolean(1)           => true (any non-zero number is truthy)
// String(1)            => "1" (number to string)

// ***************************** Operations*****************************
let value = 3;
let negValue = -value;
console.log(2 + 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "hello";
let str2 = " abcd";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log("🚀 ~ num3:", num3);
console.log("🚀 ~ num2:", num2);
console.log("🚀 ~ num1:", num1);

let gameCounter = 100;
++gameCounter; // Prefix
console.log("🚀 ~ gameCounter:", gameCounter);
gameCounter++; // Postfix
console.log("🚀 ~ gameCounter:", gameCounter);

//! LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
