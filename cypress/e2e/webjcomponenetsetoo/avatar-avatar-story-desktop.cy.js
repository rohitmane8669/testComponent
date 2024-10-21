describe('functinal and performance testing of avatar-story component in desktop',{taskTimeout: 90000},()=> {
    it('functinality testion of avatar-story component in desktop',() => {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=avatar--avatar-story&viewMode=story');
        cy.get('.object-cover').should('be.visible');
    })
    it('performance of avatar-story component in desktop',()=> {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=avatar--avatar-story&viewMode=story');
        cy.viewport(1360,760);
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})