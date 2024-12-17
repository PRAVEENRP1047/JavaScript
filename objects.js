/** Ways to create an object */
// "use strict";
//1. Object literal notation:
let person1 = {
  name: "Praveen",
  age: 25,
};
console.log("Created using object literal notation ===>", person1);

//2. The new Object() Constructor:
let person2 = new Object();
person2.name = "Alice";
person2.age = 25;
console.log("Created using constructor ===>", person2);

/** Ways to access and modify object properties */

//1. Dot Notation:
console.log("Accessed using dot notation ===>", person1.name); // "Alice"
person1.age = 26; // Modify the age
console.log("Modified using dot notation ===>", person1);

//2. Bracket Notation:
console.log("Accessed using bracket notation ===>", person1["name"]); // Alice
person1["age"] = 27; // Modify the age
console.log("Modified using bracket notation ===>", person1);

/** Adding, Modifying, and Deleting Properties */

// Adding a new property
person1.profession = "Engineer";
console.log("Adding a Property ====>", person1);

// Modifying an existing property
person1.age = 28;
console.log("Modifying a Property ====>", person1);

// Deleting a property
delete person1.profession;
console.log("Deleting a Property ====>", person1);

/** Checking if a Property Exists (using "in")*/

console.log("Checking if a Property Exists==>", "name" in person2); // true
console.log("Checking if a Property Exists===>", "profession" in person2); // false

/** Methods in Objects */

let person3 = {
  name: "Bob",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  //or use ES6 shorthand
  // greet() {
  //   console.log(`Hello, my name is ${this.name}`);
  // },
};
person3.greet(); // "Hello, my name is Bob"

/** Object Destructuring */

const person4 = {
  name: "Sam",
  age: 25,
  city: "New York",
};

const { name: renamedName, age, city } = person4;
console.log("destructured variable==>", renamedName); // "Alice" // destructured key 'name' renamed to 'renamedName'
console.log("destructured variable==>", age); // 25
console.log("destructured variable==>", city); // "New York"

/** Object Methods */

// Object.keys()
// Returns an array of the object's "own enumerable" (can be accessed on looping) property names (keys).
console.log("Object.keys() ======>", Object.keys(person4)); // ["name", "age", "city"]

// Object.defineProperty()
// Defines a new property or modifies an existing property on an object

let obj2 = {};
Object.defineProperty(obj2, "name", {
  value: "John",
  writable: true, // Default true. If set to false, the property's value is read-only. If true value can be modified.
  enumerable: true, // Default true. If set to false, the property is non-enumerable. (will not be iterated in for...in loops and Objects.key())
  configurable: true, // Default true.  If false, the property cannot be deleted and the property descriptor itself cannot be changed
});
console.log("Object.defineProperty() ==>", obj2); // can use the same to edit the property descriptor
Object.defineProperty(person4, "age", {
  enumerable: false,
});

// Object.getOwnPropertyNames()
// Returns an array of the object's own property names including "non-enumerable" properties.

console.log(
  "Object.getOwnPropertyNames() ==>",
  Object.getOwnPropertyNames(person4)
);

// Object.values()
// Returns an array of the object's own enumerable property values.

console.log("Object.values() ======>", Object.values(person4)); // ["Sam", 25, "New York"]

// Object.entries()
// Returns an array of an object's own enumerable string-keyed (symbols are excluded) property [key, value] pairs.

console.log("Object.entries() ======>", Object.entries(person4));

// Object.fromEntries()
// Converts a array of key-value pairs in arrays into an object.

const entries = Object.entries(person4);
console.log("Object.fromEntries() ======>", Object.fromEntries(entries)); // { name: 'Alice', age: 30 }

// Object.assign()
// Copies the values of all enumerable properties from one or more source objects to a target object.

const target = { a: 1 };
const source = { b: 2, c: 3 };
console.log("Object.assign() ==>", Object.assign(target, source));

// Object.create()
// Creates an object with specified prototype object and properties

let proto = {
  name: "Proto Object",
  greet: function () {
    console.log("Hello!, From Proto method");
  },
};
let obj1 = Object.create(null); // prototype should be null or object only
console.log("Object.create() ==>", obj1); // {}

// Object.setPrototypeOf()
// Sets the prototype (i.e., the internal [[Prototype]]) of an object.

Object.setPrototypeOf(obj1, proto);
console.log("after  Object.setPrototypeOf==>", obj1); // {}
obj1.greet(); // "Hello!"

// Object.getPrototypeOf()
// Returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.

console.log("Object.getPrototypeOf()=======>", Object.getPrototypeOf(obj1));

// Object.getOwnPropertyDescriptor()
console.log(
  "Object.getOwnPropertyDescriptor() =====>",
  Object.getOwnPropertyDescriptor(obj2, "name")
);

// Object.hasOwnProperty()
console.log(
  "Object.hasOwnProperty()===>",
  person1.hasOwnProperty("profession")
);

// Object.freeze()
// Freezes an object by not letting us to define any new property, modify existing one and cannot delete any property(including prop descriptor)

Object.freeze(obj2); //uncomment to see it in action
obj2.age = 30; // silently avoids writing new property(non-strict mode) | TypeError (strict mode)
obj2.name = "Daniel"; // silently avoids modifying the property(non-strict mode) | TypeError (strict mode)
console.log("Object.freeze() =====>", obj2);

// Object.isFrozen()
// If freezed, returns true else false is returned.

console.log("Object.isFrozen() =====>", Object.isFrozen(obj2));

// Object.seal()
// Allows to modify existing property but restricts adding any new property and restricts deleting a property

let obj3 = {};
Object.defineProperty(obj3, "name", {
  value: "Mukesh",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.seal(obj3); //uncomment to see it in action
obj3.age = 30; // silently avoids writing new property (non-strict mode) | TypeError (strict mode)
obj3.name = "Daniel";
delete obj3.name; // // silently avoids deleting the property (non-strict mode) | TypeError (strict mode)
console.log("Object.seal() =====>", obj3);

// Object.isSealed()
// Returns true if the object is sealed, else false

console.log("Object.isSealed() =====>", Object.isSealed(obj3)); // true

// Object.is()
// Compares two values to determine if they are the same. It behaves similarly to ===, but with special handling for NaN and -0 (which are considered equal in Object.is() but not in ===).

console.log(
  "=== operator ====>",
  1 === 1,
  "Object.is(1, 1)====>",
  Object.is(1, 1)
); // true true
console.log(
  "=== operator ====>",
  1 === "1",
  "Object.is(1, '1')====>",
  Object.is(1, "1")
); // false false
console.log(
  "=== operator ====>",
  NaN === NaN,
  "Object.is(NaN, NaN)====>",
  Object.is(NaN, NaN)
); // false true  // typeof NaN => number
console.log(
  "=== operator ====>",
  0 === -0,
  "Object.is(0, -0)====>",
  Object.is(0, -0)
); // true false

// Object.preventExtension()
// Prevents new properties from being added to an object.

let obj4 = { name: "Smith" };
Object.preventExtensions(obj4);
obj4.age = 26; // Error in strict-mode (obj4 not extensible)
console.log("Object.preventExtensions() ====>", obj4);

// Object.isExtensible()
// Checks if an object is extensible
console.log("Object.isExtensible() ===>", Object.isExtensible(obj4)); // false

// Singleton, Module and Factory
//
