describe('performance and functionality testing for mobile for roadmap-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for roadmap-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=roadmap--roadmap-two-story&viewMode=story');
       cy.wait(4000);
       cy.get('.object-cover').should('be.visible');
       cy.get('.max-w-md').should('be.visible');
       cy.get('.flex > .grid > :nth-child(1)').should('be.visible');
       cy.get('.flex > .grid > :nth-child(2)').should('be.visible');
       cy.get('.flex > .grid > :nth-child(3)').should('be.visible');
       cy.get('.flex > .grid > :nth-child(4)').should('be.visible');
       
    })
     it('Performance testing in mobile for mint one story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=roadmap--roadmap-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })