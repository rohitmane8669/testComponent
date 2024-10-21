describe('performance and functionality testing for mobile for page-title-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for page-title-one-story',()=> {
        //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=pagetitle--page-title-one-story&viewMode=story');
       cy.get('ul.flex').should('be.visible');
       cy.get('.mt-5').contains('Customer Review');
    })
     it('Performance testing in mobile for mint one story',()=> {
       //cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=pagetitle--page-title-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })