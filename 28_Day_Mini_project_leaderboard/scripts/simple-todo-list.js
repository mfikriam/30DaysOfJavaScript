const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

let tasks = [];

function addTask() {
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText !== '') {
    const newTask = {
      text: newTaskText,
      completed: false
    };
    tasks.push(newTask);
    renderTaskList();
    newTaskInput.value = '';
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTaskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleTaskCompletion(index));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

addTaskButton.addEventListener('click', addTask);
