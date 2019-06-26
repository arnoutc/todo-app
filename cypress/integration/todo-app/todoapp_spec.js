/// <reference types="Cypress" />

describe('my first test', function(){
  it('visit the todo-app', function(){

    cy.visit('http://localhost:8000');

    let el = cy.get('#new-todo');

    el.should('have.text','');
    el.should('have.attr','placeholder','What needs to be done?');

    let prio = cy.get('header button.priority-btn');
    prio.trigger('mouseover').should('be.visible');

    prio.trigger('click');
    el.should('have.class', 'priority');

  });
});