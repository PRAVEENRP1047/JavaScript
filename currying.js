/**
 * Currying:
 *    It is a functional programming concept, in which we break down a function with multiple 
 * arguments into a series of functions with a single argument.
 *    During this we shouldn't alter the variables external to the function
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

// console.log(filterByName(list, 'John')); // works fine and reusable

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

// console.log(curriedfilterByName(list, "John"));

//implement a func which accept a func and return a curried one
let curry = (fn) => {
  let helper = (...args) => {
    if(args.length >= fn.length){
      return fn(...args);
    }else{
      let temp = (...args2) => {
        return helper(...args, ...args2);
      };
      return temp;
    }
  };
  return helper;
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4));


/**
 * Reference => https://dev.to/darkmavis1980/a-practical-example-on-how-to-use-currying-in-javascript-1ae9
 */
