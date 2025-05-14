/**
 * Hoisting:
 *    It is the process by which the variable declarations and function declarations are stored
 * in the memory component of the execution context before the execution phase.
 *    During the memory creation phase, the variables with 'var' declarations are initiaziled with
 * value 'undefined' and variables with 'let' and 'const' declarations are stored uninitialized and
 * function declarations are initialized with reference to the function itself.
 *    So during the execution phase when we try to access the 'var' variables 'undefined' is the
 * value we get and when trying to access the 'let' and 'const' variables we get Reference Error
 * because they are uninitialized.
 * 
 * Alternative definition:
 *    It is the phenomenon by which we can access the function declarations and variable declarations 
 * without any errors.
 */

getName();
console.log(getName);
// whole function prints for function declaration but for both function expression it is undefined
console.log(x); // undefined 

var x = 7;

function getName() {
  console.log("Function getName executed if u see this");
}

var getName = function () {
  // Acts as a normal variable in memory execution phase so undefined is initialized
  console.log(
    "Function getName as normal function expression executed if u see this"
  );
};

var getName = () => {
  // Acts as a normal variable in memory execution phase so undefined is initialized
  console.log(
    "Function getName as an arrow function expression executed if u see this"
  );
};

//=============================================================================================================//

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

var city = "Coimbatore";

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
