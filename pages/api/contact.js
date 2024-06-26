//* API-route: /api/contact
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({
        message: 'Invalid input! Please try again.',
      });
      return;
    }

    //* Store input data in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    //! Note: these variables will be swopped out and hard-coded during the build-process
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({
        message: 'Database could not be connected to successfully!',
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        message: 'Message could not be stored successfully!',
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: 'Successfully stored message!',
      message: newMessage,
    });
  }
}

export default handler;
