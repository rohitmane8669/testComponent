describe('performance and functionality testing for mobile for footer-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for footer-two-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-two-story&viewMode=story');
       //cy.get('.w-auto').should('be.visible');
       cy.get('.grid-cols-2 > :nth-child(1)').should('be.visible');
       cy.get('.grid-cols-2 > :nth-child(2)').should('be.visible');
       cy.get("div[class='col-span-2 sm:col-span-1']").should('be.visible');
       cy.get("body > div:nth-child(5) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > h6:nth-child(1)").contains('Subscribe to newsletter');
       cy.get('.block').type('rohitmane8669@gmail.com');
       //cy.get('.px-10').click();
      
       cy.get("div[class='col-span-2 sm:col-span-3 xl:pl-20'] div:nth-child(1) h6:nth-child(1)").contains('Call us');
       cy.get("body > div:nth-child(5) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > p:nth-child(2) > a:nth-child(1)").contains('(239) 555-0108');
       cy.get("div[class='col-span-2 sm:col-span-3 xl:pl-20'] div:nth-child(1) h6:nth-child(1)").should('be.visible');
       cy.get("body > div:nth-child(5) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1)").should('be.visible');
       cy.get('.justify-start').should('be.visible');
   
      })
     it('Performance testing in mobile for footer-two-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  