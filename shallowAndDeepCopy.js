/**
 * Shallow Copy:
 *    Creates an array or an object and copies only the top level references.
 *    If the object contains nested array or objects, then the references of the nested objects
 * are shared between the shallow and the original.
 *
 */

const original = {
  name: "BFE",
  address: {
    city: "Pune",
  },
};

const shallow = { ...original }; // shallow copy with spread
// Here while copying the top-level references, address is copied by reference hence modifying it in shallow affects the original too.

shallow.name = "Frontend"; // changes only in copy
shallow.address.city = "Mumbai"; // modifies nested object, shared
shallow.address.pin = "1234"; // will reflect in original also

console.log("original==>", original);
console.log("shallow==>", shallow);

console.log(original.address.city); // Mumbai  <-- affected!

/**
 * Deep Copy:
 *    A deep copy makes a new object that copies all levels of nested structures, so there is
 * no reference sharing. Changes to the nested structures of the copy do not affect the original.
 */

const originalB = {
  name: "BFE",
  address: {
    city: "Pune",
    street: {
      door: "108",
    },
  },
};

// quick-and-dirty deep copy
const deep = JSON.parse(JSON.stringify(originalB));

deep.address.city = "Mumbai";
deep.address.street.door = "308";
console.log("originalB===>", originalB);
console.log("deep====>", deep);
console.log(original.address.city); // Pune (original unchanged)

/**
 * Limitations:
 *    JSON method cannot copy functions, undefined, Date, Map, Set, etc.
 *    It also loses any prototype chains.
 */

// Functions, undefined, and special values are lost:

const originalC = {
  a: 10,
  b: undefined,
  c: {
    ca: undefined
  }
  // c: function () {
  //   return "hello";
  // },
  // d: Symbol("sym"),
};

const copied = JSON.parse(JSON.stringify(originalC));

console.log(copied); // { a: 10 }

/**
 * Valid JSON values:
 *    string, boolean, number, null, Array, Object and other types given to JSON.stringify
 * are ignored.
 */

// Date objects becomes string:

const originalD = {
  today: new Date(),
};

const copiedB = JSON.parse(JSON.stringify(original));

console.log(originalD.today instanceof Date); // true
console.log(copiedB.today instanceof Date); // false
console.log(typeof copied.today); // "string"

// Map, Set, and other non-JSON types are lost:

const originalE = {
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3]),
};

const copiedC = JSON.parse(JSON.stringify(originalE));

console.log(copiedC); // { map: {}, set: {} }

// Prototypes chains are lost:

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

const originalF = new Person("Alice");
const copiedD = JSON.parse(JSON.stringify(originalF));

console.log(copiedD.name); // "Alice"
console.log(copiedD.greet); // undefined
console.log(copied instanceof Person); // false

// Proper ways to do deep clone:

// 1. structuredClone (WebAPI from 2015);

const structuredCloneDeep = structuredClone(originalC);
console.log("structuredCloneDeep===>", structuredCloneDeep);

const structuredCloneDeepB = structuredClone(originalF);
console.log("structuredCloneDeepB===>", structuredCloneDeepB.greet);

/**
 * structuredClone:
 *    works on nested objects
 *    supports many built-in types (arrays, dates, blobs, maps, sets)
 *    does not copy functions, Symbols, loses prototype
 */
