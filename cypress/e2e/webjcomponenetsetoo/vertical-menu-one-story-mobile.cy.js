describe('performance and functionality testing for mobile for vertical-menu-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for vertical-menu-one-story',()=> {
       cy.viewport(360 ,640);
       cy.wait(4000);
       cy.visit('http://localhost:6006/iframe.html?args=&id=vertical-menu--vertical-menu-one-story&viewMode=story');
       cy.wait(5000);
       
    })
     it('Performance testing in mobile for vertical-menu-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=vertical-menu--vertical-menu-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })