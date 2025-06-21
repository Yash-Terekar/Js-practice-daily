// 7. Toggle Light/Dark Theme
// A toggle switch or button
// When clicked, it adds/removes a dark-mode class to <body>.

const button = document.querySelector("button");
const body = document.body;
const lightMode = "Light Mode";

button.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  button.classList.toggle("light-theme");
  if (button.textContent === "Dark Mode") {
    button.textContent = lightMode;
  } else {
    button.textContent = "Dark Mode";
  }
});
