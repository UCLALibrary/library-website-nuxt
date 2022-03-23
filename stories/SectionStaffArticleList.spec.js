describe('SECTION / Staff / Article / List', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-staff-article-list--default&args=&viewMode=story')
        cy.get('.section-staff-article-list').should('exist')

        cy.percySnapshot('SECTION / Staff / Article / List: Default')
    })
})
