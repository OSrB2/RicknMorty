const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const itens = ['Rick Sanchez', 'Morty Smith', 'Summer Smith'];

app.get('/itens', (req, res) => {
  res.send(itens);
});

app.get('/itens/:id', (req, res) => {
  const id = req.params.id;
  const item = itens[id - 1];
  res.status(20).json(item);
});

app.post('/create', (req, res) => {
  const { name } = req.body;

  itens.push({
    id: uuidv4(),
    name,
  });
  return res.status(201).send();
});

app.listen(3000, () => console.log('listening on port 3000'));
