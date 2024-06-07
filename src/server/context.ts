import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { auth } from '@clerk/nextjs/server';
 
export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
    const {userId , sessionId } = auth()
  return { 
        auth: 
        {
            userId,
            sessionId,
        } 
    }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;