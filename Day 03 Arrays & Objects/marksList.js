let marks = [78, 85, 91, 67, 74];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
let average = total / marks.length;

console.log(`Total marks are: ${total}`);
console.log(average);
