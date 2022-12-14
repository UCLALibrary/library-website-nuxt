describe("Article Blogs Listing page", () => {
    it("Visit the Article Blog Listing Page", () => {
        cy.visit("/about/blogs")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-blogs").should("be.visible")
        cy.get("h1.title").should("contain", "Blogs")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
