describe('functinality and performance testing of component blog-listing-two-story in desktop',{taskTimeout:90000},() => {
    it('functinality of component blog-listing-two-story in desktop ',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-listing--blog-listing-two-story&viewMode=story');
        cy.get('.text-3xl').contains('Read latest collection');
        cy.get('.mt-4').contains('Create custom landing pages with Rareblocks that converts more visitors than any website.');
        cy.get(':nth-child(1) > .shrink-0 > .w-28').should('be.visible');
        cy.get(':nth-child(1) > .flex-1 > .max-w-xs > a').contains('How a visual artist redefines success in graphic design');
        cy.get(':nth-child(2) > .shrink-0 > .w-28').should('be.visible');
        cy.get(':nth-child(2) > .flex-1 > .max-w-xs > a').contains('How a visual artist redefines success in graphic design');
        cy.get(':nth-child(3) > .shrink-0 > .w-28').should('be.visible');
        cy.get(':nth-child(3) > .flex-1 > .max-w-xs > a').contains('How a visual artist redefines success in graphic design');
        cy.get(':nth-child(4) > .shrink-0 > .w-28').should('be.visible');
        cy.get(':nth-child(4) > .flex-1 > .max-w-xs > a').contains('How a visual artist redefines success in graphic design');
        cy.get(':nth-child(5) > .shrink-0 > .w-28').should('be.visible');
        cy.get(':nth-child(5) > .flex-1 > .max-w-xs > a').contains('How a visual artist redefines success in graphic design');
        cy.get(':nth-child(6) > .shrink-0 > .w-28').should('be.visible');
        cy.get(':nth-child(6) > .flex-1 > .max-w-xs > a').contains('How a visual artist redefines success in graphic design');
    
    
    })
    it('performance  of component blog-listing-two-story in desktop ',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-listing--blog-listing-two-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})