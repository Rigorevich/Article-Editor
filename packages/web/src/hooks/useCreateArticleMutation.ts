import { trpc } from '../trpc';
import { toatifyNotification } from '../utils/constants/toastify.constants';

export const useCreateArticleMutation = () => {
  const mutation = trpc.article.createArticle.useMutation();

  const createArticle = async (articleData: string) => {
    try {
      const result = await mutation.mutateAsync(articleData);
      toatifyNotification('success', 'Статья создана! Подробности в консоле!');
      console.log('Статья создана:', result);
    } catch (error) {
      toatifyNotification('error', 'Ошибка! Подробности в консоле!');
      console.error('Ошибка при создании статьи:', error);
    }
  };

  return {
    ...mutation,
    createArticle,
  };
};
