let counter = 5;

const interval = setInterval(() => {
  console.log(counter);
  counter--;

  if (counter < 0) {
    clearInterval(interval);
  }
}, 1000);

setTimeout(() => {
  console.log(`Boom!`);
}, 7000);
