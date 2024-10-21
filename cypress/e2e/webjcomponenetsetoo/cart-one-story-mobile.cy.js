describe('performance and functionality testing for mobile for cart-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for cart-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=cart--cart-one-story&viewMode=story');
       cy.get('.text-2xl').contains('Your Cart');
       cy.get(':nth-child(1) > div.flex-shrink-0 > .object-cover').should('be.visible');
       cy.get(':nth-child(1) > .flex-1 > .relative > .pr-9 > .text-base').contains('Apple Watch Series 7 - 44mm');
       cy.get(':nth-child(1) > .flex-1 > .relative > .items-end > .flex-shrink-0').should('be.visible');
       cy.get(':nth-child(2) > div.flex-shrink-0 > .object-cover').should('be.visible');
       cy.get(':nth-child(2) > .flex-1 > .relative > .pr-9 > .text-base').contains('Beylob 90 Speaker');
       cy.get(':nth-child(2) > .flex-1 > .relative > .items-end > .flex-shrink-0').should('be.visible');
       cy.get(':nth-child(3) > div.flex-shrink-0 > .object-cover').should('be.visible');
       cy.get(':nth-child(3) > .flex-1 > .relative > .pr-9 > .text-base').contains('Beoplay M5 Bluetooth Speaker');
       cy.get(':nth-child(3) > .flex-1 > .relative > .items-end > .flex-shrink-0').should('be.visible');
       cy.get('.-my-5 > :nth-child(1) > :nth-child(1)').contains('Subtotal');
       cy.get(':nth-child(1) > .text-right').contains('589');
       cy.get('.-my-5 > :nth-child(2) > :nth-child(1)').contains('Tax');
       cy.get(':nth-child(2) > .text-right').contains('0');
       cy.get('.-my-5 > :nth-child(3) > :nth-child(1)').contains('Shipping');
       cy.get(':nth-child(3) > .text-right').contains('10');
       cy.get('.text-black').contains('Total');
       cy.get(':nth-child(4) > .text-right').contains('599');
       cy.get('.text-white').click();
       cy.get('.mt-6 > .text-gray-900').click();

    })
     it('Performance testing in mobile for cart-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=cart--cart-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
