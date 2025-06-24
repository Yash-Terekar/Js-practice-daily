const sub = document.querySelector(".sub");
const add = document.querySelector(".add");
const h1 = document.querySelector("h1");
let counter;
counter = parseInt(h1.textContent);
sub.addEventListener("click", () => {
  counter = counter - 1;
  h1.innerHTML = h1.textContent - 1;
});
add.addEventListener("click", () => {
  counter = counter + 1;
  h1.innerHTML = counter;
});
