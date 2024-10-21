describe('functinality and  performance of blog-content-one-story component in mobile',{taskTimeout: 90000},()=> {
    it('functinality testing of blog-content-one-story component in mobile',()=> {
        cy.viewport(360, 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blogcontent--blog-content-one-story&viewMode=story');
        cy.get('nav.flex').should('be.visible');
        cy.get('.mt-6').contains('Five pizza tips you need to learn now');
        cy.get('.max-w-xl > .mt-8').should('be.visible');
        cy.get('.aspect-w-16 > .object-cover').should('be.visible');
        cy.get('.space-x-3').should('be.visible');
        cy.get(':nth-child(1) > .object-cover').should('be.visible');
})
it('performance of of blog-content-one-story component in mobile ',()=> {
    cy.viewport(360, 640);
    cy.visit('http://localhost:6006/iframe.html?args=&id=blogcontent--blog-content-one-story&viewMode=story');
    cy.lighthouse({
        performance:20,
        accessibility: 40,
        "best-practices": 30,
        seo: 30,
        //pwa: 80,
      })
})
})