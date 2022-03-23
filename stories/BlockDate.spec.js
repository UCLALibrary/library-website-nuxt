describe('BLOCK / Date', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-date--default&args=&viewMode=story')
        cy.get('.block-date').should('exist')

        cy.percySnapshot('BLOCK / Date: Default')
    })
})
