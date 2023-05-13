const input = document.querySelector(".add-todo-input");
const addTodo = document.querySelector(".add-todo");
const div = document.querySelector(".todo-start");
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  let save = input.value;
  if (save == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill Out Something Dude!",
    });
  } else {
    createElement(save);
  }
  input.value = "";
});

div.addEventListener("click", (e) => {
  //edit button

  // console.log(e.target);
  if (e.target.classList.contains("edit")) {
    e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display =
      "none";
    e.target.parentNode.previousSibling.previousSibling.childNodes[1].style.display =
      "none";
    e.target.parentNode.previousSibling.previousSibling.childNodes[3].style.display =
      "block";
    e.target.style.display = "none";
    e.target.nextSibling.nextSibling.style.display = "block";
    let localSave =
      e.target.parentNode.previousSibling.previousSibling.childNodes[1]
        .innerHTML;
    e.target.parentNode.previousSibling.previousSibling.childNodes[3].value =
      localSave;
  } else if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display =
      "none";
    e.target.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].style.display =
      "none";
    e.target.parentNode.parentNode.previousSibling.previousSibling.childNodes[3].style.display =
      "block";
    e.target.parentNode.style.display = "none";
    e.target.parentNode.nextSibling.nextSibling.style.display = "block";
    let localSave =
      e.target.parentNode.parentNode.previousSibling.previousSibling
        .childNodes[1].innerHTML;
    e.target.parentNode.parentNode.previousSibling.previousSibling.childNodes[3].value =
      localSave;
  }

  //thumb button
  else if (e.target.classList.contains("okay")) {
    if (
      e.target.parentNode.parentNode.childNodes[1].previousElementSibling
        .childNodes[3].value == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill Out Something Dude!",
      });
    } else {
      e.target.style.display = "none";
      e.target.previousSibling.previousSibling.style.display = "flex";
      e.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display =
        "flex";
      e.target.parentNode.parentNode.childNodes[1].previousSibling.childNodes[1].innerHTML =
        e.target.parentNode.parentNode.childNodes[1].previousElementSibling.childNodes[3].value;
      e.target.parentNode.parentNode.childNodes[1].previousElementSibling.childNodes[3].style.display =
        "none";
      e.target.parentNode.parentNode.childNodes[1].previousSibling.childNodes[1].style.display =
        "flex";
    }
  } else if (e.target.classList.contains("fa-thumbs-up")) {
    if (
      e.target.parentNode.parentNode.previousSibling.previousElementSibling
        .childNodes[3].value == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill Out Something Dude!",
      });
    } else {
      e.target.parentNode.parentNode.previousSibling.previousElementSibling.childNodes[3].style.display =
        "none";
      e.target.parentNode.parentNode.previousSibling.previousElementSibling.childNodes[1].style.display =
        "flex";
      e.target.parentNode.style.display = "none";
      e.target.parentNode.previousSibling.previousSibling.style.display =
        "flex";
      e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.style.display =
        "flex";
      e.target.parentNode.parentNode.previousSibling.previousElementSibling.childNodes[1].innerHTML =
        e.target.parentNode.parentNode.previousSibling.previousElementSibling.childNodes[3].value;
    }
  } else if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentNode.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("done")) {
    e.target.parentNode.previousSibling.previousSibling.childNodes[1].style.textDecoration =
      "line-through red";
    e.target.previousSibling.previousSibling.style.display = "block";
    e.target.style.display = "none";
    e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.display="none";
  } else if (e.target.classList.contains("fa-square-check")) {
    e.target.parentNode.parentNode.previousSibling.previousSibling.childNodes[1].style.textDecoration =
      "line-through red";
    e.target.parentNode.previousSibling.previousSibling.style.display = "block";
    e.target.parentNode.style.display = "none";
    e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.style.display="none";

  }
});

const createElement = (message) => {
  let newElement = document.createElement("div");
  newElement.classList.add("item");
  newElement.classList.add("item-special");
  newElement.innerHTML = `<div class="left">
   <h2 class="first-todo todo-toggle">${message}</h2>
   <input type="text" class="input-toggle" />
</div>
  <div class="right">
  <div class="edit common"><i class="fa-solid fa-pen-to-square"></i></div>
  <div class="okay common"><i class="fa-solid fa-thumbs-up"></i></div>
  <div class="delete common"><i class="fa-solid fa-trash"></i></div>
  <div class="done common"><i class="fa-solid fa-square-check"></i></div>
       
  </div>`;
  let target = document.querySelector(".todo-start");
  target.append(newElement);
  console.log(target);
};
