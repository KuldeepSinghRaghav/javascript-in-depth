// ******************** NUMBERS & MATH ********************
// JavaScript numbers are floating point by default
// Common methods: toFixed(), toPrecision(), toString(), toLocaleString()
// Math functions: Math.abs(), Math.round(), Math.floor(), Math.ceil(), Math.random(), Math.sqrt()

//! ******* Number Basics *******

const score = 400; // Simple number declaration
const balance = new Number(1000); // Number object (rarely needed, mostly for chaining methods)

console.log(score); // Output: 400
console.log(balance); // Output: [Number: 1000]

// .toString() → converts number to string so you can apply string methods
console.log(balance.toString().length); // Output: 4 → "1000" has 4 digits

// .toFixed() → returns a string with a fixed number of decimal places
console.log(balance.toFixed(2)); // Output: "1000.00"

const otherNumber = 123.39883;

// .toPrecision(n) → formats number to 'n' significant digits
console.log(otherNumber.toPrecision(3)); // Output: "123"
console.log(otherNumber.toPrecision(2)); // Output: "1.2e+2" (Scientific notation)

// .toLocaleString() → formats number with commas (based on locale)
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Default (US): "1,000,000"
console.log(hundreds.toLocaleString("en-IN")); // Indian format: "10,00,000"

//! ********** Math Object **********

console.log(Math); // Native JavaScript Math object with many utility methods

console.log(Math.abs(-4)); // Output: 4 (absolute value)
console.log(Math.round(4.6)); // Output: 5 (rounds to nearest integer)
console.log(Math.ceil(4.2)); // Output: 5 (always rounds UP)
console.log(Math.floor(4.9)); // Output: 4 (always rounds DOWN)
console.log(Math.sqrt(25)); // Output: 5 (square root)

// Math.random() → gives value between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.7632
console.log(Math.random() * 10); // e.g., 7.632 (0–9.999)
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1–10

// 🎯 Generate random number between custom min and max (inclusive)
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Explanation:
// 1. (max - min + 1) → range span (e.g., 11 for 10–20)
// 2. Math.random() * range → random within range
// 3. Math.floor(...) + min → shift to start at `min`

/*
📘 Quick Notes:
- Use `.toFixed(2)` when displaying currency or price.
- Use `.toLocaleString("en-IN")` for Indian numbering format (lakh, crore).
- Always use `Math.floor(Math.random() * (max - min + 1)) + min` to get random in a range.
- `Math.round()` vs `Math.floor()` vs `Math.ceil()` → Know the difference for accurate rounding.
*/
