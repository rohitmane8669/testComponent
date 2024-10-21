describe('performance and functionality testing for mobile for hero-three-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for hero-three-story',()=> {
        cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=hero--hero-three-story&viewMode=story');
       cy.get('.text-4xl').contains('A special credit card made for Developers.');
       cy.get('.mt-2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.');
       cy.get(':nth-child(1) > .text-3xl').contains('2943');
       cy.get(':nth-child(1) > .ml-3').contains('Cards Delivered');
       cy.get(':nth-child(2) > .text-3xl').contains('$1M+');
       cy.get(':nth-child(2) > .ml-3').contains('Transaction Completed');
       cy.get('.grid > :nth-child(2) > .w-full').should('be.visible');
    })
     it('Performance testing in mobile for interactive-button-story',()=> {
       cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=hero--hero-three-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  