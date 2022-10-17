var functions = require('./Function')

it('Order', () => {

    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.get('.dropdown').realHover('topLeft')
    cy.wait(functions.wait())
    cy.get('[routerlink="/order"]').click({force: true})
    cy.wait(functions.wait())

    // chat

    cy.get('span > img').click({force: true})
    cy.wait(functions.wait())
    cy.get('form.ng-pristine > .form-control').type('Hello').wait(1000).type("{downarrow} {enter}")
    cy.wait(functions.wait())


    // cy.get('span > img').invoke("text").then((text) => {
    //     cy.log(text)
    //     cy.pause()
    // })

    // cancel order

    cy.get(':nth-child(1) > .order-list-block > .order-product-content > .order-number > div.cancel-link > .cancel-link').click({force: true})
    cy.wait(functions.wait())
    //cy.get(':nth-child(1) > .radio').click({force: true})
    // cy.scrollTo('bottom')
})



