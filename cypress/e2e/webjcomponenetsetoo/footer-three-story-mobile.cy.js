describe('performance and functionality testing for mobile for footer-three-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for footer-three-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-three-story&viewMode=story');
       cy.get('.w-auto.h-10').should('be.visible');
       cy.get('.flex-wrap > :nth-child(1) > .inline-flex').click();
       cy.get('.flex-wrap > :nth-child(2) > .inline-flex').click();
       cy.get('.flex-wrap > :nth-child(3) > .inline-flex').click();
       cy.get('.flex-wrap > :nth-child(4) > .inline-flex').click();
       cy.get(':nth-child(5) > .inline-flex').click();
       cy.get('.space-x-3').should('be.visible');
       
       
    })
     it('Performance testing in mobile for footer-three-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-three-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  