/// <reference types="Cypress" />

describe('my first test', function(){
  it('visit the todo-app', function(){

    cy.visit('http://localhost:8000');

    //set text
    let el = cy.get('[data-cy=new-todo]');
    el.should('have.attr','placeholder','What needs to be done?');  

    let text = 'supercalifragilisticexpialidocious';
    el.type(text);

    let prio = cy.get('[data-cy=priority-btn]');
    prio.trigger('click');

    cy.get('[data-cy=new-todo]').should('have.value',text);

  
    //then
    cy.get('[data-cy=todo-list]').children().should('have.class', 'priority');


    //when second item is added with priority

    //there are 2 li's with priority class

    //when third item is added without priority

    //when click Priority filter

    //then 2 items should show in the list




  });
});