describe('performance and functionality testing for desktop for feature-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for feature-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=features--feature-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Take the next step without any hassle & get results fast');
       cy.get(':nth-child(1) > .overflow-hidden > .p-9').should('be.visible');
       cy.get(':nth-child(2) > .overflow-hidden > .p-9').should('be.visible');
       cy.get(':nth-child(3) > .overflow-hidden > .p-9').should('be.visible');
       cy.get(':nth-child(4) > .overflow-hidden > .p-9').should('be.visible');
       
    })
     it('Performance testing in desktop for  feature-one-story component',()=> {
       //cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=features--feature-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  