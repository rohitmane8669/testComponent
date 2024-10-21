describe('performance and functionality testing for mobile for faq-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for faq-two-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=faq--faq-two-story&viewMode=story');
       cy.get('.text-3xl').contains('Frequently Asked Questions');
       cy.get('.max-w-lg').contains('With lots of unique blocks, you can easily build a page without coding. Build your next landing page.');
       cy.get(':nth-child(1) > h3 > .flex').click();
       cy.get(':nth-child(2) > h3 > .flex').click();
       cy.get(':nth-child(3) > h3 > .flex').click();
       cy.get(':nth-child(4) > h3 > .flex').click();

       
       
    })
     it('Performance testing in mobile for faq-two-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=faq--faq-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  