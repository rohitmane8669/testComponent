describe('performance and functionality testing for mobile for feature-drops-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for feature-drops-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=featuredrops--feature-drops-one-story&viewMode=story');
       cy.get('.text-2xl').contains('Latest Collection in Last 7 Days');
       cy.get('.mt-6 > .text-base').contains("We've collected the latest NFTs for you to choose. Start collecting.");
       cy.get(':nth-child(1) > :nth-child(2) > .flex > .flex-1 > a > .absolute').should('be.visible');
       cy.get(':nth-child(2) > :nth-child(2) > .flex > .flex-1 > a > .absolute').should('be.visible');
       cy.get(':nth-child(3) > :nth-child(2) > .flex > .flex-1 > a > .absolute').should('be.visible');
       cy.get(':nth-child(4) > :nth-child(2) > .flex > .flex-1 > a > .absolute').should('be.visible');
    })
     it('Performance testing in mobile for  feature-drops-one-story component',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=featuredrops--feature-drops-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  