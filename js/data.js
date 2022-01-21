/* exported data */
let data = {
  entries: [],
  editing: null,
  nextTaskId: 1
};

const previousData = localStorage.getItem('task-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('task-storage', dataJSON);
});
