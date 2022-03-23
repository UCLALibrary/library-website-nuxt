describe('BLOCK / SimpleCard', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-simple-card--default&args=&viewMode=story')
        cy.get('.block-simple-card').should('exist')

        cy.percySnapshot('BLOCK / Simple Card: Default')
    })
})
