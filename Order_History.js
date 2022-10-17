var functions = require('./Function')

it('Order History', () => {

    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.get('.dropdown').realHover('topLeft')
    cy.wait(functions.wait())
    cy.get('[routerlink="/order"]').click({force: true})
    cy.wait(functions.wait())
    cy.get('.tab > :nth-child(2) > a').click({force: true})
    cy.wait(functions.wait())

    for(var order_history =1; order_history<4; order_history ++)
    {
        cy.get('#order-list2 > :nth-child('+ order_history +') > .order-list-block').click({force: true})
        cy.wait(functions.wait())
    }

})



