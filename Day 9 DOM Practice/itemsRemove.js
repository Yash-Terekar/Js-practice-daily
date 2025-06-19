// 3. Remove Items from List
// Next to every list item, show a ❌ button
// When clicked, it removes that list item using .remove().

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const content = input.value;
  const span = document.createElement("sapn");
  const btn = document.createElement("button");

  if (content !== "") {
    span.textContent = content;
    btn.textContent = "❌";

    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);

    btn.addEventListener("click", () => {
      li.remove();
    });
    input.value = "";
    input.focus();
  } else {
    alert("Please Provide Some Items");
  }
});
