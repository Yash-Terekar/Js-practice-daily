function sumNum(...num) {
  return num.reduce((a, b) => a + b, 0);
}

const prices = [120, 150, 450];

const total = sumNum(...prices);
console.log(`Total: ${total}`);
