describe('FLEXIBLE / Media Gallery', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=flexible-media-gallery--default&args=&viewMode=story')
        cy.get('.media-gallery').should('exist')

        cy.get('.banner-image').click()
        cy.contains('Zooland').click()
        cy.get('.button-close').click()
        cy.get('.banner-image').click()
    })
})
                    