import { API_URL, APP_URL } from '../../src/utils/constants/urls.constants';

const API_GET =
  API_URL + '/article.getArticles?batch=1&input=%7B%220%22%3A%7B%22page%22%3A1%2C%22pageSize%22%3A3%7D%7D';
let response;

describe('Article page', () => {
  beforeEach(() => {
    cy.visit(APP_URL);
    cy.intercept('GET', API_GET).as('getArticles');
    cy.wait('@getArticles').then((interception) => {
      response = interception.response.body[0].result.data;
    });
  });

  it('Правильный переход на страницу статьи', () => {
    if (response.articles.length > 0) {
      cy.get('[data-test="article-link"]').first().click();
      cy.url().should('eq', APP_URL + '/articles/' + response.articles[0].id);
    }
  });

  it('Отображение правильных элементов на странице статьи', () => {
    if (response.articles.length > 0) {
      for (let i = 0; i < response.articles.length; i++) {
        const article = response.articles[i];
        cy.visit(APP_URL + '/articles/' + article.id);

        cy.get('[data-test="article"]').should('exist');

        cy.get('[data-test="article-title"]').should('contain', article.data.title);

        for (let k = 0; k < article.nodes.length; k++) {
          const node = article.nodes[k];
          cy.get(`[data-test=${node.type}]`).should('exist');
          cy.get('button').should('contain', 'Удалить');
        }
      }
    }
  });

  it('Открытие модального окна', () => {
    if (response.articles.length > 0) {
      cy.get('[data-test="article-link"]').first().click();
      cy.get('button').click();
      cy.get('[data-test="confirm"]').should('exist');
      cy.get('[data-test="cancel"]').should('exist');
    }
  });

  it('Закрытие модального окна', () => {
    if (response.articles.length > 0) {
      cy.get('[data-test="article-link"]').first().click();
      cy.get('button').click();
      cy.get('[data-test="cancel"]').click();

      cy.get('[data-test="confirm"]').should('not.exist');
      cy.get('[data-test="cancel"]').should('not.exist');
    }
  });

  it('Удаление статьи', () => {
    if (response.articles.length > 0) {
      const id = response.articles[0].id;
      cy.get('[data-test="article-link"]').first().click();
      cy.get('button').click();
      cy.get('[data-test="confirm"]').click();

      cy.visit(`${APP_URL}/articles/${id}`);
      cy.get('[data-test="article"]').should('not.exist');
      cy.contains(`Article with ID ${id} not found`, { timeout: 10000 }).should('exist');
    }
  });
});
