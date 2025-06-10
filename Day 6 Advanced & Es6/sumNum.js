function sumNum(...number) {
  return number.reduce((a, b) => a + b, 0);
}

const prices = [120, 300, 450];

const total = sumNum(...prices);
console.log(`Total: ${total}`);
