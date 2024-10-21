describe('performance and functionality testing for desktop for transaction-progress-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for transaction-progress-one-story',()=> {
      //  cy.viewport(1440 ,1080);
       cy.visit('http://localhost:6006/iframe.html?args=&id=transaction-progress--transaction-progress-one-story&viewMode=story');
       cy.get('.text-xl').contains('Transaction in Progress');
       cy.get('.mt-3').contains('This can take a few minutes depending on gas. Don’t leave this page. You can do whatever you want.');
       cy.get('.inline-flex').should('be.visible');
    })
     it('Performance testing in desktop for transaction-progress-one-story',()=> {
       //cy.viewport(360 ,640);
       //cy.viewport(1440 ,1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=transaction-progress--transaction-progress-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })