describe('BLOCK / Event', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=block-event--short-text&args=&viewMode=story')
        cy.get('.block-event').should('exist')

        cy.percySnapshot('BLOCK / Event: Short Text')
    })
})
