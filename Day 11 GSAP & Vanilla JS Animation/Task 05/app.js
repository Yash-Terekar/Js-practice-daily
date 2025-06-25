window.onload = function () {
  gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    repeat: -1,
    // yoyo: true,
    borderRadius: 80,
  });
};
