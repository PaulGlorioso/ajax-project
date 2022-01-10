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
    taskList.prepend(create);
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

var $taskList = document.querySelector('#task-list');
$taskList.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    var editBtn = event.target;
    newTaskForm();
    document.querySelector('.task-ev').textContent = 'Edit Task';
    var taskNum = editBtn.getAttribute('data-task-id');
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].taskId === parseInt(taskNum)) {
        data.editing = data.entries[i];
      }
    }
    taskItem.value = data.editing.task;
    var deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('href', '#');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    var $btnSel = document.querySelector('.sub');
    $btnSel.setAttribute('class', 'select');
    $btnSel.append(deleteBtn);
    $btnSel.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        for (var i = 0; i < data.entries.length; i++) {
          if (data.editing.taskId === data.entries[i].taskId) {
            var item = document.getElementById(data.editing.taskId);
            item.remove();
            data.entries.splice(i, 1);
          }
          var form = document.querySelector('#form');
          document.querySelector('.task-ev').textContent = 'New Task';
          deleteBtn.remove();
          var $select = document.querySelector('.select');
          $select.setAttribute('class', 'sub');
          taskForm.className = 'add-form h';
          document.querySelector('.list-section-2c').setAttribute('class', 'list-section');
          form.reset();
          data.editing = null;
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

var navI = document.querySelector('.close');
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
