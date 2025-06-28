function placeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order placed successfully");
      resolve();
    }, 2000);
  });
}
function makePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment successful");
      resolve();
    }, 1500);
  });
}
function updateInventory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inventory updated");
      resolve();
    }, 1000);
  });
}
function generateInvoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Invoice generated");
      resolve();
    }, 1000);
  });
}

placeOrder()
  .then(() => makePayment())
  .then(() => updateInventory())
  .then(() => generateInvoice());
