describe('BLOCK / Staff / Detail', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-staff-detail--default&args=&viewMode=story')
        cy.get('.block-staff-detail').should('exist')

        cy.percySnapshot('BLOCK / Staff / Detail: Default')
    })
})
