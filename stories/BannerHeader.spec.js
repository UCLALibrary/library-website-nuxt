describe('BannerHeader', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=banner-header--default&args=&viewMode=story')
        cy.get('.banner-header').should('exist')

        cy.percySnapshot('Banner Header: Default')
    })
})
                    