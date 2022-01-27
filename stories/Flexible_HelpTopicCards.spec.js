describe('FLEXIBLE / Help Topic Card', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-help-topic-card--default&args=&viewMode=story')
        cy.get('.help-topic-card').should('exist')

        cy.percySnapshot('FLEXIBLE / Help Topic Card: Default')
    })
})
                    