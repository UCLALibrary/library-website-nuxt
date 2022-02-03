describe('BLOCK / Highlight', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-highlight--default&args=&viewMode=story')
        cy.get('.block-highlight').should('exist')

        cy.percySnapshot('BLOCK / Highlight: Default')
    })
})
                    