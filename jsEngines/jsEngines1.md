# JS Engines

## JIT Compilation

- JS uses Just In Time (JIT) compilation to generate machine code - meaning the machine code is generated during runtime. (compile and execute happens together in one step)
- JIT compilation - we compile the code when we need it and we collect some information about the
  code when we run (execute) it and again re-compile the code.

## Optimization Compiler

- It re-compiles the 'hot' functions which are used often using the type information, which will make the functions fast and fallback to the base code when types change

## JS Engine Flow:

- JS code => Parser => Abstract Syntax Tree (AST) => Baseline Compiler => machine code
  ||Optimizing Complier => Optimized machine code => If types change => machine code

## V8 Engine Flow: (using the above flow as ref.)

- JS source code is given to the parser
- Parser converts it to an AST
- AST is given to the Ignition (Baseline compiler of V8).
- Ignition converts AST into ByteCode - Ignition compiles the code and when we run it collects type info - If a function is used regularly then such hot functions are passed to the TurboFan(Optimized compiler of V8).
- Turbofan converts such hot functions to fast optimized code. Now when the type information collected by the Ignition changes then again the flow falls back to normal machine code

## Reference

- [Franziska Hinkelmann's JSConf presentation](https://www.youtube.com/watch?v=p-iiEDtpy6I)

## Takeaway

- Write code that looks like statically typed (for eg: objects that look like same) in order to give necessary information to the compilers to put the code in the optimized compiler.
