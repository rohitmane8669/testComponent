describe('Desktop Performance Test',{ taskTimeout: 90000 }, () => {
  
    it('should perform a Lighthouse audit for desktop', () => {
      cy.viewport(1366, 768 ); 
      cy.visit('http://localhost:6006/iframe.html?id=blog-pagination--blog-pagination-one-story&viewMode=story');
  
      
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