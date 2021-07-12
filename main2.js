const input = document.querySelector(".inputForItems");
const inputForm = document.querySelector(".items");
const ul = document.querySelector(".ulItem");
const plusBtn = document.querySelector(".plus");
let id = 0;

ul.addEventListener("click", (event) => {
  const btn = event.target;
  if (
    btn.nodeName === "BUTTON" &&
    btn.dataset.id === btn.parentElement.dataset.id
  ) {
    btn.parentElement.remove();
    // console.log(btn.parentElement.dataset.id);
  }
});

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
  li.setAttribute("data-id", id);
  li.innerHTML = `
    <span class="name">${enteredItem}</span>
    <button class="deltebtn" data-id="${id}">✖</button>`;
  id++;
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
