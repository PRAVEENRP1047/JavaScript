/**
 * Strict Mode:
 *    It is declared by using the directive "use strict".
 *    It was introduced in ES5.
 *    Prior versions of ES5 will ignore the derivative.
 *    Strict mode changes previously accepted bad syntax into real errors.
 */

"use strict";

// Cannot use a variable before declaration:

// x = 2; // uncomment to see this in action

/** Note: 
 * Should declare with keyword and then use it. 
 * In non-strict mode variable gets added to the global scope.
 */

// Deleting variables or functions are not allowed:

let y = 10;
// console.log("y=====>", y);
// delete y; //uncomment to see this in action
// console.log("y=====>", y);

/**
 * Note:
 * Syntax Error => because delete can be called only on properties of an object. 
 * In non-strict mode, the command fails silently.
 */

// Duplicate parameter names are not allowed:

//add another parameter with same name "a" to see it in action
function noDuplicateParamsInStrictMode(a) { //Uncaught SyntaxError: Duplicate parameter name not allowed in this context 
  console.log('hi');
}

/**
 * Note:
 * In non-strict mode, no errors are thrown
 */

// Octal numeric characters are not allowed:

// let z = 010;  //uncomment this line to see it in action
// console.log("octal===>",z);

/**
 * Note:
 * In non-strict mode, it is converted to decimal
 */

// Writing to a read only property is not allowed:

const obj = {};
Object.defineProperty(obj, "a", {value:0, writable:false});
obj.a = 3.14;   

/**
 * Note:
 * In non-strict mode, the operation is ignored silently without error
 */
