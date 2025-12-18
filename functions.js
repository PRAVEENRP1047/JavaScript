// Function Statement or Function Declaration
functionDeclaration(); // This will execute fine
// functionExpression(); // uncomment to see the below mentioned error
/**
 *  This will throw type error due to hoisting because functionExpression here is a
 * variable for which only the declaration are hosited and initialization happens only after
 * reaching it's line where it is declared in the code
 */

function functionDeclaration() {
  console.log("From Function Declaration=======>");
}

// Anonymous Function

// function(){
//   console.log("From an anonymous function")
// }

/**
 *  The above code throws syntax error when uncommented in the editor because function statements should contain name.
 *  Anonymous functions are used where functions are used as function expressions.
 */

// Function Expression

var functionExpression = function () {
  console.log("From unnamed function expression=====>");
};

// Named Function Expression

var namedFunctionExpression = function xyz() {
  console.log("From named function expression=====>");
};

// xyz();// xyz is not defined because the xyz function is used as named function expression 

// Parameters and Arguments

/**
 * Arguments - Values passed to the functions.
 * Parameters - Placeholder variables used to capture the passed arguments
 */

// First class functions (First class citizens):

/**
 *  It is treated like any other value so that we can assign a function to a variable, pass as an 
 * argument, or even return from other function.
 */
