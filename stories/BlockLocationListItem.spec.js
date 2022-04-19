describe('BLOCK / Location List Item', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-location-list-item--default&args=&viewMode=story')
        cy.get('.block-location-list-item ').should('exist')

        cy.percySnapshot('BLOCK / Location List Item: Default')
    })
})
