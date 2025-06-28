function registerUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = "User Registered";
      console.log("Registoring User");
      resolve(output);
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = "Sending Email";
      console.log("Sending Email");
      resolve(output);
    }, 1000);
  });
}
function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = "Login User";
      console.log("Login User");
      resolve(output);
    }, 1500);
  });
}
function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = "Fetching User Data";
      console.log("Getting User Data");
      resolve(output);
    }, 1000);
  });
}

registerUser()
  .then(() => sendEmail())
  .then(() => loginUser())
  .then(() => getUserData())
  .then(() => console.log("All steps completed successfully!"))
  .catch((err) => console.log(err));
