describe('GLOBAL / Header Sticky', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=global-header-sticky--default&args=&viewMode=story')
        cy.get('.header-sticky').should('exist')

        cy.percySnapshot('GLOBAL / Header Sticky: Default')
    })
})
                    