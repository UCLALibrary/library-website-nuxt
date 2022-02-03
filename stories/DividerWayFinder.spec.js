describe('DIVIDER / Way Finder', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=divider-way-finder--default&args=&viewMode=story')
        cy.get('.divider-way-finder').should('exist')

        cy.percySnapshot('DIVIDER / Way Finder: Default')
    })
})
                    