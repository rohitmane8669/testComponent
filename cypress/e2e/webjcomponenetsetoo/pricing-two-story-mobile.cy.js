describe('performance and functionality testing for mobile for pricing-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for pricing-two-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=pricing--pricing-two-story&viewMode=story');
       cy.get('.max-w-3xl > .text-3xl').contains('Plans that scale with business');
       cy.get('.mt-4').contains(' Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS');
       cy.get(':nth-child(1) > .bg-gray-50').should('be.visible');
       cy.get(':nth-child(1) > :nth-child(2) > .mt-6 > .inline-flex').should('be.visible');
       cy.get('.grid').should('be.visible');
       cy.get('.grid > :nth-child(2)').should('be.visible');
       cy.get('.grid > :nth-child(3) > :nth-child(2)').should('be.visible');
     })
     it('Performance testing in mobile for pricing-two-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=pricing--pricing-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })