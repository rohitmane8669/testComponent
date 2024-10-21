describe('performance and functionality testing for mobile for home-sidebar-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for home-sidebar-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=home-sidebar--home-sidebar-one-story&viewMode=story');
       cy.get('.items-start').should('be.visible');
       cy.get(':nth-child(2) > .text-lg').should('be.visible');
       cy.get(':nth-child(1) > .ml-6 > a > .absolute').should('be.visible');
       cy.get('.block').type('rohitmane8669@gmail.com');
       cy.get("button[type='submit']").should('be.visible');
    })
     it('Performance testing in mobile for interactive-button-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=home-sidebar--home-sidebar-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  