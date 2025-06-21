const button = document.querySelector("button");

let colors = ["red", "blue", "green", "purple", "cyan"];
let index = 0;
button.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index];
  index++;

  if (index >= colors.length) {
    index = 0;
  }
});
