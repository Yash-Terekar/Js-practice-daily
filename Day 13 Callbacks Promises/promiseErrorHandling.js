function promiseErrorHandling() {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    const isNetworkGood = randomValue > 0.5;
    if (isNetworkGood) {
      const good = `Network Value: ${randomValue}`;
      console.log(good);
      resolve("Network is Good ");
    } else {
      const good = `Network Value: ${randomValue}`;
      console.log(good);
      reject("Network Error!");
    }
  });
}
promiseErrorHandling()
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err}`));
