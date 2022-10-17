var functions = require('./Function')

it('Wallet History', () => {

        cy.viewport(functions.resolution())
        cy.wait(5000)
        cy.get('.dropdown').realHover('topLeft');
        cy.get('[routerlink="/w-history"]').click({force: true})
        cy.wait(functions.wait())

})

it('Add card', () => {

        cy.viewport(functions.resolution())
        cy.wait(5000)
        cy.get('.dropdown').realHover('topLeft');
        cy.get('[routerlink="/w-history"]').click({force: true})
        cy.wait(functions.wait())

        // add card

        // cy.get('.row > .col-lg-12 > .customer-details > .change-link > .btn').click({force : true})
        // cy.wait(functions.wait())

        // cy.fillElementsInput('cardNumber', '4242424242424242');
        // cy.fillElementsInput('cardExpiry', '1025'); // MMYY
        // cy.fillElementsInput('cardCvc', '123');
        // cy.fillElementsInput('postalCode', '90210');
        // cy.wait(functions.wait())
        // cy.get('#add-new-card > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .dropdown-content > .login-form > .form-field > .primary-btn').click()
        // cy.wait(functions.wait())


        // add wallet amount

        // cy.get('.ng-star-inserted > .btn').click()
        // cy.wait(functions.wait())
        // cy.get('.mb-30 > .form-control').type('100')
        // cy.wait(functions.wait())
        // cy.get('.ng-star-inserted > .btn').click()
        // cy.wait(functions.wait())


        // remove card 

        // cy.get(':nth-child(1) > .order-list > .order-list-block > .remove-btn > a').click()
        // cy.wait(functions.wait())

        // change card
        cy.get(':nth-child(2) > .row > :nth-child(1) > .order-list > .order-list-block').click()
        cy.wait(functions.wait())
})