let cart = [
  { item: "Bag", price: 800 },
  { item: "Shoes", price: 1200 },
  { item: "Watch", price: 2500 },
];
let total = 0;
for (let prices of cart) {
  total += prices.price;
}
let discount = 0;
if (total > 3000) {
  discount = 0.3;
} else if (total > 2000) {
  discount = 0.2;
}

let finalPrice = total - total * discount;

console.log(`Cart Total is: ${total} And Discounted Price is:${finalPrice}`);
