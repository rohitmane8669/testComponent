describe('functinality and performance in mobile',{taskTimeout : 90000},()=> {
   // it('functinality of componet',()=> {
    //    cy.visit('http://localhost:3000/');
        // cy.wait(4000);
        // cy.get('.text-4xl').contains('A special credit card made for Developers.');
        // cy.get('.mt-2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.');
        // cy.get('.grid > :nth-child(2) > .w-full').should('be.visible');
    //})
     it('performance testing',() => {
         cy.viewport(1536 , 960);
         cy.visit('http://localhost:3000/');
    //     cy.lighthouse({
    //         performance:20,
    //         accessibility: 40,
    //         "best-practices": 30,
    //         seo: 30,
    //         //pwa: 80,
    //       })
    // })
    cy.lighthouse(
        {
          performance: 60,
          accessibility: 60,
          'best-practices': 60,
          seo: 60,
        },
        {
          formFactor: 'desktop',
          screenEmulation: {
            mobile: false,
            disable: false,
            width: Cypress.config('viewportWidth'),
            height: Cypress.config('viewportHeight'),
            deviceScaleRatio: 1,
           },
          },
      )
})
})