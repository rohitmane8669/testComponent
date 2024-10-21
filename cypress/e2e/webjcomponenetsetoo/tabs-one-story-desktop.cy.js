describe('performance and functionality testing for mobile for tabs-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for tabs-one-story',()=> {
     //   cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=tabs--tabs-one-story&viewMode=story');
       cy.get('.flex > :nth-child(2)').should('be.visible');
       cy.get('.flex > :nth-child(3)').should('be.visible');
    })
     it('Performance testing in mobile for tabs-one-story',()=> {
       //cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=tabs--tabs-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })