/**
 * LEXICAL ENVIRONMENT AND SCOPE - THE FOUNDATION OF CLOSURES
 *
 * Lexical Environment = Environment Record + Reference to Outer Lexical Environment
 *
 * Key Concepts:
 * 1. Lexical Scoping: Where variables are accessible is determined by where they are defined in the code (lexically)
 * 2. Scope Chain: JavaScript looks for variables in current scope, then outer scopes, up to global scope
 * 3. Environment Record: Stores variable bindings (declarations, parameters, functions)
 * 4. Outer Environment Reference: Points to the parent lexical environment
 *
 * This is what enables closures to work!
 */

// Example 1: Basic Lexical Scoping
var globalVar = "I'm global";

function outerFunction() {
  var outerVar = "I'm in outer";

  function innerFunction() {
    var innerVar = "I'm in inner";

    // Can access all three due to lexical scoping
    console.log(globalVar); // "I'm global"
    console.log(outerVar); // "I'm in outer"
    console.log(innerVar); // "I'm in inner"

    /**
     * Lexical Environment of innerFunction:
     * {
     *   Environment Record: { innerVar: "I'm in inner" },
     *   Outer Environment Reference: outerFunction's Lexical Environment
     * }
     *
     * outerFunction's Lexical Environment:
     * {
     *   Environment Record: { outerVar: "I'm in outer" },
     *   Outer Environment Reference: Global Lexical Environment
     * }
     */
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // This works because of lexical scoping!

/**
 * Function Execution Flow:
 *   Whenever we invoke a function a Function Execution Context (FEC) and Function Environment
 * Record (FER) is created.
 *   An FER contains the bindings for the variable declarations, parameters and function
 * declarations inside the respective function.
 *   Only a FEC holds reference to the FER
 *   When the FEC has been garbage collected after the function execution, then the FER also
 * gets garbage collected.
 *
 */

function outer() {
  let count = 0;

  return ++count;
}
console.log("count in outer =========>", outer());
/**
 * output: 1 => As explained above there is no use of retaining the variable count.
 * So, it will be garbage collected after the function execution
 * */

/**
 * It is possible to retain the reference to FER in which case it will not get garbage collected and
 * we can still use the variables within the outer. To make this happen:
 */

function outerHavingFunction() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
let innerFunc = outerHavingFunction();
console.log("basic closure===>", innerFunc(), innerFunc()); // 1,2

/**
 *  The above combination of function with retained ER of the outer function is called closure.
 *  The inner function which has direct reference to the environment of the outer function
 * is a closure.
 *  Although the outer function's EC is destroyed, the inner function's reference to the outer
 * function's ER is retained which is created during the creation of inner function.
 *
 *  LEXICAL ENVIRONMENT ENABLES THIS:
 *  - When inner() is created, it captures the lexical environment of outerHavingFunction()
 *  - This includes access to the 'count' variable through the scope chain
 *  - The lexical environment is "frozen" at the time of function creation
 *  - Even after outerHavingFunction() execution ends, inner() retains access to its lexical environment
 */

// Closure with Function Arguments or Function Factories:
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Closure with Function Arguments 1 ===>", double(5)); // 10
console.log("Closure with Function Arguments 2 ===>", triple(5)); // 15

/**
 * LEXICAL ENVIRONMENT IN ACTION:
 * - Each call to multiplier(2) and multiplier(3) creates separate lexical environments
 * - double() has access to factor = 2 in its lexical environment
 * - triple() has access to factor = 3 in its lexical environment
 * - These are completely separate scope chains
 */

// The above pattern is used  to create customized, reusable functions based on parameters passed to the factory (multiplier is factory function)

//** Private Variables Using Closures for Data Encapsulation and Privacy: */

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log("counter=>", counter);
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

/**
 * LEXICAL SCOPING FOR PRIVACY:
 * - 'count' is in the lexical environment of createCounter()
 * - The returned methods (increment, decrement, getCount) all share the same outer lexical environment
 * - 'count' is not accessible from outside because it's not in the global scope
 * - Only the methods that were created in the same lexical scope can access 'count'
 */

// The above pattern is used to create private variables and that variable can be modified using only the methods

//** Event Handlers with Context Using Closures: */
function applyFilter(filterType) {
  // A mock function to simulate applying a filter on a dashboard
  console.log(`Applying filter by: ${filterType}`);
}

function createFilterButtonHandler(filterType) {
  // Function to generate a dynamic event handler with closure
  return function () {
    // The closure has access to filterType through lexical scoping
    applyFilter(filterType);
  };
}

// Note: This would work in a browser environment with DOM
if (typeof document !== "undefined") {
  const buttonContainer = document.getElementById("filter-buttons");
  const filters = ["Region", "Sales", "Date"];
  filters.forEach(function (filter) {
    const button = document.createElement("button");
    button.innerHTML = `Filter by ${filter}`;
    // Each handler has its own lexical environment with different 'filterType'
    button.addEventListener("click", createFilterButtonHandler(filter));
    // buttonContainer.appendChild(button);
  });
}

//** The Issue with var and Asynchronous Operations in a Loop  */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 500); // output => 3 3 3 3
}

/**
 * LEXICAL ENVIRONMENT ISSUE:
 * - 'var' is function-scoped, so all setTimeout callbacks share the same lexical environment
 * - By the time callbacks execute, the loop has finished and i = 3
 * - All callbacks reference the same 'i' variable in the same lexical environment
 */

// Loop are synchronous and variable var is function scoped so the same instance of i is shared across all iterations

// Solution:
for (var i = 0; i < 3; i++) {
  (function (i) {
    // IIFE capturing 'i'
    setTimeout(function () {
      console.log(`Processing at index ${i}`);
    }, 1000 * i);
  })(i); // Pass 'i' to the IIFE
}

/**
 * - IIFE creates a new lexical environment for each iteration
 * - Each setTimeout callback gets its own copy of 'i' in its lexical environment
 * - Parameter 'i' in IIFE creates a new binding in each iteration's lexical environment
 */

/** let variable in loops */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i, "let version"), 500); // output => 0 1 2
}

/**
 * LEXICAL ENVIRONMENT WITH 'let':
 * - 'let' creates a new binding in each iteration of the loop
 * - Each iteration has its own lexical environment with its own 'i' variable
 * - This is equivalent to the IIFE solution but built into the language
 */

// ===========================================
// ADDITIONAL EXAMPLES SHOWING LEXICAL SCOPE
// ===========================================

//** Example: Lexical Scope Chain */
var a = 1;
function first() {
  var b = 2;
  function second() {
    var c = 3;
    function third() {
      var d = 4;
      // Can access all variables due to lexical scope chain
      console.log(a + b + c + d); // 10

      /**
       * Lexical Environment of third():
       * {
       *   Environment Record: { d: 4 },
       *   Outer Environment Reference: second's Lexical Environment
       * }
       *
       * Scope Chain Resolution:
       * third() -> second() -> first() -> global
       * Looks for variables in this order
       */
    }
    return third;
  }
  return second();
}

var closureFunc = first();
closureFunc(); // 10

//** Example: Lexical Scope Determines Access, Not Call Site */
function outerScope() {
  var outerVar = "I'm from outer";

  function innerScope() {
    console.log(outerVar); // Accesses outerVar from lexical scope
  }

  return innerScope;
}

function differentScope() {
  var outerVar = "I'm from different scope";
  var func = outerScope();
  func(); // Still prints "I'm from outer" - lexical scope, not call site!
}

differentScope(); // "I'm from outer"

/**
 * KEY INSIGHT:
 * - The inner function accesses 'outerVar' from where it was DEFINED (lexical scope)
 * - NOT from where it was CALLED (dynamic scope)
 * - This is why closures work predictably
 */

//** Example: Multiple Closures Sharing Lexical Environment */
function createSharedEnvironment() {
  var sharedVar = 0;

  function increment() {
    sharedVar++;
    return sharedVar;
  }

  function decrement() {
    sharedVar--;
    return sharedVar;
  }

  function getValue() {
    return sharedVar;
  }

  // All three functions share the same lexical environment
  return { increment, decrement, getValue };
}

var shared = createSharedEnvironment();
console.log(shared.increment()); // 1
console.log(shared.increment()); // 2
console.log(shared.decrement()); // 1
console.log(shared.getValue()); // 1

/**
 * LEXICAL ENVIRONMENT SHARING:
 * - All three returned functions share the same outer lexical environment
 * - They all have access to the same 'sharedVar' binding
 * - Changes made by one function are visible to the others
 */

//** Example: Lexical Scope with Parameters */
function createMultiplier(factor) {
  // 'factor' is in the lexical environment of createMultiplier
  return function (number) {
    // This function has access to 'factor' through lexical scoping
    return number * factor;
  };
}

var multiplyBy5 = createMultiplier(5);
var multiplyBy10 = createMultiplier(10);

console.log(multiplyBy5(3)); // 15
console.log(multiplyBy10(3)); // 30

/**
 * PARAMETER SCOPE:
 * - Function parameters are part of the function's lexical environment
 * - Each call to createMultiplier creates a new lexical environment
 * - The returned function closes over the parameter in its lexical scope
 */

/**
 * SUMMARY: WHY LEXICAL ENVIRONMENT ENABLES CLOSURES
 *
 * 1. LEXICAL SCOPING: Functions have access to variables in their lexical scope (where they're defined)
 *
 * 2. SCOPE CHAIN: JavaScript searches for variables through the scope chain (current -> outer -> global)
 *
 * 3. ENVIRONMENT PERSISTENCE: When a function is created, it captures its lexical environment
 *
 * 4. CLOSURE FORMATION: If an inner function references outer variables, the outer environment is retained
 *
 * 5. REFERENCE RETENTION: The inner function maintains a reference to the outer lexical environment
 *
 * Without lexical scoping, closures wouldn't work because:
 * - Functions wouldn't have access to outer variables
 * - There would be no scope chain to traverse
 * - No mechanism to capture and retain outer environments
 *
 * Lexical environment is the foundation that makes closures possible!
 */

// ===========================================
// REAL-TIME USAGE EXAMPLES AND PATTERNS
// ===========================================

//** 1. Closures with Multiple Nested Functions */
function outerFunction(x) {
  function middleFunction(y) {
    function innerFunction(z) {
      return x + y + z;
    }
    return innerFunction;
  }
  return middleFunction;
}

const addNumbers = outerFunction(10)(20);
console.log("Nested closures:", addNumbers(5)); // 35

//** 2. Closures in Array Methods (Common Pattern) */
const numbers = [1, 2, 3, 4, 5];
const threshold = 3;

// The callback function has access to the outer 'threshold' variable
const filteredNumbers = numbers.filter(function (num) {
  return num > threshold; // Closure over 'threshold'
});
console.log("Filtered numbers:", filteredNumbers); // [4, 5]

//** 3. Module Pattern with Closures */
const Calculator = (function () {
  let result = 0; // Private variable

  // Private function
  function validateNumber(num) {
    return typeof num === "number" && !isNaN(num);
  }

  // Public API
  return {
    add: function (num) {
      if (validateNumber(num)) {
        result += num;
      }
      return this; // Method chaining
    },
    subtract: function (num) {
      if (validateNumber(num)) {
        result -= num;
      }
      return this;
    },
    multiply: function (num) {
      if (validateNumber(num)) {
        result *= num;
      }
      return this;
    },
    getResult: function () {
      return result;
    },
    reset: function () {
      result = 0;
      return this;
    },
  };
})();

console.log(
  "Module pattern:",
  Calculator.add(5).multiply(2).subtract(3).getResult()
); // 7

//** 4. Closures with setTimeout and setInterval */
function createTimer(name, delay) {
  let count = 0;
  return function () {
    count++;
    console.log(`${name} executed ${count} times`);
    if (count < 3) {
      setTimeout(arguments.callee, delay); // Recursive setTimeout
    }
  };
}

const timer1 = createTimer("Timer1", 1000);
// timer1(); // Uncomment to run

//** 5. Closures for Memoization (Caching) */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Cache hit for:", key);
      return cache[key];
    }
    console.log("Computing result for:", key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const slowFunction = function (num) {
  // Simulate slow computation
  let result = 0;
  for (let i = 0; i < num * 1000000; i++) {
    result += i;
  }
  return result;
};

const memoizedFunction = memoize(slowFunction);
console.log("First call:", memoizedFunction(100));
console.log("Second call:", memoizedFunction(100)); // Will use cache

//** 6. Closures for Configuration */
function createLogger(level) {
  const timestamp = () => new Date().toISOString();

  return {
    info: function (message) {
      if (level === "info" || level === "debug") {
        console.log(`[${timestamp()}] INFO: ${message}`);
      }
    },
    warn: function (message) {
      if (level === "warn" || level === "info" || level === "debug") {
        console.log(`[${timestamp()}] WARN: ${message}`);
      }
    },
    error: function (message) {
      console.log(`[${timestamp()}] ERROR: ${message}`);
    },
  };
}

const logger = createLogger("info");
logger.info("Application started");
logger.warn("This is a warning");
logger.error("This is an error");

//** 7. Closures and Memory Leaks (Important to Know) */
function createMemoryLeak() {
  const largeObject = new Array(1000000).fill("data");

  return function () {
    // This closure holds reference to largeObject
    // Even if we don't use it, it won't be garbage collected
    console.log("Function called");
  };
}

// To avoid memory leaks, explicitly nullify references when done
let leakyFunction = createMemoryLeak();
// Use the function...
leakyFunction = null; // Help garbage collection

//** 8. Closures with Arrow Functions */
const createArrowClosure = (multiplier) => {
  return (num) => num * multiplier;
};

const timesFive = createArrowClosure(5);
console.log("Arrow function closure:", timesFive(4)); // 20

//** 9. Practical Example: Debouncing with Closures */
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const expensiveOperation = function (input) {
  console.log("Expensive operation executed with:", input);
};

const debouncedOperation = debounce(expensiveOperation, 300);
// debouncedOperation("test1");
// debouncedOperation("test2"); // Only this will execute after 300ms

//** 10. Closures in Object Methods */
function Person(name) {
  let age = 0; // Private variable

  this.name = name;

  // Public method that closes over private variable
  this.getAge = function () {
    return age;
  };

  this.birthday = function () {
    age++;
    return this;
  };
}

const person = new Person("John");
console.log("Initial age:", person.getAge()); // 0
person.birthday().birthday();
console.log("After birthdays:", person.getAge()); // 2

//** Common Closure Pitfalls and Solutions */

// Pitfall 1: Closure in loops with var (already covered in main content)
console.log("\n=== Loop Pitfall Demo ===");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop:", i), 100); // 3, 3, 3
}

// Solution 1: IIFE (already covered)
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(() => console.log("IIFE solution:", index), 200);
  })(i);
}

// Solution 2: let (already covered)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let solution:", i), 300); // 0, 1, 2
}

// Solution 3: bind
for (var i = 0; i < 3; i++) {
  setTimeout(
    function (index) {
      console.log("bind solution:", index);
    }.bind(null, i),
    400
  );
}

// Pitfall 2: Accidental global variables
function problematicClosure() {
  // Missing 'var', 'let', or 'const' creates global variable
  count = 0; // This becomes global!
  return function () {
    return ++count;
  };
}

// Better approach
function goodClosure() {
  let count = 0; // Properly scoped
  return function () {
    return ++count;
  };
}

console.log("\n=== Memory and Performance Considerations ===");
/**
 * Memory Considerations:
 * - Closures retain references to their outer scope
 * - This can prevent garbage collection of large objects
 * - Always nullify references when done if memory is a concern
 *
 * Performance Considerations:
 * - Creating functions inside loops can be expensive
 * - Consider creating the function once and reusing it
 * - Closures add slight overhead compared to regular functions
 */

/**
 * References:
 *
 *  - https://www.youtube.com/watch?v=6Ixyltr8_R0
 *  - ECMAScript Specification: Lexical Environments
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */
