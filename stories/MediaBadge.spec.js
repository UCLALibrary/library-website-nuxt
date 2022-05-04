describe('Media Badge', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=media-badge--default&args=&viewMode=story')
        cy.get('.media-badge').should('exist')

        cy.percySnapshot('Media Badge: Default')
    })
})
