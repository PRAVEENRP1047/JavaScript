"use strict";
// Data Types in JS:

/** Primitive Data Types: */

/**
 *  In JS, there are 7 primitive data types and they're immutable, which means their
 * values can't be changed once they're assigned.
 *  JS uses fixed amount of memory for these types.
 *  These data types are stored by value, meaning when they're assigned a new value a copy of
 * of the value is created.
 *  when you assign a primitive value to a new variable, the value is copied, not the reference
 * to the original value.
 */

/** Immutable:
 *
 * Immutable means that the contents of the primitive data types cannot be altered.
 */

/** Number */

/**
 *  In JS, there is only one type of number which is used to represent integers, decimals,
 * whole numbers, floating-point values, NaN and Infinity
 *  Regardless of whether the number is an integer or a floating-point number, it always
 * consumes 8 bytes (64 bits) of memory.
 */

let x = 10;
x = 20; // Reassigning a new value, the old value (10) is lost
// The value of x (10) can't be changed directly

/** String */

/**
 *  In JS, strings are typically UTF-16 encoded, which means that characters are stored as
 * 16-bit(2 byte) Unicode characters.
 *  In some cases when the character exceeds this range a surrogate pairs (2 16bit units) may be required
 *  In JS, strings are immutable and any operation on a string will only result in the creation of
 * a new string.
 *  Strings are treated as objects under the hood and so additional object overhead is allocated for
 * strings methods and properties
 *  But this does not affect their pass by value nature hence their size can be predicted at compile time
 */

let greeting = "Hello";
console.log("before replace operation==========>", greeting); // Output: "Hello"
console.log("replace operation ==>", greeting.replace("H", "h")); // Creates a new string "hello"
console.log("after replace operation ========>", greeting); // Output: "Hello"

/** Boolean */

/**
 *  Boolean values are either "true" or "false" and 1 byte is allocated for these values although 1
 * bit is enough to represent a boolean(0 or 1) for efficieny purpose in modern computers.
 */

/** undefined */

/**
 *  It is a special value used when a variable is declared but not yet assigned a value or when a
 * function does not explicitly return a value.
 *  It requires small, constant amount of memory(typically 1 byte or a special internal representation)
 */

/** null */

/**
 *  It is used to represent the intentional absence of the value.
 *  It requires small, constant amount of memory(typically 1 byte or a special internal representation)
 *  typeof null returns "object" instead of "null".
 *  This was due to the type tagging system used in the original design of JavaScript,
 * where null was represented with a zero value, which was also used to represent objects.
 *  It is still retained as such for backward compatibility.
 */

console.log(null == undefined); // true
console.log(null === undefined); // false


/** Symbol */

/**
 *  Symbols are unique and immutable.
 *  They are primarily used to create unique identifiers for object properties.
 */

let sym1 = Symbol("description for symbol 1");
let sym2 = Symbol("description for symbol 1");

console.log("symbols with same desc =======>", sym1 === sym2); // Output: false (even though descriptions are the same)

// Symbol.for() method is a special function in JavaScript that allows you to create or retrieve global symbols

let globalSymbol1 = Symbol.for("shared symbol");
let globalSymbol2 = Symbol.for("shared symbol");

console.log(
  "comparing global symbols ==========>",
  globalSymbol1 === globalSymbol2
); // true

// Symbol.keyFor() for retrieving if you want to check which key is associated with a given symbol.

console.log("Getting the symbol with keyFor======>", Symbol.keyFor(globalSymbol1))// shared symbol


/** BigInt */

/**
 *  BigInt is a special numeric type in JavaScript that can represent integers larger than the safe integer limit 
 * of the Number type
 */

// 2 ways to create a BigInt

let bigInt1 = BigInt(123456789012345678901234567890); // constructor
let bigInt2 = 123456789012345678901234567890n; // n-suffix with integer literal

// Even though the size of a BigInt can grow dynamically it is a primitive


/** Non-Primitive Data Types: */

/**
 *  In JS, the non-primitive data types are mutable, which means their
 * values can be changed once they're assigned.
 *  These data types are stored by reference.
 */

/** Objects */

/**
 *  Variables pointing to an object hold a reference to that memory location, not the object itself.
 */

let obj1 = { a: 10 }; // obj1 is a reference stored in stack, actual data is stored in heap 
let obj2 = obj1;
obj2.a = 20;
console.log("changing obj2 changes obj1 because of pass by ref=====>",obj1.a); // 20


/** Arrays */

/**
 *  Arrays are special type of objects.
 *  Arrays have indexed values and dynamic sizing, allowing you to store a collection of data.
 *  Can store multiple values, which can be of different types (primitive or non-primitive).
 */

let arr1 = [1, 2];
let arr2 = arr1;
arr2[0] = 99;
console.log("changing arr2 changes arr1 because of pass by ref=====>",arr1[0]); // 99


/** Functions */

/**
 *  Functions in JavaScript are objects.
 *  If you assign a function to a new variable, both variables will reference the same function.
 */

let greet1 = function() { console.log("Hi!"); };
let greet2 = greet1;
greet2(); // "Hi!"


/** Date */

/**
 *  A Date object is stored by reference, so if you assign a Date object to another variable, 
 * both variables will reference the same date object.
 *  Date object is immutable, but it can be mutated with it's methods
 */

let date1 = new Date();
let date2 = date1;
date2.setFullYear(2025);
console.log(date2,date1.getFullYear()); // 2025


/**  */

// Summary of Non-Primitive Data Types with Examples
// Objects: { key: value }
// Example: { name: "John", age: 30 }
// Arrays: [value1, value2, value3]
// Example: ["apple", "banana", "orange"]
// Functions: function() { }
// Example: function greet() { console.log("Hello"); }
// Date Objects: new Date()
// Example: new Date("2024-01-01")
// RegExp: /pattern/
// Example: /abc/
// Error Objects: new Error()
// Example: new Error("Something went wrong!")
// Map Objects: new Map()
// Example: new Map([["key1", "value1"], ["key2", "value2"]])
// Set Objects: new Set()
// Example: new Set([1, 2, 3])
// WeakMap: new WeakMap()
// Example: new WeakMap([[obj, "value"]])
// WeakSet: new WeakSet()
// Example: new WeakSet([obj])
// Promise: new Promise()
// Example: new Promise((resolve, reject) => { resolve("Done"); })
// Typed Arrays: new Int8Array(), new Float32Array()
// Example: new Int8Array(10)
