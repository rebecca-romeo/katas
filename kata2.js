function conditionalSum(values, condition) {

  // condition to check if the numbers are even
  // if they are even, add them together
  if (condition === "even") {
    let sum = 0;
    for(let i = 0; i < values.length; i++) {
      if(values[i] % 2 === 0) {
        sum += values[i];
      }
    }
    return sum
  }
  // condition to check if the numbers are odd
  // if they are odd, add them together
  if(condition === "odd") {
    let sum = 0;
    for(let i = 0; i < values.length; i++) {
      if(values[i] % 2 != 0) {
        sum += values[i];
      }
    }
    return sum
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));