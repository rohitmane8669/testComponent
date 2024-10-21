describe('performance and functionality testing for mobile for cloud-logo-two-story component',{taskTimeout: 90000},() =>
    {
    it('functinality testing in mobile for cloud-logo-two-story',()=> {
       cy.viewport(360 ,640);
       cy.visit('http://localhost:6006/iframe.html?args=&id=cloud-logo--cloud-logo-two-story&viewMode=story');
        cy.wait(6000);
        cy.get('.text-sm').contains(' Join over 200+ tech companies already using Landingfolio');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/waverio.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/logoipsum.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/alterbone.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/carbonia.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/tinygone.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/preso.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/ridoria.svg"]').should('be.visible');
        cy.get('[src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/incanto.svg"]').should('be.visible');
        
    })
     it('Performance testing in mobile for cloud-logo-two-story',()=> {
       cy.viewport(360 ,640);
      // cy.viewport(1920 ,1060);
        cy.visit('http://localhost:6006/iframe.html?args=&id=cloud-logo--cloud-logo-two-story&viewMode=story');
        cy.lighthouse({
          performance:20,
          accessibility: 40,
          "best-practices": 30,
          seo: 30,
          //pwa: 80,
        })
      })
    
    })
