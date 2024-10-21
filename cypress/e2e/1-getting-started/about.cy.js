describe('Mobile Performance Test',{ taskTimeout: 90000 }, () => {


  it('should perform a Lighthouse audit for mobile', () => {
    //cy.viewport(414, 736 );
    cy.visit('http://localhost:6006/iframe.html?args=&id=about--about-one-story&viewMode=story');

   
    cy.lighthouse({
      performance:20,
      accessibility: 40,
      "best-practices": 30,
      seo: 30,
      //pwa: 80,
    }
  );
  });
});