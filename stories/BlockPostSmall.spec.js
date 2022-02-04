describe('BLOCK / PostSmall', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-post-small--default&args=&viewMode=story')
        cy.get('.block-post-small').should('exist')

        cy.percySnapshot('BLOCK / Post Small: Default')
    })
})
                    