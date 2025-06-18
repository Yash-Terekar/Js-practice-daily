const students = [
  { name: "Yash", age: 22 },
  { name: "Aditya", age: 18 },
  { name: "Aniket", age: 21 },
  { name: "Siddhu", age: 17 },
];

const isAdult = students.every((a) => a.age > 18);
console.log(isAdult);
