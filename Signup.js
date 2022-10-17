var functions = require('./Function')

it('Signup', () => {

        cy.viewport(functions.resolution())
        cy.get('.toggle-btn > .primary-btn').click({force: true})
        cy.get('#sign-in-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > form.ng-untouched > .text-center > span > .link').click({force: true})
        cy.get('.form-field--inputFirstName > .form-control').type(string())
        cy.get('#sign-up-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > form.ng-untouched > :nth-child(2) > .form-control').type(functions.string())
        cy.get('.ng-invalid.ng-dirty > :nth-child(3) > .form-control').type(functions.email())
        cy.get('.col-sm-7 > .form-control').type(functions.number())
        cy.get('.form-field--inputAddress > .form-control').type(123456)
        cy.get('form.ng-dirty > .form-field--inputSignup > .primary-btn').click({force: true})
        
    })      