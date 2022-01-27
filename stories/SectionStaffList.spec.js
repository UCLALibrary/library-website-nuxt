describe('SECTION / Staff / List', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=section-staff-list--default&args=&viewMode=story')
        cy.get('.section-staff-list').should('exist')

        cy.percySnapshot('SECTION / Staff / List: Default')
    })
})
                    