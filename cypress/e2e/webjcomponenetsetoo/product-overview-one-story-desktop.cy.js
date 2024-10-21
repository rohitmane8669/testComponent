describe('performance and functionality testing for mobile for product-overview-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for product-overview-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=productoverview--product-overview-one-story&viewMode=story');
       cy.get('.object-cover').should('be.visible');
       cy.get('li:nth-child(1) p:nth-child(1)').contains('Get your superpower');
       cy.get(':nth-child(1) > .mt-5').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.');
       cy.get(':nth-child(2) > .text-lg').contains('Superfast 5G, more faster than ever');
       cy.get(':nth-child(2) > .mt-5').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.');
       cy.get(':nth-child(3) > .text-lg').contains('New year, new design');
       cy.get(':nth-child(3) > .mt-5').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.');
     })
     it('Performance testing in mobile for product-overview-one-story',()=> {
       //cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=productoverview--product-overview-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })