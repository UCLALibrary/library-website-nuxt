describe('SECTION / Teaser / Card', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-teaser-card--default&args=&viewMode=story')
        cy.get('.section-teaser-card').should('exist')

        cy.percySnapshot('SECTION / Teaser / Card: Default')
    })
})
