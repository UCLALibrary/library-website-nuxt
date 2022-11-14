describe("Article Listing page", () => {
    it("Visit the Article Listing Page", () => {
        cy.visit("/about/news")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
