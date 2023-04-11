describe("Program Detail page", () => {
    it("Visit a Program Detail Page", () => {
        cy.visit("/about/programs/digital-library-program")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Digital Library Program"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            cy.visit("/about/programs/no_entry", {failOnStatusCode: false})
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
