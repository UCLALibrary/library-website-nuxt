describe('Program List page', () => {
  it('Visits a Program List Page', () => {
    cy.intercept('about/programs').as('getProgramListRoutes')
    cy.visit('about/programs')
    cy.wait('@getProgramListRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-programs').should('be.visible')
      cy.get('h1.title').should(
        'contain',
        'Programs & Initiatives'
      )
      cy.get('.search-generic-filter-buttons').find('button').should('have.length', 1)
      cy.get('.search-generic-filter-buttons > button').click()
      cy.get('fieldset.base-checkbox-group > ul.list > li.list-item').find('label').should('have.length.greaterThan', 0)

      cy.percySnapshot({ widths: [768, 992, 1200] })
    })
  })

  it('Visit Program Listing page filter by type', () => {
    cy.intercept('about/programs/*').as('getProgramListSearchRoutes')
    cy.visit('/about/programs/?q=&filters=%7B"programType.title.keyword"%3A%5B"Collections"%5D%7D')
    cy.wait('@getProgramListSearchRoutes').then(() => {
      cy.get('h2.about-results').should('be.visible')
    })
  })
})
