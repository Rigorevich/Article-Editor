import React from "react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image from "../Image";
import Code from "../Code";
import CheckboxList from "../Checkbox";
import Table from "../Table";
import styled from "./Article.module.css";

import { Article as IArticle } from "../../interfaces/Article";

type ArticleProps = {
  data: IArticle;
};

const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <div className={styled.article}>
      {data.map((element, index) => {
        switch (element.type) {
          case "heading":
            return <Heading key={element.type + index} {...element} />;
          case "paragraph":
            return <Paragraph key={element.type + index} {...element} />;
          case "image":
            return <Image key={element.type + index} {...element} />;
          case "code":
            return <Code key={element.type + index} {...element} />;
          case "checkbox":
            return <CheckboxList key={element.type + index} {...element} />;
          case "table":
            return <Table key={element.type + index} {...element} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Article;
