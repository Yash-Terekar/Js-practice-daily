let students = [
  { name: "Yash", marks: 88 },
  { name: "Ravi", marks: 66 },
  { name: "Priya", marks: 59 },
  { name: "Amit", marks: 38 },
];

for (let i = 0; i < students.length; i++) {
  let grade = students[i].marks;
  if (grade >= 75) {
    console.log(`${students[i].name} Grade A Marks ${students[i].marks}`);
  } else if (grade >= 60) {
    console.log(`${students[i].name} Grade B Marks ${students[i].marks}`);
  } else if (grade >= 40) {
    console.log(`${students[i].name} Grade C Marks ${students[i].marks}`);
  } else {
    console.log(`${students[i].name} has Failed`);
  }
}

for (let grade of students) {
  if (grade.marks >= 75) {
    console.log(`${grade.name} Marks: ${grade.marks} Grade A`);
  } else if (grade.marks >= 60) {
    console.log(`${grade.name} Marks: ${grade.marks} Grade B`);
  } else if (grade.marks >= 40) {
    console.log(`${grade.name} Marks: ${grade.marks} Grade C`);
  } else {
    console.log(`${grade.name} Has Failed `);
  }
}
