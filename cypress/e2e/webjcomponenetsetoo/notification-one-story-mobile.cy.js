describe('performance and functionality testing for mobile for notification-one-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for notification-one-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=notification--notification-one-story&viewMode=story');
       cy.get('.font-bold').contains('Upload Successfully');
       cy.get('.mt-1').contains('logo.png was uploaded successfully')
    })
     it('Performance testing in mobile for notification-one-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=notification--notification-one-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
     })
    
    })