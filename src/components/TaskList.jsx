// src/components/TaskList.jsx
import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Completar proyecto PWA', done: false },
    { id: 2, text: 'Documentar en README', done: false },
    { id: 3, text: 'Probar offline', done: true }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask, 
        done: false 
      }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-list">
      <h2>✅ Mis Tareas</h2>
      
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>

      <div className="tasks">
        {tasks.map(task => (
          <div key={task.id} className={`task ${task.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;