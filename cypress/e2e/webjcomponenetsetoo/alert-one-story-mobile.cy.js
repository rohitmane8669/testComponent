describe('functinality and performance testing of alert-one-story component in mobile',{taskTimeout : 90000}, () => {
    it('functinality testing for alert-one-story component in mobile',() => {
        cy.viewport(360, 640)
        cy.visit('http://localhost:6006/iframe.html?args=&id=alert--alert-one-story&viewMode=story');
        cy.get('.p-3').should('be.visible');
        cy.get('.ml-3').contains(' New Item has been created');
        cy.get('.inline-flex').click();
    })
    it('performance testing for alet-one-story component in mobile',() => {
cy.viewport(360, 640)
cy.visit('http://localhost:6006/iframe.html?args=&id=alert--alert-one-story&viewMode=story');
cy.lighthouse({
    performance:20,
    accessibility: 40,
    "best-practices": 30,
    seo: 30,
    //pwa: 80,
  })
    })
})