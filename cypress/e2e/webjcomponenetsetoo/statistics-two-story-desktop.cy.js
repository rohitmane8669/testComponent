describe('performance and functionality testing for mobile for statistics-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for statistics-two-story',()=> {
      //  cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=statistics--statistics-two-story&viewMode=story');
       cy.get('.text-3xl').contains('The only platform that creates unique & rare UI Kits with TailwindCSS');
       cy.get(':nth-child(1) > .text-5xl').contains('110+');
       cy.get(':nth-child(1) > .mt-5').contains('Blocks');
       cy.get(':nth-child(2) > .text-5xl').contains('29');
       cy.get(':nth-child(2) > .mt-5').contains('Templates');
       cy.get(':nth-child(3) > .text-5xl').contains('3400+');
       cy.get(':nth-child(3) > .mt-5').contains('Customers');
       cy.get(':nth-child(4) > .text-5xl').contains('2844');
       cy.get(':nth-child(4) > .mt-5').contains('Support Tickets');
    })
     it('Performance testing in mobile for statistics-two-story',()=> {
       //cy.viewport(360 ,640);
    //  cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=statistics--statistics-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })