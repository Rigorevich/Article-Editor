import { articleRouter } from '../router';
import { TRPCError } from '@trpc/server';
import { ArticleNode } from '../../interfaces';
import express from 'express';

const template = {
  type: 'article',
  data: {
    title: 'Статья 1',
  },
  nodes: [
    {
      type: 'heading',
      data: {
        level: 1,
      },
      nodes: [
        {
          type: 'text',
          data: {
            text: 'Какой-то заголовок',
          },
        },
      ],
    },
    {
      type: 'paragraph',
      nodes: [
        {
          type: 'image',
          data: {
            alignment: 'left',
            src: 'https://shapka-youtube.ru/wp-content/uploads/2022/11/ava-s-nadpisyu-abonent-nedostupen.jpg',
            caption: 'Абонент не доступен',
          },
        },
        {
          type: 'text',
          data: {
            text: 'Здесь описание к ',
          },
        },
        {
          type: 'text',
          data: {
            text: 'картинке ',
            marks: ['bold', 'italic'],
          },
        },
        {
          type: 'text',
          data: {
            text: 'и тут смешная картинка.',
          },
        },
      ],
    },
    {
      type: 'code',
      data: {
        language: 'C++',
        code: '#include<iostream>\nusing namespace std;\n\nint main()\n{\nint a = 5, b = 10, temp;\n}',
      },
    },
    {
      type: 'checkbox',
      data: {
        checkboxName: 'Лучшие качества C++ разработчика',
        options: [
          {
            option: 'Лидерство',
            checked: true,
          },
          {
            option: 'Храбрость',
            checked: false,
          },
          {
            option: 'Отвага',
            checked: false,
          },
        ],
      },
    },
    {
      type: 'table',
      data: {
        tableName: 'Таблица с ФИО',
        rows: [
          {
            cols: [
              {
                value: 'Имя',
              },
              {
                value: 'Фамилия',
              },
              {
                value: 'Отчество',
              },
            ],
          },
          {
            cols: [
              {
                value: 'Ригоревич',
              },
              {
                value: 'Илья',
              },
              {
                value: 'Александрович',
              },
            ],
          },
        ],
      },
    },
  ],
};

describe('DeleteArticleById, CreateArticle', () => {
  it('Should create an article', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    const createdArticle = await caller.createArticle(JSON.stringify(template));
    const allAticles = (await caller.getArticles()) as ArticleNode[];
    const findedArticle = allAticles.find(({ id }) => id === createdArticle.id);

    expect(findedArticle).toBeDefined();
    expect(findedArticle).toStrictEqual(createdArticle);
  });

  it('Should delete an article', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    const createdArticle = await caller.createArticle(JSON.stringify(template));
    const deletedArticle = await caller.deleteArticleById(createdArticle.id);
    const findedArticle = deletedArticle.find(({ id }) => id === createdArticle.id);

    expect(findedArticle).toBeUndefined();
  });

  it('Should throw an error for deleting, when the article does not exist', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    try {
      await caller.deleteArticleById('abc');
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(TRPCError);

      const trpcError = error as TRPCError;
      expect(trpcError.code).toBe('NOT_FOUND');
    }
  });
});

describe('GetArticleById, GetArticles, Pagination', () => {
  let createdArticle: ArticleNode;

  beforeEach(async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    createdArticle = await caller.createArticle(JSON.stringify(template));
  });

  afterEach(async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    await caller.deleteArticleById(createdArticle.id);
  });

  it('Should get article by id if it exists', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    const article = await caller.getArticleById(createdArticle.id);

    expect(article).toBeDefined();
    expect(article).toBe(createdArticle);
  });

  it('Should throw an error when the article does not exist', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    try {
      await caller.getArticleById('abc');
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(TRPCError);

      const trpcError = error as TRPCError;
      expect(trpcError.code).toBe('NOT_FOUND');
    }
  });

  it('Should return all articles', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });

    const allArticles = (await caller.getArticles()) as ArticleNode[];

    expect(allArticles).toBeDefined();
    expect(Array.isArray(allArticles)).toBe(true);
  });

  it('Pagination should be correct', async () => {
    const caller = articleRouter.createCaller({
      req: express.request,
      res: express.response,
    });
    const options = { page: 1, pageSize: 3 };

    const { totalItems, totalPages, articles } = (await caller.getArticles(options)) as {
      totalItems: number;
      totalPages: number;
      articles: ArticleNode[];
    };
    const allArticles = (await caller.getArticles()) as ArticleNode[];

    expect(articles).toBeDefined();
    expect(totalPages).toBeDefined();
    expect(totalItems).toBeDefined();
    expect(allArticles).toBeDefined();

    expect(totalItems).toBe(allArticles.length);
  });
});
