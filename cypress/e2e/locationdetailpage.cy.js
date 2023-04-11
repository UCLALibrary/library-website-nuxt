describe("Location Detail page", () => {
    it("Visit a Location Detail Page", () => {
        cy.visit("/visit/locations/biomed")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Louise M. Darling Biomedical Library"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            cy.visit("/visit/locations/no_entry", {failOnStatusCode: false})
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
