describe('functinality and performace testing of component  article-one-story in mobile',{taskTimeout: 90000}, () => {
it('functinality of article-one-story component in mobile',() =>{
  cy.viewport(360, 640);
    cy.visit('http://localhost:6006/iframe.html?args=&id=article--article-one-story&viewMode=story');
    cy.get("h1[class='text-3xl font-bold text-gray-900 mt-7 sm:text-4xl xl:text-5xl font-pj']").contains('Discover the most solutions for building landing page website.');
    cy.get('.text-gray-600').contains(' April 14, 2021');
    //cy.get("p[class='text-base font-normal leading-7 text-gray-700 font-pj']").contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. Invitae neque integer integer metus, est, tristique fermentum tristique.');
    cy.get(':nth-child(4) > .mt-10 > :nth-child(2)').contains('Get everything from scratch');
    //cy.get(':nth-child(4) > .mt-10 > :nth-child(3)').contains('Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristiquefermentum tristique.');
    cy.get('.space-y-1 > :nth-child(1)').contains('Id elementum velit posuere vestibulum lectus id eu sollicitudin.');
    cy.get('.space-y-1 > :nth-child(2)').contains('Tellus amet bibendum sit mus phasellus quis duis lacus.');
    cy.get('.space-y-1 > :nth-child(3)').contains('Enim eget sagittis, auctor iaculis nulla semper.');
    cy.get('.mt-10 > :nth-child(5)').contains('Choose from 120+ UI blocks');
  //  cy.get("body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > p:nth-child(3)").contains('Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristiquefermentum tristique.');
  cy.get('.relative.mt-16 > .relative').should('be.visible');
  cy.get('.mt-16.text-3xl').contains('Create your first landing page');
})
it('performance testing of article-one-story component in mobile',() => {
    cy.viewport(360, 640);
    cy.visit('http://localhost:6006/iframe.html?args=&id=article--article-one-story&viewMode=story');
    cy.lighthouse({
        performance:20,
        accessibility: 40,
        "best-practices": 30,
        seo: 30,
        //pwa: 80,
      })  
})
})