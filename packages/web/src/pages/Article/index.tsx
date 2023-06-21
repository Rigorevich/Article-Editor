import { useState } from "react";
import Container from "../../components/Container";
import Article from "../../components/Article";
import styled from "./Article.module.css";

import { trpc } from "../../trpc";
import { useParams, useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal";

export default function ArticlePage() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading, error } = trpc.article.getArticleById.useQuery(
    id || ""
  );

  const deleteArticle = trpc.article.deleteArticleById.useMutation();
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (id) {
      deleteArticle.mutate(id);
      navigate("/");
    }
    setIsConfirmModalOpen(false);
  };

  if (error) {
    return <p className={styled.error__message}>{error.message}</p>;
  }

  return (
    <Container>
      {isLoading ? (
        <div className={styled.loading}>Загрузка...</div>
      ) : (
        <Article
          article={data}
          handleDelete={() => setIsConfirmModalOpen(true)}
        />
      )}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        message="Удалить статью?"
        onConfirm={handleConfirm}
        onCancel={() => setIsConfirmModalOpen(false)}
      />
    </Container>
  );
}
