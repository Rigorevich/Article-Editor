import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ArticleNode } from '@monorepo/api/src/interfaces';
import Article from './';

export default {
  title: 'Components/Article',
  component: Article,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

type ArticleProps = {
  article: ArticleNode;
  handleDelete?: (articleId: string) => void;
};

const Template: Story<ArticleProps> = ({ article, handleDelete }: ArticleProps) => <Article article={article} />;

export const First = Template.bind({});
First.args = {
  article: {
    id: 'a4a608f7-a9d7-4682-a6b2-5c2389b7a27f',
    type: 'article',
    data: {
      title: 'Путешествие в Италию',
    },
    nodes: [
      {
        id: 'b60d2f2d-93f3-4a6e-86fa-def7fff6e93f',
        type: 'heading',
        data: {
          level: 1,
        },
        nodes: [
          {
            id: '0c870247-3c06-4e29-8e17-de3325a08dfa',
            type: 'text',
            data: {
              text: 'Великолепные города Италии',
            },
          },
        ],
      },
      {
        id: '3191dae8-64d2-4fd7-a84f-4442bf100d57',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            id: 'd67dcb4e-95ce-4fde-897c-cb86a278a9c3',
            type: 'image',
            data: {
              alignment: 'right',
              src: 'https://i.pinimg.com/564x/49/a7/cf/49a7cf6949ae73ae19ef8313442c2a77.jpg',
              caption: 'Фото Рима',
            },
          },
          {
            id: 'd67dcb4e-95ce-4fde-897c-cb86a278a9c4',
            type: 'image',
            data: {
              alignment: 'right',
              src: 'https://i.pinimg.com/564x/49/a7/cf/49a7cf6949ae73ae19ef8313442c2a77.jpg',
              caption: 'Фото Рима',
            },
          },
          {
            id: 'a0f53c86-6351-4e35-ba70-0e5566b1483b',
            type: 'text',
            data: {
              text: 'Италия - это удивительная страна с богатой историей, прекрасной архитектурой и изысканной кухней. В этой статье мы рассмотрим несколько великолепных городов Италии, которые стоит посетить во время своего путешествия.',
            },
          },
          {
            id: '001ba275-be17-4029-a7e3-142b5b3c9353',
            type: 'text',
            data: {
              text: 'Первым городом, который мы рекомендуем посетить, является Рим. Здесь вы сможете увидеть такие достопримечательности, как Колизей, Пантеон, Собор Святого Петра и многое другое.',
            },
          },
          {
            id: '0a18f48d-1009-4f0f-966f-2ee29e6ae7fb',
            type: 'text',
            data: {
              text: 'Далее в нашем списке - Флоренция. Этот город славится своими музеями и художественными произведениями, такими как скульптуры Микеланджело и картины Боттичелли.',
            },
          },
        ],
      },
      {
        id: 'b60d2f2d-93f3-4a6e-86fa-def7fff6e93f',
        type: 'heading',
        data: {
          level: 3,
        },
        nodes: [
          {
            id: '0c870247-3c06-4e29-8e17-de3325a08dfa',
            type: 'text',
            data: {
              text: 'Настройка над заголовками, они могут быть разного ',
            },
          },
          {
            id: '0c870247-3c06-4e29-8e17-de3323a08dfa',
            type: 'text',
            data: {
              text: 'стиля ',
              marks: ['italic'],
            },
          },
          {
            id: '0c870247-3c06-4e39-8e17-de3324a08dfa',
            type: 'text',
            data: {
              text: 'и разного размера.',
            },
          },
        ],
      },
      {
        id: '3191dae8-64d2-4fd7-a84f-4442bf100d57',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            id: 'd67dcb4e-95ce-4fde-897c-cb86a278a9c3',
            type: 'image',
            data: {
              alignment: 'left',
              src: 'https://i.pinimg.com/564x/49/a7/cf/49a7cf6949ae73ae19ef8313442c2a77.jpg',
              caption: 'Фото Рима',
            },
          },
          {
            id: 'a0f53c86-6351-4e35-ba70-0e5566b1483b',
            type: 'text',
            data: {
              text: 'Италия - это удивительная страна с богатой историей, прекрасной архитектурой и изысканной кухней. В этой статье мы рассмотрим несколько великолепных городов Италии, которые стоит посетить во время своего путешествия.',
            },
          },
          {
            id: '001ba275-be17-4029-a7e3-142b5b3c9353',
            type: 'text',
            data: {
              text: 'Первым городом, который мы рекомендуем посетить, является Рим. Здесь вы сможете увидеть такие достопримечательности, как Колизей, Пантеон, Собор Святого Петра и многое другое.',
            },
          },
          {
            id: '0a18f48d-1009-4f0f-966f-2ee29e6ae7fb',
            type: 'text',
            data: {
              text: 'Далее в нашем списке - Флоренция. Этот город славится своими музеями и художественными произведениями, такими как скульптуры Микеланджело и картины Боттичелли.',
            },
          },
        ],
      },
      {
        id: 'ed83375c-dc71-4ef5-8feb-ed9bc9aeffc1',
        type: 'checkbox',
        data: {
          checkboxName: 'Интересные факты об Италии',
          options: [
            {
              id: '2ec83ad4-d1ac-4b62-b157-6c942f0d60c9',
              option: 'Италия является родиной пиццы',
              checked: true,
            },
            {
              id: 'd327dd61-a05d-4c78-b9ac-90e259a53d75',
              option: 'Колизей в Риме является одной из Новых семи чудес света',
              checked: true,
            },
            {
              id: 'a489378e-ff36-46f6-9198-b7612ffc80e6',
              option: 'В Ватикане находится самая маленькая страна в мире',
              checked: true,
            },
          ],
        },
      },
      {
        id: 'a36828aa-e53e-4383-9dcb-78fcd943a8f0',
        type: 'table',
        data: {
          tableName: 'Известные итальянские блюда',
          rows: [
            {
              id: '917a3047-1a3e-4a2a-bb0a-ff55318d9262',
              cols: [
                {
                  id: '6bdc6c2b-e25c-48a8-b391-87d8d549fc28',
                  value: 'Пицца',
                },
                {
                  id: '17e7b281-53fa-4e1f-884b-2a1fc2467bb9',
                  value: 'Паста',
                },
                {
                  id: '4571916d-05b0-4345-ac2f-1f1fa75ecd47',
                  value: 'Лазанья',
                },
              ],
            },
            {
              id: 'f327ab58-c3a7-43c8-a2cc-ed3a91b6e355',
              cols: [
                {
                  id: 'c25f3dcb-3b10-48cc-ad0a-83ebaef88b44',
                  value: 'Тирамису',
                },
                {
                  id: 'b25d9414-d981-41b1-a512-0eae02826fbf',
                  value: 'Гельато',
                },
                {
                  id: '2f183789-e980-4e1e-b62d-b6e83dfa72fb',
                  value: 'Эспрессо',
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
export const Second = Template.bind({});
Second.args = {
  article: {
    id: 'f131a3ab-d3cf-4237-84a4-42ee9d64a4c4',
    type: 'article',
    data: {
      title: 'Здоровое питание',
    },
    nodes: [
      {
        id: '3b20721b-8386-4eca-a7dc-2df859c84e46',
        type: 'heading',
        data: {
          level: 1,
        },
        nodes: [
          {
            id: '55abc97b-137c-462b-95b6-9d86b2e67a11',
            type: 'text',
            data: {
              text: 'Тут может быть несколько заголовков ',
            },
          },
          {
            id: '55abc97b-137c-462b-95b6-9d86b2e67a11',
            type: 'text',
            data: {
              text: 'и они могут быть разных стилей',
              marks: ['bold'],
            },
          },
        ],
      },
      {
        id: '9089c933-a5c4-4ac1-9c8a-12b2b84018bb',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            id: 'aa278368-13ca-4519-83d5-d7e54386e462',
            type: 'image',
            data: {
              src: 'https://i.pinimg.com/564x/91/4e/9a/914e9af3537adf4c586613a2dad424fb.jpg',
              caption: 'Изображение здоровой пищи',
            },
          },
          {
            id: 'b996def9-80f9-4d7d-af96-cdd89ddbd377',
            type: 'text',
            data: {
              text: 'Картинка может располагаться слева, справа или в центре как в данном случае, и к тому же, их может быть несколько в одной статье',
            },
          },
        ],
      },
      {
        id: '32f83cf4-0c76-4962-9ab8-2da20e5b0599',
        type: 'heading',
        data: {
          level: 2,
        },
        nodes: [
          {
            id: '24a959d7-d51a-4da0-80d9-c3bf405d34ac',
            type: 'text',
            data: {
              text: 'Преимущества здорового питания',
            },
          },
        ],
      },
      {
        id: 'cbc7445b-5f71-49c3-b83a-9a8c133edd0a',
        type: 'checkbox',
        data: {
          checkboxName: 'Чекбоксы могут иметь различные опции',
          options: [
            {
              id: '09e2983d-2d8f-48d7-804c-278f355844e1',
              option: 'Повышение энергии и жизненного тонуса',
              checked: true,
            },
            {
              id: 'b149bb59-648e-4d79-9b5b-5ea17e94adf2',
              option: 'Укрепление иммунной системы',
              checked: false,
            },
            {
              id: '250ad23e-fb91-4a3e-80d3-76937752f62c',
              option: 'Поддержание здорового веса',
              checked: true,
            },
            {
              id: 'e5250344-6cd6-4436-bc03-be88ac972b12',
              option: 'Снижение риска развития хронических заболеваний',
              checked: false,
            },
          ],
        },
      },
      {
        id: '624cf8e8-dd16-4c03-b4aa-9866c9a46817',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            id: '4258d735-d472-49a9-bc52-eb2d14784170',
            type: 'image',
            data: {
              src: 'https://i.pinimg.com/564x/61/eb/02/61eb02c6515dbe4a701570eeea9c5d1f.jpg',
              caption: 'Изображение блинчиков',
            },
          },
          {
            id: '723b3876-06ec-437f-9290-97d026aa0bc4',
            type: 'text',
            data: {
              text: 'Вот простой и вкусный рецепт здоровых блинчиков:',
            },
          },
        ],
      },
      {
        id: 'f9bcde2f-7472-49ca-bc3b-75ab4ec368ce',
        type: 'table',
        data: {
          tableName: 'Таблица точно также может иметь множество колонок',
          rows: [
            {
              id: 'aa2c6472-e6dd-41f8-98cc-2fa7359e9157',
              cols: [
                {
                  id: '0eca2c20-06ef-4f31-85fb-02a8ee00305d',
                  value: 'Ингредиенты',
                },
                {
                  id: 'd1847cdf-a37e-4342-8be5-3dd44a286ffc',
                  value: 'Количество',
                },
              ],
            },
            {
              id: '1676c796-3346-4dac-acc5-c0dec17bd345',
              cols: [
                {
                  id: 'a29a8fe2-a135-4e0c-bcc3-a41ec6aa3446',
                  value: 'Овсянка',
                },
                {
                  id: '0c6a4eb6-7def-4bb4-a2fe-1bb256bcb3bf',
                  value: '1 чашка',
                },
              ],
            },
            {
              id: '4db1c7a6-5961-422c-bf8f-a8444b3a2bbd',
              cols: [
                {
                  id: '5a8eac91-1d0d-4754-bbf4-2f3a9e241b1f',
                  value: 'Яйцо',
                },
                {
                  id: '93339ab0-d888-478e-8be8-2b752819eaad',
                  value: '1 шт.',
                },
              ],
            },
            {
              id: '6b0991b2-df1a-44af-9cb7-ec44c6fc43d2',
              cols: [
                {
                  id: '347b2a1e-f230-448e-8711-816a6f5e6226',
                  value: 'Молоко',
                },
                {
                  id: 'd61fa3c5-92a8-44a0-a172-26d9727c0a01',
                  value: '1/2 чашки',
                },
              ],
            },
            {
              id: 'fd8fb477-0e95-41b1-872c-2ffb23b16075',
              cols: [
                {
                  id: 'a99aeb58-0b5f-482d-8af6-341f2ffc1508',
                  value: 'Сода',
                },
                {
                  id: '3578d864-c0c5-4e09-9576-5abdac5eaa68',
                  value: '1 чайная ложка',
                },
              ],
            },
            {
              id: '25baf0af-3b4a-4604-8d5b-07341db855ea',
              cols: [
                {
                  id: 'ac32840b-1c77-44f4-9a44-fb47c614e9ea',
                  value: 'Соль',
                },
                {
                  id: '9a5762d4-d0e0-407b-bec0-760a896b67d2',
                  value: 'по вкусу',
                },
              ],
            },
          ],
        },
      },
    ],
  },
};

export const Third = Template.bind({});
Third.args = {
  article: {
    id: 'c7b358cb-0cab-4e58-8ef7-2fb76f8c61d9',
    type: 'article',
    data: {
      title: 'Здоровое питание: путь к здоровью и благополучию',
    },
    nodes: [
      {
        id: '94053eb8-e6e7-4ea5-b65a-55c7ec823483',
        type: 'heading',
        data: {
          level: 1,
        },
        nodes: [
          {
            id: '91d4f383-8725-4a0e-9f8d-6c5c2fd22c47',
            type: 'text',
            data: {
              text: 'Здоровое питание и его преимущества',
            },
          },
        ],
      },
      {
        id: '664032df-18ff-40e8-8d73-ac3171e2e60a',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            id: '52f837a8-58b2-4baa-9478-c50f3605378a',
            type: 'image',
            data: {
              alignment: 'right',
              src: 'https://i.pinimg.com/564x/25/d9/da/25d9daabdfc4cad9181bd5c68c4df73f.jpg',
              caption: 'Фото здоровой пищи',
            },
          },
          {
            id: 'bc2f7e3e-ea02-4a30-9325-f842495f0f01',
            type: 'text',
            data: {
              text: 'Здоровое питание играет ключевую роль в поддержании нашего здоровья и благополучия. Оно обеспечивает организм необходимыми питательными веществами, витаминами и минералами, которые поддерживают иммунную систему, обеспечивают энергию, способствуют здоровому обмену веществ и предотвращают развитие многих заболеваний. Правильное питание также способствует поддержанию здорового веса и повышению жизненного тонуса.',
            },
          },
        ],
      },
      {
        id: 'a1ee264a-b341-4d83-ae11-e11adaa65960',
        type: 'checkbox',
        data: {
          checkboxName: 'Преимущества здорового питания',
          options: [
            {
              id: '5e130d50-cabe-45ff-ac61-b89bfb806779',
              option: 'Повышение иммунитета',
              checked: true,
            },
            {
              id: '2fbbc5d4-3648-4b31-b6a0-f35b097398ac',
              option: 'Улучшение пищеварения',
              checked: true,
            },
            {
              id: '70454510-98e6-4b07-8c05-db79a793f2ff',
              option: 'Снижение риска сердечно-сосудистых заболеваний',
              checked: true,
            },
            {
              id: 'f9aaa9ac-4a80-41c6-acfb-dff5b892265f',
              option: 'Поддержание здорового веса',
              checked: true,
            },
          ],
        },
      },
      {
        id: 'd51b53ba-e5d8-48b8-9ad4-613ab8612e35',
        type: 'table',
        data: {
          tableName: 'Рецепт приготовления здоровых блинчиков',
          rows: [
            {
              id: '122c377a-d263-4142-87a2-86d93098fb39',
              cols: [
                {
                  id: '959762f9-5106-4b1d-bae5-4022fa0adf6b',
                  value: 'Ингредиенты',
                },
                {
                  id: 'a97db3f3-0aef-4ff4-9c6a-1029f3e8bf9c',
                  value: 'Количество',
                },
              ],
            },
            {
              id: '779d74d8-705d-41b6-a50f-95de52cefe4b',
              cols: [
                {
                  id: '3eaa8ce6-719e-4ef5-ab4e-362376835fef',
                  value: 'Мука из цельного зерна',
                },
                {
                  id: '5091812f-2032-4f83-9f50-867e35695c91',
                  value: '1½ стакана',
                },
              ],
            },
            {
              id: '43bc50fa-5665-406c-b092-b4d82487b948',
              cols: [
                {
                  id: '01d595c9-27c5-49c4-bb0c-c1871c8b5e45',
                  value: 'Кефир или йогурт',
                },
                {
                  id: '180aa797-f159-4c9f-8912-4764fc232439',
                  value: '1½ стакана',
                },
              ],
            },
            {
              id: '2c76f82a-d72a-4db9-b80d-3390496a8c06',
              cols: [
                {
                  id: '94a06e86-6151-42c6-8c93-9d0e07373e84',
                  value: 'Яйца',
                },
                {
                  id: '814d202d-d304-4576-a5f4-464391bb2d06',
                  value: '2 штуки',
                },
              ],
            },
            {
              id: '5ad3e3ed-0fb0-4410-8425-a9bd810db405',
              cols: [
                {
                  id: 'b71c79b7-c8de-4dfa-a335-87c8d34c808c',
                  value: 'Сода',
                },
                {
                  id: 'cf27cd38-ddb9-401b-9630-7f22a120180e',
                  value: '½ чайной ложки',
                },
              ],
            },
            {
              id: '5d743ab8-ffe5-43b6-b5c8-161e7e1be3d7',
              cols: [
                {
                  id: 'c4838c83-be33-4274-a04d-0349684596b2',
                  value: 'Мед или сироп',
                },
                {
                  id: 'a9f69f0e-c94b-44d2-91a2-add2206b1f31',
                  value: 'по вкусу',
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
