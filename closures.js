/**
 * Function Execution Flow:
 *   - Whenever we invoke a function a Function Execution Context (FEC) and Function Environment Record (FER)
 *   is created.
 *   - An FER contains the bindings for the variable declarations, parameters and function declarations inside
 *   the respective function.
 *   - Only a FEC holds reference to the FER
 *   - When the FEC has been garbage collected after the function execution, then the FER also
 *   gets garbage collected.
 *
 */

function outer() {
  let count = 0;

  return ++count;
}
console.log("count in outer =========>", outer()); //output: 1 => As explained above there is no use of retaining the variable count. So, it will be garbage collected after the function execution

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
 * The above combination of function object with retained ER is called closure.
 * The inner function which remembers the environment of the outer function is a closure.
 * Significant thing is although the outer function's EC gets is destroyed it's environment record is
 * not garbage collected.
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

// The above pattern is used to create private variables and that variable can be modified using only the methods

//** Event Handlers with Context Using Closures: */

function applyFilter(filterType) {
  // A mock function to simulate applying a filter on a dashboard
  console.log(`Applying filter by: ${filterType}`);
}
function createFilterButtonHandler(filterType) {
  // Function to generate a dynamic event handler with closure
  return function () {
    // The closure "remembers" the filterType even after this function is executed
    applyFilter(filterType);
  };
}
const buttonContainer = document.getElementById("filter-buttons");
const filters = ["Region", "Sales", "Date"];
filters.forEach(function (filter) {
  const button = document.createElement("button");
  button.innerHTML = `Filter by ${filter}`;
  // Attach a dynamically created event handler using a closure
  button.addEventListener("click", createFilterButtonHandler(filter));
  // buttonContainer.appendChild(button);
});

//** The Issue with var and Asynchronous Operations in a Loop  */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 500); // output => 3 3 3 3
}

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

/** let variable in loops */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i, "0000000"), 500); // output => 0 1 2
}

/**
 * References:
 *
 *  - https://www.youtube.com/watch?v=6Ixyltr8_R0
 *  -
 */
