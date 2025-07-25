import { useState } from 'react';
import './index.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="container">
      <h1>todos</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>

      <>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>
            📭 No hay tareas, ¡añade una para comenzar!
          </p>
        ) : (
          <>
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className={todo.completed ? 'done' : ''}>
                  <span onClick={() => toggleComplete(index)}>{todo.text}</span>
                  <button onClick={() => deleteTask(index)}>❌</button>
                </li>
              ))}
            </ul>

            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              🕐 {todos.filter((t) => !t.completed).length} tarea(s) pendientes
            </p>
          </>
        )}
      </>
    </div>
  );
}

export default App;