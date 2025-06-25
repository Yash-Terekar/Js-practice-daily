const li = document.querySelectorAll("li");

gsap.from("li", {
  //   y: -300,
  //   opacity: 0,
  duration: 1,
  //   rotation: -360,
  repeat: -1,
  yoyo: true,
  scale: 1.2,
  stagger: 0.2,
});
