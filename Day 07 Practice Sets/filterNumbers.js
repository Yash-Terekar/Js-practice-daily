// 8. Filter duplicate numbers from array using Set

const arr = [3, 4, 6, 2, 3, 7, 3, 6, 3, 5];

const shorted = [...new Set(arr)];
console.log(shorted);
