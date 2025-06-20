// 6. Find user with highest salary
const employee = [
  { name: "Aniket", salary: 31000 },
  { name: "Yash", salary: 46000 },
  { name: "Aditya", salary: 26000 },
  { name: "Siddhu", salary: 36000 },
];

const highestSalary = employee.reduce((p, c) => (p.salary > c.salary ? p : c));
console.log(highestSalary);
