const button = document.querySelector("button");
// const box = document.querySelector(".box");

button.addEventListener("click", () => {
  gsap.to(".box", {
    duration: 2,
    scale: 2,
    repeat: -1,
    yoyo: true,
    rotate: 360,
    borderRadius: 10,
  });
});
