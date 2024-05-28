describe('Access Collection page', () => {
  it('Visit a Access Collection Page', () => {
    // prevent cypress 404 errors on slow page load
    cy.intercept('/collections/access').as('getCollectionsRoutes')
    cy.visit('/collections/access')
    cy.wait('@getCollectionsRoutes').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible').debug()
      cy.get('.page-collections-access').should('be.visible')
      cy.get('h1.title').should(
        'contain',
        'Listing - Collections > Access Collections'
      )
      cy.percySnapshot({ widths: [768, 992, 1200] })
    })
  })

  it('Search Found', () => {
    cy.intercept('/collections/access/*').as('getCollectionsSearchRoutes')
    cy.visit('/collections/access/?q=test')
    cy.wait('@getCollectionsSearchRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible').debug()
      cy.get('input[type=search]').should(
        'have.value',
        'test'
      )
      cy.get('h2.about-results').invoke('text').should('not.be.empty')
    })
  })
})
