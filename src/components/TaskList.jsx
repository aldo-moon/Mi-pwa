import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Cargar tareas del localStorage
    const savedTasks = localStorage.getItem('pwa-tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Tareas iniciales
      setTasks([
        { id: 1, text: 'Completar proyecto PWA', done: false, priority: 'high' },
        { id: 2, text: 'Documentar en README', done: false, priority: 'medium' },
        { id: 3, text: 'Probar modo offline', done: true, priority: 'high' },
        { id: 4, text: 'Agregar estilos CSS', done: true, priority: 'low' }
      ]);
    }
  }, []);

  useEffect(() => {
    // Guardar tareas en localStorage
    localStorage.setItem('pwa-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask, 
        done: false,
        priority: 'medium'
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

  const changePriority = (id, priority) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, priority } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.done;
    if (filter === 'completed') return task.done;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.done).length,
    completed: tasks.filter(t => t.done).length
  };

  return (
    <div className="task-list">
      <div className="section-header">
        <h2>✅ Gestor de Tareas</h2>
        <div className="task-stats">
          <span className="stat">Total: {stats.total}</span>
          <span className="stat">Activas: {stats.active}</span>
          <span className="stat">Completadas: {stats.completed}</span>
        </div>
      </div>
      
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          className="task-input"
        />
        <button type="submit" className="add-task-btn">
          ➕ Agregar
        </button>
      </form>

      <div className="task-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Activas
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completadas
        </button>
      </div>

      <div className="tasks-container">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <p>No hay tareas aquí</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="task-checkbox"
              />
              <span className="task-text">{task.text}</span>
              <div className="task-actions">
                <select 
                  value={task.priority}
                  onChange={(e) => changePriority(task.id, e.target.value)}
                  className={`priority-select priority-${task.priority}`}
                >
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                  aria-label="Eliminar tarea"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;