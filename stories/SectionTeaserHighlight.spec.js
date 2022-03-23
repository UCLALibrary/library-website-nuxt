describe('SECTION / Teaser / Highlight', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-teaser-highlight--default&args=&viewMode=story')
        cy.get('.section-teaser-highlight').should('exist')

        cy.percySnapshot('SECTION / Teaser / Highlight: Default')
    })
})
