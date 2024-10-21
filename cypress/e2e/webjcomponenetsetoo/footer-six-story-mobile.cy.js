describe('performance and functionality testing for mobile for footer-six-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for footer-six-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-six-story&viewMode=story');
       cy.wait(4000);
       cy.get("div[class='lg:pl-12'] p[class='text-xs font-semibold tracking-widest text-blue-600 uppercase']").should('be.visible');
       cy.get("div[class='lg:pl-12'] ul[class='mt-8 space-y-5']").should('be.visible');
       cy.get(':nth-child(3) > .text-xs').contains('Help');
       cy.get(':nth-child(3) > .mt-8').should('be.visible');
       cy.get("div[class='col-span-1 sm:col-span-1'] p[class='text-xs font-semibold tracking-widest text-blue-600 uppercase']").contains('Resources');
       cy.get("div[class='col-span-1 sm:col-span-1'] ul[class='mt-8 space-y-5']").should('be.visible');
    })
     it('Performance testing in mobile for footer-three-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=footer--footer-six-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  