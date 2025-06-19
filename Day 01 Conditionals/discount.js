let cart = 400;

if (cart >= 1000) {
  console.log("You will get 30% discount");
  discount = 0.3;
} else if (cart >= 500) {
  console.log("You will get 10% discount");
  discount = 0.1;
} else {
  console.log("Sorry you will be not able to get any discount");
  discount = 0;
}

let finalprice = cart - cart * discount;
console.log(`Your total bill is ${finalprice}`);
