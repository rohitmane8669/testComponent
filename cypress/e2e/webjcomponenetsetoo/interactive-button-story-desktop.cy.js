describe('performance and functionality testing for desktop for interactive-button-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for interactive-button-story',()=> {
       cy.viewport(1440 ,1080);
       cy.visit('http://localhost:6006/iframe.html?args=&id=button--interactive-button-story&viewMode=story');
       cy.get('.inline-flex').should('be.visible');
       cy.get('.inline-flex').contains('Click Me');
       cy.get('.inline-flex').click();
    })
     it('Performance testing in desktop for interactive-button-story',()=> {
       cy.viewport(1440 ,1080);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=button--interactive-button-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
