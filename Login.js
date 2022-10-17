var functions = require('./Function')

it('Sigin', () => {
    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.visit(functions.baseURL())
    cy.wait(5000)
    cy.get('.toggle-btn > .primary-btn').click({force: true})
    cy.wait(functions.wait())
    cy.get('#sign-in-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > form.ng-untouched > .form-field--inputEmail > .form-control').type(functions.user_email())
    // cy.get('#sign-in-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > form.ng-untouched > .form-field--inputEmail > .form-control').type('gynlfuujqc@gmail.com')
    cy.get('.form-field--inputPassword > .form-control').type(functions.user_password())
    cy.wait(functions.wait())
    cy.get('form.ng-dirty > .d-flex > .primary-btn').click({force: true})
    cy.wait(5000)
})

