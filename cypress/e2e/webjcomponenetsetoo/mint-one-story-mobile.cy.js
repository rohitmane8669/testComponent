describe('performance and functionality testing for mobile for mint one story component',{taskTimeout: 90000},() =>
{
it('functinality testing in mobile for mint one story',()=> {
   cy.viewport(360 ,640);
   cy.visit('http://localhost:6006/iframe.html?args=&id=mint--mint-one-story');
   cy.get('.text-3xl').contains('Mint an Ape');
   cy.get('.mt-4').contains('Osprey - The Smart Ape');
   cy.get('.object-cover').should('be.visible');
   cy.get('.mt-6 > :nth-child(1) > .font-medium').contains('Select Quantity:');
   cy.get('.flex > :nth-child(3)').click();
   cy.get('.flex > :nth-child(3)').click();
   cy.get(':nth-child(1) > .flex > :nth-child(1)').click();
   cy.get('.mt-6 > :nth-child(2) > :nth-child(1)').contains('Mint Cost:');
   cy.get('.inline-flex').should('be.visible');
   cy.get('.inline-flex').contains('Mint');
   cy.get('.inline-flex').click();
   cy.get('.mt-6 > .text-center > .text-base').contains('Wallet Balance:');
})
 it('Performance testing in mobile for mint one story',()=> {
   cy.viewport(360 ,640);
  // cy.viewport(1920 ,1060);
    cy.visit('http://localhost:6006/iframe.html?args=&id=mint--mint-one-story');
    cy.lighthouse({
      performance:20,
      accessibility: 40,
      "best-practices": 30,
      seo: 30,
      //pwa: 80,
    })
 })

})