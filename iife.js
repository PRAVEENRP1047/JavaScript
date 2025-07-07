/**
 * Immediately Invoked Function Expression: (IIFE)
 *    An Immediately Invoked Function Expression (IIFE) is a function that is defined and
 * executed immediately.
 */

// Variation 1:
!(function () {
  console.log(
    "Operator '!' instructs interpreter to treat it as a function expression."
  );
})();

/**
 * NOTE:
 *    In the above code, the symbol '!', instructs the interpreter to expect a function expression.
 *    Can use any unary operators in place of '!'.
 *    Unary operators(+ , - , ~ , ! , typeof , delete, void, new (with a constructor))
 */

// Variation 2:

(function () {
  console.log("I am an IIFE!");
})();

/**
 * NOTE:
 *    Parantheses around the function expression and function call parantheses is needed.
 *    Because without it, the javascript engine treats it as a function definition.
 *    Function definition without name is a syntax error.
 */

// Variation 3:

(function () {
  console.log("I am an IIFE with parantheses after expression");
})();

// Variation 4:

var result = function () {
  return "From IIFE!";
}();
console.log("result====>", result);
/**
 * NOTE:
 *    Here, we have omitted the parantheses because function keyword is not the first in the statement.
 */

/**
 * NOTE:
 *    Parantheses after the function expression's outer parantheses is just to invoke the
 *    function expression.
 */

/* Real time applications of IIFE: */

// Scenario 1:
(function IIFE_initGame() {
  // Private variables that no one has access to outside this IIFE
  var lives;
  var weapons;

  init();

  // Private function that no one has access to outside this IIFE
  function init() {
    lives = 5;
    weapons = 10;
  }
})();

/**
 * NOTE:
 *    This way, we are not polluting the global scope and protecting the variables and function that is
 * not used by other parts of the application.
 */

// Scenario 2:

var result = (function () {
  return "From IIFE with return";
})();

console.log("scenarion 2===>", result); // logs "From IIFE with return"

// Scenario 3:

(function IIFE(msg, times) {
  for (var i = 1; i <= times; i++) {
    console.log(msg);
  }
})("Hello!", 5); // IIFE with parameters

//Note: Use Semicolon before IIFEs to avoid issues

// Encapsulation / Avoid Global Scope Pollution

(function () {
  var secret = "hidden";
  console.log("Encapsulation===>", secret);
})();

console.log(typeof secret); // undefined

// Module Pattern Before ES6 Modules

const CounterModule = (function () {
  let count = 0; // private variable

  return {
    increment: function () {
      count++; // accessing/modifying the private variable
      return count;
    },
    reset: function () {
      count = 0; // resetting the private variable
    },
  };
})();

// console.log(CounterModule.increment()); // 1
// console.log(CounterModule.increment()); // 2
// CounterModule.reset();
// console.log(CounterModule.increment()); // 1

// Before ES6, JavaScript didn’t have built-in support for modules. Developers used IIFEs to
// encapsulate code and create private data (not accessible from outside) while still exposing public
// methods.

// Loop with closures

for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(() => {
      console.log("Index:", index);
    }, 1000);
  })(i);
}

/**
 * var is function scoped and a single binding is shared across all iterations so by
 * the time setTimeout runs i would be 3 and it will print 3 times the same value so when
 * we use IIFE we can create a closure with it and make it work so it prints 0, 1 and 2
 */

//

/**
 * Reference:
 * Medium blog - https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
 *
 */
