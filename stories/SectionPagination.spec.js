describe('SECTION / Pagination', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-pagination--default&args=&viewMode=story')
        cy.get('.section-pagination').should('exist')

        cy.percySnapshot('SECTION / Pagination: Default')
    })
})
