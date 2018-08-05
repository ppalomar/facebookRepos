/// <reference types="Cypress" />

context('App', () => {
    it('Check when the app loads the detail is empty showing message.', () => {
      cy.visit('http://localhost:3000');

      cy.get('.repo-detail__empty').should('have.length', 1);
      cy.get('.repo-detail__container').should('have.length', 0);
    })

    it('Check when we click in an element in the list it shows detail page.', () => {
      cy.visit('http://localhost:3000');
      cy.get('.repo-name').first().click();
      cy.url().should('not.eq',`http://localhost:3000`);
      cy.get('.repo-detail__container').should('have.length', 1);
    })

    it('Check when we visit a repo url it shows detail page.', () => {
      cy.visit('http://localhost:3000/react');
      cy.get('.repo-detail__container').should('have.length', 1);
    })
  })
  