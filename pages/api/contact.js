import { MongoClient } from 'mongodb';
// mongodb+srv://mesayerbeto2:<db_password>@cluster0.78neqdm.mongodb.net/
async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

     const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
  res.status(500).json({ message: 'Could not connect to database.' });
}


    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
