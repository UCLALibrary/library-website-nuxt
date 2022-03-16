describe('Section / Post Small', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-post-small--default&args=&viewMode=story')
        cy.get('.section-post-small').should('exist')

        cy.percySnapshot('Section / Post Small: Default')
    })
})
