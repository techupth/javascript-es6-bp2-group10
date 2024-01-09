let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
let scoresValue = studentProfile.scores;
let mergedObejct = {...scoresValue, ...studentScores };

let newStudentProfile = {
  ...studentProfile,
  ...mergedObejct
};

console.log(newStudentProfile);
