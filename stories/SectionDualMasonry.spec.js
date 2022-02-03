describe('SECTION / Dual Masonry', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-dual-masonry--default&args=&viewMode=story')
        cy.get('.section-dual-masonry').should('exist')

        cy.percySnapshot('SECTION / Dual Masonry: Default')
    })
})
                    