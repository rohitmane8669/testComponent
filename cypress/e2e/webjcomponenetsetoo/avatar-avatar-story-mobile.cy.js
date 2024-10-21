describe('functinal and performance testing of avatar-story component in mobile',{taskTimeout: 90000},()=> {
    // it('functinality testion of avatar-story component in mobile',() => {
    //     cy.viewport(360, 640);
    //     cy.visit('http://localhost:6006/iframe.html?args=&id=avatar--avatar-story&viewMode=story');
    //     cy.get('.object-cover').should('be.visible');
    // })
    it('performance of avatar-story component in mobile',()=> {
        cy.viewport(360, 640);
        cy.visit('/');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})