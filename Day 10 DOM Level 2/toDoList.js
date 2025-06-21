// 🔸 6. Create To-Do App
// Add Task input
// “Add Task” button
// Display added tasks in a list
// Each task has a “Done” & “Delete” button
//      “Done” adds a line-through style
//      “Delete” removes the task.

const input = document.querySelector(".input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const task = input.value;
  const done = document.createElement("button");
  done.textContent = "Done";
  const del = document.createElement("button");
  del.textContent = "Delete";

  if (task !== "") {
    li.textContent = task;
    li.appendChild(done);
    li.appendChild(del);
    ul.appendChild(li);

    done.addEventListener("click", () => {
      li.style.textDecoration = "underline";
      li.style.textDecorationColor = "green";
    });
    del.addEventListener("click", () => {
      li.remove();
    });

    input.value = "";
    input.focus();
  } else {
    alert("Please provide valid input");
  }
});
