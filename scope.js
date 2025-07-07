/**
 * Scope:
 *  Scope defines which variables, functions, or objects that are accessible in a specific part of
 * your code during its execution.
 */

/**
 * Types of Scope:
 *
 * Global Scope:
 *     Variables declared outside of any function or block belong to the global scope.
 *   They are accessible from anywhere in the code after their declaration.
 *
 *  Function Scope:(Local Scope)
 *    Variables declared with var, let and const inside a function are only accessible within that
 * function and its nested scopes
 */

function greet() {
  let message = "Hello!"; // even if we declare with var it won't be accessible outside
  console.log("function scope inside==>", message);
}

greet(); // Output: Hello!
// console.log("function scope outside==>",message); // Error: message is not defined

/**
 *  Block Scope:
 *    Variables declared with let and const are only accessible within the block in which they
 * are declared.
 *    Declaring a variable with the var keyword inside a block will be visible outside the block
 */

if (true) {
  const temp = 42;
  console.log("block scope inside==>", temp); // 42
}
// console.log("block scope outside==>", temp); // Error

/**
 *  Lexical Scope:(Static Scope)
 *    The scope of a variable is determined by where it is declared in the source code.
 *    Inner functions have access to the variables of their parent (outer) functions.
 */

function outer() {
  const outerVar = "Outer";

  function inner() {
    const innerVar = "Inner";
    console.log(outerVar); // Can access outerVar
  }

  // console.log(innerVar); // ReferenceError: innerVar is not defined
  inner();
}

outer();

/** Lexical Environment
 *    Every function or block in JavaScript has its own “environment” where it keeps track of
 * its variables and function declarations.
 *    This environment also has a link (or reference) to its parent’s environment — the one in
 * which it was defined.
 *    That way, JS can look up variables through this chain of environments.
 */

/**
 * Scope Chain:
 *   The mechanism JavaScript uses to resolve variable names during code execution.
 *   When a variable is used, JavaScript first looks for it in the current scope.
 *   If not found, it searches the outer (parent) scope, continuing outward until it reaches
 * the global scope.
 *   The scope chain is established at the time of function declaration, not when the function
 * is called.
 *
 *   Alternative:
 *     Each scope has a lexical environment with a reference to its parent lexical environment.
 *     When JavaScript code runs, it tries to resolve variables by following this chain
 *     of lexical environments, which is known as the scope chain.
 */

const globalVar = "Global";

function outerA() {
  const outerVar = "Outer";

  function inner() {
    const innerVar = "Inner";
    console.log(innerVar); // 'Inner' (current scope)
    console.log(outerVar); // 'Outer' (outer scope)
    console.log(globalVar); // 'Global' (global scope)
  }

  inner();
}

outerA();

/**
 * Block or Compound Statement:
 *   A block (enclosed in { }) is used when JavaScript expects a single statement,
 * but you need to group and execute multiple statements together.
 */

// Compound Statement:
{
  var a = 10;
  console.log(a);
}

if (true) {
  var a = 10;
  console.log(a);
  //here we have taken help of block to execute multiple statements when JS expected one
}

// behaviours of all type of variable declarations:
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10; accessed from global scope
// console.log(b); // Reference Error;b is Not defined

/**
 * Shadowing:
 *    Shadowing occurs when a variable in a local scope has the same name as one in an outer
 * scope, making the inner variable take precedence within its scope.
 */
let x = 50;

{
  let x = 60; // this x shadows the x declared in the outer scope
  let y = 70;
  const z = 80;
  console.log("x inside block:", x); // 60
}

console.log("x outside block:", x); // 50

// Illegal shadowing:

let t = 10;
{
  //var t = 20; // because var will have no boundaries in a block it is function scoped so error occurs
}

/**
 * References:
 *  Akshay Saini's Video on Scope Chain, Scope and Lexical Env. - https://www.youtube.com/watch?v=uH-tVP8MUs8
 *  Akshay Saini's Video on Let, Const and TDZ - https://www.youtube.com/watch?v=BNC6slYCj50
 */
