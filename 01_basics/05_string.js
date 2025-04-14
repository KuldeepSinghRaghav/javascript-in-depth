const name = "kuldeep";
const repoCount = 50;

// 🔴 Not recommended: Concatenation using + (can be confusing with mixed types)
console.log(name + repoCount + "Value"); // Output: kuldeep50Value

// ✅ Recommended: Use template literals (backticks) for readability
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// ******************** String Object & Properties ********************

// Creating a String object (not commonly used unless needed for advanced manipulation)
const gameName = new String("kuld-eep singh");

// String object details:
console.log(gameName);             // Shows object representation of the string
console.log(gameName[0]);          // Accessing character by index → 'k'
console.log(gameName.__proto__);   // Shows all methods available to string

// String properties and methods:
console.log(gameName.length);      // 14 → total number of characters
console.log(gameName.toUpperCase()); // Converts entire string to uppercase
console.log(gameName.charAt(2));   // Character at index 2 → 'l'
console.log(gameName.indexOf("p")); // Finds index of first occurrence → 7

// substring(start, end) → returns part of the string
console.log(gameName.substring(0, 4)); // Output: 'kuld' (end is non-inclusive)

// slice(start, end) → can take negative indexes
const anotherString = gameName.slice(-8, 13);
console.log(anotherString); // Output: 'eep sing'

// ******************** Whitespace Handling ********************

const newStringOne = "   kuldeep   hello  ";
console.log(newStringOne);            // Original with spaces
console.log(newStringOne.trim());     // Removes leading and trailing spaces
console.log(newStringOne.trimStart()); // Only removes leading spaces
console.log(newStringOne.trimEnd());   // Only removes trailing spaces

// ******************** URL Manipulation ********************

const url = "https://kuldeep.com/kuldeep%20singh";
console.log(url);
console.log(url.replace("%20", "Replaced")); // Replaces "%20" with "Replaced"
console.log(url.includes("kuldeep"));        // true → checks if string contains "kuldeep"

// ******************** Reverse a String ********************

const newLine = "hello i am here";

// ✅ Method 1: Using split, reverse, and join
const reversedString1 = newLine.split("").reverse().join("");
console.log("🚀 ~ reversedString1:", reversedString1)
console.log(reversedString1); // Output: ereh ma i olleh

// ✅ Method 2: Manual loop (step-by-step approach)
let reversedString2 = "";
for (let i = newLine.length - 1; i >= 0; i--) {
  reversedString2 += newLine[i];
}
console.log(reversedString2); // Output: ereh ma i olleh

// ✅ Method 3: Spread syntax (modern and clean)
const reversedString3 = [...newLine].reverse().join("");
console.log(reversedString3); // Output: ereh ma i olleh

/*
📘 Notes:
- Prefer template literals (`${}`) for strings over +
- Use trim methods to clean user input or external data
- Always check if a string includes a value before replacing
- There are multiple ways to reverse a string → know at least one for interviews
- String objects like new String("...") are rarely used in practice. Stick with literals unless needed.
*/

const inputSentence = "hello i am here kuldeep";

// ✅ Goal: Reverse the order of words, not letters
// Expected Output: "kuldeep here am i hello"

// Step-by-step:
// 1. Use split(" ") to convert the sentence into an array of words.
// 2. Use reverse() to reverse the word order.
// 3. Use join(" ") to join the words back into a sentence.

const reversedWords = inputSentence.split(" ").reverse().join(" ");
console.log(reversedWords); // Output: "kuldeep here am i hello"

/*
📘 Notes:
- .split(" ") → breaks the string into words based on spaces.
- .reverse() → reverses the order of the array.
- .join(" ") → joins the reversed array back into a string with spaces.
*/