import { APP_URL } from '../../src/utils/constants/urls.constants';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit(APP_URL);
  });

  it('Шапка сайта', () => {
    cy.get('[data-test="header"]').should('exist');
    cy.contains('Главная').should('exist');
    cy.contains('Создать статью').should('exist');
  });

  it('Навигация по клику на кнопки', () => {
    cy.get('[data-test="create-link"]').click();
    cy.url().should('eq', APP_URL + '/create-article');
    cy.get('[data-test="home-link"]').click();
    cy.url().should('eq', APP_URL);
  });
});
