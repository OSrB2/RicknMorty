const express = require('express');
const { MongoClient } = require('mongodb');

//const { v4: uuidv4 } = require('uuid');

const DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'ocean-jornadaFullstack-09-02-2023';

// anonymous function
// (async () => {})()

async function main() {
  // Database connection.
  console.log('Connecting with the database...');
  const client = await MongoClient.connect(DB_URL);
  const db = client.db(DB_NAME);
  const collection = db.collection('itens');
  console.log('Connected database!');

  const app = express();

  app.use(express.json());

  //const itens = ['Rick Sanchez', 'Morty Smith', 'Summer Smith'];

  app.get('/itens', async (req, res) => {
    const documents = await collection.find().toArray();
    res.send(documents);
  });

  app.get('/itens/:id', (req, res) => {
    const id = req.params.id;
    const item = itens[id - 1];
    res.send(item);
  });

  app.post('/create', (req, res) => {
    const { name } = req.body;

    itens.push({
      name,
    });
    return res.status(201).send();
  });

  app.listen(3000, () => console.log('Listening on port 3000'));
}

main();
