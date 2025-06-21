const students = [
  { id: 1, name: "Yash", marks: [80, 75, 90], city: "Pune" },
  { id: 2, name: "Aniket", marks: [60, 35, 70], city: "Mumbai" },
  { id: 3, name: "Neha", marks: [90, 95, 85], city: "Pune" },
  { id: 4, name: "Aditya", marks: [30, 80, 70], city: "Delhi" },
  { id: 5, name: "Priya", marks: [45, 60, 50], city: "Pune" },
];

const avg = students.map((a) => {
  const total = a.marks.reduce((p, c) => p + c, 0);
  return total / a.marks.length;
});
console.log(avg);

const filter = students
  .filter((mark) => mark.marks.every((a) => a > 40))
  .map((a) => a.name);
console.log(filter);

const isPass = students.every((s) => s.marks.every((m) => m > 40));
console.log(isPass);
const pass = students.some((s) => s.marks.every((m) => m > 40));
console.log(pass);

const classTotal = avg.reduce((p, c) => p + c, 0);
const classAvg = classTotal / avg.length;
console.log(classAvg);
