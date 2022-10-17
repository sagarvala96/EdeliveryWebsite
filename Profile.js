var functions = require('./Function')

it('Profile', () => {

    cy.viewport(functions.resolution())
    cy.wait(5000)
    cy.get('.dropdown').realHover();
    cy.get('.dropdown').realHover('topLeft');
    cy.get('[routerlink="/account"]').click({force: true})

    cy.get('.row-list1 > :nth-child(1) > .form-control').clear().type(functions.string())
    cy.get('.row-list1 > :nth-child(2) > .form-control').clear().type(functions.string())
    cy.get('.ng-invalid.ng-dirty > :nth-child(3) > :nth-child(1) > .form-control').type(functions.user_password())
    cy.get('form.ng-dirty > :nth-child(3) > :nth-child(2) > .form-control').type(functions.user_password())
    cy.get('form.ng-dirty > .primary-btn').click({force: true})
    cy.wait(functions.wait())
    
// Update profile

    cy.fixture('GST.png', 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
      cy.get('#file-input').attachFile({
        fileContent,
        fileName: 'GST.png',
        mimeType: 'image/png',
        encoding: 'utf-8',
        lastModified: new Date().getTime(),
      });
    });
    cy.wait(functions.wait())
    cy.get('.ng-star-inserted > :nth-child(1) > .form-control').type(functions.user_password())
    cy.wait(functions.wait())
    cy.get('form.ng-dirty > .primary-btn').click({force: true})
    cy.wait(functions.wait())
})
