describe('performance and functionality testing for mobile for dropdown-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for dropdown-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=dropdown--dropdown-one-story&viewMode=story');
       cy.get('.border').type('mail');
    })
     it('Performance testing in mobile for dropdown-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=dropdown--dropdown-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  