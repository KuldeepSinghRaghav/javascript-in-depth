// ******************** DATA TYPES ********************
// JavaScript has two main types of data:
// 1. Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
// 2. Non-Primitive (Reference): Arrays, Objects, Functions
// Primitives are stored in Stack memory; References in Heap.

"use strict"; // Treat all JS code as per the latest version of JavaScript (strict mode catches more errors and prevents some unsafe actions)

// Variable declarations with different data types
let name = "hitesh"; // string datatype
let age = 18; // number datatype: can be integers or floating-point numbers
let isLoggedIn = false; // boolean datatype: only true or false

// Primitive Data Types of JavaScript:
// 1. Number => e.g., 2, 18.5
// 2. BigInt => for very large integers beyond the safe range of Number
// 3. String => e.g., "hitesh", used for text
// 4. Boolean => true or false, often used in logic or conditions
// 5. Null => represents an explicitly empty value (intentional absence of any value)
// 6. Undefined => a variable declared but not assigned any value
// 7. Symbol => used to create unique identifiers (often for object keys)

// Object
console.log(typeof undefined); // undefined
console.log(typeof null); // object