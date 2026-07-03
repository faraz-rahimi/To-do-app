const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");
btn.addEventListener("click", () => {
  text = input.value;
  if (!text) return;
  const li = document.createElement("li");
  li.classList.add("todo-item");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  li.textContent = text;
  deleteBtn.textContent = "delete";
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});
