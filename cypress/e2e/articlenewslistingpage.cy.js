describe('Article News Listing page', () => {
  it('Visit the Article News Listing Page', () => {
    cy.intercept('/about/news').as('getNews')
    cy.visit('/about/news')
    cy.wait('@getNews').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-news').should('be.visible')
      cy.get('h1.title').should('contain', 'Library News')
      cy.get('.search-generic-filter-buttons').find('button').should('have.length', 2)

      cy.get('.search-generic-filter-buttons').find('button').each(($el, index, $list) => {
        cy.wrap($el).click()
        cy.get('fieldset.base-checkbox-group > ul.list > li.list-item').find('label').should('have.length.greaterThan', 0)
      })

      cy.percySnapshot('articlenewslistingpage', { widths: [768, 992, 1200] })
    })
  })

  it('Visit News Article Listing page filter by category', () => {
    cy.visit('/about/news?q=&filters=articleCategory.title.keyword:(Featured)')

    cy.get('h2.about-results').should('be.visible')
  })
})
