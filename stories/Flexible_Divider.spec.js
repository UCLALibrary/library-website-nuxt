describe('FLEXIBLE / Divider', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-divider--default&args=&viewMode=story')
        cy.get('.divider-general').should('exist')

        cy.percySnapshot('FLEXIBLE / Divider: Default')
    })
})
                    