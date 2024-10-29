document.addEventListener("DOMContentLoaded", ()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(storedTasks){
        storedTasks.forEach((task)=> tasks.push(task));
        updateTaskList();
        updateStats();
    }
})
let tasks = [];
const saveTask = ()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
        updateStats();
        saveTask();
    }
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
    updateStats();
    saveTask();
    
};

const editTask = (index) => {
    const taskInput = document.getElementById("taskInput"); // Correctly refer to taskInput
    taskInput.value = tasks[index].text;

    // Temporarily delete the task for editing
    tasks.splice(index, 1);
    updateTaskList();
    updateStats();
    saveTask();
};
const updateStats = ()=>{
    const completeTasks = tasks.filter(task=> task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completeTasks/totalTasks)*100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`;
}

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateStats();
    saveTask();
};

const updateTaskList = () => {
    const taskList = document.getElementById("task-list"); // Use ID correctly
    taskList.innerHTML = ""; // Clear the current list
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="taskItem">
                <div class="task ${task.completed ? "completed" : ""}">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <img src="edit.png" onclick="editTask(${index})" alt="Edit"/>
                    <img src="bin.png" onclick="deleteTask(${index})" alt="Delete"/>
                </div>
            </div>
        `;

        const checkbox = listItem.querySelector(".checkbox"); // Select checkbox correctly
        checkbox.addEventListener("change", () => toggleTaskComplete(index)); // Attach event listener
        taskList.appendChild(listItem); // Use appendChild for clarity
    });
};

// Handle form submission
document.getElementById('taskForm').addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    addTask(); // Call addTask on submit
});
