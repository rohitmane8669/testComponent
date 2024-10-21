describe('functinality and performance testing of author-one-story component in desktop',{taskTimeout: 90000},()=> {
    it('functinality testing of author-one-story component in desktop ',() => {
      cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?id=author--author-one-story&viewMode=story');
        cy.wait(5000);
        cy.get('.text-3xl').contains('Our Authors');
        cy.get('.max-w-md > .mt-4').contains('In a creative workplace, employees responsibly try different solutions.');
        cy.get(':nth-child(1) > .object-cover').should('be.visible');
        cy.get(':nth-child(1) > .flex > :nth-child(1) > .text-lg').contains('HungerGames');
        cy.get(':nth-child(1) > .flex > :nth-child(1) > .mt-1').contains('@creativeGig');
        cy.get(':nth-child(1) > .flex > :nth-child(2) > :nth-child(1)').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor.');
        cy.get(':nth-child(1) > .flex > :nth-child(2) > .mt-4').contains('Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque.');
        //cy.get(':nth-child(1) > .flex > :nth-child(3) > .inline-flex').click();
      cy.get(':nth-child(1) > .flex > :nth-child(3) > .inline-flex').should('be.visible');
      cy.get(':nth-child(2) > .object-cover').should('be.visible');
      cy.get(':nth-child(2) > .flex > :nth-child(1) > .text-lg').contains('CodeMaster');
      cy.get(':nth-child(2) > .flex > :nth-child(1) > .mt-1').contains('@codeWizard');
      cy.get(':nth-child(2) > .flex > :nth-child(3) > .inline-flex').should('be.visible');
    })
    it('performance testing of author-one-story component in desktop',()=>{
      cy.viewport(1440, 1080);
        cy.visit('http://localhost:6006/iframe.html?id=author--author-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})