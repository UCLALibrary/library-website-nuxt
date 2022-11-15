describe("Access Collection page", () => {
    it("Visit a Access Collection Page", () => {
        cy.visit("/collections/access")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-collections-access").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Listing - Collections > Access Collections"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
