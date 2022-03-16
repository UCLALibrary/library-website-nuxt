describe('SECTION / Spaces / List', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-spaces-list--default&args=&viewMode=story')
        cy.get('.section-spaces-list').should('exist')

        cy.percySnapshot('SECTION / Spaces / List: Default')
    })
})
