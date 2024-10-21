describe('performance and functionality testing for mobile for dashboard-steps-one-story1 component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for dashboard-steps-one-story1',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=dashboard-steps--dashboard-steps-one-story&viewMode=story');
       cy.get(':nth-child(1) > .flex-1 > .text-base').contains('Create Free Account');
       cy.get(':nth-child(1) > .flex-1 > .mt-2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
       cy.get(':nth-child(2) > .flex-1 > .text-base').contains('Setup Your Profile');
       cy.get(':nth-child(2) > .flex-1 > .mt-2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
       cy.get(':nth-child(3) > .flex-1 > .text-base').contains('Start Monitoring');
       cy.get(':nth-child(3) > .flex-1 > .mt-2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    })
     it('Performance testing in mobile for dashboard-steps-one-story1',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=dashboard-steps--dashboard-steps-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  