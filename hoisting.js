/**
 * Hoisting:
 *  During the memory creation phase of the execution context, JavaScript allocates memory for
 * variables and functions.
 *  var variables are hoisted and initialized with undefined.
 *  let and const variables are hoisted but remain uninitialized (they are placed in the Temporal
 * Dead Zone until their declaration is executed).
 *  Function declarations are hoisted with their actual function reference.
 *  This means you can access var variables before their declaration (getting undefined), but
 * accessing let or const variables before their declaration causes a ReferenceError.
 *  Overall, hoisting is the behavior that lets variable and function declarations appear to be
 * “moved to the top” of their scope
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

// Output:

/**
 * 5
 * undefined
 * Reference Error
 */

/**
 * Temporal Dead Zone (TDZ):
 *    TDZ is the period between the start of a block scope and the point where a let or const
 * variable is initialized by its declaration statement. During this period, the variable is already
 * declared (in the environment record) but remains uninitialized, so accessing it throws a ReferenceError.
 */

/**
 * Reference - lydia hallie's blog
 */
