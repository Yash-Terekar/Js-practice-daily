function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        resolve("Data fetched successfully");
      } else {
        reject("Server error, please try again later");
      }
    }, 1500);
  });
}

fetchDataFromServer()
  .then((result) => {
    console.log(result);
    return fetchDataFromServer();
  })
  .then((result) => {
    console.log(result);
    return fetchDataFromServer();
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err}`));
