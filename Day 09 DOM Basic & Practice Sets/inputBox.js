// 2. Add Items to a List
// One input box + “Add” button
// When user types and clicks "Add", the item appears in a list below.

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const content = input.value;
  const li = document.createElement("li");

  if (content !== "") {
    li.textContent = content;
    ul.appendChild(li);

    input.value = "";
    input.focus();
  } else {
    alert("Please Provide Some Content");
  }
});
