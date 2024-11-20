// Call:

let person1 = {
  name: "Praveen",
  age: 26,
  greet: function (city, state) {
    console.log(
      `Hi Iam ${this.name} and I'm ${this.age} years old. I am from ${city}, ${state}`
    );
  },
};

let person2 = {
  name: "Sudeesh",
  age: 25,
};

person1.greet.call(person2, "Ooty", "TN"); //

/**
 * Note:
 *  By using call method we point what this keyword refers to in the function and we borrow
 * the method of one object and call with the context of another object(control context)
 */

// Apply:

let person3 = {
  name: "Sam",
  age: 26,
};

person1.greet.apply(person3, ["Manchester", "UK"]);

/**
 * Note:
 *  The only difference between the call and apply method is how they handle the passing of arguments.
 * In apply the arguments to the function to invoke is passed as an array. By using the ES6 spread
 * operator, we can use the array in a call method like person1.greet.call(person3, ...['Manchester', "UK"]);
 */

// Bind:

let person4 = {
  name: "Dan",
  age: 26,
};

let greetByDan = person1.greet.bind(person4,"Manchester", "UK"); // with partial application of args
greetByDan();// "Manchester", "UK" can be passed while invoking also.

/**
 * Note: 
 *    Bind method returns copy of the function with optional initial arguments which can be used later.
 * It is very helpful because it binds the method and the 'this context' with which it should be invoked.
 */

/**
 * Reference:
 *  https://www.youtube.com/watch?v=75W8UPQ5l7k&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=4
 */
