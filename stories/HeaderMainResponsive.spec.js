describe('GLOBAL / Header Main Responsive', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=global-header-main-responsive--default&args=&viewMode=story')
        cy.get('.header-main-responsive').should('exist')

        cy.percySnapshot('GLOBAL / Header Main Responsive: Default')
    })
})
