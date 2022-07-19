describe("Resource Detail page", () => {
    it("Visit a Resource Detail Page", () => {
        cy.visit("/resources/meap-bunnies")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Meap Bunnies"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
