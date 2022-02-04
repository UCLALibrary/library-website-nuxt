describe('GLOBAL / Site Brand Bar', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=global-site-brand-bar--default&args=&viewMode=story')
        cy.get('.site-brand-bar').should('exist')

        cy.percySnapshot('GLOBAL / Site Brand Bar: Default')
    })
})
                    