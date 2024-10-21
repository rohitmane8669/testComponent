describe('Mobile Performance Test',{ taskTimeout: 90000 }, () => {


  it('should perform a Lighthouse audit for mobile', () => {
    cy.viewport(1366, 768 );
    cy.visit('http://localhost:6006/iframe.html?args=&id=alert--alert-one-story&viewMode=story');

   
    cy.lighthouse({
      performance: 20,
      accessibility: 20,
      seo: 20,
     
    })

  
  });
});