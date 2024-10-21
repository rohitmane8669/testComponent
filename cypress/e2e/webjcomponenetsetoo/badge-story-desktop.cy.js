describe('functinality and performance testing of component badge-story in desktop',{taskTimeout:90000},() => {
    it('functinality of component badge-story in desktop ',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=badge--badge-story&viewMode=story');
        cy.get('.text-xs').should('be.visible');
        cy.get('.text-xs').click();
    })
    it('performance  of component badge-story in desktop ',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=badge--badge-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
})
})