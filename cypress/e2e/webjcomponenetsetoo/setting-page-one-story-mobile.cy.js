describe('performance and functionality testing for mobile for setting-page-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for setting-page-one-story',()=> {
      cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=settingpage--setting-page-one-story&viewMode=story');
       cy.wait(4000);
       cy.get('#storybook-root > div').should('be.visible');
    })
     it('Performance testing in mobile for setting-page-one-story',()=> {
       cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=settingpage--setting-page-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })