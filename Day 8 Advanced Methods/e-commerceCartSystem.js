const cart = [
  { id: 1, name: "Milk", price: 30, quantity: 2, category: "Dairy" },
  { id: 2, name: "Biscuit", price: 80, quantity: 4, category: "Snacks" },
  { id: 3, name: "Oil", price: 1100, quantity: 3, category: "Cooking" },
  { id: 4, name: "Bread", price: 60, quantity: 1, category: "Bakery" },
  {
    id: 5,
    name: "Iron",
    price: 1200,
    quantity: 1,
    category: "Home Appliances",
  },
  { id: 6, name: "Cheese", price: 200, quantity: 1, category: "Dairy" }, // Added for a duplicate category
  { id: 7, name: "Chips", price: 50, quantity: 2, category: "Snacks" }, // Added for a duplicate category
];
const totalCost = cart.reduce((p, c) => p + c.price, 0);
console.log(`Total cart value: ${totalCost}`);

const filter = cart.filter((a) => a.price > 1000).map((a) => a.name);
console.log(`Item price more than 1000 are ${filter}`);

const allcatagory = cart.map((a) => a.category);
console.log(allcatagory);

const set = new Set(allcatagory);
const uniqueCategoriesArray = [...set];

console.log("Unique Categories:", uniqueCategoriesArray);
