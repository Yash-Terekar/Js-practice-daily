let students = [
  { name: "Yash", marks: 88 },
  { name: "Ravi", marks: 66 },
  { name: "Priya", marks: 59 },
  { name: "Amit", marks: 38 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].marks >= 75) {
    console.log(`${students[i].name} Marks: ${students[i].marks} Grade A`);
  } else if (students[i].marks >= 60) {
    console.log(`${students[i].name} Marks: ${students[i].marks} Grade B`);
  } else if (students[i].marks >= 40) {
    console.log(`${students[i].name} Marks: ${students[i].marks} Grade C`);
  } else {
    console.log(`${students[i].name} Marks: ${students[i].marks} has Failed`);
  }
}

for (let grade of students) {
  if (grade.marks >= 75) {
    console.log(`${grade.name} Marks: ${grade.marks} Grade: A`);
  } else if (grade.marks >= 60) {
    console.log(`${grade.name} Marks: ${grade.marks} Grade: B`);
  } else if (grade.marks >= 40) {
    console.log(`${grade.name} Marks: ${grade.marks} Grade: C`);
  } else {
    console.log(`${grade.name} Marks: ${grade.marks} has Failed`);
  }
}
