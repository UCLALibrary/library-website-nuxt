describe('GLOBAL / Responsive Image', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=global-responsive-image--default&args=&viewMode=story')
        cy.get('.responsive-image').should('exist')

        cy.percySnapshot('GLOBAL / Responsive Image: Default')
    })
})
                    