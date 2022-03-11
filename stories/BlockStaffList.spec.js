describe('BLOCK / Staff / List', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-staff-list--default&args=&viewMode=story')
        cy.get('.block-staff-list').should('exist')

        cy.percySnapshot('BLOCK / Staff / List: Default')
    })
})
