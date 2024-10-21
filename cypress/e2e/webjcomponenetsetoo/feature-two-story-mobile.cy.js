describe('performance and functionality testing for mobile for feature-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobilefor feature-two-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=features--feature-two-story&viewMode=story');
       cy.get('.text-3xl').contains('Top Features');
       cy.get(':nth-child(1) > .relative').should('be.visible');
       cy.get(':nth-child(1) > .mt-8').contains('Secured Payments');
       cy.get(':nth-child(1) > .mt-4').should('be.visible');
       cy.get(':nth-child(2) > .relative').should('be.visible');
       cy.get(':nth-child(2) > .mt-8').contains('Fast & Easy to Load');
       cy.get(':nth-child(2) > .mt-4').should('be.visible');
       cy.get(':nth-child(3) > .relative').should('be.visible');
       cy.get(':nth-child(3) > .mt-8').contains('Light & Dark Version');
       cy.get(':nth-child(3) > .mt-4').should('be.visible');
       cy.get(':nth-child(4) > .relative').should('be.visible');
       cy.get(':nth-child(4) > .mt-8').contains('Secured Payments');
       cy.get(':nth-child(4) > .mt-4').should('be.visible');
       cy.get(':nth-child(5) > .relative').should('be.visible');
       cy.get(':nth-child(5) > .mt-8').contains('Fast & Easy to Load');
       cy.get(':nth-child(5) > .mt-4').should('be.visible');
       cy.get(':nth-child(6) > .relative').should('be.visible');
       cy.get(':nth-child(6) > .mt-8').contains('Light & Dark Version');
       cy.get(':nth-child(6) > .mt-4').should('be.visible');

       
    })
     it('Performance testing in mobile for feature-two-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=features--feature-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  