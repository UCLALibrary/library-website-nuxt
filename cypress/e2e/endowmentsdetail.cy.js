describe('Endowments Detail page', () => {
  it('Visits an Endowments Detail Page', () => {
    
    cy.visit("/give/endowments/lifu-wang-chinese-cultural-endowment")

    // UCLA Library brand
    cy.get(".logo-ucla").should("be.visible")
    cy.get(".page-endowments-detail").should("be.visible")
    cy.get("h1.title").should("contain", "Lifu Wang")
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  context("When there isn't an entry in craft", () => {
    it('Raises a 404 error', () => {
      cy.request({ url: '/give/endowments/no_entry', failOnStatusCode: false }).its('status').should('equal', 404)
    })
  })
})
