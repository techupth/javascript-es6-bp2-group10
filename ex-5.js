function sum(...numbers) {
  // Start coding here !
  return numbers.reduce(summing,0);
}

function summing(accumulator, currentValue) {
  return accumulator + currentValue;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
