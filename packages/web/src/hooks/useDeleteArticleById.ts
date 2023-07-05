import { trpc } from '../trpc';
import { toatifyNotification } from '../utils/constants/toastify.constants';
import { useNavigate } from 'react-router-dom';

export const useDeleteArticleById = () => {
  const mutation = trpc.article.deleteArticleById.useMutation();
  const navigate = useNavigate();

  const deleteArticle = async (id: string) => {
    try {
      const result = await mutation.mutateAsync(id);
      toatifyNotification('success', 'Статья успешно удалена!');
      console.log('Статья успешна удалена:', result);
      setTimeout(() => {
        navigate('/');
      }, 800);
    } catch (error) {
      toatifyNotification('error', 'Ошибка! Подробности в консоле!');
      console.error('Ошибка при удалении статьи', error);
    }
  };

  return {
    ...mutation,
    deleteArticle,
  };
};
