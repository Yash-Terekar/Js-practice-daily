// 7. Toggle Light/Dark Theme
// A toggle switch or button
// When clicked, it adds/removes a dark-mode class to <body>

const button = document.querySelector("button");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  button.classList.toggle("light");
});
