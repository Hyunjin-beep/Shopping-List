const input = document.querySelector(".inputForItems");
const inputForm = document.querySelector(".items");
const ul = document.querySelector(".ulItem");
const plusBtn = document.querySelector(".plus");

function handleDeleteClick(event) {
  const parentLi = event.target.parentElement;
  parentLi.remove();
}

function handleSubmit(event) {
  event.preventDefault();
  const enteredItem = input.value;
  if (enteredItem === "") {
    alert("Enter your item");
  } else {
    displayItem(enteredItem);
    input.value = "";
  }
}

function displayItem(enteredItem) {
  const li = document.createElement("li");
  li.classList.add("liItem");
  const span = document.createElement("span");
  span.innerText = enteredItem;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "✖";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", (event) => {
    handleDeleteClick(event);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}

function init() {
  displayItem();
  inputForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  plusBtn.addEventListener("click", (event) => {
    handleSubmit(event);
  });
}

init();
