let unit = 350;
let rate;

if (unit <= 100) {
  rate = 5;
} else if (unit <= 200) {
  rate = 7;
} else if (unit <= 300) {
  rate = 9;
} else {
  rate = 12;
}

let bill = unit * rate;
console.log(`Your Monthly bill is ${bill}`);
