describe('GLOBAL / Responsive Video', () => {
    it('Image with Video', () => {
        cy.visit('/iframe.html?id=global-responsive-video--image-with-video&args=&viewMode=story')
        cy.get('.responsive-video').should('exist')

        // Percy snapshot got a different state of the "loading" bar each run...
        // cy.percySnapshot('GLOBAL / Responsive Video: Image With Video')
    })
})
