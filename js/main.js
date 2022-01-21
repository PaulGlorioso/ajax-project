const taskItem = document.querySelector('.task-text');
document.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = document.querySelector('#form');
  const values = {};
  values.task = taskItem.value;
  if (data.editing !== null) {
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].taskId === data.editing.taskId) {
        data.entries[i].task = taskItem.value;
        const update = createTask(data.entries[i]);
        const replace = document.getElementById(data.editing.taskId);
        replace.replaceWith(update);
      }
    }
  } else {
    values.taskId = data.nextTaskId;
    data.nextTaskId++;
    data.entries.unshift(values);
    const taskList = document.querySelector('#task-list');
    const create = createTask(values);
    taskList.prepend(create);
  }
  taskForm.className = 'add-form h';
  const noTasks = document.querySelector('.no-tasks');
  noTasks.className = 'no-tasks h';
  taskSection.className = 'list-section';
  addBtnDiv.className = 'add-btn';
  form.reset();
  data.editing = null;
});

const addBtn = document.querySelector('.add-button');
let counter1 = 1;
const taskForm = document.querySelector('.add-form');
const taskSection = document.querySelector('.list-section');
const addBtnDiv = document.querySelector('.add-btn');

function newTaskForm(event) {
  if (counter1 % 2) {
    taskForm.className = 'add-form';
    taskSection.className = 'list-section-2c';
    addBtnDiv.className = 'add-btn h';
    counter1 += 2;
  } else {
    taskForm.className = 'add-form h';
    taskSection.className = 'list-section';
    addBtnDiv.className = 'add-btn';
  }
}
addBtn.addEventListener('click', newTaskForm);

if (data.entries.length > 0) {
  const noTasks = document.querySelector('.no-tasks');
  noTasks.className = 'no-tasks h';
  const tasks = document.querySelector('.tasks.h');
  tasks.className = 'tasks';
}

window.addEventListener('DOMContentLoaded', function (event) {
  const taskList = document.querySelector('#task-list');
  for (let i = 0; i < data.entries.length; i++) {
    const create = createTask(data.entries[i]);
    taskList.appendChild(create);
  }
});

function createTask(values) {
  const $task = document.createElement('li');
  $task.setAttribute('id', values.taskId);

  const $tasktext = document.createElement('div');
  $tasktext.setAttribute('class', 'li-text');
  $tasktext.textContent = values.task;
  const $circle = document.createElement('i');
  $circle.setAttribute('class', 'fas fa-circle');
  $tasktext.prepend($circle);

  const $taskSel = document.createElement('div');
  $taskSel.setAttribute('class', 'li-sel');
  const $check = document.createElement('input');
  $check.setAttribute('type', 'checkbox');
  const $editI = document.createElement('i');
  $editI.setAttribute('class', 'fas fa-pen');
  $editI.setAttribute('data-task-id', values.taskId);
  $taskSel.appendChild($check);
  $taskSel.appendChild($editI);

  $task.appendChild($tasktext);
  $task.appendChild($taskSel);
  return $task;
}

const $taskList = document.querySelector('#task-list');
$taskList.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    const editBtn = event.target;
    newTaskForm();
    document.querySelector('.task-ev').textContent = 'Edit Task';
    const taskNum = editBtn.getAttribute('data-task-id');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].taskId === parseInt(taskNum)) {
        data.editing = data.entries[i];
      }
    }
    taskItem.value = data.editing.task;
    const deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('href', '#');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    const $btnSel = document.querySelector('.sub');
    $btnSel.setAttribute('class', 'select');
    $btnSel.append(deleteBtn);
    $btnSel.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        for (let i = 0; i < data.entries.length; i++) {
          if (data.editing.taskId === data.entries[i].taskId) {
            const item = document.getElementById(data.editing.taskId);
            item.remove();
            data.entries.splice(i, 1);
            const form = document.querySelector('#form');
            document.querySelector('.task-ev').textContent = 'New Task';
            deleteBtn.remove();
            const $select = document.querySelector('.select');
            $select.setAttribute('class', 'sub');
            taskForm.className = 'add-form h';
            addBtnDiv.className = 'add-btn';
            document.querySelector('.task-ev').textContent = 'Add Task';
            document.querySelector('.list-section-2c').setAttribute('class', 'list-section');
            form.reset();
          }
          // const form = document.querySelector('#form');
          // document.querySelector('.task-ev').textContent = 'New Task';
          // deleteBtn.remove();
          // const $select = document.querySelector('.select');
          // $select.setAttribute('class', 'sub');
          // taskForm.className = 'add-form h';
          // document.querySelector('.list-section-2c').setAttribute('class', 'list-section');
          // form.reset();
          // data.editing = null;
        }
      }
    });
  }
  // var deleteBtn = document.createElement('a');
  // deleteBtn.setAttribute('href', '#');
  // deleteBtn.setAttribute('class', 'delete-btn');
  // deleteBtn.textContent = 'Delete';
  // var $btnSel = document.querySelector('.sub');
  // $btnSel.setAttribute('class', 'select');
  // $btnSel.append(deleteBtn);
});

const navI = document.querySelector('.close');
function showNav() {
  if (navI.className === 'close') {
    navI.className = 'open';
  } else {
    navI.className = 'close';
  }
}

navI.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    showNav();
  }
});
