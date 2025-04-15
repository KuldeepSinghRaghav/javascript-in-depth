// ************** 📘 JavaScript Study Notes **************
// ******************** VARIABLES ********************
// Variables are containers used to store data values.
// In JavaScript, we use `let`, `const`, and `var` (avoid `var` in modern code).
// `let` allows reassignment, `const` is for constants (no reassignment), `var` is function-scoped.


// ******************** DATA TYPES ********************
// JavaScript has two main types of data:
// 1. Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
// 2. Non-Primitive (Reference): Arrays, Objects, Functions
// Primitives are stored in Stack memory; References in Heap.


// ******************** TYPE CONVERSION ********************
// Type conversion is the process of converting one datatype to another.
// E.g. String to Number, Boolean to String, etc.
// Use `Number()`, `Boolean()`, `String()` for explicit conversions.


// ******************** COMPARISON ********************
// JavaScript supports two equality checks:
// == (loose equality): compares values after type conversion
// === (strict equality): compares values *and* types
// Be careful with comparisons involving null, undefined, strings


// ******************** MEMORY MANAGEMENT ********************
// Stack: Stores primitive data (copied by value)
// Heap: Stores non-primitive/reference data (copied by reference)
// Stack data is independent; heap data shares reference


// ******************** STRING METHODS ********************
// JavaScript strings are immutable and have many useful methods
// e.g. .length, .toUpperCase(), .charAt(), .indexOf(), .slice(), .trim(), .replace(), .includes(), etc.
// Use backticks (``) for template strings and dynamic values


// ******************** STRING REVERSAL ********************
// Useful for logic-based questions.
// Methods include: split-reverse-join, loop-based, spread syntax


// ******************** STRING WORD REVERSAL ********************
// Interview pattern: reverse word order in a sentence
// Example: "hello i am here kuldeep" => "kuldeep here am i hello"
// Use .split(" "), .reverse(), .join(" ")


// ******************** NUMBERS & MATH ********************
// JavaScript numbers are floating point by default
// Common methods: toFixed(), toPrecision(), toString(), toLocaleString()
// Math functions: Math.abs(), Math.round(), Math.floor(), Math.ceil(), Math.random(), Math.sqrt()


// ******************** DATES ********************
// JavaScript Date object allows working with dates & times
// Use `new Date()`, .toString(), .toLocaleString(), .getTime(), .getDate(), .getDay(), etc.
// Timestamps are in milliseconds (useful in comparisons)