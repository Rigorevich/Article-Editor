import Container from "../../components/Container";
import Article from "../../components/Article";
import styled from "./Article.module.css";

import { trpc } from "../../trpc";
import { useParams, useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = trpc.article.getArticleById.useQuery(id!);
  const deleteArticle = trpc.article.deleteArticleById.useMutation();

  const handleDelete = () => {
    const confirm = window.confirm("Вы действительно хотите удалить статью?");
    if (confirm && id) {
      deleteArticle.mutate(id);
      navigate("/");
    }
  };

  if (error) {
    return <p className={styled.error__message}>{error.message}</p>;
  }

  return (
    <Container>
      {isLoading ? (
        <div className={styled.loading}>Загрузка...</div>
      ) : (
        <Article article={data} handleDelete={handleDelete} />
      )}
    </Container>
  );
}
