let students = [
  { name: "Yash", marks: 92 },
  { name: "Aniket", marks: 88 },
  { name: "Rohan", marks: 102 },
  { name: "Vipul", marks: "a" },
];

function calcGrade(score) {
  if (typeof score !== "number" || isNaN(score)) {
    return "Please provide valid number";
  }
  if (score > 100 || score < 0) {
    return "Enter marks between 1 to 100";
  }
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
}

calculateGrade = (score) =>
  typeof score !== "number" || isNaN(score)
    ? "Please valid number"
    : score > 100 || score < 0
    ? "1 to 100 please"
    : score > 90
    ? "A"
    : score > 80
    ? "B"
    : score > 70
    ? "C"
    : score > 60
    ? "D"
    : "F";

function listSort(studentList) {
  for (let student of studentList) {
    const grades = calculateGrade(student.marks);
    console.log(`${student.name}: ${grades}`);
  }
}

listSort(students);
