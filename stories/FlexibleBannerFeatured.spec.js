describe('FLEXIBLE / Banner Featured', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-banner-featured--default&args=&viewMode=story')
        cy.get('.flexible-banner-featured').should('exist')

        cy.percySnapshot('FLEXIBLE / Banner Featured: Default')
    })
})
                    