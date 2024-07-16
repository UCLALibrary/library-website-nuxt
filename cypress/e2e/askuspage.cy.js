describe("Ask Us page", () => {
  it("Visits a Ask Us Page", () => {
      cy.visit("help/services-resources/ask-us")
      cy.get(".logo-ucla").should("be.visible")
      cy.get(".page-ask-us").should("be.visible")
      cy.get("h1.title").should(
          "contain",
          "Ask Us"
      )
      cy.percySnapshot({ widths: [768, 992, 1200] })
  })
})