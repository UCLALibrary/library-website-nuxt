describe("Explore Collection page", () => {
    it("Visit a Explore Collection Page", () => {
        cy.visit("/collections/explore")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-collections-explore").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Listing - Collections > Explore Collections"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
