"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const router_1 = __importDefault(require("./articles/router"));
const appRouter = (0, trpc_1.router)({
    article: router_1.default,
});
exports.default = appRouter;
