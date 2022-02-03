describe('FLEXIBLE / Call To Action Block Content Width', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-call-to-action-block-content-width--default&args=&viewMode=story')
        cy.get('.cta-block-content-width').should('exist')

        cy.percySnapshot('FLEXIBLE / Call To Action Block Content Width: Default')
    })
})
                    