describe('functinality and performance testing of component blog-one-story in desktop',{taskTimeout:90000},() => {
    it('functinality of component blog-one-story in desktop ',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog--blog-one-story');
        cy.get('.text-3xl').contains('We share regular updates in Rareblocks');
        cy.get(':nth-child(1) > a > .absolute').should('be.visible');
        cy.get(':nth-child(2) > a > .absolute').should('be.visible');
        cy.get(':nth-child(3) > a > .absolute').should('be.visible');
    })

    it('performance  of component blog-one-story in desktop ',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog--blog-one-story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
})
})