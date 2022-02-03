describe('Heading / Arrow', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=heading-arrow--default&args=&viewMode=story')
        cy.get('.heading-arrow').should('exist')

        cy.percySnapshot('Heading / Arrow: Default')
    })
})
                    