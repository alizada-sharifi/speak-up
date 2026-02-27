import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { MongoClient } from 'mongodb';

let authInstance: ReturnType<typeof betterAuth> | null = null;

async function createAuth() {
  if (!authInstance) {
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();

    authInstance = betterAuth({
      database: mongodbAdapter(client.db()),
      emailAndPassword: { enabled: true },
    });
  }
  return authInstance;
}

export { createAuth };
