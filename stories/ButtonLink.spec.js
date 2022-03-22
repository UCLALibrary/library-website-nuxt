describe('BUTTON / Link', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=button-link--default&args=&viewMode=story')
        cy.get('.button-link').should('exist')

        cy.percySnapshot('BUTTON / Link: Default')
    })
})
