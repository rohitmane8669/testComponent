describe('performance and functionality testing for desktop for data-stats-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for data-stats-one-story',()=> {
        //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=data-stats--data-stats-one-story&viewMode=story');
       cy.get(':nth-child(1) > .px-5').should('be.visible');
       cy.get(':nth-child(2) > .px-5').should('be.visible');
       cy.get(':nth-child(3) > .px-5').should('be.visible');
       cy.get(':nth-child(4) > .px-5').should('be.visible');

    })
     it('Performance testing in desktop for data-stats-one-story component',()=> {
       //cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=data-stats--data-stats-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  