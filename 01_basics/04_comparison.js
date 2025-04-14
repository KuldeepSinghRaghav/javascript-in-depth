// ******************** Basics *********************

// These are basic number comparisons:

// console.log(2 > 1);     // true: 2 is greater than 1
// console.log(2 >= 1);    // true: 2 is greater than or equal to 1
// console.log(2 < 1);     // false: 2 is not less than 1
// console.log(2 <= 1);    // false: 2 is not less than or equal to 1
// console.log(2 == 1);    // false: loose equality check → values are different
// console.log(2 != 1);    // true: 2 is not equal to 1
// console.log(2 === 1);   // false: strict equality → checks both value and type

// ******************** Tricky (Unpredictable Results) *********************

console.log("2" > 1);       
// true: "2" (string) is converted to number → 2 > 1

console.log("02" > 1);      
// true: "02" is also converted to number 2 → 2 > 1

console.log(null > 0);      
// false: null is converted to 0 → 0 > 0 → false

console.log(null == 0);     
// false: null is only loosely equal to undefined, not to 0

console.log(null >= 0);     
// true: null is converted to 0 → 0 >= 0 → true

console.log(undefined == 0);  
// false: undefined is not equal to 0

console.log(undefined === 0); 
// false: different types (undefined vs number)

console.log("2" == 2);      
// true: loose equality → "2" (string) is converted to number → 2 == 2

console.log("2" === 2);     
// false: strict equality → different types (string vs number)

// 🔥 Important Notes:
// == (loose equality) → allows type conversion before comparing
// === (strict equality) → compares both value and type
// Prefer === over == in modern JavaScript to avoid unexpected results
