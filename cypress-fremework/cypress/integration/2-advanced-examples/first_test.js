it('login test', function () {
    cy.visit('https://folio-snapshot.dev.folio.org/');
    cy.get('input[name="username"]').type('ann_username');
    cy.get('input[name="password"]').type('ann_password');
    cy.get('button[type="submit"]').click();
    cy.get('li').should('have.text', 'This FOLIO account cannot be located. Please contact your FOLIO systems administrator.');
})