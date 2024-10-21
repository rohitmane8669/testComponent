describe('performance and functionality testing for mobile for statistics-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for statistics-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=statistics--statistics-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Numbers tell our story');
       cy.get('.mt-3').contains('Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.');
       cy.get('.grid > :nth-child(1)').should('be.visible');
       cy.get('.grid > :nth-child(2)').should('be.visible');
       cy.get('.grid > :nth-child(3)').should('be.visible');
    })
     it('Performance testing in mobile for statistics-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=statistics--statistics-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })