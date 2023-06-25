import { ArticleNode } from '@monorepo/api/src/interfaces';
import styles from './ArticleList.module.css';
import Article from '../Article';

type ArticleListProps = {
  articles: ArticleNode[];
  totalItems: number;
  totalPages: number;
};

export default function ArticleList({ data }: { data: ArticleListProps }) {
  return (
    <div>
      {data && data.articles && data.articles.length && data.articles.length ? (
        data.articles.map((article) => <Article key={article.id} article={article} />)
      ) : (
        <div className={styles.notFound}>Нет статей</div>
      )}
    </div>
  );
}
