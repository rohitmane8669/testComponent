describe('performance and functionality testing for desktop for breadcrumb-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in desktop for breadcrumb-one-story',()=> {
        cy.viewport(1440 , 1080);
         cy.visit('http://localhost:6006/iframe.html?args=&id=breadcrumb--breadcrumb-one-story');
         cy.get(':nth-child(2) > .text-sm').contains('Reports');
         cy.get(':nth-child(3) > .text-sm').contains('Sales');
         cy.get('.text-gray-900 > .text-sm').contains('Product Reports');
    })
    it('performance testing in desktop for breadcrumb-one-story',()=> {
        cy.viewport(1440 , 1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=breadcrumb--breadcrumb-one-story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
})