describe('functinality and performance testing of component blog-newsletter-one-story in mobile',{taskTimeout:90000},() => {
    it('functinality of component blog-newsletter-one-story in mobile ',() => {
        cy.viewport(360, 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blognewsletter--blog-newsletter-one-story&viewMode=story');
        cy.get('.object-cover').should('be.visible');
        cy.get('.text-3xl').contains('Download free eBook of best growth tips.');
        cy.get('.mt-4').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa enim.');
        cy.get('#email').click();
        cy.get('.group > .relative').click();
    })
    it('performance  of component blog-newsletter-one-story in mobile ',() => {
        cy.viewport(360, 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blognewsletter--blog-newsletter-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})