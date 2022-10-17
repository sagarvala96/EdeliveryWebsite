var functions = require('./Function')

it('Courier Order', () => {

    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.contains('Courier').click({force: true})    
    cy.get('#pickup_instruction').type('pickup note here')

    // Delivery Details

    cy.get('.delivery-address-section > .row > :nth-child(1) > .form-control').type(functions.string())
    cy.get('.delivery-address-section > .row > :nth-child(2) > .form-control').type(functions.number())
    cy.get('#delivery_autocomplete_address').type('Rajkot, Gujarat 360001, India').wait(1000).type("{downarrow} {enter}").wait(4000)
    cy.get('.row > :nth-child(4) > .form-control').type('Delivery Note Here')
    cy.wait(functions.wait())
    cy.get('.col-12.mb-4 > .add-to-cart-btn > .primary-btn').click({force: true})
    cy.wait(functions.wait())

    // Uncheck  wallet

    cy.get('.checkbox > .option-input').click({force: true})
    cy.wait(functions.wait())

    // Add card

    cy.get(':nth-child(2) > .cart-total-list-wrp > .cart-total-label > .form-field > .radio > .label').click({force: true})
    cy.wait(functions.wait())
    cy.get('.add-card > .custom-popup')
    cy.wait(functions.wait())
    cy.get('.total-btn > .primary-btn').click({force: true})
    
})