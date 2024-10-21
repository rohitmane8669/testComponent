describe('functinality and performance testing of blog-two-story component in desktop',() => {
    it('functinality testing of blog-two-story component in desktop',() => {
       // cy.viewport(1440 , 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog--blog-two-story&viewMode=story');
        cy.get('.text-3xl').contains('Latest from our blog');
        cy.get(':nth-child(1) > .overflow-hidden > .object-cover').should('be.visible');
        cy.get(':nth-child(1) > .flex-col > .flex-1 > .text-xs').contains('20 July 2022');
        cy.get(':nth-child(1) > .flex-col > .flex-1 > .mt-4 > a').contains('Popular design systems to learn from in 2022');
        cy.get(':nth-child(1) > .flex-col > .mt-6 > .flex > .object-cover').should('be.visible');
        cy.get(':nth-child(2) > .overflow-hidden > .object-cover').should('be.visible');
        cy.get(':nth-child(2) > .flex-col > .flex-1 > .text-xs').contains('08 July 2022');
        cy.get(':nth-child(2) > .flex-col > .flex-1 > .mt-4 > a').contains('Accessibility makes you a better product designer');
        cy.get(':nth-child(2) > .flex-col > .mt-6 > .flex > .object-cover').should('be.visible');
        cy.get(':nth-child(3) > .overflow-hidden > .object-cover').should('be.visible');
        cy.get(':nth-child(3) > .flex-col > .flex-1 > .text-xs').contains('16 June 2022');
        cy.get(':nth-child(3) > .flex-col > .flex-1 > .mt-4 > a').contains('Accessibility makes you a better product designer');
        cy.get(':nth-child(3) > .flex-col > .mt-6 > .flex > .object-cover').should('be.visible');
        cy.get('.pb-2').click();
    })

    it('performance testing of blog-two-story component in desktop' ,{taskTimeout:90000},()=>{
       // cy.viewport(1440 , 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog--blog-two-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})