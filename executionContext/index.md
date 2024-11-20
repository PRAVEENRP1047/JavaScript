# Execution Context (Conceptual mechanism)

- EC is the environment in which our code is executed.
- Contains many internal components to keep track of the execution flow.
- EC is made up of two components:
  - Memory Component (Variable Environment)
  - Code Component (Thread of Execution)
- When a JS program is run it is executed in two phases:
  - Memory creation phase.
  - Execution phase.
- When we run a JS Program, a global execution context is created and pushed to the call stack
  during the execution phase.

## Environment Record

- EC uses environment records to keep track and maintain the identifier bindings created for the variable declarations, function declarations and all the values created within that context.

## Global Execution Context's components

- Realm
- Lexical Environment
- Variable Environment

### Realm (Component of EC)

- A Realm points to a realm record.
- A Realm is an isolated environment in which our code runs.
- A Realm is created in the browser when
  - open a new tab
  - refresh a page
  - an iframe is created

### Realm's components

- A realm has 3 components:
- Intrinsics
- Global object
- Global environment record

#### Intrinsics

- It consists of built-in objects and methods
- These objects are defined by the JavaScript specification and form the core functionality of the language. Examples include:

  - Objects: Object, Array, Function, Date, RegExp, etc.
  - Mathematical Objects: Math, Infinity, NaN
  - Global Functions: eval(), setTimeout(), parseInt(), etc.
  - Error Objects: Error, TypeError, SyntaxError, etc.
  - These are part of the realm's built-in environment and are available in every JavaScript context (unless explicitly shadowed).

#### Global Object

- It provides access to the built-in properties and functions that are available in the JavaScript environment.
- Global Object contains:
  - Specification (ECMAScript) Properties: (Array, Object, Math, String , etc.,)
  - Host Properties (Provided by Browser's): (parseInt(), setTimeout())
  - User defined Properties: (variables with var keyword and functions defined in the global scope).

#### Global Environment Record

- Concept is same as environment record.
- A GEC contains:
  - Object record - This a direct reference which points to the Global Object
  - Declarative record - This contains variable declarations except those declared with var and function declarations. (only let and const variables)
  - Global This Value - Refers to the Global Object (Window in browser)
  - Outer Env - This outer environment property points to null because GER is the top-level environment in JS

### Lexical Environment

- LE points to ER that contains bindings to everything except variables declared 
with var keyword and function declarations (In this case it points to the component in GEC which has this)

### Variable Environment

- VE points to ER that contains bindings to variables declared with var and function declarations (In this case it points to the component in GEC which has this)

## Call Stack

- It maintains the order of execution context.
- It works based on LIFO principle.

## Memory Creation Phase

- During this phase all the variables are stored in the memory component of the execution context as follows:

  - variables with var keyword are initialized with the value 'undefined'
  - variables with let and const keywords are stored uninitialized.
  - functions are stored with a reference to the entire function (i.e the function itself is stored with its name).

## Execution Phase

- During this phase, variables are assigned with its value
- Function invocations are executed. For each function when invoked new execution context is created and pushed on to the call stack

## References

- [Akshay Saini's video on JS & Execution Context](https://www.youtube.com/watch?v=iLWTnMzWtj4)
- [Lydia Hallie's video on Execution Context](https://www.youtube.com/watch?v=zdGfo6I1yrA)
