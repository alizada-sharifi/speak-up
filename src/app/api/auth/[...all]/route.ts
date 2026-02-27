import { createAuth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

export const GET = async (req: Request) => {
  const auth = await createAuth();
  return toNextJsHandler(auth).GET(req);
};

export const POST = async (req: Request) => {
  const auth = await createAuth();
  return toNextJsHandler(auth).POST(req);
};
