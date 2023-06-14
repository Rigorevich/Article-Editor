import Container from "../../components/Container";
import Article from "../../components/Article";
import styled from "./Home.module.css";

import { trpc } from "../../trpc";

export default function Home() {
  const { data, isLoading, error } = trpc.article.getArticles.useQuery(
    undefined,
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
    }
  );

  if (error) {
    return (
      <div className={styled.error__message}>Произошла ошибка при запросе!</div>
    );
  }

  return (
    <Container className={styled.container}>
      {isLoading ? (
        <div className={styled.loading}>Загрузка...</div>
      ) : data.length ? (
        data.map((article) => <Article key={article.id} article={article} />)
      ) : (
        <span className={styled.notFound}>Нет статей</span>
      )}
    </Container>
  );
}
