const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
  list.innerHTML = savedTodos;
  attachDeleteEvents();
}

function saveTodos() {
  localStorage.setItem("todos", list.innerHTML);
}
function attachDeleteEvents() {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      saveTodos();
    });
  });
}
deleteAllBtn.addEventListener("click", () => {
  list.innerHTML = "";
  saveTodos();
});
btn.addEventListener("click", () => {
  const text = input.value;
  if (!text) return;
  const li = document.createElement("li");
  li.classList.add("todo-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTodos();
  });
  li.textContent = text;
  deleteBtn.textContent = "delete";
  li.appendChild(deleteBtn);
  saveTodos();
  li.prepend(checkbox);
  saveTodos();
  list.appendChild(li);
  saveTodos();
  input.value = "";
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});
