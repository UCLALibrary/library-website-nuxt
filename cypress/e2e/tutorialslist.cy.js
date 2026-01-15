describe('Tutorials Listing page', () => {
  it('Visits the Tutorials Listing Page', () => {
    cy.visit('/help/tutorials')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-tutorials-listing').should('be.visible')
    cy.get('h1.title').should('contain', 'Tutorials')
    cy.visualSnapshot('tutorialslist')
  })

  it('Searches Tutorials Listing', () => {
    cy.visit('/help/tutorials/?q=tutorial&filters=', { timeout: 60000 })
    cy.get('input[type=search]').should(
      'have.value',
      'tutorial'
    )
    cy.get('h2.about-results').invoke('text').should('not.be.empty')
  })
})
