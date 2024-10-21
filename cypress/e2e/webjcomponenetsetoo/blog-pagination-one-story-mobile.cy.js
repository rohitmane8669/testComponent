describe('functinality and performance testing ofblog-pagination-one-story component in mobile',{taskTimeout :  90000},() => {
    it('functinality testing of blog-pagination-one-story component in mobile',() => {
        cy.viewport(360 , 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-pagination--blog-pagination-one-story&viewMode=story');
        cy.get('.flex > :nth-child(3)').should('be.visible');
        cy.get('.flex > :nth-child(4)').should('be.visible');
        cy.get('.flex > :nth-child(5)').should('be.visible');
        cy.get('.flex > :nth-child(6)').should('be.visible');

    })
    it('functinality testing of blog-pagination-one-story component in mobile',() => {
        cy.viewport(360 , 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-pagination--blog-pagination-one-story&viewMode=story#');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})