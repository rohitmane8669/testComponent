describe('performance and functionality testing for desktop forheader-three-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for header-three-story',()=> {
     //  cy.viewport(360 ,640);
     //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-three-story&viewMode=story');
       cy.get('[title="Tour"]').contains('Tour');
       cy.get('[title="Products"]').contains('Products');
       cy.get('[title="Customers"]').contains('Customers');
       cy.get('.w-auto').should('be.visible');
       cy.get('[title="Sign in"]').contains('Sign in');
       cy.get('[title="Sign up"]').contains('Sign up');
    })
     it('Performance testing in desktop for header-three-story',()=> {
      // cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-three-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  