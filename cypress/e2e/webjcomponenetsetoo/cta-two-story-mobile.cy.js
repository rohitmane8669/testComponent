describe('performance and functionality testing for mobile for dashboard-steps-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for cta-two-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=cta--cta-two-story&viewMode=story');
       cy.get('.text-2xl').should('be.visible');
       cy.get('.mt-6 > .font-semibold').contains('Jenny Wilson');
       cy.get('.mt-2').contains('Project Manager at Microsoft');
       cy.get('.mt-12').contains('Want to see Celebration in action?');
       //cy.get('.inline-flex').click();
       cy.get('.inline-flex').should('be.visible');
       
       
    })
     it('Performance testing in mobile for cta-two-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=cta--cta-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
