describe('performance and functionality testing for mobile for team-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for team-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=mint-success--mint-success-one-story&viewMode=story');
       cy.get('.max-w-md').should('be.visible');
       cy.get('.object-cover').should('be.visible');
       cy.get('.mt-5 > .inline-flex').should('be.visible');
       cy.get('.text-2xl').contains('Sad Ape #258');
       cy.get('.space-y-5').should('be.visible');
       cy.get('.mt-4').should('be.visible');
    })
     it('Performance testing in mobile for mint one story',()=> {
       cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=mint-success--mint-success-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })