

const multiplyBy = (factor) => {
  
  return (a) => factor * a
}

let multiplyBy5 = multiplyBy(5); //(a) => 5 * a

console.log(multiplyBy5(10))