import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { AppRouter } from "../../server/src";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "https://article-editor-2cuh0q69o-rigorevich.vercel.app/trpc",
    }),
  ],
});
