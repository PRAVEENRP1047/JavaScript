/**
 * Spread Operator:
 *  It is used to unpack an array or object (iterables) into individual elements.
 *  It is used to copy elements from an array or properties from an object into another or
 * merge multiple arrays or objects together.
 *
 */

let arr = [1, 2, 3, 4, 5];

function multiply([a, b, c, d, e]) {
  return a * b * c * d * e;
}

//Spreads the array as separate parameters to a function
console.log(multiply(...arr)); //120

const str = "hello";
const charsArray = [...str];
console.log("spread string===>", charsArray); // ['h','e','l','l','o']

// For arrays:
const arrB = [1, 2, 3];
console.log("spread array", ...arrB);
//
const newArr = [...arrB, 4, 5]; // Spread array elements into a new array
console.log("spread array new==>", newArr); // [1, 2, 3, 4, 5]

// For objects:
const obj = { a: 1, b: 2 };
// console.log("spread object", ...obj);
// Above line causes Error because object is not iterable.

const newObj = { ...obj, c: 3 }; // Spread object properties into a new object
console.log("spread object new==>", newObj); // { a: 1, b: 2, c: 3 };

/**
 * Rest Operator:
 *  It is used to combine multiple values into an array.
 *  It is used in destructuring an object or an array to collect the remaining elements in an array
 *  It is used when a function can receive variable number of arguments.
 */

let restArr = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...remaining] = restArr;
console.log(first); // 1
console.log(second); // 2
console.log(remaining); // [3, 4, 5, 6, 7, 8]

const objA = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...others } = objA;
console.log("others=======>", others); // { c: 3, d: 4 }



function calculateTotal(){

}



/**
 * arguments objects are not real arrays they are just array like objects which have only one property length,
 * Where as Rest parametes are real arrays which has all methods like pop, forEach, push etc.
 */
