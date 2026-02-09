import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("❌ Please add MONGODB_URI in Vercel Environment Variables");
}

const uri = process.env.MONGODB_URI;

const options = {
  maxPoolSize: 5, // ✅ prevents Atlas overload
};

let client: MongoClient;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise;

export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB || "newaviksir");
}

export default clientPromise;
