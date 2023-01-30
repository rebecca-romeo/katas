const numberOfVowels = function(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a") {
      sum += 1
    } if (data[i] === "e") {
      sum += 1
    } else if (data[i] === "i") {
      sum += 1
    } else if (data[i] === "o") {
      sum += 1
    } else if (data[i] === "u") {
      sum += 1
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));