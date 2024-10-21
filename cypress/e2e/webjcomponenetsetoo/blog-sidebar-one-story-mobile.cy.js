describe('functinality and performance testing of blog-sidebar-one-story component in mobile',{taskTimeout :  90000},() => {
    it('functinality testing of blog-sidebar-one-story component in mobile',() => {
        cy.viewport(360 , 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-sidebar--blog-sidebar-one-story&viewMode=story');
        cy.get('.bg-gray-100 > .px-4').should('be.visible');
        cy.get('.text-lg').contains('Recent Posts');
        cy.get(':nth-child(1) > .flex-1 > .text-base > a > .absolute').should('be.visible');
        cy.get(':nth-child(2) > .flex-1 > .text-base > a > .absolute').should('be.visible');
        cy.get(':nth-child(3) > .flex-1 > .text-base > a > .absolute').should('be.visible');
        cy.get(':nth-child(4) > .flex-1 > .text-base > a > .absolute').should('be.visible');
    })
    it('performance testing of blog-sidebar-one-story component in mobile' ,()=>{
        cy.viewport(360 , 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-sidebar--blog-sidebar-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})