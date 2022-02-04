describe('BLOCK / CallToActionTwoUp', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-call-to-action-two-up--default&args=&viewMode=story')
        cy.get('.block-call-to-action-two-up').should('exist')

        cy.percySnapshot('BLOCK / Call to Action Two Up: Default')
    })
})
                    