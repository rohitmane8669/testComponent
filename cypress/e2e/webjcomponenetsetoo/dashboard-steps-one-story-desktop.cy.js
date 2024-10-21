describe('performance and functionality testing for desktop for dashboard-steps-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop fordashboard-steps-one-story',()=> {
      //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=course-info--dashboard-steps-one-story&viewMode=story');
       cy.get('.flex-1 > .font-sans').contains('Is this course right for me?');
       cy.get('.mt-8').should('be.visible');
       cy.get(':nth-child(1) > .px-4').should('be.visible');
       cy.get(':nth-child(2) > .px-4').should('be.visible');
       cy.get(':nth-child(3) > .px-4').should('be.visible');
       cy.get(':nth-child(4) > .px-4').should('be.visible');
       cy.get(':nth-child(5) > .px-4').should('be.visible');
       cy.get('.grid > :nth-child(6)').should('be.visible');
       
    })
     it('Performance testing in desktop for interactive-button-story',()=> {
      
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=course-info--dashboard-steps-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })