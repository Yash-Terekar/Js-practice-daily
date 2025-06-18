const list = [1, 2, 3, 4, 5, 6, 24];

const evens = list.filter((n) => n % 2 == 0);
console.log(evens.map((a) => a * 2));
