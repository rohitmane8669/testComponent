describe('performance and functionality testing for desktop fornewsletter-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for newsletter-two-story',()=> {
        //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=newsletter--newsletter-two-story&viewMode=story');
       cy.get('.text-3xl').contains('Join our newsletter & stay updated.');
       cy.get('.mt-6.text-lg.font-normal.text-gray-400').contains('Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint');
       cy.get('.inline-flex').click();
    })
     it('Performance testing in desktop for newsletter-two-story',()=> {
       //cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=newsletter--newsletter-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })