describe('GLOBAL / SiteNotificationAlert', () => {
    it('Default', () => {
        cy.visit('/iframe.html?id=global-sitenotificationalert--default&args=&viewMode=story')
        cy.get('.site-notification-alert').should('exist')

        cy.percySnapshot('GLOBAL / SiteNotificationAlert: Default')
    })
})
