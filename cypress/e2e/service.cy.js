describe('Service page', () => {
  it('Visit a Service page', () => {
    cy.visit('help/services-resources/service-with-all-flexible-page-block-types')

    // UCLA Library brand
    // cy.get(".logo-ucla").should("be.visible")
    cy.get('h1.title').should(
      'contain',
      'Service with all flexible page block types'
    )
    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  context("When there isn't an entry in craft", () => {
    it('Raises a 404 error', () => {
    // cy.visit("/help/services-resources/no_entry")
      // cy.get("p.error").should("contain","404")
      // cy.get("h1.error-title").should("contain","Page not found")
      cy.request({ url: '/help/services-resources/no_entry', failOnStatusCode: false }).its('status').should('equal', 404)
    })
  })
})
