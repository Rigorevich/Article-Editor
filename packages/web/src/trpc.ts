import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { AppRouter } from '@monorepo/api/src';
import { API_URL } from './utils/constants/urls.constants';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: API_URL,
    }),
  ],
});
