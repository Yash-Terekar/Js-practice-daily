// Day 12 - Project 1: Student Management System

class StudentGrades {
  constructor(name, marks) {
    (this.name = name), (this.marks = marks);
  }

  grade() {
    if (this.marks >= 90) {
      return "A";
    } else if (this.marks >= 70) {
      return "B";
    } else return "C";
  }

  printResult() {
    console.log(`Student ${this.name} had got ${this.grade()} Grade`);
  }
}

let yash = new StudentGrades("Yash", 92);
let aniket = new StudentGrades("Aniket", 78);
let rohan = new StudentGrades("Rohan", 66);
// console.log(yash);
// console.log(aniket);
// console.log(rohan);
yash.printResult();
aniket.printResult();
rohan.printResult();
