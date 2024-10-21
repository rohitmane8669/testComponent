describe('performance and functionality testing for desktop for header-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for header-two-story',()=> {
     //  cy.viewport(360 ,640);
     //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-two-story&viewMode=story');
       cy.get('.w-auto').should('be.visible');
       cy.get('.ml-10 > :nth-child(1)').should('be.visible');
       cy.get('.ml-10 > :nth-child(2)').should('be.visible');
       cy.get('.ml-10 > :nth-child(3)').should('be.visible');
       cy.get('.ml-10 > :nth-child(4)').should('be.visible');
       cy.get("a[class='relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full']").should('be.visible');
      
    })
     it('Performance testing in desktop for header-two-story',()=> {
       //cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
  