describe('performance and functionality testing for mobile for sign-up-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for sign-up-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=signup--sign-up-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Get started your 14 days free trial now');
       cy.get(':nth-child(1) > .relative > .block').type('rohitmane8669@gmail.com');
       cy.get(':nth-child(2) > .relative > .block').type('rohit@1234');
       cy.get('#terms').click();
       cy.get('.mt-8 > .relative').should('be.visible');
       cy.get('.grid > .absolute').should('be.visible');
    })
     it('Performance testing in mobile for sign-up-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=signup--sign-up-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })