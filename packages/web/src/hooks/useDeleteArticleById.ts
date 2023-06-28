import { trpc } from '../trpc';
import { toatifyNotification } from '../utils/constants/toastify.constants';

export const useDeleteArticleById = () => {
  const mutation = trpc.article.deleteArticleById.useMutation();

  const deleteArticle = async (id: string) => {
    try {
      const result = await mutation.mutateAsync(id);
      toatifyNotification('success', 'Статья успешно удалена!');
      console.log('Статья успешна удалена:', result);
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
