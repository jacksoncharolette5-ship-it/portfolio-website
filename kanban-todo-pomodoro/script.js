// Get HTML Elements
const todoList = document.getElementById('todo-list');
const inprogressList = document.getElementById('inprogress-list');
const doneList = document.getElementById('done-list');

const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');

const categorySelect = document.getElementById('category-select');
const courseSelect = document.getElementById('course-select');
const workspaceSelect = document.getElementById('workspace-select');

// Add Task Button
addTaskBtn.addEventListener('click', () => {

    const taskText = newTaskInput.value.trim();
    if (taskText === "") return;

    const category = categorySelect.value;
    const course = courseSelect.value;
    const workspace = workspaceSelect.value;

    const li = createTaskItem(taskText, category, course, workspace);

    todoList.appendChild(li);

    newTaskInput.value = "";

});

// Create Task Card
function createTaskItem(text, category, course, workspace) {

    const li = document.createElement("li");

    // Title
    const title = document.createElement("div");
    title.textContent = text;
    li.appendChild(title);

    // Category
    const categoryLabel = document.createElement("div");
    categoryLabel.textContent = "Category: " + category;
    li.appendChild(categoryLabel);

    // Course
    const courseLabel = document.createElement("div");
    courseLabel.textContent = "Course: " + course;
    li.appendChild(courseLabel);

    // Workspace
    const workspaceLabel = document.createElement("div");
    workspaceLabel.textContent = "Workspace: " + workspace;
    li.appendChild(workspaceLabel);

    // Start Button
    const startBtn = document.createElement("button");
    startBtn.textContent = "Start Task";

    startBtn.addEventListener("click", () => {
        inprogressList.appendChild(li);
    });

    li.appendChild(startBtn);

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", () => {
        doneList.appendChild(li);
    });

    li.appendChild(completeBtn);

    return li;
}