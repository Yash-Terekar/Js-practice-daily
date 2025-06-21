// 1. Use filter + map 👉Get names of all users who are 18+ only
const users = [
  { name: "Yash", age: 17 },
  { name: "Preeti", age: 22 },
  { name: "Aditya", age: 18 },
  { name: "Aniket", age: 15 },
];
const user = users.filter((a) => a.age >= 18).map((a) => a.name);
// console.log(user);

// 2. 👉 Find the first user who is below 18.
const below18 = users.find((a) => a.age < 18);
// console.log(below18);

// 3. Check if all users in the array are above 10 years of age.
const all = users.every((a) => a.age > 10);
// console.log(all);

// 4. Use reduce 👉 Find total price of all items.
const items = [
  { item: "Pen", price: 10 },
  { item: "Notebook", price: 40 },
  { item: "Scale", price: 14 },
];
const total = items.reduce((p, c) => p + c.price, 0);
// console.log(total);

// 5. Use Set 👉 Create a Set and get a new array with unique values only.
const values = [1, 2, 3, 2, 4, 1, 5];
const filtered = [...new Set(values)];
// console.log(filtered);

// 6. Use Map 👉 Get the quantity of "Pencil" using the Map.
const productMap = new Map();
productMap.set("pen", 5);
productMap.set("pencil", 2);
// console.log(productMap.get("pencil"));

// 7. Chain filter + map + reduce 👉 Get the total price of only delivered orders.
const orders = [
  { id: 1, status: "delivered", price: 300 },
  { id: 2, status: "pending", price: 500 },
  { id: 3, status: "delivered", price: 100 },
];
const sum = orders
  .filter((a) => a.status === "delivered")
  .reduce((p, c) => p + c.price, 0);
// console.log(sum);
