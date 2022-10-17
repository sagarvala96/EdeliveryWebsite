var functions = require('./Function')

it('Favorites Stores', () => {

    cy.viewport(functions.resolution())
    cy.wait(functions.wait())
    cy.get('.dropdown').realHover();
    cy.get('.dropdown').realHover('topLeft');
    cy.get('[routerlink="/f-list"]').click({force: true})
    // cy.scrollTo('bottom')
})
