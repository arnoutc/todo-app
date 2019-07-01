/// <reference types="Cypress" />

describe('my first test', function(){

  let TODO_ITEM_ONE = 'buy some cheese';
  let TODO_ITEM_TWO = 'feed the cat';
  let TODO_ITEM_THREE = 'book a doctors appointment';

  beforeEach(function(){
    // By default Cypress will automatically
      // clear the Local Storage prior to each
      // test which ensures no todos carry over
      // between tests.
      //
      // Go out and visit our local web server
      // before each test, which serves us the
      // TodoMVC App we want to test against
      //
      // We've set our baseUrl to be http://localhost:8000
      // which is automatically prepended to cy.visit
      //
      // https://on.cypress.io/api/visit
    cy.visit('/');
  });

  it('visit the todo-app', function(){
    cy.createDefaultTodos();
    // this is an example of another custom command
    // since we repeat the todo creation over and over
    // again. It's up to you to decide when to abstract
    // repetitive behavior and roll that up into a custom
    // command vs explicitly writing the code.

    //another way of creating some todos with a custom command:
    // cy.createTodo(`    ${TODO_ITEM_TWO}    `);
    // cy.createTodo(`    ${TODO_ITEM_THREE}    `);

    //when setting a text
    cy.get('[data-cy=new-todo]')
    .type(TODO_ITEM_ONE);

    cy.get('[data-cy=priority-btn]')
      .trigger('click');

    //and then the list should have a prioritized item
    cy.get('[data-cy=todo-list]')
    .children()
    .should('have.class', 'priority');

  });
});