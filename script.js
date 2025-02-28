let list = document.querySelector(".list");

let text = document.querySelector("#text");

let allTasks = [];

text.addEventListener("keyup", storeTask);

function storeTask(event) {
  let value = event.target.value;
  if (event.key == "Enter" && value !== "") {
    let task = {
      name: value,
      isDone: false,
    };
    createUI(value);
    allTasks.push(task);
    event.target.value = "";
  }
}

list.addEventListener("click", (eve) => {
  let ele = eve.target;
  let parent = eve.target.parentElement;

  if (ele.tagName.toLowerCase() === "span") {
    let p = parent.querySelector("p");
    let name = p.innerText;
    removeTaskFromData(name);
    parent.remove();
  } 
});

function createUI(name) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "checkbox";
  let p = document.createElement("p");
  p.innerText = name.toString();
  let span = document.createElement("span");
  span.innerText = "X";
  li.append(input, p, span);
  li.style.display = "flex";
  list.append(li);
}

function removeTaskFromData(name) {
  let index = allTasks.findIndex((task) => task.name === name);
  if (index !== -1) {
    allTasks.splice(index, 1); // Removes the element at the specified index
  }
}
