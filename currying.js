/**
 * Revisit closures for scenarios based on currying
 */

/**
 * Currying:
 *    It is a functional programming concept, in which we break down a function with multiple 
 * arguments into a series of functions with a single argument.
 *    During this we shouldn't alter the variables external to the function.
 *    Currying is useful when you want to create specialized functions by fixing some arguments in advance. 
 * This is known as partial application.
 *    
 */

const ordinaryAdd = (a, b) => a + b;

const curriedAdd = (a) => {
  return (b) => {
    return a + b;
  }
}
const add5 = curriedAdd(5); // we get curried function
const result = add5(10); // calling curried function add5, adds 5 + 10 = 15

// Real time application:

const list = [
  {
    id: 1,
    name: 'Steve',
    email: 'steve@example.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
  },
  {
    id: 3,
    name: 'Pamela',
    email: 'pam@example.com',
  },
  {
    id: 4,
    name: 'Liz',
    email: 'liz@example.com',
  },
];

// If we want to filter an object out of the list using a name then normal approach would be

const noJohn = list.filter(item => item.name !== 'John');

// The above noJohn is not reusable because of hard-coding the name John 


const filterByName = (list, name) => {
  return list.filter((person) => person.name !== name)
}

console.log("filterByName",filterByName(list, 'John')); // works fine and reusable

/* filterByName works fine but if we are looking to keep the code DRY then, we could move the filtering 
* callback function into a variable called filtering
**/

const filtering = (person) => person.name !== name

const dryFilterByName = (list, name) => {
  return list.filter(filtering);
}

// When executing the above dryFilterByName the filtering callback won't know the name to filter out
// Here we can use currying to wrap the filter function with a function to provide the name argument
const curriedfiltering = (name) => (person) => person.name !== name;

const curriedfilterByName = (list,name) => {
  return list.filter(curriedfiltering(name));
}

console.log("curriedfilterByName",curriedfilterByName(list, "John"));

/** Creating Specialized Functions (Partial Application) */

// Curried logger function
function log(level) {
  return function(message) {
    console.log(`[${level}] ${message}`);
  };
}

// Create specialized loggers
const infoLogger = log('INFO');
const errorLogger = log('ERROR');

// Usage
infoLogger('This is an informational message');
errorLogger('This is an error message');

/** Functional Composition in Pipelines */

/*Currying is useful in function composition, where you apply multiple functions to a value sequentially, 
each transforming the value before passing it to the next function as below. */

// Curried functions for transformation
const multiply = x => y => x * y;
const add = x => y => x + y;

// Creating a pipeline of functions
const pipeline = multiply(2)(3);  // Multiplies 3 by 2 => 6
const finalResult = add(5)(pipeline);  // Adds 5 to 6 => 11

console.log("Functional Composition in Pipelines",finalResult);  // Output: 11

/** Dynamic Configurations and Customization */

// Curried profile function
function createProfile(name) {
  return function(age) {
    return function(location) {
      return `Name: ${name}, Age: ${age}, Location: ${location}`;
    };
  };
}

// Usage
const profile = createProfile('Alice')(30)('New York');
console.log(profile);  // Output: Name: Alice, Age: 30, Location: New York



/**
 * Reference => https://dev.to/darkmavis1980/a-practical-example-on-how-to-use-currying-in-javascript-1ae9
 */
