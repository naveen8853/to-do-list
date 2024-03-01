const form = document.getElementById('task-form');
const newTask = document.getElementById('new-task');
const tasks = document.getElementById('tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!newTask.value) return;
  const li = document.createElement('li');
  li.innerHTML = `<span>${newTask.value}</span>`;
  li.appendChild(createRemoveTask());
  tasks.appendChild(li);
  newTask.value = '';
});

function createRemoveTask() {
  const removeTask = document.createElement('span');
  removeTask.className = 'remove-task';
  removeTask.textContent = 'Remove';
  removeTask.addEventListener('click', () => {
    removeTask.parentNode.remove();
  });
  return removeTask;
}