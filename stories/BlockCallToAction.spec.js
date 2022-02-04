describe('BLOCK / Call to Action', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-call-to-action--default&args=&viewMode=story')
        cy.get('.block-call-to-action').should('exist')

        cy.percySnapshot('BLOCK / Call to Action: Default')
    })
})
                    