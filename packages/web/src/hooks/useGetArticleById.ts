import { useEffect } from 'react';
import { trpc } from '../trpc';

export const useGetArticleByIdQuery = (id: string = '') => {
  const query = trpc.article.getArticleById.useQuery(id);

  useEffect(() => {
    query.refetch();
  }, [query, id]);

  return query;
};
