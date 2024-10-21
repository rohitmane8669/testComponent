describe('performance and functionality testing for mobile for cloud-logo-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for cloud-logo-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=cloud-logo--cloud-logo-one-story&viewMode=story');
        cy.wait(4000);
        cy.get('.text-xl').contains('Trusted by world class creators');
        cy.get(':nth-child(1) > .object-contain').should('be.visible');
        cy.get(':nth-child(2) > .object-contain').should('be.visible');
        cy.get(':nth-child(3) > .object-contain').should('be.visible');
        cy.get(':nth-child(4) > .object-contain').should('be.visible');
    })
     it('Performance testing in mobile for cloud-logo-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=cloud-logo--cloud-logo-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
