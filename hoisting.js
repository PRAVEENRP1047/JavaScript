/**
 * Hoisting:
 *    It is the process by which the variable declarations and function declarations are stored
 * in the memory component of the execution context before the execution phase.
 *    During the memory creation phase, the variables with 'var' declarations are initiaziled with value
 * 'undefined' and variables with 'let' and 'const' declarations are stored uninitialized and function
 * declarations are initialized with reference to the function itself.
 *    So during the execution phase when we try to access the 'var' variables 'undefined' is the value we get
 * and when trying to access the 'let' and 'const' variables we get Reference Error because they are
 * uninitialized.
 */

console.log(sum(2, 3));
console.log(city);
console.log(name);

function sum(x, y) {
  return x + y;
}

const name = "Praveen";

let info = {
  age: 26,
  nationality: "Indian",
};

var city = 'Coimbatore';

/**
 * Temporal Dead Zone:
 *    Reference Errors are thrown when trying to access uninitialized variables (let and const variable declarations). 
 *    You cannot access variables with let and const before their declaration. The line before their
 *    declaration is known as Temporal Dead Zone.
 */

// Output:

/**
 * 5
 * undefined
 * Reference Error
 */



/**
 * Reference - lydia hallie's blog
 */