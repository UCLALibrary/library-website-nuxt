describe('Site Search page', () => {
  it('Search blank', () => {
    cy.visit('/search-site')
    cy.get('h1.title').should('contain', 'Search Results')

    cy.get('div > h2').should('contain', 'Search for “” not found.')
  })
  it('Search all', () => {
    cy.visit('/search-site?q=*', { timeout: 13000 })
    cy.get('.logo-ucla').should('be.visible')
    cy.get('input[type=search]').should(
      'have.value',
      '*'
    )
    cy.get('h2.about-results').invoke('text').should('not.be.empty')
  })
})
