function whereCanIPark(spots, carType) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; spots[y].length; x++) {
      const spot = spots[y][x]
      if (carType === "regular" && spot === "R") {
        return [x, y]
      } else if (carType === "small" && spot === "R" || spot === "S") {
        return [x, y]
      } else if (carType === "motorcycle" && spot === "R" || spot === "S" || spot === "M") {
        return [x, y]
      }
    } 
    return false
  }

}


console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));