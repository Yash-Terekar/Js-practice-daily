function calculator(num1, num2, opration) {
  if (opration === "mul") {
    return num1 * num2;
  } else if (opration === "div") {
    return num1 / num2;
  } else if (opration === "add") {
    return num1 + num2;
  } else if (opration === "sub") {
    return num1 - num2;
  }
}

let multi = calculator(12, 3, "mul");
console.log(multi);
let add = calculator(12, 3, "add");
console.log(add);
let div = calculator(12, 3, "div");
console.log(div);
let sub = calculator(12, 3, "sub");
console.log(sub);
