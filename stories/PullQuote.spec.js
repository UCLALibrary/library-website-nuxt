describe('FLEXIBLE / Pull Quote', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-pull-quote--default&args=&viewMode=story')
        cy.get('.pull-quote').should('exist')

        cy.percySnapshot('FLEXIBLE / Pull Quote: Default')
    })
})
