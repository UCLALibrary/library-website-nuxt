describe('Explore Collection page', () => {
  it('Visit a Explore Collection Page', () => {
    cy.intercept('/collections/explore').as('getExploreCollections')
    cy.visit('/collections/explore')
    cy.wait('@getExploreCollections').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-collections-explore').should('be.visible')
      cy.get('h1.title').should(
        'contain',
        'Listing - Collections > Explore Collections'
      )
      cy.get('.search-generic-filter-buttons').find('button').should('have.length', 2)

      cy.get('.search-generic-filter-buttons').find('button').each(($el, index, $list) => {
        cy.wrap($el).click()
        cy.get('fieldset.base-checkbox-group > ul.list > li.list-item').find('label').should('have.length.greaterThan', 0)
      })
      cy.percySnapshot('collectionsexplorepage', { widths: [768, 992, 1200] })
    })
  })

  it('Search Found', () => {
    cy.intercept('/collections/explore/?*').as('getExploreSearchRoutes')
    cy.visit('collections/explore/?q=test', { timeout: 35000 })
    cy.wait('@getExploreSearchRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible')
      cy.get('input[type=search]').should(
        'have.value',
        'test'
      )
      cy.get('h2.about-results').invoke('text').should('not.be.empty')
      cy.percySnapshot('collectionsexplorepage', { widths: [768, 992, 1200] })
    })
  })

  it('Visit Collections Explore Listing page filter by category', () => {
    cy.visit('/collections/explore?q=spool&filters=physicalDigital.keyword:(physical)')

    cy.get('h2.about-results').should('be.visible')
  })
})
