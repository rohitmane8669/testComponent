describe('performance and functionality testing for mobile fornewsletter-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for newsletter-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=newsletter--newsletter-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Join our newsletter');
       cy.get('.mt-4').should('be.visible');
       cy.get('#email').type('rohitmane8669@gmail.com');
       cy.get('.inline-flex').click();
    })
     it('Performance testing in mobile for newsletter-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=newsletter--newsletter-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })