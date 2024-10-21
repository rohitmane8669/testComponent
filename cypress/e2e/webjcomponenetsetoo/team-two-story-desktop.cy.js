describe('performance and functionality testing for desktop for team-two-story component',{taskTimeout : 90000},() =>
    {
    it('functinality testing of team-two-story component in mobile', () =>
    {
        //cy.viewport(360 ,640);
        //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=team--team-two-story&viewMode=story');
        cy.get('.text-5xl').contains('Meet Our Team');
        cy.get(':nth-child(1) > .mt-5').contains('Albert Flores');
        cy.get(':nth-child(1) > .mt-2').contains('VP of Sales');
        cy.get(':nth-child(2) > .mt-5').contains('Theresa Webb');
        cy.get(':nth-child(2) > .mt-2').contains('Business Development Manager');
        cy.get(':nth-child(3) > .mt-5').contains('Savannah Nguyen');
        cy.get(':nth-child(3) > .mt-2').contains('Director of Product');
        cy.get(':nth-child(4) > .mt-5').contains('Daniel Murphy');
        cy.get(':nth-child(4) > .mt-2').contains('Business Analyst');
      
    })
    it('Performance testing in desktop for team-two-story mobile component', () =>{
       // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=team--team-two-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
    })