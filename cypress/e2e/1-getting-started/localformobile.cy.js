describe('functinality and performance in mobile',{taskTimeout : 90000},()=> {
    it('functinality of componet',()=> {
        cy.visit('http://localhost:3000/');
        cy.wait(4000);
        cy.get('.text-4xl').contains('A special credit card made for Developers.');
        cy.get('.mt-2').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.');
        cy.get('.grid > :nth-child(2) > .w-full').should('be.visible');
    })
    it('performance testing',() => {
        cy.viewport(414 , 736);
        cy.visit('http://localhost:3000/');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})