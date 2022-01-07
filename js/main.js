var taskItem = document.querySelector('.task-text');
document.addEventListener('submit', function (event) {
  event.preventDefault();
  var form = document.querySelector('#form');
  var values = {};
  values.task = taskItem.value;
  if (data.editing !== null) {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].taskId === data.editing.taskId) {
        data.entries[i].task = taskItem.value;
        var update = createTask(data.entries[i]);
        var replace = document.getElementById(data.editing.taskId);
        replace.replaceWith(update);
      }
    }
  } else {
    values.taskId = data.nextTaskId;
    data.nextTaskId++;
    data.entries.unshift(values);
    var taskList = document.querySelector('#task-list');
    var create = createTask(values);
    taskList.append(create);
  }
  taskForm.className = 'add-form h';
  var noTasks = document.querySelector('.no-tasks');
  noTasks.className = 'no-tasks h';
  taskSection.className = 'list-section';
  form.reset();
  data.editing = null;
});
var addBtn = document.querySelector('.add-button');
var counter1 = 1;
var taskForm = document.querySelector('.add-form');
var taskSection = document.querySelector('.list-section');

function newTaskForm(event) {
  if (counter1 % 2) {
    taskForm.className = 'add-form';
    taskSection.className = 'list-section-2c';
    counter1 += 2;
  } else {
    taskForm.className = 'add-form h';
    taskSection.className = 'list-section';
  }
}
addBtn.addEventListener('click', newTaskForm);

if (data.entries.length > 0) {
  var noTasks = document.querySelector('.no-tasks');
  noTasks.className = 'no-tasks h';
  var tasks = document.querySelector('.tasks.h');
  tasks.className = 'tasks';
}

window.addEventListener('DOMContentLoaded', function (event) {
  var taskList = document.querySelector('#task-list');
  for (var i = 0; i < data.entries.length; i++) {
    var create = createTask(data.entries[i]);
    taskList.appendChild(create);
  }
});

function createTask(values) {
  var $task = document.createElement('li');
  $task.setAttribute('id', values.taskId);

  var $tasktext = document.createElement('div');
  $tasktext.setAttribute('class', 'li-text');
  $tasktext.textContent = values.task;
  var $circle = document.createElement('i');
  $circle.setAttribute('class', 'fas fa-circle');
  $tasktext.prepend($circle);

  var $taskSel = document.createElement('div');
  $taskSel.setAttribute('class', 'li-sel');
  var $check = document.createElement('input');
  $check.setAttribute('type', 'checkbox');
  var $editI = document.createElement('i');
  $editI.setAttribute('class', 'fas fa-pen');
  $editI.setAttribute('data-task-id', values.taskId);
  $taskSel.appendChild($check);
  $taskSel.appendChild($editI);

  $task.appendChild($tasktext);
  $task.appendChild($taskSel);
  return $task;
}
