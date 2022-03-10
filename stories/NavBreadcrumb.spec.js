describe('NAV / Breadcrumb', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=nav-breadcrumb--default&args=&viewMode=story')
        cy.get('.nav-breadcrumb').should('exist')

        cy.percySnapshot('NAV / Breadcrumb: Default')
    })
})
