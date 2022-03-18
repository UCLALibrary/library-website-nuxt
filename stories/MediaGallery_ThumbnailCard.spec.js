describe('MEDIA GALLERY / Thumbnail Card', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=media-gallery-thumbnail-card--default&args=&viewMode=story')
        cy.get('.thumbnail-card').should('exist')

        cy.percySnapshot('MEDIA GALLERY / Thumbnail Card: Default')
    })
})
                    