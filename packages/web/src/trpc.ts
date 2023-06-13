import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { AppRouter } from "@monorepo/api/src";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "https://article-editor-cw4zgnl7w-rigorevich.vercel.app/trpc",
    }),
  ],
});
