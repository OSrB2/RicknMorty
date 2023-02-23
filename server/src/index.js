require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

//const { v4: uuidv4 } = require('uuid');

const DB_URL = process.env.DB_CONNECTION;
const DB_NAME = process.env.DB_CLUSTER;

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

  app.use(cors());

  app.use(express.json());

  app.listen(3000, () => console.log('Listening on port 3000'));

  app.post('/create', async (req, res) => {
    const item = req.body;
    await collection.insertOne(item);

    return res.send(item);
  });

  app.get('/items', async (req, res) => {
    const documents = await collection.find().toArray();
    res.send(documents);
  });

  app.get('/items/:id', async (req, res) => {
    const id = req.params.id;
    const item = await collection.findOne({
      _id: new ObjectId(id),
    });
    res.send(item);
  });

  app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });

    res.send(body);
  });

  app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    await collection.deleteOne({
      _id: new ObjectId(id),
    });
    res.send('successfully deleted item');
  });
}

main();
