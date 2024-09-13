document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const btnDeleteAllTasks = document.getElementById("btn-delete");
    const taskList = document.getElementById("task-list");
    const completedList = document.getElementById("completed-task-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const timestamp = new Date().getTime();
        const taskInput = document.getElementById("task-input");
        const dateInput = document.getElementById("date-input");
        const levelInput = document.getElementById("level-input");
        if (taskInput.value === "" || dateInput.value === "" || levelInput.value === "") {
            return;
        } 

        const taskList = document.getElementById("task-list");
        const task = document.createElement("li");
        task.innerHTML = 
        `<div id="${timestamp}">
            <p>${taskInput.value}</p>
            <p>${dateInput.value}</p>
            <p>Priority: ${levelInput.value}</p>
        </div>`;
        taskList.appendChild(task);
        form.reset();

        const checkbox = document.createElement("input");
        const taskDiv = document.getElementById(timestamp);
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskDiv.style.textDecoration = "line-through";
                completedList.appendChild(task);
            } else {
                taskDiv.style.textDecoration = "none";
                completedList.removeChild(task);
                taskList.appendChild(task);
            }
        })
        task.appendChild(checkbox); 
        
        const btnDeleteList = document.createElement("button");
        btnDeleteList.innerHTML = "Delete";
        btnDeleteList.setAttribute("id", "deleteList");
        btnDeleteList.addEventListener("click", () => {
            taskList.removeChild(task);
        });
        task.appendChild(btnDeleteList);

        btnDeleteList.addEventListener("click", () => {
            completedList.removeChild(task);
        });
    })
    
    btnDeleteAllTasks.addEventListener("click", () => {
        completedList.innerHTML = "";
        taskList.innerHTML = "";
    }); 
});