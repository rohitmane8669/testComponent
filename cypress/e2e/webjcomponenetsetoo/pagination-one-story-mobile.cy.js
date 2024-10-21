describe('performance and functionality testing for mobile for pagination-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for pagination-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=pagination--pagination-one-story&viewMode=story');
       cy.get('[title="Page 3"]').should('be.visible');
       cy.get('[title="Page 4"]').should('be.visible');
       //cy.get('.rounded-r-md').click();

    })
     it('Performance testing in mobile for mint one story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=pagination--pagination-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })