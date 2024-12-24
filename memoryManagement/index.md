# Memory Management

## Memory Life Cycle

- Every JS variable or object goes through a life cycle as below:
- Initialization (let a=20) => Accessing (if(true){a=20}) => Removal ('a' removed from the memory).

  ### Initialization

  - It is the process of creation of the variable.
  - The JS Engine reserves memory for the variables and stores the values inside the allocated memory space.
  - Eg: let name = 'codedamn';

  ### Accessing

  - It is the process where we utilize the variables or objects stored in the memory.
  - During this phase, we'll also modify the values of these variables or objects.
  - Eg: if (name === 'codedamn') {
    Changing the value
    name = 'Codedamn!';
    }

  ### Removal

  - Removal is the deallocation of the reserved memory taken up by the variables or objects
  - After this phase, we won't be able to reference the variable or object inside the code.
  - Eg: function sum() {
    let x = 10;
    let y = 20;
    let sum = x + y;
    }
    console.log(x); // This will throw and error!

## How does JavaScript store variables?

- JS has two types of memory spaces: Stack and Heap
- The difference between Stack and Heap is that, what variable gets stored in which type of space.

  ### Stack

  - JS uses the stack data structure to store static or fixed-size data.
  - Static means the memory (size) need to be allocated for these
    types (primitive and references) will be known during the compile time itself or
    doesn't change during the run-time.

  ### Heap

  - JS uses the heap data structure to store the dynamic data.
  - Dynamic means the memory need to be allocated for these types (non-primitive) will
    change during the run-time (size is known at run-time) or not known at compile time.
  - Objects will be stored in the heap memory but the reference to it will reside in the
    stack memory

## Garbage Collection

- In languages such as C and C++ developers should deallocate the memory after the use.
- If the memory is not freed up after use, the program will run with an unused allocated
  memory space. This is known as memory leak.
- To prevent such condition, JS comes with a Garbage collector along with the JS Engine.
- It's job is to free up the unused memory block with garbage collection process.
- There's no guarantee that there's an algorithm which clears up all the unused memory
- But there's Mark and Sweep algorithm which performs efficiently by removing almost all
  unused memory.

  ### Mark and Sweep Algorithm

  - It marks the objects in the heap memory that can't be reached by the window object as garbage
    and removes it from the heap.
  - One tradeoff is variables declared with var and undeclared variables.
  - JS engine attaches the variables declared with the var to the window object.
  - So it can't be removed by the garbage collector.

## Reference

- [Codedamn's blog](https://codedamn.com/news/javascript/memory-management-complete-guide)
- [Turing's blog](https://www.turing.com/kb/handling-memory-management-in-javascript)
- [felixgerschau's blog](https://felixgerschau.com/javascript-memory-management/)
