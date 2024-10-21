const tasks = [];

const taskForm = document.getElementById("taskForm");

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const priority = document.getElementById('task-priority').value;
    const status = document.querySelector('input[name="task-status"]:checked').value;

    const task = {
        title: title,
        priority: priority,
        status: status
    };

    tasks.push(task);
    showTasks();
    taskForm.reset();
});

function showTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks [i];

        const li = document.createElement('li');
        li.textContent = task.title + " - " + task.priority + " - " + task.status + " ";

        if (task.status === "completed") {
            li.className = "completed";
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "btn btn-danger btn-sm";
        removeButton.onclick = function() {
            tasks.splice(i, 1);
            showTasks();
        };

        const completeButton = document.createElement('button');
        completeButton.textContent = "Mark as Complete";
        completeButton.className = "btn btn-success btn-sm";
        completeButton.onclick = function() {
            task.status = "completed"; 
            showTasks();
        };

        li.appendChild(removeButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);
    }
}

