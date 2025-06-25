let box = document.querySelector(".box");

let pos = 0;

let interval = setInterval(() => {
  if (pos >= 300) clearInterval(interval);
  else {
    pos++;
    box.style.transform = `translateY(-${pos}px)`;
    // box.style.backgroundColor = "Green";
  }
}, 10);
