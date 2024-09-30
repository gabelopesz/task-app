let tasks = [
  { id: 1, name: 'Estudar React' },
  { id: 2, name: 'Escrever artigo' },
];

function getAllTasks() {
  return tasks;
}

function addTask(name) {
  const newTask = { id: tasks.length + 1, name };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, name) {
  const task = tasks.find(t => t.id === parseInt(id));
  if (task) {
    task.name = name;
    return task;
  }
  return null;
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
  if (taskIndex > -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    return deletedTask[0];
  }
  return null;
}

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
};
