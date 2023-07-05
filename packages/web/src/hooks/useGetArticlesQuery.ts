import { trpc } from '../trpc';
import { useEffect } from 'react';

type PaginationOpt = { page: number; pageSize: number };

export const useGetArticlesQuery = (paginationOpt: PaginationOpt) => {
  const { page, pageSize } = paginationOpt;
  const query = trpc.article.getArticles.useQuery(
    { page, pageSize },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );

  useEffect(() => {
    query.refetch();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page, pageSize, query]);

  return query;
};
