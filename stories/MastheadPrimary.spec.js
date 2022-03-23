describe('MASTHEAD / Primary', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=masthead-primary--default&args=&viewMode=story')
        cy.get('.masthead-primary').should('exist')

        cy.percySnapshot('MASTHEAD / Primary: Default')
    })
})
