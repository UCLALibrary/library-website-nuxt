describe("Article Detail page", () => {
    it("Visits a News Detail Page", () => {
        // the following data will not work in production
        cy.visit("/about/news/turtles")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "I Like Turtles"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})