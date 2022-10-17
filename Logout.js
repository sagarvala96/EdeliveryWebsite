var functions = require('./Function')

it('Logout', () => {

    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.get('.dropdown').realHover('topLeft')
    cy.wait(functions.wait())
    cy.get('.menu-dropdown-content > :nth-child(5)').click({force: true})
    cy.wait(functions.wait())
})