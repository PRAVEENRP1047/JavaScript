/**
 * Increment(++) and Decrement(--);
 *
 *  They're unary operators, meaning it operates on a single operand.
 */

/** Prefix Increment (++x) */

// Increments the value by one and returns the value after the increment

let x = 5;
let y = ++x; // y is 6 because 1 is added to x and returned , x is now 6
console.log("x=", x, "y=", y); // 6 6

/** Postfix Increment (x++) */

// Returns the value and then increments the value by one

let a = 5;
let b = a++; // b is 5 because 1 is added to a only after returning the current value, a is 6
console.log("a=", a, "b=", b); // 6 5