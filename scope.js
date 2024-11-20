/**
 * Block or Compound Statement:
 *    It is used where JS expect a single statement but we need to execute multiple statement
 */

// Compound Statement:
{
  var a = 10;
  console.log(a);
}

if (true) {
  var a = 10;
  console.log(a);
  //here we have taken help of block to execute multiple statements when JS expected one
}

// behaviours of all type of variable declarations:
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10; accessed from global scope
// console.log(b); // Reference Error;b is Not defined

// Shadowing:
let x = 50;
{
  let x = 60; // shadowed the x outside
  let y = 70;
  const z = 80;
  console.log("x inside block",x);
}
console.log("x====>",x); // 50; x in block will shadow the x outside the block (shadowing)

// Illegal shadowing:

let t = 10;
{
  //var t = 20; // because var will have no boundaries in a block it is function scoped so error occurs
}