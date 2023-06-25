import { router } from './trpc';
import { articleRouter } from './articles/router';

const appRouter = router({
  article: articleRouter,
});

export default appRouter;
