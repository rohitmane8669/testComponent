describe('functinality and performance testing of component blog-featured-one-story in mobile',{taskTimeout:90000},() => {
    it('functinality of component blog-featured-one-story in mobile ',() => {
        cy.viewport(360, 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blogfeatured--blog-featured-one-story&viewMode=story');
        cy.get('.px-3').should('be.visible');
        cy.get('.text-2xl > a').contains('How to write content about your photographs');
        cy.get('.text-sm').contains('April 09, 2022');
        cy.get('.font-normal').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis commodo magna risus maecenas nisl sed cras lacus, vestibulum. Dictum nisi amet.');
        cy.get('.inline-flex').should('be.visible');
      //  cy.get('.inline-flex').click();
    })
    it('performance  of component blog-one-story in mobile ',() => {
        cy.viewport(360, 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blogfeatured--blog-featured-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    });
})