/**
 * Scope:
 *  Scope determines the accessibility or visibility of variables from the context of current execution.
 */

/**
 * Types of Scope:
 *
 *  Global Scope:
 *    Variables declared outside function or block
 *
 *  Function Scope:(Local Scope)
 *    Variables declared with var, let and const inside a function are accessible inside that function only
 */

function greet() {
  let message = "Hello!"; // even if we declare with var it won't be accessible outside
  console.log("function scope inside==>", message);
}

greet(); // Output: Hello!
// console.log("function scope outside==>",message); // Error: message is not defined

/**
 *  Block Scope:
 *    Variables declared with let and const are only accessible in the block they're declared
 *    Declaring a variable with the var keyword inside a block will be visible outside the block
 */

if (true) {
  const temp = 42;
  console.log("block scope inside==>", temp); // 42
}
// console.log("block scope outside==>", temp); // Error

/**
 *  Lexical Scope:(Static Scope)
 *    Scope of a variable is determined by where the variable is located in the code.
 *    (Alternate definition) - Inner functions has access to variables of their parent.
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
 *    It holds the environment record where variables and function declarations are stored
 * and reference to the outer lexical environment of its parent scope
 *    When JS is executed it creates lexical environments for functions and blocks
 */

/**
 *  Scope Chain:
 *    Mechanism used by JS to resolve variable names when a code is executed
 *    When a variable is used, JS looks for it in the current scope.
 *    If not found, it looks in the outer scope, and so on until it reaches the global scope.
 *
 *    Alternative:
 *      Each scope has a lexical environment in which a pointer will refer to it's parent
 *  lexical environment. When JS code is executed it tries to resolve the variables based on these
 *  chain of lexical environments which is known as scope chain
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
 *    It is used where JS expect a single statement but we need to execute multiple statement
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

// Shadowing:
let x = 50;
{
  let x = 60; // shadowed the x outside
  let y = 70;
  const z = 80;
  console.log("x inside block", x);
}
console.log("x====>", x); // 50; x in block will shadow the x outside the block (shadowing)

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
