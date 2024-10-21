describe('performance and functionality testing for mobile for dashboard-steps-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for cta-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=cta--cta-one-story&viewMode=story');
       cy.get('.text-2xl').contains('Ready to get started?');
       cy.get('.mt-5').should('be.visible');
       //cy.get('.group > .relative').click();
       cy.get('.group > .relative').should('be.visible');
       cy.get('.flex > .text-gray-900').should('be.visible');
       cy.get(':nth-child(1) > .px-8').should('be.visible');
       cy.get(':nth-child(2) > .px-8').should('be.visible');
      
       
    })
     it('Performance testing in mobile for cta-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=cta--cta-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
