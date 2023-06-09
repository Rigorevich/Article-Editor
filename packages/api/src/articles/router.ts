import { TRPCError } from '@trpc/server';
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { ArticleNode } from '../interfaces';
import { articleNodeSchema } from './schemas';
import { LRU } from '../lru-cache';

const cache = new LRU<ArticleNode>(100);
let articles: ArticleNode[] = [] as ArticleNode[];

export const articleRouter = router({
  getArticles: publicProcedure
    .input(
      z.object({
        page: z.number().positive(),
        pageSize: z.number().positive(),
      })
    )
    .query((opts) => {
      const { page, pageSize } = opts.input;
      const key = `${page}-${pageSize}`;

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      return {
        articles: articles.slice(startIndex, endIndex),
        totalItems: articles.length,
        totalPages: Math.ceil(articles.length / pageSize),
      };
    }),
  getArticleById: publicProcedure.input(z.string()).query((req) => {
    const { input } = req;

    const cachedData = cache.get(input);
    if (cachedData) {
      return cachedData;
    }

    const article = articles.find((article) => article.id === input);
    if (!article) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `Article with ID ${input} not found`,
      });
    }

    cache.set(input, article);

    return article;
  }),
  createArticle: publicProcedure.input(z.string()).mutation((req) => {
    const { input } = req;
    const parsedInput = JSON.parse(input);

    const validationResult = articleNodeSchema.safeParse(parsedInput);

    if (!validationResult.success) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `Invalid input data`,
      });
    }

    const newArticle = articleNodeSchema.parse(parsedInput) as ArticleNode;

    articles.push(newArticle);
    cache.set(newArticle.id, newArticle);

    return newArticle;
  }),
  deleteArticleById: publicProcedure.input(z.string()).mutation((req) => {
    const { input } = req;

    const index = articles.findIndex((article) => article.id === input);

    if (index === -1) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `Article with ID ${input} not found`,
      });
    }

    articles = articles.filter((_, i) => i !== index);
    cache.delete(input);
    console.log(cache);

    return articles;
  }),
});
