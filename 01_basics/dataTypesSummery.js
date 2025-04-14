//! ******************** Primitive Data Types ********************

// There are 7 primitive data types in JavaScript:

// 1. String  => used to represent text
let name = "Hitesh"; // e.g., "hello", "123", 'abc'

// 2. Number  => represents both integers and floating point numbers
let age = 25; // e.g., 25, 3.14
let temperature = 25.5;

// 3. Boolean => represents logical value: true or false
let isLoggedIn = true;

// 4. null    => intentionally represents "no value"
let emptyValue = null;

// 5. undefined => declared but not assigned any value
let x; // x is undefined

// 6. Symbol  => used to create unique identifiers (mainly for object keys)
let id = Symbol("uniqueId");

let idFirst = Symbol("12345");
let idSecond = Symbol("12345");
console.log("🚀 ~ idFirst:", idFirst === idSecond);

// 7. BigInt  => used for very large numbers beyond the safe integer limit
let bigNumber = 1234567890123456789012345678901234567890n;

// Primitive types are stored in **stack memory**, and they are copied by value.

//! ******************** Reference (Non-Primitive) Data Types ********************

// These are complex data types:

// 1. Array => a list-like structure that can hold multiple values
let fruits = ["apple", "banana", "cherry"]; // Index-based collection

// 2. Object => key-value pairs, used to store related data
let person = {
  name: "Kuldeep",
  age: 25,
  isLoggedIn: true,
};

// 3. Function => reusable block of code
function greet() {
  console.log("Hello!");
}
const myFunction = function () {
  console.log("Hello!");
};

// Reference types are stored in **heap memory**, and they are accessed by reference (not copied by value).

// ✅ Summary:
// - Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
// - Reference: Object, Array, Function

//! ******************** Memory in JavaScript ********************
// Stack (for Primitive data types) and Heap (for Non-Primitive/Reference data types)

// ---------------- Stack Example ----------------
let myName = "kuldeep singh"; // Primitive → stored in Stack
let anotherName = myName; // Copies the value (not the reference)
anotherName = "raghav !"; // Changing anotherName doesn't affect myName

console.table([myName, anotherName]);
// Output:
// ┌─────────┬─────────────────┐
// │ (index) │     Values      │
// ├─────────┼─────────────────┤
// │    0    │ 'kuldeep singh' │
// │    1    │ 'raghav !'      │
// └─────────┴─────────────────┘

// ---------------- Heap Example ----------------
let userOne = {
  email: "example@gmail.com",
  upi: "user@upi",
}; // Object → stored in Heap, and variable holds a reference in Stack

let userTwo = userOne; // userTwo gets a reference to the same object in Heap
userTwo.email = "example2@gmail.com"; // Changing userTwo also changes userOne

console.table([userOne, userTwo]);
// Output:
// ┌─────────┬────────────────────────────────────────────────────┐
// │ (index) │                  Values                            │
// ├─────────┼────────────────────────────────────────────────────┤
// │    0    │ { email: 'example2@gmail.com', upi: 'user@upi' }   │
// │    1    │ { email: 'example2@gmail.com', upi: 'user@upi' }   │
// └─────────┴────────────────────────────────────────────────────┘

/*
🧠 Visual Diagram: Stack vs Heap Memory

             ┌──────────────────────────────┐
             |           Stack              |
             ├──────────────────────────────┤
             | anotherName → "raghav !"     |  ← Primitive value copied
             | myName      → "kuldeep..."   |
             | userTwo     → ─┐             |
             | userOne     → ─┘             |  ← Both point to the same Heap object
             └──────────────────────────────┘

                      ↓
             ┌──────────────────────────────┐
             |            Heap              |
             ├──────────────────────────────┤
             | {                            |
             |   email: "example2@gmail",   |
             |   upi: "user@upi"            |
             | }                            |
             └──────────────────────────────┘

Key Points:
- Stack = Primitive values (copied)
- Heap  = Reference values (shared)
*/
