describe('performance and functionality testing for desktop for integration-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for integration-one-story',()=> {
      // cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=integrations--integration-one-story&viewMode=story');
       cy.wait(4000);
       cy.get('.text-3xl').contains('Integrate with Apps');
       cy.get('.max-w-xl').contains('Explore a variety of integrations with popular applications to enhance your experience.');
       cy.get(':nth-child(1) > .p-8').should('be.visible');
       cy.get(':nth-child(2) > .p-8').should('be.visible');
       cy.get(':nth-child(3) > .p-8').should('be.visible');
       cy.get(':nth-child(4) > .p-8').should('be.visible');
       cy.get(':nth-child(5) > .p-8').should('be.visible');
       cy.get(':nth-child(6) > .p-8').should('be.visible');
       cy.get('.inline-flex').should('be.visible');
    })
     it('Performance testing in desktop for interactive-button-story',()=> {
      // cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=integrations--integration-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  