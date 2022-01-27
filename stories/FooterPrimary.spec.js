describe('FOOTER / Primary', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=footer-primary--default&args=&viewMode=story')
        cy.get('.footer-primary').should('exist')

        cy.percySnapshot('FOOTER / Primary: Default')
    })
})
                    