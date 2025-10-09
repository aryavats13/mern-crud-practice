const express = require('express');
const cors = require('cors');

const counterRouter = require('./counterRoutes');
const messageRouter = require('./messageRoutes');
const todosRouter = require('./todosRoutes');
const weatherRouter = require('./weatherRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/counter', counterRouter);
app.use('/message', messageRouter);
app.use('/todos', todosRouter);
app.use('/weather', weatherRouter); 

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
