// Day 12 - Project 4: Product Discount & Display Final Price

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  applyDiscount(percent) {
    let discount = (this.price * percent) / 100;
    this.price -= discount;
  }

  showPrice() {
    console.log(`Your item ${this.name} now cost only ${this.price}`);
  }
}

const basmati = new Product("Basmati", 200);
basmati.applyDiscount(20);
basmati.showPrice();
