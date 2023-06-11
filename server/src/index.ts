import * as trpcExpress from "@trpc/server/adapters/express";
import appRouter from "./router";
import createContext from "./context";
import express from "express";
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export type AppRouter = typeof appRouter;
