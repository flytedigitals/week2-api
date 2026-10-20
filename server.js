const express = require('express');
const app = express();

app.use(express.json());

// GET/
app.get('/', (req, res) => {
  res.send('My Week 2 API!!');
});

// POST /user
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  res.send(`Hello, ${name}!`);
});

// GET /user/:id
app.get('/user/:id', (req, res) => {
  res.send(`User ${req.params.id} profile`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`RUNNING ON http://localhost:${PORT}`);
});