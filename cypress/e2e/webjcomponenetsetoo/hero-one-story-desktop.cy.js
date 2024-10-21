describe('performance and functionality testing for desktop for hero-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for hero-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=hero--hero-one-story&viewMode=story');
       cy.get('.text-gray-600').contains('Smart email campaign builder, made for Developers');
       cy.get('.mt-5').contains('Turn your visitors into profitable business');
       cy.get('.px-8').should('be.visible');
       cy.get('.px-3 > .px-6').should('be.visible');
       cy.get('.mt-8').should('be.visible');
       cy.get('.transform').click();
    })
     it('Performance testing in desktop for hero-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=hero--hero-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  