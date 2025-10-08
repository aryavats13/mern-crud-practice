import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Add a new todo
  const handleAdd = () => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      task: text,
      done: false
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle done/undone
  const toggleDone = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
  };

  return (
    <>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Submit</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => toggleDone(todo.id)}>
              {todo.done ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
