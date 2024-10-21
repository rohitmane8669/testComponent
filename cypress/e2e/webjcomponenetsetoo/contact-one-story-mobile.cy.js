describe('performance and functionality testing for mobile for contact-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for contact-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=contact--contact-one-story&viewMode=story');
       cy.get('.mt-10 > .relative').should('be.visible');
       cy.get('.shadow-xl > .p-6').should('be.visible');
       cy.get('#fullName').type('rohit avinash mane');
       cy.get('#email').type('rohitmane8669@gmail.com');
       cy.get('#phone').type('8669326053');
       cy.get('#message').type('hi how are you');
       cy.get('.inline-flex').click();
    })
     it('Performance testing in mobile for contact-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=contact--contact-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
