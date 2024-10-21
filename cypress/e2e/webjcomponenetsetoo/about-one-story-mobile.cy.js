describe('performance and functionality testing for mobile for mint one story component',{taskTimeout: 90000},() =>{
    it('functinality testing of about-one-story- mobile', ()=>{
        cy.viewport(360 ,640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=about--about-one-story&viewMode=story');
        cy.get('.text-3xl').contains('About Us');
        cy.get('.mt-4').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.');
        cy.get('.object-cover').should('be.visible');

    })

    it('performance testing of about-one-story- mobile', ()=>{
        cy.viewport(360 ,640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=about--about-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})