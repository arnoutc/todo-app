/// <reference types="Cypress" />

describe('my first test', function(){
  it('visit the todo-app', function(){
    
    cy.visit('http://localhost:8000');

    expect(true).to.equal(true);
  });
});