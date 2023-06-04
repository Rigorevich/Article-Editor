import React from "react";
import Container from "../../components/Container";
import Article from "../../components/Article";
import styled from "./Home.module.css";
import data from "../../data.json";

import { Article as IArticle } from "../../interfaces/Article";

export default function Home() {
  const myData: IArticle[] = data as IArticle[];

  return (
    <Container className={styled.container}>
      {myData.map((article, index) => (
        <Article key={index} data={article} />
      ))}
    </Container>
  );
}
