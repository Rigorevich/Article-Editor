import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { AppRouter } from "@monorepo/api/src";
import { url } from "./constants";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url,
    }),
  ],
});
