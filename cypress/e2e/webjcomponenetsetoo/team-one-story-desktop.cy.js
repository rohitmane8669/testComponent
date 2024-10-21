describe('performance and functionality testing for desktop for team-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for team-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=team--team-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Meet the brain');
       cy.get('.mt-4').contains('Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.');
       cy.get("img[alt='Team Member 1']").should('be.visible');
       cy.get("img[alt='Team Member 2']").should('be.visible');
       cy.get("img[alt='Team Member 3']").should('be.visible');
       cy.get("img[alt='Team Member 4']").should('be.visible');
       cy.get("img[alt='Team Member 5']").should('be.visible');
       cy.get("img[alt='Team Member 6']").should('be.visible');
    })
     it('Performance testing in desktop for mint one story',()=> {
      // cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=team--team-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })