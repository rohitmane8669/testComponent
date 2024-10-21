describe('performance and functionality testing for desktop for interactive-button-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for interactive-button-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=imagegallarys--image-gallary-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Get access to rare NFTs');
       cy.get('.text-base').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tortor cum dictum nulla. Ipsum eget faucibus facilisis turpis viverra malesuada tellus.');
       cy.get(':nth-child(1) > .w-full').should('be.visible');
       cy.get(':nth-child(2) > .w-full').should('be.visible');
       cy.get(':nth-child(3) > .w-full').should('be.visible');
       cy.get(':nth-child(4) > .w-full').should('be.visible');
       cy.get(':nth-child(5) > .w-full').should('be.visible');
       cy.get(':nth-child(6) > .w-full').should('be.visible');
       cy.get(':nth-child(7) > .w-full').should('be.visible');
       cy.get(':nth-child(8) > .w-full').should('be.visible');
       cy.get(':nth-child(9) > .w-full').should('be.visible');

    })
     it('Performance testing in desktop for interactive-button-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=imagegallarys--image-gallary-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  