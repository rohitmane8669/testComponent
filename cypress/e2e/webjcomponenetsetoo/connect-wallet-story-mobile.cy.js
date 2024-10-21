describe('performance and functionality testing for mobile for connect-wallet-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for connect-wallet-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=connect-wallet--connect-wallet-story&viewMode=story');
      cy.wait(4000);
      cy.get('.text-2xl').contains('Connect your wallet');
      cy.get('.mt-2').contains('Lorem ipsum dolor sit amet, consectetur.');
      //cy.get(':nth-child(1) > .flex > .text-gray-400 > .absolute').should('be.visible');
    })
     it('Performance testing in mobile for connect-wallet-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=connect-wallet--connect-wallet-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
