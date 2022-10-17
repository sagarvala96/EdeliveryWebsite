var functions = require('./Function')

it('Create Order', () => {
    cy.viewport(functions.resolution())

    var schedule_date = new Date('17 Sep 2021 20:00:00')
    var today_date = new Date();

    if(functions.is_cash_order())
    {

        if (functions.is_normal())
        {   
            cy.log(functions.is_normal())
            cy.get('.mb-30 > .cart-total-wrp > :nth-child(1) > :nth-child(3) > .cart-total-list-wrp').click({force: true})
            cy.wait(functions.wait())
            cy.get('.total-btn > :nth-child(2)').click({force: true})
            cy.wait(functions.wait())
            cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
            cy.wait(functions.wait())
        }
        else if(functions.is_pickup())
        {
            cy.log(functions.is_pickup())
            
            if(functions.is_pickup_schedule())
            {
                cy.log(functions.is_pickup_schedule())
                cy.get('.delivery-address-section > .form-checklist-item > .header-right-block > .h-takeway > label').click()
                cy.wait(functions.wait())
                cy.get('.h-schedule > label').realHover();
                cy.wait(functions.wait())
                cy.contains("Evening Time Slot").click({force: true})
                cy.wait(functions.wait())
                cy.contains("11:00 PM - 12:00 AM").click({force: true})
                cy.wait(functions.wait())
                cy.get('.total-btn > :nth-child(2)').click({force: true})
                cy.wait(functions.wait())
                cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
                cy.wait(functions.wait())
                
            }
            else
            {
                cy.get('.cart-section').realHover();
                cy.wait(functions.wait())
                cy.get('.cart-section').realHover('topLeft');
                cy.wait(functions.wait())   
                cy.get('.signin-box > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
                cy.wait(functions.wait())
                cy.get('.h-takeway > label').click({force: true})
                cy.wait(functions.wait())
                cy.get(':nth-child(5) > .form-control').type('Delivery Nete Here')
                cy.wait(functions.wait())
                cy.get('.total-btn > :nth-child(2)').click({force: true})
                cy.wait(functions.wait())
                cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
                cy.wait(functions.wait())
            }
            
        }
        else
        {
            // var diff = schedule_date.getTime() - today_date.getTime();
            //     diff = Math.ceil(diff / (1000 * 3600 / 24));
            //     cy.log(diff)
            // cy.pause()


            cy.get('.h-schedule > label').realHover();
            cy.wait(functions.wait())
            cy.contains("Evening Time Slot").click({force: true})
            cy.wait(functions.wait())
            cy.contains("11:00 PM - 12:00 AM").click({force: true})
            cy.wait(functions.wait())
            
            // cy.get('#ngb-panel-7-header > .btn').click({force: true})
            // //cy.get('.slots-list > .accordion > .card > #ngb-panel-15-header > .btn').click({force: true})
            // cy.wait(functions.wait())
            // cy.get(':nth-child(6) > .primary-btn').click({force: true})
            // cy.wait(functions.wait())
            cy.get('.total-btn > :nth-child(2)').click({force: true})
            cy.wait(functions.wait())
            cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
            cy.wait(functions.wait())
        }
    }
    else{

        cy.pause()
        cy.log(functions.is_cash_order())
        cy.contains('Card').click()
        cy.pause()

        if (functions.is_normal())
        {   
            cy.log(functions.is_normal())
            cy.pause()
            cy.get('.inline-list > .d-flex > :nth-child(4) > a').click({force: true})
            cy.wait(functions.wait())
            cy.get('.total-btn > :nth-child(2)').click({force: true})
            cy.wait(functions.wait())
            cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
            cy.wait(functions.wait())
        }
        else if(functions.is_pickup())
        {
            cy.log(functions.is_pickup())
            cy.pause()
            
            if(functions.is_pickup_schedule())
            {
                cy.log(functions.is_pickup_schedule())
                cy.pause()
                cy.get('.delivery-address-section > .form-checklist-item > .header-right-block > .h-takeway > label').click()
                cy.wait(functions.wait())
                cy.get('.h-schedule > label').realHover();
                cy.wait(functions.wait())
                cy.contains("Evening Time Slot").click({force: true})
                cy.wait(functions.wait())
                cy.contains("11:00 PM - 12:00 AM").click({force: true})
                cy.wait(functions.wait())
                cy.get('.total-btn > :nth-child(2)').click({force: true})
                cy.wait(functions.wait())
                cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
                cy.wait(functions.wait())
                
            }
            else
            {
                cy.get('.cart-section').realHover();
                cy.wait(functions.wait())
                cy.get('.cart-section').realHover('topLeft');
                cy.wait(functions.wait())   
                cy.get('.signin-box > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
                cy.wait(functions.wait())
                cy.get('.h-takeway > label').click({force: true})
                cy.wait(functions.wait())
                cy.get(':nth-child(5) > .form-control').type('Delivery Nete Here')
                cy.wait(functions.wait())
                cy.get('.total-btn > :nth-child(2)').click({force: true})
                cy.wait(functions.wait())
                cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
                cy.wait(functions.wait())
            }
            
        }
        else
        {
            // var diff = schedule_date.getTime() - today_date.getTime();
            //     diff = Math.ceil(diff / (1000 * 3600 / 24));
            //     cy.log(diff)
            // cy.pause()


            cy.get('.h-schedule > label').realHover();
            cy.wait(functions.wait())
            cy.contains("Evening Time Slot").click({force: true})
            cy.wait(functions.wait())
            cy.contains("11:00 PM - 12:00 AM").click({force: true})
            cy.wait(functions.wait())
            
            // cy.get('#ngb-panel-7-header > .btn').click({force: true})
            // //cy.get('.slots-list > .accordion > .card > #ngb-panel-15-header > .btn').click({force: true})
            // cy.wait(functions.wait())
            // cy.get(':nth-child(6) > .primary-btn').click({force: true})
            // cy.wait(functions.wait())
            cy.get('.total-btn > :nth-child(2)').click({force: true})
            cy.wait(functions.wait())
            cy.get('#thankyou-popup > .custom-model-inner > .custom-model-wrap > .pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
            cy.wait(functions.wait())
        }
        
    }

})