describe("Services & Resources page", () => {
    it("Visits the Services & Resources Page", () => {
        cy.visit("help/services-resources/a-test-workshop-with-a-pull-quote-fpb")
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            cy.visit("/help/services-resources/no_entry", {failOnStatusCode: false})
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
