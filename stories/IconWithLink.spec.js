describe('IconWithLink', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=icon-with-link--default&args=&viewMode=story')
        cy.get('.icon-with-link').should('exist')

        cy.percySnapshot('IconWithLink: Default')
    })
})
