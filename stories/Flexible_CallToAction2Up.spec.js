describe('FLEXIBLE / Call To Action 2 Up', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-call-to-action-2-up--default&args=&viewMode=story')
        cy.get('.block-call-to-action-2-up').should('exist')

        cy.percySnapshot('FLEXIBLE / Call To Action 2 Up: Default')
    })
})
                    