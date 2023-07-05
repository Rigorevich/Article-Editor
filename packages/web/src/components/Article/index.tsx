import styled from './Article.module.css';
import Button from '../Button';
import RenderNodes from '../RenderNodes';

import { Link, useLocation } from 'react-router-dom';
import { ArticleNode } from '@monorepo/api/src/interfaces';

type ArticleProps = {
  article: ArticleNode;
  handleDelete?: () => void;
};

const Article = ({ article, handleDelete }: ArticleProps) => {
  const { pathname } = useLocation();
  const { nodes, data } = article;

  return (
    <div className={styled.article} data-test="article">
      <h1 className={styled.article__title} data-test="article-title">
        {pathname === '/' ? (
          <Link to={`/articles/${article.id}`} data-test="article-link">
            {data.title}
          </Link>
        ) : (
          <>{data.title}</>
        )}
      </h1>
      <RenderNodes nodes={nodes} />
      {pathname !== '/' && (
        <Button secondary onClick={handleDelete}>
          Удалить
        </Button>
      )}
    </div>
  );
};

export default Article;
