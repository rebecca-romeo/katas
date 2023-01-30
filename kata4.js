const instructorWithLongestName = function(instructors) {
  let longestName = ""; 
  let instructorInfo = {};

  for (let instructor of instructors) {
    if (instructor.name.length > longestName.length) {
      longestName = instructor.name;

      instructorInfo.name = instructor.name;
      instructorInfo.course = instructor.course
    } 
  }
  return instructorInfo
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// expected output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}