"use strict";
// Data Types in JS:

/** Primitive Data Types: */

/**
 * In JS, there are 7 primitive data types and they're immutable, which means their 
 * values can't be changed once they're assigned.
 */ 

/** Immutable:
 * 
 * Immutable means that the contents of the primitive data types cannot be altered.
 */

/** Number */

let x = 10;
console.log("before===>", x[0])
x = 20; // Reassigning a new value, the old value (10) is lost

// The value of x (10) can't be changed directly
x.toFixed(2);  // This creates a new string value but doesn't change x
