describe('FLEXIBLE / Highlight', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-highlight--default&args=&viewMode=story')
        cy.get('.section-teaser-highlight').should('exist')

        cy.percySnapshot('FLEXIBLE / Highlight: Default')
    })
})
