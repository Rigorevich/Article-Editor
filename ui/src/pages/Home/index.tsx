import Container from "../../components/Container";
import Article from "../../components/Article";
import styled from "./Home.module.css";
import data from "../../data.json";

import { ArticleNode } from "../../interfaces/Article";

export default function Home() {
  const articles: ArticleNode[] = data as ArticleNode[];

  return (
    <Container className={styled.container}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </Container>
  );
}
