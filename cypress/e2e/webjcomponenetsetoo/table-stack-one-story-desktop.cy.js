describe('performance and functionality testing for desktop fortable-stack-one-story component',{taskTimeout : 90000},() =>
    {
    it('functinality testing of table-stack-one-story component in desktop', () =>
    {
        //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=tablestacks--table-stack-one-story&viewMode=story');
        cy.get('.text-lg').contains('Customer List');
        cy.get('.mt-1').contains('Lorem ipsum dolor sit amet, consectetur adipis.');
      
    })
    it('Performance testing in desktop table-stack-one-story desktop component', () =>{
        //cy.viewport(360 ,640);
       // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=tablestacks--table-stack-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
    })