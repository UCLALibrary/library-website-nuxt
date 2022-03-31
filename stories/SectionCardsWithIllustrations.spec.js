describe('SECTION / Cards With Illustrations', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-cards-with-illustrations--default&args=&viewMode=story')
        cy.get('.section-cards-with-illustrations').should('exist')

        cy.percySnapshot('SECTION / Cards With Illustrations: Default')
    })
})
