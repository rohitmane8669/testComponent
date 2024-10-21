describe('performance and functionality testing for mobile for pricing-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for pricing-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=pricing--pricing-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Make the wise decision for your business');
       cy.get(':nth-child(1) > .p-6').should('be.visible');
       cy.get(':nth-child(1) > .p-6 > .inline-flex').should('be.visible');
       cy.get(':nth-child(2) > .p-6').should('be.visible');
       cy.get(':nth-child(2) > .p-6 > .inline-flex').should('be.visible');
       cy.get(':nth-child(3) > .p-6').should('be.visible');
       cy.get(':nth-child(3) > .p-6 > .inline-flex').should('be.visible');
     })
     it('Performance testing in mobile for pricing-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=pricing--pricing-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })