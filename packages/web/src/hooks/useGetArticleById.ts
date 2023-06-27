import { trpc } from '../trpc';

export const useGetArticleByIdQuery = (id: string) => {
  return trpc.article.getArticleById.useQuery(id);
};
