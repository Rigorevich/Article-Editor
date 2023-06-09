import { router, publicProcedure } from "../trpc";
import { articles } from "./db";
import { TRPCError } from "@trpc/server";
import { articleNodeSchema } from "./schemas";
import { ArticleNode } from "../../../shared/interfaces";

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
          message: `article with ID ${input} not found`,
        });
      }

      return article;
    }),
  createArticle: publicProcedure.input(articleNodeSchema).mutation((req) => {
    const { input } = req;

    const article: ArticleNode = input as ArticleNode;
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
    .mutation((req) => {
      const { input } = req;

      const index = articles.findIndex((article) => article.id === input);

      if (index === -1) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `article with ID ${input} not found`,
        });
      }

      const deletedArticle = articles.splice(index, 1)[0];
      return deletedArticle;
    }),
});

export default articleRouter;
