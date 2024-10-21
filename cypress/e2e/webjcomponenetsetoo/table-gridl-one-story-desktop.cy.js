describe('performance and functionality testing for desktop for table-gridl-one-story component',{taskTimeout : 90000},() =>
    {
    it('functinality testing of table-gridl-one-story component in desktop', () =>
    {
      //  cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=table-grid--table-gridl-one-story&viewMode=story');
        cy.get('.text-lg').contains('Latest Payments');
        cy.get('.mt-6 > :nth-child(1) > :nth-child(1)').should('be.visible');
        cy.get('.mt-6 > :nth-child(1) > :nth-child(2)').should('be.visible');
        cy.get('.mt-6 > :nth-child(2) > :nth-child(1)').should('be.visible');
        cy.get('.mt-6 > :nth-child(2) > :nth-child(1)').should('be.visible');
        cy.get('.mt-6 > :nth-child(2) > :nth-child(2)').should('be.visible');
        cy.get('.mt-6 > :nth-child(3) > :nth-child(1)').should('be.visible');
        cy.get('.mt-6 > :nth-child(3) > :nth-child(2)').should('be.visible');
      
    })
    it('Performance testing in desktop fortable-gridl-one-story desktop component', () =>{
        //cy.viewport(360 ,640);
        // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=table-grid--table-gridl-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
    })