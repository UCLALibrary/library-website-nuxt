describe('Collection Detail page', () => {
  it('Visits a Collection Detail Page', () => {
    cy.request({
      url: '/collections/explore/halloween-costumes',
      timeout: 120000,
      retryOnStatusCodeFailure: true
    }).visit('/collections/explore/halloween-costumes')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-collection-detail').should('be.visible')
    cy.get('h1.title').should(
      'contain',
      'TEST - Collection - Halloween Costumes'
    )
    cy.get('.page-anchor').scrollIntoView().should('be.visible')
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  context("When there isn't an entry in craft", () => {
    it('Raises a 404 error', () => {
      cy.visit('/about/blogs/no_entry', { failOnStatusCode: false })
      cy.request({
        url: '/collections/explore/no_entry',
        failOnStatusCode: false,
      })
        .its('status')
        .should('equal', 404)
      // cy.visit('/collections/explore/no_entry')
      // cy.get('p.error').should('contain', '404')
      // cy.get('h1.error-title').should('contain', 'Page not found')
    })
  })
})
