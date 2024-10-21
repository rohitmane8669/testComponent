describe('performance and functinality testing of auther-details-one-story in desktop',{taskTimeout: 90000},() => {
    it('functinality testing of auther-details-one-story in desktop',()=> {
        cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=author-details--author-details-one-story&viewMode=story');
        cy.get('.object-cover').should('be.visible');
        cy.get('.text-lg').contains('Atron Calery');
        cy.get('.max-w-sm').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo, elit sit enim blandit enim sit molestie aana.');
        cy.get('[href="www.facebook.com"]').contains('Facebook');
        //cy.get('[href="www.facebook.com"]').click();
        cy.get('[href="www.twitter.com"]').contains('Twitter');
        //cy.get('[href="www.twitter.com"]').click();
        cy.get('[href="www.example.com"]').contains('Website');
       // cy.get('[href="www.example.com"]').click();
    })
    it('performance testing of auther-details-one-story component in desktop',() => {
        cy.viewport(1440, 1080);
    cy.visit('http://localhost:6006/iframe.html?args=&id=author-details--author-details-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})