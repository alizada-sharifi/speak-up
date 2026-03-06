import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import clientPromise from './db';

const client = await clientPromise;

console.log(process.env.MONGODB_DB_NAME);
export const auth = betterAuth({
  database: mongodbAdapter(client.db(process.env.MONGODB_DB_NAME)),
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    linkedin: {
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }
  },
});
