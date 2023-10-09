describe('Auth page component', () => {
  it('Logins user', () => {
    cy.visit('http://localhost:4200/auth');

    cy.get('.email-input').type('admin@admin.com');
    cy.get('.password-input').type('Admin1234');
    cy.get('.login').click();
    cy.url().should('include', '/projects');
  });
  it('Does not login user if credentials dont exist', () => {
    cy.visit('http://localhost:4200/auth');

    cy.get('.email-input').type('admin@admin1.com');
    cy.get('.password-input').type('Admin12342');
    cy.get('.login').click();
    cy.url().should('include', '/auth');
  });
});
