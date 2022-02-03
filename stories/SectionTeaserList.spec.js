describe('SECTION / Teaser / List', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-teaser-list--default&args=&viewMode=story')
        cy.get('.section-teaser-list').should('exist')

        cy.percySnapshot('SECTION / Teaser / List: Default')
    })
})
                    