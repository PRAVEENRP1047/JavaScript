/**
 * Spread Operator:
 *  Expands an array, string, or other iterable into individual elements.
 *  Spreads object properties into another object.
 *  Useful for copying or merging.
 *  Always on the RIGHT side of assignment (Eg: const charsArray = [...str];) or in function calls
 */

let arr = [1, 2, 3, 4, 5];

// Function expecting 5 arguments:
function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

// Spread the array into 5 separate arguments
console.log(multiply(...arr)); // 120

// Spread on strings (strings are iterable)
const str = "hello";
const charsArray = [...str];
console.log("spread string ===>", charsArray); // ['h','e','l','l','o']

// Spread on arrays to build a new one
const arrB = [1, 2, 3];
console.log("spread array elements:", ...arrB); // 1 2 3

const newArr = [...arrB, 4, 5]; // create a new array with extra elements
console.log("spread array new ===>", newArr); // [1, 2, 3, 4, 5]

// Spread on objects (ES2018+)
const obj = { a: 1, b: 2 };
// console.log(...obj); // ERROR: object is not iterable

const newObj = { ...obj, c: 3 }; // shallow copy + add c
console.log("spread object new ===>", newObj); // { a: 1, b: 2, c: 3 }

// Object merging example
const other = { d: 4 };
const merged = { ...obj, ...other };
console.log("merged object ===>", merged); // { a:1, b:2, d:4 }

/**
 * Rest Operator:
 *  Collects multiple elements into an array
 *  Often used in destructuring or function parameters
 *  Always on the LEFT side of assignment (Eg: const [first, second, ...remaining] = restArr) or in function parameters
 */

// Array destructuring with rest
let restArr = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...remaining] = restArr;
console.log(first); // 1
console.log(second); // 2
console.log(remaining); // [3,4,5,6,7,8]

// Object destructuring with rest
const objA = { a: 1, b: 2, c: 3, d: 4 };
const { a: aa, b: bb, ...others } = objA;
console.log("others ===>", others); // { c: 3, d: 4 }

// Rest parameters in functions
function sum(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

/**
 * Difference between arguments vs rest parameters:
 *  arguments is array-like (not real array), lacks array methods
 *  Arguments(3) [1, 2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
 *  rest parameters are true arrays with push, pop, forEach, etc.
 *  rest parameters do not work on arrow functions,
 *  arguments do not exist in arrow functions
 */

function regArgs() {
  console.log("arguments object:", arguments); // Arguments(3) [1, 2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
}
regArgs(1, 2, 3);

const arrowArgs = () => {
  console.log("arguments object:", arguments); // RefError
}
arrowArgs(1, 2, 3);

/**
 * Summary:
 * - Spread expands elements of an iterable or keys of an object
 * - Rest collects multiple values into an array or object
 */
