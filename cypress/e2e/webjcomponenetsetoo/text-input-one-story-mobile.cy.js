describe('performance and functionality testing for desktop for text-input-one-story component',{taskTimeout : 90000},() =>
    {
    it('functinality testing of text-input-one-story component in mobile', () =>
    {
        cy.viewport(360 ,640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=text-input--text-input-one-story&viewMode=story');
        cy.get('#Password').type('rohitmane');
    })
    it('Performance testing in mobile for text-input-one-story component', () =>{
         cy.viewport(360 ,640);
         //cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=text-input--text-input-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
    })
    })