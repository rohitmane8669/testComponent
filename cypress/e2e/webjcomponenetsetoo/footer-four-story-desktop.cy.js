describe('performance and functionality testing for desktop for feature-four-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in  desktop for feature-four-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-four-story&viewMode=story');
       cy.get('.max-w-xl').contains(' Build beautiful landing pages fast using Rareblocks Kit.');
       cy.get("li[class='flex gap-3 sm:items-start items-center'] span[class=' text-xl font-normal text-white font-pj']").contains('8502 Preston Rd. Inglewood, Maine 98380, USA');
       cy.get(':nth-child(2) > .text-xl').contains('support@rareblocks.xyz');
       cy.get(':nth-child(1) > .text-lg').should('be.visible');
       cy.get(':nth-child(2) > .text-lg').should('be.visible');
       cy.get('.flex > :nth-child(3) > .text-lg').should('be.visible');
       cy.get('.flex > :nth-child(4)').should('be.visible');
       cy.get(':nth-child(5) > .text-lg').should('be.visible');

       
    })
     it('Performance testing in desktop for feature-four-story',()=> {
       //cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-four-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  