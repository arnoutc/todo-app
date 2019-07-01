/// <reference types="Cypress" />

describe('my first test', function(){
  it('visit the todo-app', function(){

    cy.visit('http://localhost:8000');

    //set text
    let el = cy.get('#new-todo');

    el.should('have.attr','placeholder','What needs to be done?');

    el.type('supercalifragilisticexpialidocious');
    el.should('have.value','supercalifragilisticexpialidocious');

    // click on the priority button in the input box
    let prio = cy.get('header button.priority-btn');
    prio.trigger('click');

    //then
    cy.get('#todo-list li').should('have.class', 'priority');

  });
});