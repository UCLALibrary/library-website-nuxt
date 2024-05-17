describe('Explore Collection page', () => {
  it('Visit a Explore Collection Page', () => {
    cy.visit('/collections/explore')

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
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  it('Visit Collections Explore Listing page filter by category', () => {
    cy.visit('/collections/explore?q=&filters=%7B"subjectAreas.title.keyword"%3A%5B"Arts%20%26%20Music"%5D%7D')

    cy.get('h2.about-results').should('be.visible')
  })
})
