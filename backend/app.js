const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tasks = require('./tasks');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.get('/api/tasks', (req, res) => {
  res.json(tasks.getAllTasks());
});

app.post('/api/tasks', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Task name is required' });
  }
  const newTask = tasks.addTask(name);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedTask = tasks.updateTask(id, name);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const deletedTask = tasks.deleteTask(id);
  if (deletedTask) {
    res.json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
