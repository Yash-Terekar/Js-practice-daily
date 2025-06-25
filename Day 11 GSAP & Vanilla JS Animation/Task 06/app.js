const btn = document.querySelector(".hover-btn");

btn.addEventListener("mouseover", () => {
  gsap.to(btn, {
    background: "green",
    scale: 1.2,
    duration: 1,
    borderRadius: 20,
  });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    scale: 1,
    background: "#be8dc0",
    duration: 1,
    borderRadius: 0,
  });
});
