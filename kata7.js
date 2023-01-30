const checkAir = function (samples, threshold) {
  let dirtyAir = 0;
  for (item of samples) {
    if (item === "dirty") {
      dirtyAir++
    }
  } 
  if (dirtyAir / samples.length > threshold) {
    return "Polluted"
  } else if (dirtyAir / samples.length < threshold) {
    return "Clean"
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

// Polluted
// Polluted
// Clean