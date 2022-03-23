describe('IMPACT REPORT / Grid Gallery', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=impact-report-grid-gallery--default&args=&viewMode=story')
        cy.get('.grid-gallery').should('exist')

        cy.percySnapshot('IMPACT REPORT / Grid Gallery: Default')
    })
})
