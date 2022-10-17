var functions = require('./Function')

describe('Edelivery Website Test Cases', () => {

    beforeEach(() => {
        cy.restoreLocalStorage();  
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });


        
    it('Base URL "type"', () => {
       cy.viewport(functions.resolution())
       cy.visit(functions.baseURL())
       cy.wait(5000)

   })

    //require('./Signup')
    // require('./Login')
    // require('./Address')
    // require('./Courier_Order')
     require('./Select_Store')
    // require('./Create_order')
    // require('./Profile')
    // require('./Wallet_History')
    // require('./Favorites_Stores')
    // require('./Order')
    // require('./Order_History')
    //require('./Logout')
    // require('./Function')



})