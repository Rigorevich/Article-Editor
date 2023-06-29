import Container from '../../components/Container';
import ConfirmModal from '../../components/ConfirmModal';
import Article from '../../components/Article';
import styled from './Article.module.css';

import { useState } from 'react';
import { useGetArticleByIdQuery } from '../../hooks/useGetArticleById';
import { useDeleteArticleById } from '../../hooks/useDeleteArticleById';
import { useParams, useNavigate } from 'react-router-dom';

export default function ArticlePage() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading, error } = useGetArticleByIdQuery(id!);
  const { deleteArticle } = useDeleteArticleById();

  const navigate = useNavigate();

  const handleConfirm = () => {
    if (id) {
      deleteArticle(id);
      navigate('/');
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
        <Article article={data} handleDelete={() => setIsConfirmModalOpen(true)} />
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
