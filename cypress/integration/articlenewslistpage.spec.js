describe("Article News List page", () => {
    it("Visit a Article News List Page", () => {
        cy.visit("/about/news")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-news").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Listing - News"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
