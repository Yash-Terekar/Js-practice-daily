function orderPlaced() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Placed ➡️");
      resolve();
    }, 2000);
  });
}
function preparingFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Preparing Food ➡️");
      resolve();
    }, 2000);
  });
}
function packed() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Packed ➡️");
      resolve();
    }, 2000);
  });
}
function outForDelivery() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Out For Delivery ➡️");
      resolve();
    }, 2000);
  });
}
function delivered() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delivered ➡️");
      console.log("Thanks for ordering!");
      resolve();
    }, 2000);
  });
}
orderPlaced()
  .then(() => preparingFood())
  .then(() => packed())
  .then(() => outForDelivery())
  .then(() => delivered())
  .catch((err) => console.log("Error:", err));
