const cart = [
  { id: 1, name: "Milk", price: 30, quantity: 2, category: "Dairy" },
  { id: 2, name: "Biscuit", price: 80, quantity: 4, category: "Snacks" },
  { id: 3, name: "Oil", price: 1100, quantity: 2, category: "Cooking" },
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

const totalValue = cart.reduce((p, c) => p + c.price, 0);
console.log(`Total value of cart: ${totalValue}`);

const expensiveItems = cart.filter((a) => a.price > 1000).map((i) => i.name);
console.log(`Expensive items: ${expensiveItems}`);

const category = cart.map((a) => a.category);
const set = new Set(category);
const setArr = [...set];
console.log(set);
