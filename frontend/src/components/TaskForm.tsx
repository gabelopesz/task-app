import React, { useState } from 'react';

interface TaskFormProps {
  onSubmit: (name: string) => void;
  existingName?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, existingName = '' }) => {
  const [taskName, setTaskName] = useState(existingName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskName"  // Adicionando o atributo name
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nome da tarefa"
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TaskForm;
