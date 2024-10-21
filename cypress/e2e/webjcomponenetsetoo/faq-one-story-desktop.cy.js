describe('performance and functionality testing for desktop for faq-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for faq-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=faq--faq-one-story&viewMode=story');
       cy.get('.text-3xl').contains('Frequently Asked Questions');
       cy.get('.max-w-xl').contains('Amet minim mollit non deserunt ullamco est sit aliqua dolor do');
       cy.get(':nth-child(1) > .items-center').click();
       cy.get(':nth-child(2) > .items-center').click();
       cy.get(':nth-child(3) > .items-center').click();
       cy.get(':nth-child(4) > .items-center').click();
       
    })
     it('Performance testing in desktop for faq-one-story',()=> {
       //cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=faq--faq-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  