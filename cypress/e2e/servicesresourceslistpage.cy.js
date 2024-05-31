describe('All Services & Resources Listing page', () => {
  it('Visits the All Services & Resources Listing Page', () => {
    cy.intercept('/help/*').as('getHelpRoutes')
    cy.visit('/help/services-resources')
    cy.wait('@getHelpRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible')
      cy.percySnapshot({ widths: [768, 992, 1200] })
    })
  })

  it('Search Found', () => {
    cy.intercept('/help/services-resources?*').as('getResourcesSearchRoutes')
    cy.visit('/help/services-resources?q=test', { timeout: 35000 })
    cy.wait('@getResourcesSearchRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible')
      cy.get('input[type=search]').should(
        'have.value',
        'test'
      )
      cy.get('h2.about-results').invoke('text').should('not.be.empty')
      cy.percySnapshot({ widths: [768, 992, 1200] })
    })
  })

  it('Visit Services Listing page filter by category', () => {
    cy.visit('/help/services-resources?')

    cy.get('h2.about-results').should('be.visible')
  })
})
