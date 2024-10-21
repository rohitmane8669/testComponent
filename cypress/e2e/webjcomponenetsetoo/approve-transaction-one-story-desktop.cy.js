describe('functinality and performance testing for approve-transaction-one-story component in desktop',{taskTimeout: 90000},() => {
    it('functinality testing for approve-transaction-one-story component in desktop' ,()=> {
        cy.viewport(1440,1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=approve-transaction--approve-transaction-one-story&viewMode=story');
        cy.get('.text-xl').contains('Approve This Transaction?');
        cy.get('.mt-2').contains('Are you sure minting this token? You must be awesome.');
        cy.get('.p-4').should('be.visible');
        cy.get('.object-cover').should('be.visible');
        cy.get('.flex-1 > .text-base').contains('Easy Sweep');
        cy.get('.inline-flex').should('be.visible');
    })
    it('performance tsting forapprove-transaction-one-story component in desktop',()=> {
        cy.viewport(1440 ,1080);
        cy.visit('http://localhost:6006/iframe.html?args=&id=approve-transaction--approve-transaction-one-story&viewMode=story');
        cy.lighthouse({
            performance:20,
            accessibility: 40,
            "best-practices": 30,
            seo: 30,
            //pwa: 80,
          })
            })
        })
    