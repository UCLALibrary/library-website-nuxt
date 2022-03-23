describe('BUTTON / More', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=button-more--default&args=&viewMode=story')
        cy.get('.button-more').should('exist')

        cy.percySnapshot('BUTTON / More: Default')
    })
})
