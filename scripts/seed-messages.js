const { MongoClient } = require('mongodb');

async function seed() {
  const user = process.env.MONGODB_USERNAME;
  const pass = process.env.MONGODB_PASSWORD;
  if (!user || !pass) {
    console.error('Please set MONGODB_USERNAME and MONGODB_PASSWORD environment variables.');
    process.exit(1);
  }

  const uri = `mongodb+srv://${user}:${pass}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=seed-script`;
  let client;

  try {
    client = await MongoClient.connect(uri);
    const db = client.db();
    const collection = db.collection('messages');

    const samples = Array.from({ length: 42 }).map((_, i) => ({
      name: `Test User ${i + 1}`,
      email: `test${i + 1}@example.com`,
      message: `This is sample message number ${i + 1}. Lorem ipsum dolor sit amet.`,
      createdAt: new Date(),
    }));

    const result = await collection.insertMany(samples);
    console.log('Inserted', result.insertedCount, 'sample messages.');
  } catch (err) {
    console.error('Error seeding messages:', err.message || err);
  } finally {
    if (client) await client.close();
  }
}

seed();
