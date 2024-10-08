describe('Policy Detail page', () => {
  it('Visits a Policy Detail Page', () => {
    cy.intercept('about/policies/shhh').as('getPolicyDetailRoute')
    cy.visit('/about/policies/shhh')
    cy.wait('@getPolicyDetailRoute').then(() => {
      cy.get('.logo-ucla').should('be.visible')

      cy.get('.page-anchor').scrollIntoView()
      cy.get('.page-anchor').should('be.visible')
      cy.percySnapshot('policiesdetailpage', { widths: [768, 992, 1200] })
    })
  })

  context("When there isn't an entry in craft", () => {
    it('Raises a 404 error', () => {
      // TODO COMMENT THIS LINE later if static page 404 starts working
      cy.request({ url: '/about/policies/no_entry', failOnStatusCode: false }).its('status').should('equal', 404)
      /*
        These tests will run once our 404 page starts working in static mode
        cy.visit("/about/policies/no_entry")
        cy.get("p.error").should("contain","404")
        cy.get("h1.error-title").should("contain","Page not found")
      */
    })
  })
})
