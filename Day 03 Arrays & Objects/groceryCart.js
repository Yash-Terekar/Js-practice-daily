let cart = [
  { name: "milk", price: 40 },
  { name: "bread", price: 30 },
  { name: "eggs", price: 60 },
];
let total = 0;

for (let i = 0; i < cart.length; i++) {
  let itemName = cart[i].name.charAt(0).toUpperCase() + cart[i].name.slice(1);
  console.log(`${itemName} - ₹${cart[i].price}`);
  total += cart[i].price;
}
console.log(`Total amount: ${total}`);
