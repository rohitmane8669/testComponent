describe('Mobile  Performance and functionality Test',{ taskTimeout: 90000 }, () => {

  it('functinality testing', () => {
    cy.viewport(414, 736 );
    cy.visit('http://localhost:6006/iframe.html?args=&id=mint--mint-one-story&viewMode=story');
    cy.get('.flex > :nth-child(3)').click();
    cy.get('.flex > :nth-child(3)').click();
    cy.get(':nth-child(1) > .flex > :nth-child(1)').click();
    cy.get('.inline-flex').click();
    cy.get('.inline-flex').contains('Mint');
  })
    it('should perform a Lighthouse audit for mobile', () => {
      cy.viewport(414, 736 );
      cy.visit('http://localhost:6006/iframe.html?args=&id=mint--mint-one-story&viewMode=story');
  
     
      cy.lighthouse({
        performance:20,
        accessibility: 40,
        "best-practices": 30,
        seo: 30,
        //pwa: 80,
      }
      
    )
    cy.writeFile("testfile.txt",obj);
    });
  });