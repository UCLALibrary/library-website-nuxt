describe('BLOCK / Spaces / List', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-spaces--default&args=&viewMode=story')
        cy.get('.block-spaces').should('exist')

        cy.percySnapshot('BLOCK / Spaces: Default')
    })
})
