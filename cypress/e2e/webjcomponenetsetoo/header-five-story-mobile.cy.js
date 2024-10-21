describe('performance and functionality testing for mobile for header-five-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for header-five-story',()=> {
       //cy.viewport(360 ,640);
      cy.viewport(1920 ,1060);
       cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-five-story&viewMode=story');
       cy.get('.flex-shrink-0 > .flex > .w-auto').should('be.visible');
       cy.get("div[class='hidden lg:flex lg:items-center lg:space-x-10 '] a:nth-child(1)").contains('Features');
       cy.get("div[class='hidden lg:flex lg:items-center lg:space-x-10 '] a:nth-child(2)").contains('Solutions');
       cy.get("div[class='hidden lg:flex lg:items-center lg:space-x-10 '] a:nth-child(3)").contains('Resources');
       cy.get("div[class='hidden lg:flex lg:items-center lg:space-x-10 '] a:nth-child(4)").contains('Pricing');
       cy.get('.justify-between > .items-center').should('be.visible');


    })
     it('Performance testing in mobile for header-four-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=headers--header-five-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
       })
    
    })
  