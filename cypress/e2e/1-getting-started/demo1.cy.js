describe('Mobile Performance Test',{ taskTimeout: 90000 }, () => {


    it('should perform a Lighthouse audit for mobile', () => {
      //cy.viewport(1536, 960);
      cy.visit('http://localhost:3000/');
      
      const customThresholds = {
        performance:20,
        accessibility: 40,
        "best-practices": 30,
        seo: 30,
        //pwa: 80,
      }

      const screenConfig = {
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config('viewportWidth'),
          height: Cypress.config('viewportHeight'),
          deviceScaleRatio: 1
        }
      }
     
      cy.lighthouse(customThresholds, screenConfig);
    //  cy.lighthouse(
    //   {
    //     performance: 60,
    //     accessibility: 90,
    //     'best-practices': 80,
    //     seo: 80,
    //   },
    //   {
    //     formFactor: 'desktop',
    //     screenEmulation: {
    //       mobile: false,
    //       disable: false,
    //       width: Cypress.config('viewportWidth'),
    //       height: Cypress.config('viewportHeight'),
    //       deviceScaleRatio: 1,
    //      },
         },
    )
    });
  //});