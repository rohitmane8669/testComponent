describe('performance and functionality testing for desktop for testimonial-one-story-desktop component',{taskTimeout : 90000},() =>
    {
    // it('functinality testing of estimonial-one-story-desktop component in mobile', () =>
    // {
    //  //   cy.viewport(1920 ,1060);
    //     cy.visit('http://localhost:6006/iframe.html?args=&id=testimonials--testimonial-one-story&viewMode=story');
    //     cy.get('.max-w-2xl > .text-base').contains('3940+ Happy Landingfolio Users');
    //     cy.get('.mt-6').contains("Don't just take our words");
    //     cy.get(':nth-child(1) > .object-cover').should('be.visible');
      
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > blockquote:nth-child(2) > p:nth-child(1)').contains('We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.');
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)').contains('Jenny Wilson');
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)').contains('Grower.io');
    //     cy.get(':nth-child(2) > .object-cover').should('be.visible');
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)').should('be.visible');
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > blockquote:nth-child(2) > p:nth-child(1)').contains('We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.');
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)').contains('Devon Lane');
    //     cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)').contains('DLDesign.co');
    // })
    it('Performance testing in mobile for testimonial-one-story-desktop component', () =>{
      //  cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=testimonials--testimonial-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
    })