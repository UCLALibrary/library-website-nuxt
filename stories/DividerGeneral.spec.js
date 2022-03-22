describe('DIVIDER / General', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=divider-general--default&args=&viewMode=story')
        cy.get('.divider-general').should('exist')

        cy.percySnapshot('DIVIDER / General: Default')
    })
})
