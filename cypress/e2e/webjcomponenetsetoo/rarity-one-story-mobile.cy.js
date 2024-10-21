describe('performance and functionality testing for mobile for rarity-one-story component',{taskTimeout: 90000},() =>
    {
    // it('functinality testing in mobile for rarity-one-story',()=> {
    //    cy.viewport(360 ,640);
    //    cy.visit('http://localhost:6006/iframe.html?args=&id=radioswitcher--radio-switcher-one-story&viewMode=story');
    //    cy.get('.mt-4 > :nth-child(1) > :nth-child(1)').should('be.visible');
    //    cy.get('#mailchimp').click();
    //    cy.get('#mailchimp').should('be.visible');
    //    cy.get('#telegram').click();
    //    cy.get('.mt-4 > :nth-child(3)').should('be.visible');
    //    cy.get('#zapier').click();
    //    cy.get('.mt-4 > :nth-child(4) > :nth-child(1)').should('be.visible');
    //    cy.get('#dropbox').click();
     
    // })
     it('Performance testing in mobile for rarity-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=rarity--rarity-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })