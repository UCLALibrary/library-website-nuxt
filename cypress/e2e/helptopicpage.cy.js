describe('Help Topic page', () => {
  it('Visit a Help Topic Page', () => {
    cy.visit('/help/printing')

    // UCLA Library brand
    // cy.get(".logo-ucla").should("be.visible")
    // cy.get("h1.title").should(
    //     "contain",
    //     "Printing Practices - Simple Card 3 Up - Rich Text - Pull Quote"
    // )
    // cy.get(".page-anchor").scrollIntoView().should('be.visible')
    // cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  context("When there isn't an entry in craft", () => {
    //     it("Raises a 404 error", () => {
    //         cy.request({url: "/help/no_entry", failOnStatusCode: false}).its("status").should("equal", 404)
    //         cy.visit("/help/no_entry")
    //         cy.get("p.error").should("contain","404")
    //         cy.get("h1.error-title").should("contain","Page not found")
    //     })
  })
})
