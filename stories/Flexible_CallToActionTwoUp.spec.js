describe('FLEXIBLE / Call To Action Two Up', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-call-to-action-two-up--default&args=&viewMode=story')
        cy.get('.block-call-to-action-two-up').should('exist')

        cy.percySnapshot('FLEXIBLE / Call To Action Two Up: Default')
    })
})
                    