describe('performance and functionality testing for mobile for chart-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for chart-one-story',()=> {
     //  cy.viewport(1440 ,1080);
       cy.visit('http://localhost:6006/iframe.html?args=&id=apex-chart--chart-one-story&viewMode=story');
       cy.get('.text-base').contains('Sales Report');
       cy.get('.inline-flex').should('be.visible');
       cy.get('.flex-wrap > .flex > :nth-child(1)').should('be.visible');
       cy.get('.flex-wrap > .flex > :nth-child(2)').should('be.visible');
       cy.get('.flex-wrap > .flex > :nth-child(3)').should('be.visible');
       cy.get('.flex-wrap > .flex > :nth-child(4)').should('be.visible');
       cy.get('[seriesname="Newxuser"] > .apexcharts-legend-text').contains('New user');
       cy.get('[seriesname="Returningxuser"] > .apexcharts-legend-text').contains('Returning user');

    })
     it('Performance testing in desktop for chart-one-story',()=> {
       //cy.viewport(1440 ,1080);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=apex-chart--chart-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
