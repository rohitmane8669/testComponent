describe('performance and functionality testing for desktop for program-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for program-one-story',()=> {
       // cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=program--program-one-story&viewMode=story');
       cy.get('.tracking-tighter > .font-sans').contains('Another Title');
       cy.get('.tracking-tighter > .font-serif').contains('Subtitle for Another Component');
       cy.get('.flex-1 > .mt-6').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
       cy.get('.inline-flex').should('be.visible');
       cy.get('.absolute').should('be.visible');
       cy.get("div[class='overflow-hidden border divide-y rounded-lg border-neutral divide-neutral'] div:nth-child(1)").should('be.visible');
       //cy.get('.lg\:pl-16 > .overflow-hidden > :nth-child(2)').should('be.visible');
       cy.get("div[class='overflow-hidden border divide-y rounded-lg border-neutral divide-neutral'] div:nth-child(1)").should('be.visible');
       cy.get("div[class='overflow-hidden border divide-y rounded-lg border-neutral divide-neutral'] div:nth-child(1)").should('be.visible');
    })
     it('Performance testing in desktop for mint one story',()=> {
      // cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=program--program-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })