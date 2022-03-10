describe('NAV / Secondary', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=nav-secondary--default&args=&viewMode=story')
        cy.get('.nav-secondary').should('exist')

        cy.percySnapshot('NAV / Secondary: Default')
    })
})
