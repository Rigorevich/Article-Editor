import { router } from "./trpc";
import articleRouter from "./api/router";

const appRouter = router({
  article: articleRouter,
});

export default appRouter;
