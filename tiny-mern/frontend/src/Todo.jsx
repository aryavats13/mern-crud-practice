import { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  const baseURL = "http://localhost:5000/todos";

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${baseURL}/`);
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
      setMsg("Error fetching todos");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!text.trim()) return;
    try {
      const res = await axios.post(`${baseURL}/add`, { text });
      setTodos(res.data.todos);
      setText("");
    } catch (err) {
      console.log(err);
      setMsg("Error adding todo");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.post(`${baseURL}/delete`, { id });
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
      setMsg("Error deleting todo");
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await axios.post(`${baseURL}/toggle`, { id });
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
      setMsg("Error toggling todo");
    }
  };

return (
  <div style={{ marginBottom: "40px", padding: "20px", border: "2px solid #ccc" }}>
    <h2>Todo App</h2>

    {/* Error or info message */}
    {msg && <h4 style={{ color: "red" }}>{msg}</h4>}

    {/* Input and Add button */}
    <div style={{ marginBottom: "20px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>

    {/* Todo list */}
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          {todo.task}{" "}
          <button onClick={() => handleToggle(todo.id)}>
            {todo.done ? "Undo" : "Done"}
          </button>{" "}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

};


export default Todo;