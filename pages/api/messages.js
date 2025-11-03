import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { page = '1', limit = '10' } = req.query;
  const pageNum = Math.max(1, parseInt(Array.isArray(page) ? page[0] : page, 10) || 1);
  const limitNum = Math.min(100, Math.max(1, parseInt(Array.isArray(limit) ? limit[0] : limit, 10) || 10));

  // Build connection string from env (same pattern as pages/api/contact.js)
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  let client;
  try {
    client = await MongoClient.connect(connectionString);
  } catch {
    res.status(500).json({ message: 'Could not connect to database.' });
    return;
  }

  try {
    const db = client.db();
    const collection = db.collection('messages');

    const total = await collection.countDocuments();

    const messages = await collection
      .find()
      .sort({ _id: -1 }) // newest first (ObjectId contains timestamp)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .toArray();

    // Map _id to id string for convenience
    const result = messages.map((m) => ({ id: m._id.toString(), email: m.email, name: m.name, message: m.message }));

    res.status(200).json({ messages: result, total, page: pageNum, limit: limitNum });
  } catch {
    res.status(500).json({ message: 'Fetching messages failed.' });
  } finally {
    if (client) client.close();
  }
}
