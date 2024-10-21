describe('performance and functionality testing for desktop for header-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for header-one-story',()=> {
      // cy.viewport(360 ,640);
      //cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-one-story&viewMode=story');
       cy.get('.w-auto').should('be.visible');
       cy.get("div[class='hidden md:space-x-10 md:items-center md:justify-center md:flex'] a:nth-child(1)").should('be.visible');
       cy.get("div[class='hidden md:space-x-10 md:items-center md:justify-center md:flex'] a:nth-child(1)").should('be.visible');
       cy.get("div[class='hidden md:space-x-10 md:items-center md:justify-center md:flex'] a:nth-child(1)").should('be.visible');
       cy.get(':nth-child(4) > .inline-flex').should('be.visible');
    })
     it('Performance testing in desktop for header-one-story',()=> {
      // cy.viewport(360 ,640);
       //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
       })
    
    })
  