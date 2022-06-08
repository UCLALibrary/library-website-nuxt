describe('MEDIA GALLERY / New Lightbox', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=media-gallery-new-lightbox--default&args=&viewMode=story')
        cy.get('.lightbox').should('exist')

        cy.percySnapshot('')
    })
})
                    