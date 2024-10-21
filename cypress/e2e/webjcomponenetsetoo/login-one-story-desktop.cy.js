describe('performance and functionality testing for desktop for login-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for login-one-story',()=> {
       // cy.viewport(1536 ,960);
       cy.visit('http://localhost:6006/iframe.html?args=&id=login--login-one-story&viewMode=story');
       cy.wait(5000);
       cy.get('.flex-1 > .w-auto').should('be.visible');
       cy.get('.text-3xl').contains('Welcome back to Rareblocks UI Kit');
       cy.get(':nth-child(1) > .relative > .block').type('rohitmane8669@gmail.com');
       cy.get(':nth-child(2) > .relative > .block').type('23354gbignfk');
       cy.get('#terms').click();
       cy.get('.justify-between > .font-medium').should('be.visible');
       cy.get('.mt-8 > .relative').should('be.visible');
       cy.get('.mt-10.text-base').contains('Don’t have an account? Sign up now');
    })
     it('Performance testing in desktop for login-one-story',()=> {
       //cy.viewport(360 ,640);
       //cy.viewport(1536 ,960);
        cy.visit('http://localhost:6006/iframe.html?args=&id=login--login-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })