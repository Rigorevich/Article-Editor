"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("../trpc");
const db_1 = require("./db");
const server_1 = require("@trpc/server");
const schemas_1 = require("./schemas");
const articleRouter = (0, trpc_1.router)({
    getArticles: trpc_1.publicProcedure.query(() => {
        return db_1.articles;
    }),
    getArticleById: trpc_1.publicProcedure
        .input((val) => {
        if (typeof val === "string")
            return val;
        throw new server_1.TRPCError({
            code: "BAD_REQUEST",
            message: `Invalid input: ${typeof val}`,
        });
    })
        .query((req) => {
        const { input } = req;
        const article = db_1.articles.find((article) => article.id === input);
        if (!article) {
            throw new server_1.TRPCError({
                code: "NOT_FOUND",
                message: `article with ID ${input} not found`,
            });
        }
        return article;
    }),
    createArticle: trpc_1.publicProcedure.input(schemas_1.articleNodeSchema).mutation((req) => {
        const { input } = req;
        const article = input;
        db_1.articles.push(article);
        return article;
    }),
    deleteArticleById: trpc_1.publicProcedure
        .input((val) => {
        if (typeof val === "string")
            return val;
        throw new server_1.TRPCError({
            code: "BAD_REQUEST",
            message: `Invalid input: ${typeof val}`,
        });
    })
        .mutation((req) => {
        const { input } = req;
        const index = db_1.articles.findIndex((article) => article.id === input);
        if (index === -1) {
            throw new server_1.TRPCError({
                code: "NOT_FOUND",
                message: `Article with ID ${input} not found`,
            });
        }
        const deletedArticle = db_1.articles.splice(index, 1)[0];
        return deletedArticle;
    }),
});
exports.default = articleRouter;
