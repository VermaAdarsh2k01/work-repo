// import { z } from "zod";

// import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { AppRouter } from "../root";

// export const dummyRouter = createTRPCRouter({
//     hello: publicProcedure.query(() => {
//         return "Hello Bob"
//       }),
// });

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const dummyRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.text}` };
    }),
});

export type AppRouter = typeof dummyRouter;