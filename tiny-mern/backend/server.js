const express = require('express');
const cors = require('cors');
const counterRouter = require('./counterRoutes');  // ← Important: correct path
const messageRouter = require('./messageRoutes');  // ← Important: correct path;
const todosRouter=require('./todosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Mount routers
app.use('/counter', counterRouter);
app.use('/message', messageRouter);
app.use('/todos', todosRouter);


app.listen(5000, () => console.log('✅ Server running on port 5000'));