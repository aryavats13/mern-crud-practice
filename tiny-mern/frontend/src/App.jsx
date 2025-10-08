import './App.css';
import Message from './Message.jsx';
import Counter from './Counter.jsx';
import Todo from './Todo.jsx';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Mini Projects</h1>
      <Message />
      <Counter />
      <Todo />
    </div>
  );
}

export default App;