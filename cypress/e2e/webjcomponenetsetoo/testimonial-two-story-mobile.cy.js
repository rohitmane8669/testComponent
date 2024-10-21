describe('performance and functionality testing for desktop for testimonial-two-story-mobile component',{taskTimeout :90000},() => {
    it('performing functionality testing for testimonial-two-story-mobile', ()=>{
        cy.viewport( 360 ,640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=testimonials--testimonial-two-story&viewMode=story');
        cy.get('.text-center > .text-lg').contains('2,157 people have said how good Rareblocks');
        cy.get('.mt-4').contains('Our happy clients say about us');
        cy.get(':nth-child(1) > .flex-col > div.flex-1 > .flex').should('be.visible');
        cy.get(':nth-child(1) > .flex-col > div.flex-1 > .flex-1 > .text-lg').contains('You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.');
        cy.get(':nth-child(1) > .flex-col > .flex.mt-8 > .flex-shrink-0').should('be.visible');
        cy.get(':nth-child(1) > .flex-col > .flex.mt-8 > .ml-4 > .text-base').contains('Leslie Alexander');
        cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)').contains('Freelance React Developer');
        cy.get('.relative > :nth-child(1) > .flex-col').should('be.visible');
        cy.get(':nth-child(1) > .flex-col > div.flex-1 > .flex').should('be.visible');
        cy.get(':nth-child(2) > .flex-col > div.flex-1 > .flex-1 > .text-lg').contains('Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.');
        cy.get(':nth-child(2) > .flex-col > .flex.mt-8 > .flex-shrink-0').should('be.visible');
        cy.get(':nth-child(2) > .flex-col > .flex.mt-8 > .ml-4 > .text-base').contains('Jacob Jones');
        cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)').contains('Digital Marketer');
        cy.get(':nth-child(3) > .flex-col > div.flex-1 > .flex').should('be.visible');
        cy.get(':nth-child(3) > .flex-col > div.flex-1 > .flex-1 > .text-lg').contains('I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.');
        cy.get(':nth-child(3) > .flex-col > .flex.mt-8 > .flex-shrink-0').should('be.visible');
        cy.get(':nth-child(3) > .flex-col > .flex.mt-8 > .ml-4 > .text-base').contains('Jenny Wilson');
        cy.get('body > div:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)').contains('Graphic Designer');
    })
    it('Performance testing in mobile for testimonial-two-story-mobile component',()=> {
        cy.viewport( 360 ,640);
        cy.visit('http://localhost:6006/iframe.html?args=&id=testimonials--testimonial-two-story&viewMode=story');
        cy.lighthouse({
            performance :30,
            accessibility :40,
            "best-practices": 30,
        seo: 30,
        })
    })
    
})