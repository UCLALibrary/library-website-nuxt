describe('SECTION / Cards', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-cards--default&args=&viewMode=story')
        cy.get('.section-cards').should('exist')

        cy.percySnapshot('SECTION / Cards: Default')
    })
})
