import Container from '../../components/Container';
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';
import styled from './Home.module.css';

import { useState } from 'react';
import { PAGE_SIZE } from '../../utils/constants/template.constants';
import { useGetArticlesQuery } from '../../hooks/useGetArticlesQuery';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize] = useState(PAGE_SIZE);
  const { data, isLoading, error } = useGetArticlesQuery({ page: currentPage, pageSize: currentPageSize });

  if (error) {
    return <div className={styled.error__message}>Произошла ошибка при запросе!</div>;
  }

  return (
    <Container className={styled.container}>
      {isLoading ? <div className={styled.loading}>Загрузка...</div> : <ArticleList data={data} />}
      {data && data.totalPages > 1 && (
        <Pagination
          totalPages={data.totalPages}
          currentPage={currentPage}
          changePage={(page: number) => setCurrentPage(page)}
        />
      )}
    </Container>
  );
}
