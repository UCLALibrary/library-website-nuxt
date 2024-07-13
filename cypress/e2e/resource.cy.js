describe('Resource page', () => {
  it('Visit a Resource Page', () => {
    // cy.visit('help/services-resources/animals')

    // UCLA Library brand
    // cy.get(".logo-ucla").should("be.visible")
    // cy.get("h1.title").should(
    //     "contain",
    //     `Animals are Excellent and Flowers are Fluffy`
    // )
    // cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  context("When there isn't an entry in craft", () => {
    // it('Raises a 404 error', () => {
    // cy.visit("/about/blogs/no_entry", {failOnStatusCode: false})
    // cy.request({url: "/help/services-resources/no_entry", failOnStatusCode: false}).its("status").should("equal", 404)
    // cy.visit("/help/services-resources/no_entry")
    // cy.get("p.error").should("contain","404")
    // cy.get("h1.error-title").should("contain","Page not found")
    // })
  })
})
