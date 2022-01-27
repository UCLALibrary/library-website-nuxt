describe('BannerFeatured', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=banner-featured--default&args=&viewMode=story')
        cy.get('.banner-featured').should('exist')

        cy.percySnapshot('Banner Featured: Default')
    })
})
                    