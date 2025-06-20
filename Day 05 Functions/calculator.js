function calculator(num1, num2, operation) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Invalid inputs please provide valid numbers");
  }
  switch (operation) {
    case "mul":
      return num1 * num2;
    case "div":
      if (num1 === 0 || num2 === 0) {
        console.log("Division not possible in 0 so provide valid inputs");
      } else {
        return num1 / num2;
      }
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    default:
      console.log("Please provide valid numbers");
  }
}

let multi = calculator(12, 3, "mul");
console.log(multi);
let div = calculator(12, 0, "div");
console.log(div);
let add = calculator(12, 4, "add");
console.log(add);
let sub = calculator(12, 4, "sub");
console.log(sub);
