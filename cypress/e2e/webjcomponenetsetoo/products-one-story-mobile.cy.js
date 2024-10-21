describe('performance and functionality testing for mobile for products-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for products-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=products--products-one-story&viewMode=story');
       cy.get("h2[class='text-2xl font-bold text-gray-900 sm:text-3xl']").contains(' Our featured items');
       cy.get(':nth-child(1) > .items-start > :nth-child(1) > .text-xs > a > .absolute').should('be.visible');
       cy.get(':nth-child(2) > .items-start > :nth-child(1) > .text-xs > a > .absolute').should('be.visible');
       cy.get(':nth-child(3) > .items-start > :nth-child(1) > .text-xs > a > .absolute').should('be.visible');
       cy.get(':nth-child(4) > .items-start > :nth-child(1) > .text-xs > a > .absolute').should('be.visible');
      // cy.get(':nth-child(4) > .items-start > :nth-child(1) > .text-xs > a > .absolute').click();
    })
     it('Performance testing in mobile for products-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=products--products-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })