describe('performance and functionality testing for mobile for feature-five-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobilefor feature-five-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-five-story&viewMode=story');
       cy.get(':nth-child(1) > .mt-8 > :nth-child(1) > .text-base').should('be.visible');
       cy.get(':nth-child(1) > .mt-8 > :nth-child(2) > .text-base').should('be.visible');
       cy.get(':nth-child(1) > .mt-8 > :nth-child(3) > .text-base').should('be.visible');
       cy.get(':nth-child(1) > .mt-8 > :nth-child(4) > .text-base').should('be.visible');
       cy.get(':nth-child(2) > .mt-8 > :nth-child(1) > .text-base').should('be.visible');
       cy.get(':nth-child(2) > .mt-8 > :nth-child(2) > .text-base').should('be.visible');
       cy.get(':nth-child(2) > .mt-8 > :nth-child(3) > .text-base').should('be.visible');
       cy.get(':nth-child(2) > .mt-8 > :nth-child(4) > .text-base').should('be.visible');
       cy.get(':nth-child(3) > .text-gray-500').should('be.visible');
       cy.get(':nth-child(3) > .mt-8 > :nth-child(1)').should('be.visible');
       cy.get(':nth-child(3) > .mt-8 > :nth-child(2) > .text-base').should('be.visible');
       cy.get(':nth-child(3) > .mt-8 > :nth-child(3)').should('be.visible');
       cy.get(':nth-child(3) > .mt-8 > :nth-child(4) > .text-base').should('be.visible');
       cy.get(':nth-child(4) > .mt-8 > :nth-child(1) > .text-base').should('be.visible');
       cy.get(':nth-child(4) > .mt-8 > :nth-child(3) > .text-base').should('be.visible');
       cy.get(':nth-child(4) > .mt-8 > :nth-child(4) > .text-base').should('be.visible');
       cy.get('.h-8').should('be.visible');
       cy.get('.space-x-3').should('be.visible');
       cy.get('.w-full').should('be.visible');
      

       
    })
     it('Performance testing in mobile for feature-four-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-five-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  