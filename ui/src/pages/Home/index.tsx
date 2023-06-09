import Container from "../../components/Container";
import Article from "../../components/Article";
import styled from "./Home.module.css";

import { trpc } from "../../trpc";
import { ArticleNode } from "../../../../shared/interfaces";

export default function Home() {
  const { data, isLoading } = trpc.article.getArticles.useQuery() as {
    data: ArticleNode[];
    isLoading: boolean;
  };

  return (
    <Container className={styled.container}>
      {isLoading ? (
        <div className={styled.loading}>Загрузка...</div>
      ) : (
        (data ?? []).map((article) => (
          <Article key={article.id} article={article} />
        ))
      )}
    </Container>
  );
}
