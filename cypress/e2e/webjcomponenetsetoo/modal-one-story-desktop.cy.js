describe('performance and functionality testing for mobile for modal-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for modal-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=modal--modal-one-story&viewMode=story');
       cy.get('.inline-flex').should('be.visible');
       cy.get('.inline-flex').click();
       cy.get('.mt-5').should('be.visible');
       cy.get('.mt-3').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
       cy.get('.mt-8 > .inline-flex').click();

    })
     it('Performance testing in mobile for mint one story',()=> {
       //cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=modal--modal-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })