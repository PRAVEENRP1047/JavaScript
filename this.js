"use strict";

// this in global scope:

console.log("this in global scope", this); // window object

/**
 * Note:
 *    The value of this keyword is the same Window object irrespective of the non-strict / strict mode.
 *    The value of this keyword can differ based on the environment we're in.
 *    For browsers, it is the Window object.
 */

// this inside a function:

function sample() {
  // strict mode => undefined | non-strict mode => Window (this substitution)
  console.log("this inside a function", this);
}
sample();

/**
 * Note:
 *    The value of this keyword inside a function depends on the strict or non-strict mode.
 *    If the value of this keyword is undefined or null, then it will be substituted with the global object in non-strict mode.
 */

// this keyword value of regular function depends on how the function is called:

// In the above example, the value is based on strict or non-strict mode only, but when:

window.sample(); // logs window

/**
 * Note:
 *    In both strict and non-strict mode if a function is called in reference to an object, then
 * the value of this keyword will be the object on which it is being called.
 */

// this keyword inside a nested function:

function nestedRegularFunction() {
  function nested() {
    console.log("from nested regular function", this); // strict mode => undefined | non-strict mode => Window
  }
  nested();
}
nestedRegularFunction();

// this keyword inside an object's method (regular function):

const person = {
  name: "Praveen",
  greet: function () {
    console.log(
      "this keyword inside an object's method (regular function)=>",
      this
    ); // {"name": "Praveen", "greet": function(){ return 'Hi. Myself ${this.name}'}}
    function nestedRegularFunctionInsideMethod() {
      console.log("nestedRegularFunctionInsideMethod=====", this);
    }
    nestedRegularFunctionInsideMethod();
  },
};

person.greet(); // Hi. Myself Praveen

/**
 * Note:
 *    The value of this keyword inside an object's method is the object itself in both strict and non-strict mode
 */

// this inside an arrow function:

const arrowFunctionSample = () => {
  // strict mode and non-strict mode (arrow function takes this context from the surrounding scope)
  console.log("this inside an arrow function", this); // window
};
arrowFunctionSample();

/**
 * Note:
 *    Arrow function do not have their own this binding. Meaning depending on how it's called regular
 * function's this keyword will be assigned a value. But arrow function's this keyword will not be assigned a value
 *    The value of this keyword inside an arrow function stays the same on the strict or non-strict mode.
 *    Arrow functions retains the value of the enclosing lexical context. (where it's defined)
 *    And does not depend if it's called with reference to an object or not.
 */

// the value of this keyword in an arrow function does not depend on how it is being called in reference with
// window.arrowFunctionSample(); // TypeError: is not a function

/**
 * Notes:
 *    Output = Window object .
 *    Because the arrow function don't have its own context it takes the this context from surrounding
 * scope.
 *    It is not added to the global window object
 */

// this keyword inside an object's method (arrow function):

const arrowFunctionPerson = {
  name: "Praveen",
  greet: () =>
    console.log(
      "this keyword inside an object's method (arrow function)",
      this
    ),
};

arrowFunctionPerson.greet();

/**
 * Note:
 *    The value of this keyword inside an object's method (arrow function) inherits the this keyword value of the scope within
 *  which it is enclosed in both strict and non-strict mode
 */

// nested arrow function:

const nestedArrowFunctionPerson = {
  name: "Praveen",
  greet: function () {
    const y = () =>
      console.log(
        "this keyword inside an object's method (nested arrow function)",
        this
      );
    y();
  },
};

nestedArrowFunctionPerson.greet(); // nestedArrowFunctionPerson object

/**
 * Note:
 *    The value of this keyword inside an object's method (nested arrow function) inherits the this value of the scope within
 *  which it is enclosed in both strict and non-strict mode.
 *    In this it is enclosed within a method so it's this keyword value will be the value of the this keyword value of the arrow
 * function.
 */

// this keyword in DOM:

//<button onclick="alert(this)">Click Me</button> // value of this keyword is reference to the HTML element (HTMLButtonElement)

/**
 * Note:
 *    The value of this keyword inside DOM will be the reference to the HTML element
 */


// this keyword inside setTimeout or setInterval (to understand => window.setTimeout())

setTimeout(function(){
  console.log("from regular function as callback in setTimeout",this) // non-strict mode => Window | strict mode => Window
}, 1000);

setTimeout(() => {
  console.log("from arrow function as callback in setTimeout",this) // non-strict mode => Window | strict mode => Window
},1000);

// this keyword in constructor function:

function personConstructor(name) {
  this.name = name; // this keyword refers to the new object that we're creating.
}
const constructedPerson = new personConstructor("praveen constructor");
console.log("constructedPerson=====>", constructedPerson); // {name: 'praveen constructor'}

// this keyword inside class method:

class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log(this); // refers to the instance on which it was called
  }
}
const dog = new Animal("Dog");



/**
 * Reference:
 *  https://www.youtube.com/watch?v=9T4z98JcHR0&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=9
 */
