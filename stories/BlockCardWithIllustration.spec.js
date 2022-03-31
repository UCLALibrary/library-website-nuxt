describe('BLOCK / Card With Illustration', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-card-with-illustration--default&args=&viewMode=story')
        cy.get('.block-card-with-illustration ').should('exist')

        cy.percySnapshot('BLOCK / Card With Illustration: Default')
    })
})
