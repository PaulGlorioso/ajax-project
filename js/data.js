/* exported data */
var data = {
  entries: [],
  editing: null,
  nextTaskId: 1
};

var previousData = localStorage.getItem('task-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('task-storage', dataJSON);
});
