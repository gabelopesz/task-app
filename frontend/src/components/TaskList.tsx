import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import '../index.css'; // Certifique-se de que o caminho está correto

interface Task {
  id: number;
  name: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (name: string) => {
    fetch('http://localhost:3001/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(newTask => setTasks([...tasks, newTask]));
  };

  const updateTask = (id: number, name: string) => {
    fetch(`http://localhost:3001/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
        setEditTaskId(null);
      });
  };

  const deleteTask = (id: number) => {
    fetch(`http://localhost:3001/api/tasks/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTasks(tasks.filter(task => task.id !== id)); // Atualiza a lista de tarefas
    });
  }; 

  return (
    <div className="container"> {/* Adicione a classe container */}
      <h2>Lista de Tarefas</h2>
      <TaskForm
        onSubmit={(name) => (editTaskId ? updateTask(editTaskId, name) : addTask(name))}
        existingName={editTaskId ? tasks.find(task => task.id === editTaskId)?.name : ''}
      />
      <div className="task-list"> {/* Novo div para envolver a lista */}
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={editTaskId === task.id ? 'editing' : ''}>
              <span className="task">{task.name}</span>
              <div>
                <button onClick={() => setEditTaskId(task.id)}>Editar</button>
                <button onClick={() => deleteTask(task.id)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
