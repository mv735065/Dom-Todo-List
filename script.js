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
    
    allTasks.push(task);
    createUI();
    event.target.value = "";
  }
}

function createUI() {
    list.innerText='';
    allTasks.forEach((task)=>{
        let name=task.name;
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
        span.addEventListener('click',(eve)=>{
            removeTaskFromData(name);
            li.remove();
        })
    })
  
}

function removeTaskFromData(name) {
  let index = allTasks.findIndex((task) => task.name === name);
  if (index !== -1) {
    allTasks.splice(index, 1);
  }
}
