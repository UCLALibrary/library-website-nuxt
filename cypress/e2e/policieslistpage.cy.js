describe('Policy List page', () => {
  it('Visits a Policy List Page', () => {
    cy.intercept('about/policies*').as('getPolicyListRoutes')
    cy.visit('about/policies')
    cy.wait('@getPolicyListRoutes').then(() => {
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-policies').should('be.visible')
      cy.get('h1.title').should(
        'contain',
        'Policies'
      )
      // cy.get(".page-anchor").scrollIntoView().should('be.visible')
      cy.percySnapshot({ widths: [768, 992, 1200] })
    })
  })
})
