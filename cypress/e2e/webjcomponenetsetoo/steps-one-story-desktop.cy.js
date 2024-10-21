describe('performance and functionality testing for desktop for steps-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for steps-one-story',()=> {
      //  cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=steps--steps-one-story&viewMode=story');
       cy.get('.text-3xl').contains('How does it work?');
       cy.get('.max-w-lg').contains('Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.');
      
    })
     it('Performance testing in desktop for mint one story',()=> {
       //cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=steps--steps-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })