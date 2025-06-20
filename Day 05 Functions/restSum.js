function sum(...a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
}
const total = sum(1, 2, 3, 4, 5, 6);
console.log(total);
