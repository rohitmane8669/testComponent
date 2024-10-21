describe('performance and functionality testing for desktop for select-box-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for select-box-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=select-box--select-box-story&viewMode=story');
       cy.get('.mt-4 > :nth-child(1)').should('be.visible');
       cy.get('.mt-4 > :nth-child(1)').click();
       cy.get('.mt-4 > :nth-child(2)').should('be.visible');
       cy.get('.mt-4 > :nth-child(2)').click();
       cy.get('.mt-4 > :nth-child(3)').should('be.visible');
       cy.get('.mt-4 > :nth-child(3)').click();
       cy.get('.mt-4 > :nth-child(4)').should('be.visible');
       cy.get('.mt-4 > :nth-child(4)').click();
      
    })
     it('Performance testing in desktop for select-box-story',()=> {
       //cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=select-box--select-box-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })