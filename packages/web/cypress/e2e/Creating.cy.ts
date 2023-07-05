import { API_URL, APP_URL } from '../../src/utils/constants/urls.constants';
import { template } from '../../src/utils/constants/template.constants';
import { stringify } from 'querystring';

const API_POST = API_URL + '/article.createArticle?batch=1';

describe('Creating page', () => {
  beforeEach(() => {
    cy.visit(APP_URL + '/create-article');
  });

  it('Заполнение формы создания статьи', () => {
    const filledForm = { ...template, data: { ...template.data, title: 'Тестовая статья' } };
    cy.get('form textarea').clear();
    cy.get('form textarea').type(JSON.stringify(filledForm, null, 2), { parseSpecialCharSequences: false });

    cy.get('form textarea').should('have.value', JSON.stringify(filledForm, null, 2));
  });

  it('Проверка наличия формы и кнопки добавления статьи', () => {
    cy.get('form').should('exist');
    cy.get('form textarea').should('have.value', JSON.stringify(template, null, 2));
    cy.get('button').contains('Сохранить').should('exist');
  });

  it('Проверка создания статьи с дефолтной структурой', () => {
    cy.intercept('POST', API_POST).as('createArticle');
    cy.get('button').contains('Сохранить').click();
    cy.get('form textarea').should('have.value', JSON.stringify(template, null, 2));
    cy.wait('@createArticle').then((interception) => {
      const response = interception.response;
      expect(response.statusCode).to.equal(200);

      cy.visit(APP_URL + '/articles/' + response.body[0].result.data.id);

      cy.get('[data-test="article"]').should('exist');
    });
  });
});
