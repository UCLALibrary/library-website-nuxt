describe('BLOCK / CardVertical', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-card-vertical--default&args=&viewMode=story')
        cy.get('.block-card-vertical').should('exist')

        cy.percySnapshot('BLOCK / Card Vertical: Default')
    })
})
                    