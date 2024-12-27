/**
 *  Array can hold element of primitive and non-primitive type
 *  Arrays are indexed from 0
 *
 */

/** Array Literal */
let numbersList = [1, 2, 3, 4, 5];

/** Array Constructor */
let emptyNumbersList = new Array(10); // Creates an array of 10 empty slots
console.log("emptyNumbersList=======>", emptyNumbersList); // [empty × 10]
let colors = new Array("red", "green", "blue");
console.log(colors); // Output: ['red', 'green', 'blue']

/** Array.of() */
// to create dynamic arrays
let dynamicList = Array.of(1, 2, 3, 4, 5);
console.log("dynamicList======>", dynamicList); // [1, 2, 3, 4, 5]

/** Array.from() */
let stringToList = Array.from("hello"); // Convert string into array
console.log("stringToList======>", stringToList); // Output: ['h', 'e', 'l', 'l', 'o']

/** Array.push() */
numbersList.push(6); // Adds 6 at the end
console.log("push()=====>", numbersList); // Output: [1, 2, 3, 4, 5, 6]

/** Array.pop() */
numbersList.pop(); // Remove the last element
console.log("pop()=====>", numbersList); // Output: [1, 2, 3, 4, 5]
/** If empty array then undefined is returned */

/** Array.unshift() */
numbersList.unshift(0); // Adds 0 to the start
console.log("unshift====>", numbersList); // Output: [0, 1, 2, 3, 4, 5]

/** Array.shift() */
numbersList.shift(); // Removes element from the start
console.log("shift=====>", numbersList); //  Output: [1, 2, 3, 4, 5]

/** Array.splice(startIndex, deleteCount, elementsToInsert) */

// Removing elements
numbersList.splice(2, 2); // Removes 2 elements starting at index 2
console.log("splice() remove===>", numbersList); // Output: [1, 2, 5]

// Inserting elements
numbersList.splice(2, 0, 3, 4); // Adds 3 and 4 at index 2
console.log("splice() insert===>", numbersList); // Output: [1, 2, 3, 4, 5]

// Replacing elements
numbersList.splice(2, 1, 10, 20); // Replaces 3 with 10 and 20
console.log("splice() replace===>", numbersList); // Output: [1, 2, 10, 20, 4, 5]
/**
 * startIndex(required) => If negative, it counts from end of the array
 * deleteCount(optional) => If greater than the number of elements after start then all elements
 *                          from startIndex to end is removed
 */

/** Array.concat() */
let arr1 = [1];
let arr2 = [2, 3];
let mergedArray = arr1.concat(arr2); // returns a new array
console.log("mergedArray====>", mergedArray); // [1, 2, 3]

/** Array.indexOf(searchElement,[fromIndex]) */
console.log("indexOf=====>", numbersList.indexOf(20)); //  3 (first occurence)
/**
 *  If not found -1 is returned.
 *  Case-sensitive.
 *  Special case NaN !== NaN but indexOf can find it.
 */

/** Array.includes(element) */
console.log("includes======>", numbersList.includes(10)); // true

/** Array.forEach(callbackFunction,[thisArg]) */

numbersList.forEach(function (number) {
  console.log("forEach()===>", number);
});

const person = {
  name: "John",
  greet: function () {
    this.friends.forEach(function (friend) {
      console.log(this.name + " says hello to " + friend);
    }, this); // `this` here refers to `person`
  },
  friends: ["Alice", "Bob", "Charlie"],
};

person.greet();

/**
 *  forEach doesn't return anything
 *  can't use return, break or continue
 *  the iteration is synchronous
 */

/** Array.map(callback(currentValue, index, array), [thisArg]) */
let numbersListDoubled = numbersList.map((x) => x * 2);
console.log("numbersListDoubled=======>", numbersListDoubled); // Output:[2, 4, 20, 40, 8, 10]
/**
 *  the iteration is synchronous
 */

/** Array.filter(callback(currentValue, index, array), [thisArg]) */
const evenNumbers = numbersList.filter((num) => num % 2 === 0);
console.log("filter()========>", evenNumbers); // Output: [2, 10, 20, 4]

/** Array.reduce(callback(accumulator, currentValue, [index], [array]), [initialValue]) */
const numbersListReduced = numbersList.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log("sum of numbersList===>", numbersListReduced); // Output: 15
