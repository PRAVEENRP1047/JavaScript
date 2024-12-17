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
  - 
