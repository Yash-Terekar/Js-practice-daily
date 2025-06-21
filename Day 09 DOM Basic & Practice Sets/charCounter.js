// 5. Input Character Counter
// A textarea + live character counter
// As the user types, show the number of characters typed.

const input = document.querySelector("input");

input.addEventListener("keypress", () => {
  const h2 = document.querySelector("h2");
  const text = input.value;
  const count = text.length + 1;
  h2.textContent = count;
});
