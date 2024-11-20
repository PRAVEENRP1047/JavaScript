/**
 * Spread Operator:
 *    It is used to make an expand elements of iterable such as an array or string into separate elements
 */

let arr = [1,2,3,4,5];

function multiply(a, b, c, d, e){
  return a * b * c * d * e;
}

//Spreads the array as separate parameters
console.log(multiply(...arr));   //120

const str = "hello";
const charsArray = [...str];
console.log(charsArray); // ['h','e','l','l','o']


/**
 * Rest Operator:
 *    It is used to combine multiple values into an array.
 */

let restArr = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...remaining] = restArr;
console.log(first);
// 1
console.log(second);
// 2
console.log(remaining);
// [3, 4, 5, 6, 7, 8]

/**
 * arguments objects are not real arrays they are just array like objects which have only one property length, 
 * Where as Rest parametes are real arrays which has all methods like pop, forEach, push etc.
 */