describe('performance and functionality testing for mobile for header-four-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for header-four-story',()=> {
       //cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-four-story&viewMode=story');
       cy.get('.w-auto').should('be.visible');
       cy.get("a[role='button']").should('be.visible');
       cy.get('.flex > .inline-flex').click();
    })
     it('Performance testing in mobile for header-four-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-four-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
       })
    
    })
  