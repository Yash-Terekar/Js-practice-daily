let count = 5;

const interval = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
  }
}, 1000);

setTimeout(() => {
  console.log("Boom!");
}, 7000);
