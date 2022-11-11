describe("Programs List page", () => {
    it("Visit a Programs List Page", () => {
        cy.visit("/about/programs")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-programs").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Programs & Initiatives"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
