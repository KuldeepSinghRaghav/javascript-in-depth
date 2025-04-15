// ******************** 🔢 Arrays in JavaScript ********************

// Arrays can hold mixed data types, but usually hold elements of the same type

// ✅ Declaration
const myArr = [10, 9, 1, 7, 8, 9]; // Array of numbers
const myHeros = ["thor", "spiderman", "ironman"]; // Array of strings
const myArr2 = new Array(1, 2, 3, 4); // Using Array constructor (less preferred)

console.log(myArr); // Output: [10, 9, 1, 7, 8, 9]
console.log(myHeros[2]); // Output: "ironman" → access element by index (0-based)

// ✅ Array Methods

myHeros.push("hulk"); // Adds "hulk" at the end
console.log(myHeros); // Output: ["thor", "spiderman", "ironman", "hulk"]

myHeros.push("batman"); // Add another hero at the end
console.log(myHeros); // ["thor", "spiderman", "ironman", "hulk", "batman"]

myHeros.pop(); // Removes the last element
console.log(myHeros); // Output: ["thor", "spiderman", "ironman", "hulk"]

myHeros.unshift("thor"); // Adds "thor" at the beginning
console.log(myHeros); // Output: ["thor", "thor", "spiderman", "ironman", "hulk"]

myHeros[1] = "shaktiman"; // Replacing value at index 1
console.log(myHeros); // Output: ["thor", "shaktiman", "spiderman", "ironman", "hulk"]

console.log(myHeros.indexOf("ironman")); // Output: 3 → returns index or -1 if not found
console.log(myHeros.includes("ironman")); // Output: true → checks if value exists

console.log(myArr.join()); // Output: "10,9,1,7,8,9" → joins array into a string (comma-separated)
console.log(myArr); // Array remains unchanged

// ✅ slice vs splice

// slice(start, end) → extracts a portion, does NOT change original array
const sliced = myArr.slice(1, 4); // [9, 1, 7]
console.log("sliced:", sliced);
console.log("original after slice:", myArr);

// splice(start, deleteCount, items...) → modifies the original array
const spliced = myArr.splice(2, 2, 100, 200); // Removes 2 elements from index 2, inserts 100, 200
console.log("spliced:", spliced); // [1, 7] → removed items
console.log("original after splice:", myArr); // [10, 9, 100, 200, 8, 9]

// ******************** 🧠 Shallow vs Deep Copy ********************

/*
📌 Shallow Copy:
  - Creates a new reference but still points to the same nested object/array
  - Changes in nested data affect both copies

📌 Deep Copy:
  - Completely duplicates the structure and contents
  - Changes in copied version don't affect the original

✅ Example:

*/

const originalArr = ["ironman", "thor"];
const shallowCopy = originalArr; // both point to same array (reference)
shallowCopy[0] = "batman";
console.log("originalArr:", originalArr); // ["batman", "thor"]
console.log("shallowCopy:", shallowCopy); // ["batman", "thor"]

// ✅ To make a true (deep) copy of a simple array:
const deepCopy = [...originalArr]; // using spread operator
deepCopy[0] = "spiderman";
console.log("deepCopy:", deepCopy); // ["spiderman", "thor"]
console.log("originalArr after deep copy:", originalArr); // ["batman", "thor"]

/*
📘 Notes:
- Use `.slice()` or `[...arr]` for shallow copies of arrays (non-nested).
- Use `structuredClone()` or JSON methods for deep copy of nested structures (like objects in arrays).
- Prefer using immutable patterns to avoid bugs in large codebases.
*/
