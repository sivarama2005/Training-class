const input = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("studentList");
const countSpan = document.getElementById("count");
const errorMsg = document.getElementById("error");

let count = 0;

// Add Student
addBtn.addEventListener("click", () => {

  if (input.value.trim() === "") {
    errorMsg.textContent = "Please enter student name!";
    errorMsg.style.color = "red";
    return;
  }

  errorMsg.textContent = "";

  const li = document.createElement("li");
  li.textContent = input.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "deleteBtn";

  li.appendChild(delBtn);
  list.appendChild(li);

  count++;
  countSpan.textContent = count;

  input.value = "";
});

// Mark Present or Delete (Event Delegation)
list.addEventListener("click", (e) => {

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("present");
  }

  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
    count--;
    countSpan.textContent = count;
  }

});
