describe('performance and functionality testing for mobile for catagory-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for catagory-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=catagory--catagory-one-story&viewMode=story');
       cy.get('.text-2xl').contains('Popular Categories');
       cy.get('.flex > :nth-child(1) > .text-base').contains('Choose from wide variety of items');
       cy.get(':nth-child(1) > .px-4 > .mt-5 > a > .absolute').should('be.visible');
       //cy.get(':nth-child(1) > .px-4 > .mt-5 > a > .absolute').click();
       cy.get(':nth-child(2) > .px-4 > .mt-5 > a > .absolute').should('be.visible');
       cy.get(':nth-child(3) > .px-4 > .mt-5 > a > .absolute').should('be.visible');
       cy.get(':nth-child(4) > .px-4 > .mt-5 > a > .absolute').should('be.visible');
       cy.get(':nth-child(5) > .px-4 > .mt-5 > a > .absolute').should('be.visible');
       cy.get(':nth-child(6) > .px-4 > .mt-5 > a > .absolute').should('be.visible');

    })
     it('Performance testing in mobile for catagory-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=catagory--catagory-one-story&viewMode=story#');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
