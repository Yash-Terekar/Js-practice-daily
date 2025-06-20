// 7. Create a shopping list formatter

const cart = [
  { item: "Milk", qty: 2 },
  { item: "Bread", qty: 1 },
  { item: "Tea", qty: 3 },
  { item: "Biscuit", qty: 2 },
];

const short = cart.map((i) => console.log(`${i.qty}x ${i.item}`));
