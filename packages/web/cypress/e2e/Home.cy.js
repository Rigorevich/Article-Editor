import { url as URL } from '../../src/utils/constants/urls.constants';

const APP_URL = 'https://article-editor-hgu607l1y-rigorevich.vercel.app/';
const API_GET = URL + 'article.getArticles?batch=1&input=%7B%220%22%3A%7B%22page%22%3A1%2C%22pageSize%22%3A3%7D%7D';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  });

  it('Отображение загрузки во время получения статей', () => {
    cy.intercept('GET', API_GET).as('getArticles');

    cy.contains('Загрузка...').should('be.visible');
    cy.wait('@getArticles');
  });

  it('Отображает "Нет статей" при пустом массиве статей', () => {
    cy.intercept('GET', API_GET).as('getArticles');
    cy.wait('@getArticles').then((interception) => {
      const response = interception.response.body[0].result.data.articles;

      if (response && Array.isArray(response) && response.length === 0) {
        cy.contains('Нет статей').should('be.visible');
      } else {
        cy.contains('Нет статей').should('not.exist');
      }
    });
  });

  it('Отображение пагинации', () => {
    cy.intercept('GET', API_GET).as('getArticles');
    cy.wait('@getArticles').then((interception) => {
      const response = interception.response.body[0].result.data;

      if (response.totalPages > 1) {
        cy.get("[data-test='pagination']").should('exist');
      } else {
        cy.get("[data-test='pagination']").should('not.exist');
      }
    });
  });

  // it('Отображение статей', () => {
  //   cy.intercept('GET', API_GET).as('getArticles');
  //   cy.wait('@getArticles').then((interception) => {
  //     const response = interception.response.body[0].result.data;
  //
  //     if (response) {
  //       cy.get('[data-testid=article]').should('have.length', response.articles.length);
  //     }
  //   });
  // });
});
