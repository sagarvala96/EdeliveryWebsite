var functions = require('./Function')
   
   //TAG FILTER

    it('Select Filter', () => {

        cy.viewport(functions.resolution())
        cy.wait(5000)
        cy.get('.filter-btn').click({force: true})
        cy.wait(functions.wait())

 
        // for(var main_filter =2; main_filter <5; main_filter ++)
        // {
        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
        //     cy.wait(functions.wait())
        //     for( var sub_filter =1; sub_filter <5; sub_filter++)
        //     {
        //         cy.log(main_filter)
        //         cy.log(sub_filter)
        //         cy.get(':nth-child('+ main_filter +') > .acc__panel > .ng-untouched > :nth-child('+ sub_filter +')').click({force: true})
        //     }
        //     cy.wait(10000)
        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
        //     cy.wait(functions.wait())

        //     // Uncheck Option

        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
        //     cy.wait(functions.wait())
        //     for( var sub_filter =1; sub_filter <5; sub_filter++)
        //     {
        //         cy.log(main_filter)
        //         cy.log(sub_filter)
        //         cy.get(':nth-child('+ main_filter +') > .acc__panel > .ng-untouched > :nth-child('+ sub_filter +')').click({force: true})
        //     }
        //     cy.wait(functions.wait())
        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
        // }


        for(var main_filter =1; main_filter <5; main_filter ++)
        {
            cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
            cy.wait(functions.wait())
            for( var sub_filter =1; sub_filter <5; sub_filter++)
            {
                cy.log(main_filter)
                cy.log(sub_filter)
                
                cy.get(':nth-child(1) > .acc__card').first().find('#store-list > div.filter-list > div > div > div:nth-child(1) > div.acc__panel > form').each((html, index, list)=>{

                                cy.log(html)
                                cy.log(index)
                                cy.log(list)
                })

                cy.pause()


              //  cy.get(':nth-child('+ main_filter +') > .acc__panel > .ng-untouched > :nth-child('+ sub_filter +')').click({force: true})
            }
        //     cy.wait(10000)
        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
        //     cy.wait(functions.wait())

        //     // Uncheck Option

        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
        //     cy.wait(functions.wait())
        //     for( var sub_filter =1; sub_filter <5; sub_filter++)
        //     {
        //         cy.log(main_filter)
        //         cy.log(sub_filter)
        //         cy.get(':nth-child('+ main_filter +') > .acc__panel > .ng-untouched > :nth-child('+ sub_filter +')').click({force: true})
        //     }
        //     cy.wait(functions.wait())
        //     cy.get(':nth-child('+ main_filter +') > .acc__title').click({force: true})
         }
    })


    // it('Select Store', () => {

    //     cy.viewport(functions.resolution())
    //     cy.wait(5000)
    //     cy.wait(functions.wait())
    //     cy.get('.field').type(functions.store_name())
    //     cy.wait(functions.wait())
    //     cy.get('.ng-star-inserted > .d-flex').first().click({force: true})

    // })

    



    // it('Select Item', () => {

    //     cy.viewport(functions.resolution())
    //     cy.wait(5000)
    
    //     for(var add_item =1; add_item<2; add_item ++)
    //     {
    //         cy.get(':nth-child(1) > .product-content-wrp > #container-wrp > #tab1 > .row > :nth-child('+ add_item +') > .product-block > .product-list > .product-details > .product-bottom > .add-to-cart-bttn > .primary-btn').click({force: true})
    //         cy.wait(5000)

    //         // Select Item specification


    //         cy.get('.dropdown-content').find('.product-options-block').each((html, index, list)=>{

    //             cy.log(html)
    //             cy.log(index)
    //             cy.log(list)

    //             if(index!==list.length-1){

    //                 cy.get('.dropdown-content > :nth-child('+(index+3)+')').find('.choose').invoke("text").then((text) => {
    //                     cy.log(text)
    //                     cy.wait(functions.wait())
    //                     const myArr = text.split(' ');
                        
    //                     var max = myArr[1];
    //                     var class_name = '.radio';
    //                     if(max && max.length >= 1)
    //                     {

    //                         if(max.length>2){
    //                             var x = myArr[1].split('To')
    //                             cy.log(x)
    //                             max = x[0].trim();
    //                             class_name = '.checkbox';
    //                         }
    //                     }
    //                     else{
    //                         max = 0
    //                     }

    //                     cy.log(max)
    //                     cy.wait(functions.wait())
    //                     cy.get('.dropdown-content > :nth-child('+(index+3)+') > .product-options-block > .options-list-block > form').find('.options-list-wrp').each((html, checkbox_index, list)=>{
    //                         if((checkbox_index+1)<=max){
    //                             cy.wait(functions.wait())
    //                             cy.get('.dropdown-content > :nth-child('+(index+3)+') > .product-options-block > .options-list-block > form > :nth-child('+(checkbox_index+1)+') > '+class_name).click({force: true})
    //                             cy.wait(functions.wait())
    //                         }
    //                     });
    //                 })
                    
    //             } else {
    //                 cy.get('.dropdown-content > :nth-child('+(index+3)+') > .options-list-block > textarea').type(functions.string())
    //                 cy.wait(functions.wait())
                    
    //             }
    //         });
    //         cy.get('.pop-up-content-wrap > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click()
    //         cy.wait(functions.wait())
    //     }

    // })


    // it('Checkout Item', () => {

    //     cy.viewport(functions.resolution())
    //     cy.wait(5000)
    //     cy.get('.cart-section').realHover();
    //     cy.wait(functions.wait())
    //     cy.get('.cart-section').realHover('topLeft');
    //     cy.wait(functions.wait())
    //     cy.get('.signin-box > .popup-footer > .popup-footer-wrp > .add-to-cart-btn > .primary-btn').click({force: true})
    //     cy.wait(functions.wait())
        

    // })

   