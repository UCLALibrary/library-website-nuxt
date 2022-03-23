describe('FLEXIBLE / Simple Cards', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-simple-cards--default&args=&viewMode=story')
        cy.get('.simple-cards').should('exist')

        cy.percySnapshot('FLEXIBLE / Simple Cards: Default')
    })
})
