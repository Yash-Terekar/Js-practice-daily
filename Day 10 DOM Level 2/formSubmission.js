// 8. Form Submission
// Build a form with name + email
// On submit, prevent page reload and show the entered data below the form

const input1 = document.querySelector("input");
const input2 = document.querySelector(".mail");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", (event) => {
  const name = input1.value;
  const email = input2.value;
  event.preventDefault();

  if (name !== "" && email !== "") {
    h1.textContent = `Name: ${name} : Email: ${email}`;

    input1.value = "";
    input2.value = "";
  } else {
    alert("Please enter your name and email");
  }
});
