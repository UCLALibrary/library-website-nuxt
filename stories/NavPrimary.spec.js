describe('NAV / Primary', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=nav-primary--default&args=&viewMode=story')
        cy.get('.nav-primary').should('exist')

        cy.percySnapshot('NAV / Primary: Default')
    })
})
