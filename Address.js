var functions = require('./Function')

it('Home Page', () => {

    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.get('#address').type(functions.address(),{force: true}).first().focus().wait(1000).type("{downarrow} {enter}").wait(4000)
    cy.wait(functions.wait())

})