// ******************** VARIABLES ********************
// Variables are containers used to store data values.
// In JavaScript, we use `let`, `const`, and `var` (avoid `var` in modern code).
// `let` allows reassignment, `const` is for constants (no reassignment), `var` is function-scoped.

const accountId = 14456789; // Constant, cannot be reassigned
let accountEmail = 'dummy_01@email.com'; // Can be reassigned
var accountPassword = '12345'; // Avoid using var, see comments below
accountCity = 'Delhi'; // Implicitly global, avoid this practice
let accountState; // Implicitly undefined


// accountId =2; // not allowed - because accountId is a constant
console.log("🚀 ~ accountId:", accountId)

accountEmail = 'dummy_02@email.com'; // Reassigning accountEmail
accountPassword = '99999'; // Reassigning accountPassword
accountCity = 'Mumbai'; // Reassigning accountCity

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
  Why we generally avoid using 'var' in modern JavaScript:

  1. Scope:
     - 'var' has function scope or global scope. This means if you declare a variable with 'var' inside a block (e.g., inside an 'if' statement or a 'for' loop), it's still accessible outside that block, as long as it's within the same function or globally.
     - This can lead to unexpected behavior and bugs, especially in larger codebases, because variables can be accidentally overwritten or accessed from places they shouldn't be.
     - 'let' and 'const', on the other hand, have block scope. They are only accessible within the block where they are defined.

  2. Hoisting:
     - 'var' declarations are hoisted to the top of their scope. This means you can use a 'var' variable before it's declared in the code, which can be confusing. The variable will exist, but its value will be 'undefined' until the line where it's assigned.
     - 'let' and 'const' are also hoisted, but they are not initialized. Accessing them before the declaration results in a 'ReferenceError', which is generally better because it helps catch errors early.

  3. Re-declaration:
     - 'var' allows you to re-declare the same variable within the same scope without any error. This can easily lead to accidental overwrites and bugs.
     - 'let' and 'const' do not allow re-declaration within the same scope.

  4. Readability and Maintainability:
     - Using 'let' and 'const' makes the code easier to read and understand because the scope of the variables is more clear and predictable.
     - It also helps prevent accidental bugs and makes the code easier to maintain.

  In summary, 'let' and 'const' provide better scoping rules, help prevent common errors, and make the code more readable and maintainable. 'var' is generally considered outdated and should be avoided in modern JavaScript development.
*/
