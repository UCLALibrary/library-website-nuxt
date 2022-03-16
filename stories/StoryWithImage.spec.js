describe('IMPACT REPORT / Story With Image', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=impact-report-story-with-image--default&args=&viewMode=story')
        cy.get('.story-with-image').should('exist')

        cy.percySnapshot('IMPACT REPORT / Story With Image: Default')
    })
})
