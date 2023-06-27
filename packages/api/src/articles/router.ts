import { TRPCError } from '@trpc/server';
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { ArticleNode } from '../interfaces';
import { articleNodeSchema } from './schemas';
import NodeCache from 'node-cache';

export let articles: ArticleNode[] = [] as ArticleNode[];
const cache = new NodeCache({
  stdTTL: 60 * 60 * 24 * 7,
});

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
      const cacheKey = `articles:${page}:${pageSize}`;

      const cachedResult = cache.get(cacheKey);
      if (cachedResult) {
        return cachedResult;
      }

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const result = {
        articles: articles.slice(startIndex, endIndex),
        totalItems: articles.length,
        totalPages: Math.ceil(articles.length / pageSize),
      };

      cache.set(cacheKey, result);

      return result;
    }),

  getArticleById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;

      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `Invalid input: ${typeof val}`,
      });
    })
    .query((req) => {
      const { input } = req;
      const cacheKey = `article:${input}`;

      const cachedResult = cache.get(cacheKey);
      if (cachedResult) {
        return cachedResult;
      }

      const article = articles.find((article) => article.id === input);

      if (!article) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `Article with ID ${input} not found`,
        });
      }

      cache.set(cacheKey, article);

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

    const newArticle = articleNodeSchema.parse(parsedInput);
    const article: ArticleNode = newArticle as ArticleNode;
    articles.push(article);

    cache.del('articles');

    return article;
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

    cache.del(`article:${input}`);
    cache.del('articles');

    return articles;
  }),
});
