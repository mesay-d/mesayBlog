import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  let client;
  try {
    client = await MongoClient.connect(connectionString);
    const db = client.db();
    const collection = db.collection('messages');

    // Calculate date 4 months ago
    const fourMonthsAgo = new Date();
    fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

    // Get messages from last 4 months and group by date (use _id's timestamp)
    const stats = await collection.aggregate([
      {
        $match: {
          $expr: { $gt: [ { $toDate: '$_id' }, fourMonthsAgo ] }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: { $toDate: '$_id' } }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]).toArray();

    // Fill in missing dates with zero counts
    const result = [];
    const current = new Date(fourMonthsAgo);
    const today = new Date();
    const statsMap = new Map(stats.map(s => [s._id, s.count]));

    while (current <= today) {
      const dateStr = current.toISOString().split('T')[0];
      result.push({
        date: dateStr,
        count: statsMap.get(dateStr) || 0
      });
      current.setDate(current.getDate() + 1);
    }

    res.status(200).json({ stats: result });
  } catch (error) {
    console.error('Statistics error:', error);
    res.status(500).json({ message: 'Fetching statistics failed.' });
  } finally {
    if (client) client.close();
  }
}