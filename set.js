/**
 * Set
 *  It is an unordered(no index) collection of unique values.
 *  Values can be of any data type.
 *  Duplicate values aren't allowed.
 *  The order of iteration is same as the order in which we have inserted the values.
 */

const uniqueValues = new Set([1, 2]); // it accepts an optional argument which should be an iterable

/** Methods */

let listA = [3, 4, 5];

// add()
console.log(uniqueValues.add("Hello")); // adds to the set // Set(3) {1, 2, 'Hello'}
console.log(uniqueValues.add(listA)); // adds to the set //Set(4) {1, 2, 'Hello', [3, 4, 5]}
console.log(uniqueValues.add("Hello")); // Duplicate so ignored
console.log(uniqueValues.add(listA)); // Duplicate so ignored

// has()
console.log("has 3 ?", uniqueValues.has(3)); // false
console.log("has 2 ?", uniqueValues.has(2)); // true

// delete()
uniqueValues.delete(1);
console.log("removed 1===>", uniqueValues); //Set(3) {2, 'Hello', [3, 4, 5]}
uniqueValues.delete(10);
console.log("removed 10===>", uniqueValues); // No change because no element in set

// size()
console.log(uniqueValues.size); // 3 - size of the Set

// clear()
// uniqueValues.clear();
console.log("after clear====>", uniqueValues); // Set(0){}

// Iterating
uniqueValues.forEach((value) =>
  console.log(`Element in this iteration`, value)
);

/**
 * Real-time applications:
 *  It can be used to remove duplicate values
 *  We can use it to check the existence of an element in an array 
 * since its time complexity is O(1)
 *  It's lookup(access) is constant because it uses hash table under the hood
 */

// Union
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

let union = new Set([...setA, ...setB]);
console.log("union======>", [...union]); // [1, 2, 3, 4, 5] // spread operator is used to convert the set to an array in this line

// Intersection
let intersection = new Set([...setA].filter((valueInA) => setB.has(valueInA)));
console.log("intersection====>", [...intersection]);

// Difference
let difference = new Set([...setA].filter((valueInA) => !setB.has(valueInA)));
console.log("difference=======>", [...difference]);
