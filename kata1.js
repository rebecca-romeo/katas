// console.log("start here");
const sumLargestNumbers = function(data) {
  let largest = data[0]
  for (let item of data) {
    if(item > largest) {
      largest = item
      // console.log(`the largest is ${largest}`)
    }
  }

  let secondLargest = data[0];
  for (item of data) {
    if (item >= secondLargest && item < largest) {
      secondLargest = item;
      // console.log(`the next largest is ${secondLargest}`)
    }
  }
  return largest + secondLargest
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

//11
// 5
// 126