describe("Article News Listing page", () => {
    it("Visit the Article News Listing Page", () => {
        cy.visit("/about/news")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-news").should("be.visible")
        cy.get("h1.title").should("contain", "Library News")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
