describe('performance and functionality testing for desktop for hero-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for hero-two-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=hero--hero-two-story&viewMode=story');
       cy.get('.tracking-wider').contains('A social media for learners');
       cy.get('.text-4xl').contains('Connect & learn from the experts');
       cy.get("p[class='mt-4 text-base text-black lg:mt-8 sm:text-xl']").contains('Grow your career fast with the right mentor.');
       cy.get('.inline-flex').should('be.visible');
       cy.get('.w-full').should('be.visible');
    
    
    })
     it('Performance testing in desktop for interactive-button-story',()=> {
      
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=hero--hero-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  