// 4. Change Text on Button Click
// Add a paragraph with some text
// Add a button that changes the paragraph text when clicked

const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const newP = "HuXn Webdev is a Goat";

  p.textContent = newP;
});
