describe("Article Detail page", () => {
    it("Visits a Blog Detail Page", () => {
        // the following data will not work in production
        cy.visit("/about/blogs/giraffe")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Blog - Giraffe"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
