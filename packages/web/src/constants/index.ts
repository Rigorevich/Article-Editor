//"https://article-editor-api.vercel.app/trpc"
import { toast } from 'react-toastify';

export const PAGE_SIZE = 3;

export const toatifyNotification = (type: 'success' | 'error', message: string) => {
  toast[type](message, {
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const url = 'https://article-editor-api.vercel.app/trpc';

export const template = {
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
