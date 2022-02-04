describe('FOOTER / Sock', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=footer-sock--default&args=&viewMode=story')
        cy.get('.footer-sock').should('exist')

        cy.percySnapshot('FOOTER / Sock: Default')
    })
})
                    