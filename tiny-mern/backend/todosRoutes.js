const express = require('express');
const router = express.Router();

let todos = [];

router.get('/', (req, res) => {
  res.json({ todos });
});

router.post('/add', (req, res) => {
  let newData = req.body.text;
  if (!newData) return res.status(400).json({ error: "Text required" });
  
  const newTodo = {
    id: Date.now(),
    task: newData,
    done: false
  };
  
  todos.push(newTodo);
  res.json({ todos });
});

router.post('/delete', (req, res) => {
  let id = req.body.id;
  if (!id) return res.status(400).json({ error: "ID required" });
  
  todos = todos.filter(todo => todo.id !== Number(id));
  res.json({ todos });
});

router.post('/toggle', (req, res) => {
  let id = req.body.id;
  
  todos = todos.map(todo => {
    if (todo.id === Number(id)) {
      return { ...todo, done: !todo.done };
    } else {
      return todo;
    }
  });
  
  res.json({ todos });
});

module.exports = router;