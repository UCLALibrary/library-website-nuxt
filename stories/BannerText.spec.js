describe('BannerText', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=banner-text--default&args=&viewMode=story')
        cy.get('.banner-text').should('exist')

        cy.percySnapshot('Banner Text: Default')
    })
})
