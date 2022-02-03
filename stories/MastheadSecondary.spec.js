describe('Masthead / Secondary', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=masthead-secondary--default&args=&viewMode=story')
        cy.get('.masthead-secondary').should('exist')

        cy.percySnapshot('Masthead / Secondary: Default')
    })
})
                    