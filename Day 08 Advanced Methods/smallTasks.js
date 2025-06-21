// Double the even numbers only
const nums = [3, 6, 9, 12, 15];
const double = nums.map((num) => num * 2);
// console.log(double);

// Find the first student with marks above 85
const students = [
  { name: "Yash", marks: 78 },
  { name: "Aditya", marks: 92 },
  { name: "Aniket", marks: 80 },
];
const above85 = students.find((n) => n.marks > 85);
// console.log(above85);

// Check if all numbers are positive
const numbers = [4, 8, -2, 11, 7];
const isPositive = numbers.every((n) => n > 0);
// console.log(isPositive);

// Check if any product is out of stock
const products = [
  { name: "Shirt", inStock: true },
  { name: "Pants", inStock: false },
  { name: "Shoes", inStock: true },
];
const isOutOfStock = products.some((p) => !p.inStock);
// console.log(isOutOfStock);

// Sum of salaries in a company
const employees = [
  { name: "Ajay", salary: 20000 },
  { name: "Vikas", salary: 35000 },
  { name: "Anjali", salary: 40000 },
];
const sum = employees.reduce((p, c) => p + c.salary, 0);
// console.log(sum);
