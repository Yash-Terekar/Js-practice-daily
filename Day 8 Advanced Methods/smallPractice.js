const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((c) => c * 2);
// console.log(double);

const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter((n) => n % 2 == 0);
// console.log(even);

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 25 },
];
const older = users.find((u) => u.age > 25);
// console.log(older);

const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: true },
  { name: "TV", inStock: false },
];
const stock = products.every((a) => a.inStock);
// console.log(stock);
const someStock = products.some((a) => a.inStock);
// console.log(someStock);

const prices = [100, 200, 50, 150];
const sum = prices.reduce((p, c) => p + c, 0);
// console.log(sum);

const items = ["apple", "banana", "apple", "orange"];
const filterSet = new Set(items);
// console.log(filterSet);

const scoreMap = new Map();
scoreMap.set("Yash", 90);
scoreMap.set("Raj", 80);
scoreMap.set("Avi", 85);
// console.log(scoreMap.get("Raj"));

let total = 0;
for (let i of scoreMap.values()) {
  total += i;
}
const avg = total / scoreMap.size;
// console.log(avg);

const person = { name: "Yash", age: 22, city: "Pune" };
const { name, age } = person;
// console.log(name, age);

const arr = [1, 2, 3];
const [a, b] = arr;
// console.log(a + b);
