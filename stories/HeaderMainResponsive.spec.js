describe('GLOBAL / Header Main Responsive', () => {
    it('Default', () => {
        // open the storybook page of the component
        cy.visit('/iframe.html?id=global-header-main-responsive--default&args=&viewMode=story')

        // assert the url
        cy.url().should('include', 'header-main-responsive')

        cy.percySnapshot('GLOBAL / Header Main Responsive: Default')
    })
})
