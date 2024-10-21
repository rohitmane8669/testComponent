describe('functinality and performance testing of component blog-listing-one-story in mobile',{taskTimeout:90000},() => {
    it('functinality of component blog-listing-one-story in mobile ',() => {
        cy.viewport(360, 640);
 cy.visit('http://localhost:6006/iframe.html?args=&id=blog-listing--blog-listing-one-story&viewMode=story');
 cy.get('.text-3xl').contains('Read Latest Articles');
 cy.get('.mt-5').contains('Create custom landing pages with Rareblocks that converts more visitors than any website.');
 cy.get("div[class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'] div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(1)").should('be.visible');
 cy.get("body div[id='storybook-root'] section[class='py-12 bg-gray-50 sm:py-16 lg:py-20'] div[class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'] div[class='grid max-w-2xl grid-cols-1 gap-4 mx-auto mt-12 sm:gap-6 xl:max-w-none xl:grid-cols-2 sm:mt-12 lg:gap-8 lg:mt-20'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)").should('be.visible');
 cy.get("div[class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'] div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(1)").should('be.visible');
 cy.get("body div[id='storybook-root'] section[class='py-12 bg-gray-50 sm:py-16 lg:py-20'] div[class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'] div[class='grid max-w-2xl grid-cols-1 gap-4 mx-auto mt-12 sm:gap-6 xl:max-w-none xl:grid-cols-2 sm:mt-12 lg:gap-8 lg:mt-20'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)").should('be.visible');
//  cy.get(':nth-child(3) > .sm\:flex-row > .overflow-hidden > .object-cover').should('be.visible');
//  cy.get(':nth-child(3) > .sm\:flex-row > .flex-col').should('be.visible');
//  cy.get(':nth-child(4) > .sm\:flex-row > .overflow-hidden > .object-cover').should('be.visible');
    })
    it('Performance of component blog-listing-one-story in mobile ',() => {
        cy.viewport(360, 640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=blog-listing--blog-listing-one-story&viewMode=story');
    cy.lighthouse({
        performance:20,
        accessibility: 40,
        "best-practices": 30,
        seo: 30,
        //pwa: 80,
      })
    })
})
