import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { ArticleNode } from "../interfaces";
import { articleNodeSchema } from "./schemas";

export let articles: ArticleNode[] = [] as ArticleNode[];

const articleRouter = router({
  getArticles: publicProcedure.query(() => {
    return articles;
  }),
  getArticleById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === "string") return val;

      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Invalid input: ${typeof val}`,
      });
    })
    .query((req) => {
      const { input } = req;

      const article = articles.find((article) => article.id === input);

      if (!article) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Article with ID ${input} not found`,
        });
      }

      return article;
    }),
  createArticle: publicProcedure.input(z.string()).mutation((req) => {
    const { input } = req;
    const parsedInput = JSON.parse(input);

    const validationResult = articleNodeSchema.safeParse(parsedInput);

    if (!validationResult.success) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Invalid input data`,
      });
    }

    const newArticle = articleNodeSchema.parse(parsedInput);
    const article: ArticleNode = newArticle as ArticleNode;
    articles.push(article);

    return article;
  }),
  deleteArticleById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === "string") return val;

      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Invalid input: ${typeof val}`,
      });
    })
    .mutation(({ input }) => {
      const index = articles.findIndex((article) => article.id === input);

      if (index === -1) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Article with ID ${input} not found`,
        });
      }

      articles = articles.filter((_, i) => i !== index);

      return articles;
    }),
});

export default articleRouter;
