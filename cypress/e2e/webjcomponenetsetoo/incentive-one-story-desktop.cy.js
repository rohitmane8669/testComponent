describe('performance and functionality testing for desktop for incentive-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for incentive-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=incentives--incentive-one-story&viewMode=story');
        cy.wait(4000);
       cy.get(':nth-child(1) > .ml-4 > .text-base').contains('Secured Payments');
       cy.get(':nth-child(1) > .ml-4 > .mt-1').contains('Make payment with ease');
       cy.get(':nth-child(2) > .ml-4 > .text-base').contains('Shop for Anyone');
       cy.get(':nth-child(2) > .ml-4 > .mt-1').contains('You can shop for any category');
       cy.get(':nth-child(3) > .ml-4 > .text-base').contains('Free Delivery');
       cy.get(':nth-child(3) > .ml-4 > .mt-1').contains('Get 100% free delivery');
       cy.get(':nth-child(4) > .ml-4 > .text-base').contains('Quality Products');
       cy.get(':nth-child(4) > .ml-4 > .mt-1').contains('Made with highest care');
    })
     it('Performance testing in desktop for interactive-button-story',()=> {
      // cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=incentives--incentive-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  