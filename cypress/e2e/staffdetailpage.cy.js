describe("Program Detail page", () => {
    it("Visit a Program Detail Page", () => {
        cy.visit("/about/staff/brigid-abreu")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.staffName").should(
            "contain",
            "Brigid Abreu"
        )
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            cy.visit("/about/staff/no_entry", {failOnStatusCode: false})
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
