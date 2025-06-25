const tl = gsap.timeline();

tl.to(".box1", { scale: 1.2, repeat: -1, duration: 1, yoyo: true })
  .to(".box2", { scale: 1.2, repeat: -1, duration: 1, yoyo: true })
  .to(".box3", { scale: 1.2, repeat: -1, duration: 1, yoyo: true })
  .to(".box4", { scale: 1.2, repeat: -1, duration: 1, yoyo: true });
