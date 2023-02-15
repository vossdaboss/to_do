const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');
const deleteButton = document.querySelector('#delete-button');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = input.value;
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText;
  taskList.appendChild(taskItem);
  input.value = '';
});

taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

deleteButton.addEventListener('click', function() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let task of completedTasks) {
    task.remove();
  }
});
