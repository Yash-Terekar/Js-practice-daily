const array = [2, 3, 8, 6, 5, 34, 43, 63, 46];

function separateEvenOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

evenOdd = (num) => (num % 2 == 0 ? "Even" : "Odd");

function loops(arr) {
  for (let num of arr) {
    const isEven = evenOdd(num);
    console.log(`Number ${num} is ${isEven}`);
  }
}
// function isEven(number) {
//   if (typeof number !== "number" || isNaN(number)) {
//     throw new Error("Input must be a number");
//   }
//   return number % 2 === 0;
// }
loops(array);
// function logEvenOdd(numbers) {
//   for (let num of numbers) {
//     console.log(`Number ${num} is ${isEven(num) ? "Even" : "Odd"}`);
//   }
// }
// logEvenOdd(array);
