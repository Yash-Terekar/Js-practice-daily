const product = {
  id: 1,
  name: "Keyboard",
  price: 500,
};

const clone = { ...product };
clone.price = 600;
console.log(clone);
