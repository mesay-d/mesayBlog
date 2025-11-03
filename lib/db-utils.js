import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function getLatestMessages(limit = 10) {
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db();
    const docs = await db.collection('messages')
      .find()
      .sort({ _id: -1 })
      .limit(limit)
      .toArray();

    return docs.map((d) => ({
      id: d._id.toString(),
      name: d.name,
      email: d.email,
      message: d.message
    }));
    } catch {
      throw new Error('Could not load messages.');
  } finally {
    if (client) {
      client.close();
    }
  }
}

export async function getMessageStats(months = 4) {
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection('messages');

    const start = new Date();
    start.setMonth(start.getMonth() - months);

    const stats = await collection.aggregate([
      {
        $match: {
          $expr: { $gt: [ { $toDate: '$_id' }, start ] }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: { $toDate: '$_id' } } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]).toArray();

    // Fill missing dates
    const result = [];
    const map = new Map(stats.map((s) => [s._id, s.count]));
    const cur = new Date(start);
    const today = new Date();
    while (cur <= today) {
      const dateStr = cur.toISOString().split('T')[0];
      result.push({ date: dateStr, count: map.get(dateStr) || 0 });
      cur.setDate(cur.getDate() + 1);
    }

    return result;
  } catch {
    throw new Error('Could not load stats.');
  } finally {
    if (client) client.close();
  }
}