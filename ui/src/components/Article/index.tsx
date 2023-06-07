import React from "react";
import styled from "./Article.module.css";
import Button from "../Button";
import RenderNodes from "../RenderNodes";

import { ArticleNode } from "../../interfaces/Article";

type ArticleProps = {
  article: ArticleNode;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  const { nodes, data } = article;
  return (
    <div className={styled.article}>
      <h1 className={styled.article__title}>{data.title}</h1>
      <RenderNodes nodes={nodes} />
      <Button secondary>Save</Button>
    </div>
  );
};

export default Article;
